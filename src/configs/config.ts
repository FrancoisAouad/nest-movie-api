export default {
  app: {
    port: process.env.APP_PORT,
  },
  mongo: {
    port: Number(process.env.DB_PORT),
    host: process.env.DB_HOST,
    name: process.env.DB_NAME,
  },
};
