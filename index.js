const express = require('express');
const app = express();

require('dotenv').config();

app.use(express.json()); // middleware for parsing json
app.use(express.urlencoded({ extended: true })); // middleware for parsing x-www-form-urlcoded

// app.use(require("./routes/whatever_route.js")); // Must provide the path to your route file
app.use(require("./src/routes/datarouter.js")); // Must provide the path to your route file
app.use(require("./src/routes/lightswitch.js")); // Must provide the path to your route file
app.use(require("./src/routes/account.js")); // Must provide the path to your route file
app.use(require("./src/routes/auth.js")); // Must provide the path to your route file
app.use(require("./src/routes/cloudstorage.js")); // Must provide the path to your route file
app.use(require("./src/routes/contentpages.js")); // Must provide the path to your route file
app.use(require("./src/routes/keychain.js")); // Must provide the path to your route file
app.use(require("./src/routes/mcp.js")); // Must provide the path to your route file
app.use(require("./src/routes/version.js")); // Must provide the path to your route file
app.use(require("./src/routes/legal.js")); // Must provide the path to your route file
app.use(require("./src/routes/avatar.js")); // Must provide the path to your route file
app.use(require("./src/routes/launcher.js")); // Must provide the path to your route file
app.use(require("./src/routes/unknown.js")); // Must provide the path to your route file
app.use(require("./src/routes/matchmaking.js")); // Must provide the path to your route file
app.use(require("./src/routes/storefront.js")); // Must provide the path to your route file
app.use(require("./src/routes/functions.js").app); // Must provide the path to your route file
app.use(require("./src/routes/party.js")); // Must provide the path to your route file
app.use(require("./src/routes/friends.js")); // Must provide the path to your route file
app.use(require("./src/routes/discovery.js")); // Must provide the path to your route file

app.use((err, req, res, next) => {
    console.error(`Error occurred: ${err.message}`);
    res.status(500).send({
        status: "error",
        message: "Something went wrong!",
    });
});

app.use((req, res, next) => {
    res.on('finish', () => {
        if (res.statusCode >= 400) {
            console.error(`Missing endpoint: ${req.method} ${req.url} - Status: ${res.statusCode}`);
        }
    });
    next();
});





app.listen(process.env.PORT, () => {
    console.log(`Lawless is running on port ${process.env.PORT}`);
});