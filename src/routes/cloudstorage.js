const express = require('express');
const app = express();

app.get('/fortnite/api/cloudstorage/system', (req, res) => {
    res.status(200).send({
    status: "OK",
    code: 200
});

console.log(`Get /fortnite/api/cloudstorage/system called`);
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