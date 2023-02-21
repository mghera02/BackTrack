export const getGoogleUrl = (from) => {
  const rootUrl = `https://accounts.google.com/o/oauth2/v2/auth`;
  const GOOGLE_OAUTH_REDIRECT_URL = 'http://localhost:8000/api/sessions/oauth/google';
  // const GOOGLE_OAUTH_CLIENT_SECRET = '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';
  const GOOGLE_OAUTH_CLIENT_ID = '373846485254-p6de77m3vn21pi2opjici1071l2k39d4.apps.googleusercontent.com';
  
  const options = {
    redirect_uri: GOOGLE_OAUTH_REDIRECT_URL,
    client_id: GOOGLE_OAUTH_CLIENT_ID,
    access_type: 'offline',
    response_type: 'code',
    prompt: 'consent',
    scope: [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email',
    ].join(' '),
    state: from,
  };

  const qs = new URLSearchParams(options);

  return `${rootUrl}?${qs.toString()}`;
};
