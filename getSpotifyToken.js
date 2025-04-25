const fetch = require('node-fetch');

// Your credentials and code from the URL
const clientId = '60b40d955ac24fd5a6fab322472689ad';
const clientSecret = '13f7f90255c0444391fb3506aac24573';
const code = 'AQCJssdehrT2y5QHjf-CPBBStXL2DbZDKtfEOBq3MeCqMMP5FGKH3BNTdhP-NjW0VRohphamAaqsgyyYkA0Pw7zjykYKALqBCxY6yn5QepicohsrJMJ07OjX_u9XmndEspNVrgEtnV2GWs9fK3X3IsVOiBFOjs-Zv_ap11PjYW8tJXpXircl7hxmWse80uuQFqC8zUX2CACZ7dKggb7umJQKPpei6owEl5LnkoFLDh0';

async function getSpotifyToken() {
  try {
    const authBuffer = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
    
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${authBuffer}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: 'http://localhost:3000'
      })
    });

    const data = await response.json();
    console.log('Full response:', data);
    console.log('\nRefresh Token:', data.refresh_token);
  } catch (error) {
    console.error('Error getting token:', error);
  }
}

getSpotifyToken();