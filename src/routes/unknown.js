const express = require('express');
const app = express();

app.get('/unknown', (req, res) => {
    res.status(200).send({
    status: "OK",
    code: 200
});
console.log(`Testing Completed: Get /unknown called`);
});

module.exports = app;