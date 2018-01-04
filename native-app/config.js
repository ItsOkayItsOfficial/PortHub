export const baseConfig = {
  port: 3000,
  host: {
    android: '10.0.3.2',
    ios: 'localhost',
  },
  pubnub: {
    authKey: 'server-auth',
    subscribeKey: 'sub-c-25ff9f44-7f85-11e6-8a0d-0619f8945a4f',
    publishKey: 'pub-c-52fbe46d-e262-4034-91ae-c9495b7550e6',
    secretKey: 'sec-c-ZjZkMzJiYzgtMTdhNC00MmZjLWIxNDEtMDVlNTkxZTQyOTkz',
  },
  github: {
    android: {
      clientId: 'db9b0a195a0049e73b86',
      clientSecret: '37a97116cf74783c0ba8ee95fad6976be3bf3df1',
      callbackURL: 'http://10.0.2.2:3000/callback',
    },
    ios: {
      clientId: '2c38b12764233cb81da1',
      clientSecret: 'ecb22f511ae02cb5fcfc7ccbbf78e3f5fbf1b7ec',
      callbackURL: 'http://localhost:3000/callback',
    },
  },
};