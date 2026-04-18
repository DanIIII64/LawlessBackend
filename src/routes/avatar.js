const express = require("express");
const app = express();

// GET /v1/avatar/fortnite/ids
app.get("/v1/avatar/fortnite/ids", (req, res) => {
    const ids = req.query.accountIds?.split(",") || [];

    const avatars = ids.map(id => ({
        accountId: id,
        avatarUrl: "https://fortnite-public-service-prod11.ol.epicgames.com/fortnite/api/game/v2/profile/avatar/default"
    }));

    res.json(avatars);
    console.log(`Get /v1/avatar/fortnite/ids called with accountIds: ${ids.join(",")}`);
});

app.post("/api/v1/assets/Fortnite/*/*", async (req, res) => {
    console.log("POST /api/v1/assets/Fortnite/*/* called");
    if (req.body.hasOwnProperty("FortCreativeDiscoverySurface") && req.body.FortCreativeDiscoverySurface == 0) {
        const discovery_api_assets = require("../responses/Discovery/discovery_api_assets.json");
        res.json(discovery_api_assets)
    } else {
        res.json({
            "FortCreativeDiscoverySurface": {
                "meta": {
                    "promotion": req.body.FortCreativeDiscoverySurface || 0
                },
                "assets": {}
            }
        })
    }
})


module.exports = app;
