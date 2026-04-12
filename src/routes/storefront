const express = require('express');
const app = express();
const functions = require("./functions.js");
const keychain = require("./../responses/keychain.json");

app.get("/fortnite/api/storefront/v2/catalog", async (req, res) => {
    if (req.headers["user-agent"].includes("2870186")) {
        return res.status(404).end();
    }

    var catalog = functions.getItemShop();
    const memory = functions.GetVersionInfo(req);

    if (memory.build >= 30.10) {
        catalog = JSON.parse(JSON.stringify(catalog).replace(/"Normal"/g, '"Size_1_x_2"'));
    }
    if (memory.build >= 30.20) {
        catalog = JSON.parse(JSON.stringify(catalog).replace(/Game\/Items\/CardPacks\//g, 'SaveTheWorld/Items/CardPacks/'));
    }

    res.json(catalog);
    console.log(`Get /fortnite/api/storefront/v2/catalog called with build: ${memory.build} and season: ${memory.season}`);
})

app.get("/fortnite/api/storefront/v2/keychain", async (req, res) => {
    res.json(keychain)
    console.log(`Get /fortnite/api/storefront/v2/keychain called`);
})

app.get("/catalog/api/shared/bulk/offers", async (req, res) => {
    res.json({});
    console.log(`Get /catalog/api/shared/bulk/offers called`);
})

module.exports = app;