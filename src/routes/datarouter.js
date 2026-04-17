const express = require('express');
const app = express();
const sdk = require("../responses/sdkv1.json");

app.post("/datarouter/api/v1/public/data", async (req, res) => {
    res.status(204);
    res.end();
    console.log(`Post /datarouter/api/v1/public/data called`);
});

app.post('/datarouter/api/v1/public/data/clients', (req, res) => {
    res.status(200).send({
    status: "OK",
    code: 200
});
console.log(`Post /datarouter/api/v1/public/data/clients called`);
});

app.post("/telemetry/data/datarouter/api/v1/public/data", (req, res) => {
    res.status(200).send({
    status: "OK",
    code: 200
});
console.log(`Post /telemetry/data/datarouter/api/v1/public/data called`);
});

app.get('/sdk/v1/*', (req, res) => {
    res.json(sdk);
    console.log(`Get /sdk/v1/* called with path: ${req.params[0]}`);
})

module.exports = app;