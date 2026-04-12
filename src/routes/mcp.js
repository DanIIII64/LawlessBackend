const express = require('express');
const app = express();

app.post('/fortnite/api/game/v2/profile/:accountId/client/:operation', (req, res) => {
    const { accountId, operation } = req.params;
    res.status(200).send({
    status: "OK",
    code: 200
});
console.log(`Post /fortnite/api/game/v2/profile/${accountId}/client/${operation} called`);
});

app.get("/waitingroom/api/waitingroom", (req, res) => {
    res.status(204);
    res.end();
    console.log(`Get /waitingroom/api/waitingroom called`);
}); 

module.exports = app;