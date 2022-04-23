module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e2eea6aa97f8723c11430bcf4e61da0b'),
  },
});
