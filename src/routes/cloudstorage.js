const express = require('express');
const app = express();
const functions = require("./functions.js");
const crypto = require("crypto");
const fs = require("fs");
const path = require("path");

app.get("/fortnite/api/cloudstorage/system", async (req, res) => {
    const memory = functions.GetVersionInfo(req);

    if (memory.build >= 9.40 && memory.build <= 10.40) {
        return res.status(404).end();
    }

    const dir = path.join(__dirname, "..", "CloudStorage")
    var CloudFiles = [];

    fs.readdirSync(dir).forEach(name => {
        if (name.toLowerCase().endsWith(".ini")) {
            const ParsedFile = fs.readFileSync(path.join(dir, name), 'utf-8');
            const ParsedStats = fs.statSync(path.join(dir, name));

            CloudFiles.push({
                "uniqueFilename": name,
                "filename": name,
                "hash": crypto.createHash('sha1').update(ParsedFile).digest('hex'),
                "hash256": crypto.createHash('sha256').update(ParsedFile).digest('hex'),
                "length": ParsedFile.length,
                "contentType": "application/octet-stream",
                "uploaded": ParsedStats.mtime,
                "storageType": "S3",
                "storageIds": {},
                "doNotCache": true
            })
        }
    });
    console.log(`Get /fortnite/api/cloudstorage/system called`);

    res.json(CloudFiles)
});

app.get('/fortnite/api/cloudstorage/system/config', (req, res) => {
    res.status(200).send({
    status: "OK",
    code: 200
});
console.log(`Get /fortnite/api/cloudstorage/system/config called`);
});

app.get('/fortnite/api/cloudstorage/user/:accountId', (req, res) => {
    const { accountId } = req.params;
    res.status(200).send({
    status: "OK",
    code: 200
});
app.get('/fortnite/api/cloudstorage/system/:file', (req, res) => {
    const memory = functions.GetVersionInfo(req);
    const file = path.join(__dirname, "..", "CloudStorage", req.params.file);

    if (fs.existsSync(file)) {
        let ParsedFile = fs.readFileSync(file);

        // Fixes kicks ingame on higher versions
        if (req.params.file === "DefaultEngine.ini" && memory.season >= 23) {
            ParsedFile += "\n[ConsoleVariables]\nnet.AllowEncryption=0\n";
        }

        // This hotfix on versions > 19.30 would cause player to be unable to go back to BR from STW
        if (req.params.file === "DefaultRuntimeOptions.ini" && 17.50 <= memory.build && memory.build <= 19.30) {
            ParsedFile += "\nbLoadDirectlyIntoLobby=false\n";
        }

        return res.status(200).send(ParsedFile).end();
    } else {
        res.status(200);
        res.end();
    }
})

console.log(`Get /fortnite/api/cloudstorage/user/${accountId} called`);
});

app.put('/fortnite/api/cloudstorage/user/:accountId/:fileName', (req, res) => {
    const { accountId, fileName } = req.params;
    res.status(200).send({
    status: "OK",
    code: 200
});
console.log(`Put /fortnite/api/cloudstorage/user/${accountId}/${fileName} called`);
});

module.exports = app;