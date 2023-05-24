const express = require('express');
const crypto = require('crypto');
const axios = require('axios');

const app = express();

const port = 3000;

// The middleware below is an error handler
// app.use((req, res, next) => {
//     const error = new Error('Not Found');
//     error.status = 404;
//     // console.log(error)
//     next(error);
// })

// // This middleware error handler will databse connection errors
// app.use((error, req, res, next) => {
//     res.status(error.status || 500);
//     res.json({
//         message: error.message,
//     });
//     next();
// })

app.post('/login', (req, res, cb) => {
    res.status(200).json({ message: "Reached" })
})

app.get('/callback', (req, res) => {
    const { path, method, query } = req;

    res.status(200).json({
        message: 'Success!'
    })
    // Step 4: Exchange authorization code for access token
 
})

app.post('/getToken', (re, res) => {
    const tokenEndpoint = 'https://id-sandbox.cashtoken.africa/oauth/token';
    
    const clientId = 'wprQYMZBqqx-dgszFUfQG';
    const clientSecret = 'sdfbuhefjbHBSD';
    // const clientSecret = 'YOUR_CLIENT_SECRET'; // Replace with your actual client secret
    const redirectUri = 'http://localhost:3000/callback';

    // const requestBody = new URLSearchParams();
    // requestBody.append('grant_type', 'authorization_code');
    // requestBody.append('code', query.code);
    // requestBody.append('client_id', clientId);
    // // requestBody.append('client_secret', clientSecret);
    // requestBody.append('redirect_uri', redirectUri);

    const requestUrl = `${tokenEndpoint}?client_id=${clientId}&grant_type=authorization_code&code=M0_CGO4sCs0GPLqs96HHJphRkVBsECQanY3lQvRdH39&redirect_uri=${redirectUri}`;

    console.log(requestUrl);

    axios.post(requestUrl)
        .then(response => {
            // Handle the response containing the access token
            // const accessToken = response.data.access_token;
            console.log(response)

            // Use the access token for further API requests or user authentication

            // Redirect or render a response as needed
            // res.redirect('/success');
            res.status(200).json({message:response})
        })
        .catch(error => {
            console.error('Error exchanging authorization code for access token:', error);
            // Handle the error
            res.status(400).json({message:error})
        });
})

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
})