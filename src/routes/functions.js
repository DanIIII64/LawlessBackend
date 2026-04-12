const XMLBuilder = require("xmlbuilder");
const uuid = require("uuid");
const app = require("./datarouter");

async function sleep(ms) {
    await new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    })
}

function GetVersionInfo(req) {
    var memory = {
        season: 0,
        build: 0.0,
        CL: "",
        lobby: ""
    }

    if (req.headers["user-agent"])
    {
        var CL = "";

        try {
            var BuildID = req.headers["user-agent"].split("-")[3].split(",")[0]
            if (!Number.isNaN(Number(BuildID))) {
                CL = BuildID;
            }

            if (Number.isNaN(Number(BuildID))) {
                var BuildID = req.headers["user-agent"].split("-")[3].split(" ")[0]
                if (!Number.isNaN(Number(BuildID))) {
                    CL = BuildID;
                }
            }
        } catch (err) {
            try {
                var BuildID = req.headers["user-agent"].split("-")[1].split("+")[0]
                if (!Number.isNaN(Number(BuildID))) {
                    CL = BuildID;
                }
            } catch (err) {}
        }

        try {
            var Build = req.headers["user-agent"].split("Release-")[1].split("-")[0];

            if (Build.split(".").length == 3) {
                Value = Build.split(".");
                Build = Value[0] + "." + Value[1] + Value[2];
            }

            memory.season = Number(Build.split(".")[0]);
            memory.build = Number(Build);
            memory.CL = CL;
            memory.lobby = `LobbySeason${memory.season}`;

            if (Number.isNaN(memory.season)) {
                throw new Error();
            }
        } catch (err) {
            memory.season = 2;
            memory.build = 2.0;
            memory.CL = CL;
            memory.lobby = "LobbyWinterDecor";
        }
    }

    return memory;
}

