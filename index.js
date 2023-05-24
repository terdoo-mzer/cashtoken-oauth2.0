console.log('Heya!');

const url = new URL(window.location.href);

const code = url.searchParams.get('code');


console.log(url)

const loginBtn = document.getElementById('login').addEventListener('click', function() {
    // console.log("Clicked")


   // https://id-sandbox.cashtoken.africa/oauth/authorize?response_type=code&client_id=wprQYMZBqqx-dgszFUfQG&redirect_uri=http://localhost:3000/callback&scope=openid+email+profile&code_challenge=wnn3B8vMT4DVy-dC-2KB5eLe17f8wOBg5zmSdpzlvV4&code_challenge_method=S256
   // Generate a random string of a specified length
function generateRandomString(length) {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      result += charset.charAt(randomIndex);
    }
  
    return result;
  }
  
  // Generate a code challenge from the code verifier (SHA-256 hash)
  function generateCodeChallenge(codeVerifier) {
    const encoder = new TextEncoder();
    const data = encoder.encode(codeVerifier);
  
    return window.crypto.subtle.digest('SHA-256', data)
      .then(buffer => {
        const base64Url = btoa(String.fromCharCode.apply(null, new Uint8Array(buffer)))
          .replace(/\+/g, '-')
          .replace(/\//g, '_')
          .replace(/=+$/, '');
          
        return base64Url;
      });
  }
  
  // Step 1: Generate code_verifier and code_challenge
  const codeVerifier = generateRandomString(128);
  generateCodeChallenge(codeVerifier)
    .then(codeChallenge => {
      // Step 2: Include code_challenge in the authorization request
      const authorizationEndpoint = 'https://id-sandbox.cashtoken.africa/oauth/authorize';
      const clientId = 'wprQYMZBqqx-dgszFUfQG';
      const redirectUri = 'http://localhost:3000/callback';
      const scope = 'openid profile email';
      const code_challenge = "1PDSWhScVNdyCIss7MD_kUy8Ny7kMabAIs0DIA7z1ro";
      const code_challenge_method = 'S256';
      const responseType = 'code';
  
      const authorizationUrl = `${authorizationEndpoint}?response_type=${responseType}&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scope)}&code_challenge=${code_challenge}&code_challenge_method=${code_challenge_method}`;
  
      // Redirect the user to the authorization URL
      window.location.href = authorizationUrl;
    })
    .catch(error => {
      console.error('Error generating code_challenge:', error);
    });
  
  // Step 3: Handle the authorization callback in the redirect URI endpoint
  // Extract the authorization code from the query parameters
  const urlParams = new URLSearchParams(window.location.search);
  const authorizationCode = urlParams.get('code');
  

})
