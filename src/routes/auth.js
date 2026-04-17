const express = require('express');
const app = express();

app.post('/account/api/oauth/token', (req, res) => {
    res.status(200).send({
    access_token: "eg1~fortnite",
    expires_in: 28800,
    expires_at: "9999-12-02T01:12:01.100Z",
    token_type: "bearer",
    refresh_token: "eg1~fortnite",
    refresh_expires: 86400,
    refresh_expires_at: "9999-12-02T01:12:01.100Z",
    account_id: "fornite",
    client_id: "fornite",
    internal_client: true,
    client_service: "fortnite",
    displayName: "fornite",
    app: "fortnite",
    in_app_id: "fornite",
    device_id: "fornite"
});
console.log(`Post /account/api/oauth/token called`);
});

app.post('/account/api/oauth/verify', (req, res) => {
    res.status(200).send({
    access_token: "eg1~fortnite",
    expires_in: 28800,
    expires_at: "9999-12-02T01:12:01.100Z",
    token_type: "bearer",
    refresh_token: "eg1~fortnite",
    refresh_expires: 86400,
    refresh_expires_at: "9999-12-02T01:12:01.100Z",
    account_id: "fornite",
    client_id: "fornite",
    internal_client: true,
    client_service: "fortnite",
    displayName: "fornite",
    app: "fortnite",
    in_app_id: "fornite",
    device_id: "fornite"
});
console.log(`Post /account/api/oauth/verify called`);
});

app.post("/auth/v1/oauth/token", async (req, res) => {
    res.json({
        access_token: "eg1~fortnite",
        token_type: "bearer",
        expires_at: "9999-12-31T23:59:59.999Z",
        features: [
            "AntiCheat",
            "Connect",
            "Ecom"
        ],
        organization_id: "org-fn",
        product_id: "prod-fn",
        sandbox_id: "fn",
        deployment_id: "dep-fn",
        expires_in: 28800
    });
    console.log(`Post /auth/v1/oauth/token called`);
})

app.post("/epic/oauth/v2/token", async (req, res) => {
        res.json({
            scope: req.body.scope || "basic_profile friends_list openid presence",
            token_type: "bearer",
            access_token: "eg1~fortnite",
            refresh_token: "eg1~fortnite",
            id_token: "eg1~fortnite",
            expires_in: 28800,
            expires_at: "9999-12-31T23:59:59.999Z",
            refresh_expires_in: 28800,
            refresh_expires_at: "9999-12-31T23:59:59.999Z",
            account_id: "fornite",
            client_id: "fornite",
            application_id: "fornite",
            selected_account_id: "fornite",
            merged_accounts: []
    });
    console.log(`Post /epic/oauth/v2/token called`);
});

app.post('/epic/oauth/v2/revoke', (req, res) => {
            res.json({
            scope: req.body.scope || "basic_profile friends_list openid presence",
            token_type: "bearer",
            access_token: "eg1~fortnite",
            refresh_token: "eg1~fortnite",
            id_token: "eg1~fortnite",
            expires_in: 28800,
            expires_at: "9999-12-31T23:59:59.999Z",
            refresh_expires_in: 28800,
            refresh_expires_at: "9999-12-31T23:59:59.999Z",
            account_id: "fornite",
            client_id: "fornite",
            application_id: "fornite",
            selected_account_id: "fornite",
            merged_accounts: []
    });
    console.log(`Post /epic/oauth/v2/revoke called`);
});

app.get("/epic/id/v2/sdk/accounts", async (req, res) => {
    const user = { accountId: "fornite", username: "fornite", banned: false };
    res.json([{
        accountId: user.accountId,
        displayName: user.username,
        preferredLanguage: "en",
        linkedAccounts: [],
        cabinedMode: false,
        empty: false
    }]);
})

app.delete('/account/api/oauth/sessions/kill', (req, res) => {
    res.status(200).send({
    status: "OK",
    code: 200
});
console.log(`Delete /account/api/oauth/sessions/kill called`);
});

app.delete('/account/api/oauth/sessions/kill/:token', (req, res) => {
    const { token } = req.params;
    res.status(200).send({
        status: "OK",
        code: 200
    });
    console.log(`Delete /account/api/oauth/sessions/kill/:token called`);
});

app.all("/fortnite/api/game/v2/profileToken/verify/:accountId", (req, res) => {
    console.log(`ALL /fortnite/api/game/v2/profileToken/verify/${req.params.accountId} called`);
    
    if (req.method != "POST") {
        const err = error.method(req);
        return res.header(err.header).status(405).send(err.error);
    }

    res.status(204).send();
});

module.exports = app;