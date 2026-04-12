const express = require('express');
const app = express();
const keychain = require("../responses/keychain.json");
const livefn = require("../responses/livefn.json");

app.get('/fortnite/api/storefront/v2/keychain', (req, res) => {
    return res.status(200).send(keychain);
    console.log(`Get /fortnite/api/storefront/v2/keychain called`);
});

app.get('/hotconfigs/v2/livefn.json', (req, res) => {
    return res.status(200).send(livefn);
    console.log(`Get /hotconfigs/v2/livefn.json called`);
});

module.exports = app;