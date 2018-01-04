export const baseConfig = {
  port: 3000,
  host: {
    android: '10.0.3.2',
    ios: 'localhost',
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