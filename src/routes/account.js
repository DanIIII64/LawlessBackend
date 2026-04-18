const express = require('express');
const app = express();

app.post('/fortnite/api/game/v2/tryPlayOnPlatform/account/fornite', (req, res) => {
    // Extracting the data from the request params, e.g: the route is '/fortnite/:accountId/:username'

    res.setHeader("Content-Type", "text/plain");
    res.status(200).send("true");
    console.log(`Post /fortnite/api/game/v2/tryPlayOnPlatform/account/fornite called`);
});

app.get('/account/api/public/account/:accountId/externalAuths', (req, res) => {
    const { accountId } = req.params;
    res.status(200).send([]);
    console.log(`Get /account/api/public/account/:accountId/externalAuths called`);

});

app.get('/fortnite/api/game/v2/enabled_features', (req, res) => {
    res.status(200).send([]);
    console.log(`Get /fortnite/api/game/v2/enabled_features called`);
});

app.get('/content-controls/:accountId', (req, res) => {
    const { accountId } = req.params;
    res.status(200).send([]);
    console.log(`Get /content-controls/:accountId called`);
});

app.get('/account/api/public/account', (req, res) => {
    res.status(200).send({
    id: "fortnite",
    displayName: "fortnite",
    externalAuth: {}
    });
    console.log(`Get /account/api/public/account called`);
});

app.get('/account/api/public/account/:accountId', (req, res) => {
    const { accountId } = req.params;
    res.status(200).send({
    id: "fortnite",
    displayName: "fortnite",
    name: "fortnite",
    email: "fortnite@fortnite.dev",
    failedLoginAttempts: 0,
    lastLogin: "Timestamp",
    numberOfDisplayNameChanges: 0,
    ageGroup: "UNKNOWN",
    headless: false,
    country: "US",
    lastName: "User",
    links: {},
    preferredLanguage: "en",
    canUpdateDisplayName: false,
    tfaEnabled: true,
    emailVerified: true,
    minorVerified: true,
    minorExpected: true,
    minorStatus: "UNKNOWN"
    });
    console.log(`Get /account/api/public/account/:accountId called`);
});

app.post('/api/v1/user/setting', (req, res) => {
    res.status(200).send({
    status: "OK",
    code: 200
    });
console.log(`Post /api/v1/user/setting called`);
});

app.get('/socialban/api/public/v1/:accountId', (req, res) => {
    const { accountId } = req.params;
    res.status(200).send([]);
    console.log(`Get /socialban/api/public/v1/:accountId called`);
});

app.get('/epic/friends/v1/fornite/blocklist', (req, res) => {
    res.status(204).send();
    console.log(`Get /epic/friends/v1/fornite/blocklist called`);
});

app.get('/presence/api/v1/_/:accountId/settings/subscriptions', (req, res) => {
    const { accountId } = req.params;
    res.status(200).send([]);
    console.log(`Get /presence/api/v1/_/:accountId/settings/subscriptions called`);
});

app.get('/fortnite/api/game/v2/privacy/account/:accountId', (req, res) => {
    const { accountId } = req.params;
    res.status(200).send([]);
    console.log(`Get /fortnite/api/game/v2/privacy/account/:accountId called`);
});

app.put('/profile/play_region', (req, res) => {
    res.json({
        "namespace": "Fortnite",
        "play_region": "EUROPE"
    });
    console.log(`Put /profile/play_region called`);
});

app.get('/fortnite/api/receipts/v1/account/fornite/receipts', (req, res) => {
    res.json({
        "receipts": []
    });
    console.log(`Get /fortnite/api/receipts/v1/account/fornite/receipts called`);
});

app.get("/fortnite/api/game/v2/br-inventory/account/*", async (req, res) => {
    console.log(`GET /fortnite/api/game/v2/br-inventory/account/${req.params.accountId} called`);
    res.json({
        "stash": {
            "globalcash": 0
        }
    })
})


module.exports = app;