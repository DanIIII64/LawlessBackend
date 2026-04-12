const express = require('express');
const app = express();
const eulaJson = require('../responses/eula.json');

app.get("/eulatracking/api/shared/agreements/fn", async (req, res) => {
    res.json(eulaJson);
    console.log(`Get /eulatracking/api/shared/agreements/fn called`);
});

app.get("/eulatracking/api/public/agreements/fn/account/fornite", async (req, res) => {
    res.status(204).send();
    console.log(`Get /eulatracking/api/public/agreements/fn/account/fornite called`);
}); 

module.exports = app;