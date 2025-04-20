// server.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Spotify Client ID & Client Secret (replace these with your actual keys)
const CLIENT_ID = 'YOUR_SPOTIFY_CLIENT_ID';
const CLIENT_SECRET = 'YOUR_SPOTIFY_CLIENT_SECRET';
const REDIRECT_URI = 'https://YOUR_RENDER_APP_URL/callback';

// Spotify Auth Endpoint
app.get('/auth', (req, res) => {
    const authUrl = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}&scope=user-library-read`;
    res.redirect(authUrl);
});

// Callback endpoint
app.get('/callback', (req, res) => {
    const code = req.query.code;
    if (!code) {
        return res.send('Error: No code received');
    }
    // Handle Spotify auth token exchange here
    res.send('Spotify authentication successful');
});

app.listen(port, () => {
    console.log(`Spotify Redirect Handler running at http://localhost:${port}`);
});
