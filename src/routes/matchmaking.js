const express = require('express');
const app = express();

app.get("/fortnite/api/game/v2/matchmakingservice/ticket/player/fornite", async (req, res) => {
    res.cookie("currentbuildUniqueId", req.query.bucketId.split(":")[0]);

    res.json({
        "serviceUrl": "ws://127.0.0.1",
        "ticketType": "mms-player",
        "payload": "69=",
        "signature": "420="
    })
    res.end();
})

module.exports = app;