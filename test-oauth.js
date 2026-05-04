// Test Google OAuth credentials
const GOOGLE_TOKEN_URL = 'https://oauth2.googleapis.com/token';
const CLIENT_ID = '346521843201-91p77her4ac5aspui4bldmnau8it30nh.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'https://bfms-worker.fypabc529.workers.dev/auth/google/callback';

console.log('Testing Google OAuth credentials...');
console.log('Client ID:', CLIENT_ID);
console.log('Client Secret:', CLIENT_SECRET ? 'Present' : 'Missing');
console.log('Redirect URI:', REDIRECT_URI);