function getItemShop() {
    const catalog = JSON.parse(JSON.stringify(require("./../responses/catalog.json")));
    const CatalogConfig = require("./../config/catalog_config.json");

    try {
        for (var value in CatalogConfig) {
            if (Array.isArray(CatalogConfig[value].itemGrants)) {
                if (CatalogConfig[value].itemGrants.length != 0) {
                    const CatalogEntry = {"devName":"","offerId":"","fulfillmentIds":[],"dailyLimit":-1,"weeklyLimit":-1,"monthlyLimit":-1,"categories":[],"prices":[{"currencyType":"MtxCurrency","currencySubType":"","regularPrice":0,"finalPrice":0,"saleExpiration":"9999-12-02T01:12:00Z","basePrice":0}],"meta":{"SectionId":"Featured","LayoutId":"LawinServer.99","TileSize":"Small","AnalyticOfferGroupId":"LawinServer/Attitude8","FirstSeen":"2/2/2020","inDate":"2018-04-30T00:00:00.000Z","outDate":"9999-12-31T23:59:59.999Z","color1":"#50C878","color2":"#1B5E20","textBackgroundColor":"#0D3D0D"},"matchFilter":"","filterWeight":0,"appStoreId":[],"requirements":[],"offerType":"StaticPrice","giftInfo":{"bIsEnabled":false,"forcedGiftBoxTemplateId":"","purchaseRequirements":[],"giftRecordIds":[]},"refundable":true,"metaInfo":[{"key":"SectionId","value":"Featured"},{"key":"LayoutId","value":"LawinServer.99"},{"key":"TileSize","value":"Small"},{"key":"AnalyticOfferGroupId","value":"LawinServer/Attitude8"},{"key":"FirstSeen","value":"2/2/2020"},{"key":"inDate","value":"2018-04-30T00:00:00.000Z"},{"key":"outDate","value":"9999-12-31T23:59:59.999Z"},{"key":"color1","value":"#50C878"},{"key":"color2","value":"#1B5E20"},{"key":"textBackgroundColor","value":"#0D3D0D"}],"displayAssetPath":"","itemGrants":[],"sortPriority":0,"catalogGroupPriority":0};

                    if (value.toLowerCase().startsWith("daily")) {
                        catalog.storefronts.forEach((storefront, i) => {
                            if (storefront.name == "BRDailyStorefront") {
                                CatalogEntry.requirements = [];
                                CatalogEntry.itemGrants = [];

                                for (var x in CatalogConfig[value].itemGrants) {
                                    if (typeof CatalogConfig[value].itemGrants[x] == "string") {
                                        if (CatalogConfig[value].itemGrants[x].length != 0) {
                                            CatalogEntry.devName = CatalogConfig[value].itemGrants[0]
                                            CatalogEntry.offerId = CatalogConfig[value].itemGrants[0]

                                            CatalogEntry.requirements.push({ "requirementType": "DenyOnItemOwnership", "requiredId": CatalogConfig[value].itemGrants[x], "minQuantity": 1 })
                                            CatalogEntry.itemGrants.push({ "templateId": CatalogConfig[value].itemGrants[x], "quantity": 1 });
                                            CatalogEntry.meta.templateId = CatalogConfig[value].itemGrants[x];
                                            CatalogEntry.metaInfo.push({ "key": "templateId", "value": CatalogConfig[value].itemGrants[x] })
                                        }
                                    }
                                }

                                CatalogEntry.prices[0].basePrice = CatalogConfig[value].price
                                CatalogEntry.prices[0].regularPrice = CatalogConfig[value].price
                                CatalogEntry.prices[0].finalPrice = CatalogConfig[value].price

                                // Make featured items appear on the left side of the screen
                                CatalogEntry.sortPriority = -1

                                if (CatalogEntry.itemGrants.length != 0) {
                                    catalog.storefronts[i].catalogEntries.push(CatalogEntry);
                                }
                            }
                        })
                    }

                    if (value.toLowerCase().startsWith("featured")) {
                        catalog.storefronts.forEach((storefront, i) => {
                            if (storefront.name == "BRWeeklyStorefront") {
                                CatalogEntry.requirements = [];
                                CatalogEntry.itemGrants = [];

                                for (var x in CatalogConfig[value].itemGrants) {
                                    if (typeof CatalogConfig[value].itemGrants[x] == "string") {
                                        if (CatalogConfig[value].itemGrants[x].length != 0) {
                                            CatalogEntry.devName = CatalogConfig[value].itemGrants[0]
                                            CatalogEntry.offerId = CatalogConfig[value].itemGrants[0]

                                            CatalogEntry.requirements.push({ "requirementType": "DenyOnItemOwnership", "requiredId": CatalogConfig[value].itemGrants[x], "minQuantity": 1 })
                                            CatalogEntry.itemGrants.push({ "templateId": CatalogConfig[value].itemGrants[x], "quantity": 1 });
                                            CatalogEntry.meta.templateId = CatalogConfig[value].itemGrants[x];
                                            CatalogEntry.metaInfo.push({ "key":"templateId", "value": CatalogConfig[value].itemGrants[x] })
                                        }
                                    }
                                }

                                CatalogEntry.prices[0].basePrice = CatalogConfig[value].price
                                CatalogEntry.prices[0].regularPrice = CatalogConfig[value].price
                                CatalogEntry.prices[0].finalPrice = CatalogConfig[value].price

                                CatalogEntry.meta.TileSize = "Normal"
                                CatalogEntry.metaInfo[3].value = "Normal"

                                if (CatalogEntry.itemGrants.length != 0) {
                                    catalog.storefronts[i].catalogEntries.push(CatalogEntry);
                                }
                            }
                        })
                    }

                    if (CatalogConfig[value].displayAssetPath.length != 0) {
                        CatalogEntry.meta.displayAssetPath = CatalogConfig[value].displayAssetPath;
                        CatalogEntry.metaInfo.push({"key":"displayAssetPath", "value": CatalogConfig[value].displayAssetPath})
                    }
                    if (CatalogConfig[value].NewDisplayAssetPath.length != 0) {
                        CatalogEntry.meta.NewDisplayAssetPath = CatalogConfig[value].NewDisplayAssetPath;
                        CatalogEntry.metaInfo.push({"key":"NewDisplayAssetPath", "value": CatalogConfig[value].NewDisplayAssetPath})
                    }
                }
            }
        }
    } catch (err) {}

    return catalog;
}

module.exports = {
    app: app,
    getItemShop: getItemShop,
    GetVersionInfo: GetVersionInfo
};