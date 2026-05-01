const express = require('express');
const app = express();
const functions = require("./functions.js");

app.get("/content/api/pages/*", async (req, res) => {
    console.log(`Get /content/api/pages/* called`);
    const contentpages = functions.getContentPages(req);

    res.json(contentpages)
})

module.exports = app;