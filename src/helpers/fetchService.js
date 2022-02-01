export const CLIENT_ID = 'YOUR_CLIENT_ID';
export const CLIENT_SECRET = 'YOUR_CLIENT_SECRET';
export const REDIRECT_URL = 'http://localhost:3000/redirect';
var Buffer = require('buffer/').Buffer;

const getAccessToken = async code => {
  const body = new URLSearchParams();
  body.append('grant_type', 'authorization_code');
  body.append('code', code);
  body.append('redirect_uri', REDIRECT_URL);
  const encodedPayload = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64');

  try {
    const response = await fetch(`https://accounts.spotify.com/api/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${encodedPayload}`
      },
      body,
    });
    return response.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export { getAccessToken };
