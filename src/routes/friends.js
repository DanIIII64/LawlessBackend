const express = require('express');
const app = express();

app.get('/friends/api/public/blocklist/fornite', async (req, res) => {
    res.json({
  "blockedUsers": ["d8b4ac70f6a449c9afcb8eb73fed72a9"]
    })
    console.log(`Get /friends/api/public/blocklist/fornite called`);
})

app.get('/friends/api/public/friends/fornite', async (req, res) => {
    res.json([
  {
    "accountId": "94b1569506b04f9f8557af611e8c5e47",
    "status": "ACCEPTED",
    "direction": "INBOUND",
    "alias": "lele test",
    "note": "hello from lele's epic api docs",
    "created": "2024-05-10T09:16:39.913Z",
    "favorite": false
  },
  {
    "accountId": "e66a9759664a416bb1bbb7ab28b3fae9",
    "status": "ACCEPTED",
    "direction": "INBOUND",
    "created": "2022-10-10T18:46:42.000Z",
    "favorite": false
  },
  {
    "accountId": "edba7de104fa4069a2bbcc97b7be0c35",
    "status": "ACCEPTED",
    "direction": "OUTBOUND",
    "note": "Mr. API",
    "created": "2022-11-19T22:15:22.000Z",
    "favorite": false
  }
])
    console.log(`Get /friends/api/public/friends/fornite called`);
})

app.get('/friends/api/v1/fornite/settings', async (req, res) => {
    res.json({
         "acceptInvites": "private",
  "mutualPrivacy": "ALL"
})
    console.log(`Get /friends/api/v1/fornite/settings called`);
})

app.get('/friends/api/public/list/fortnite/fornite/recentPlayers', async (req, res) => {
    res.json({
    "recentPlayers": [
        {
            "accountId": "94b1569506b04f9f8557af611e8c5e47",
            "lastPlayed": "2024-05-10T09:16:39.913Z"
        }
    ]
})
    console.log(`Get /friends/api/public/list/fortnite/fornite/recentPlayers called`);
})

module.exports = app;
