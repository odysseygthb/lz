module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '36902d1261a40102ea4feb58c08c3ad7'),
  },
});
