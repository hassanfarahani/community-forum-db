// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://postgres:Newgalaxy@localhost/community-forum'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  },
};
