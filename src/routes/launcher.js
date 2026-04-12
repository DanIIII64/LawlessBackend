const express = require("express");
const app = express();

app.get('/launcher/api/public/distributionpoints', (req, res) => {
    res.json({
        "distributions": [
            "https://cloudflare.epicgamescdn.com/",
            "https://download.epicgames.com/",
            "https://epicgames-download1.akamaized.net/",
            "https://fastly-download.epicgames.com/"
  ]   });
  console.log(`Get /launcher/api/public/distributionpoints called`);
});

module.exports = app;