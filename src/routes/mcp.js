const express = require('express');
const app = express();
const functions = require("./functions.js");
const fs = require("fs");
const path = require("path");

app.post('/fortnite/api/game/v2/profile/:accountId/client/:operation', (req, res) => {
    const { accountId, operation } = req.params;
    res.status(200).send({
    status: "OK",
    code: 200
});
console.log(`Post /fortnite/api/game/v2/profile/${accountId}/client/${operation} called`);
});

app.use((req, res, next) => {
    if (!req.query.profileId && req.originalUrl.toLowerCase().startsWith("/fortnite/api/game/v2/profile/")) {
        return res.status(404).json({
            error: "Profile not defined."
        });
    }

    fs.readdirSync("./profiles").forEach((file) => {
        if (file.endsWith(".json")) {
            const memory = functions.GetVersionInfo(req);

            const profile = require(`../../profiles/${file}`);
            if (!profile.rvn) profile.rvn = 0;
            if (!profile.items) profile.items = {}
            if (!profile.stats) profile.stats = {}
            if (!profile.stats.attributes) profile.stats.attributes = {}
            if (!profile.commandRevision) profile.commandRevision = 0;

            if (file == "athena.json") {
                var SeasonData = JSON.parse(JSON.stringify(require("../responses/Athena/SeasonData.json")));
                profile.stats.attributes.season_num = memory.season;

                if (SeasonData[`Season${memory.season}`]) {
                    SeasonData = SeasonData[`Season${memory.season}`];

                    profile.stats.attributes.book_purchased = SeasonData.battlePassPurchased;
                    profile.stats.attributes.book_level = SeasonData.battlePassTier;
                    profile.stats.attributes.season_match_boost = SeasonData.battlePassXPBoost;
                    profile.stats.attributes.season_friend_match_boost = SeasonData.battlePassXPFriendBoost;
                }

                fs.writeFileSync("./profiles/athena.json", JSON.stringify(profile, null, 2));
            }
        }
    })

    return next();
});


app.get("/waitingroom/api/waitingroom", (req, res) => {
    res.status(204);
    res.end();
    console.log(`Get /waitingroom/api/waitingroom called`);
}); 

module.exports = app;