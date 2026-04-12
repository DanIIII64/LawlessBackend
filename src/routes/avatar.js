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

module.exports = app;
