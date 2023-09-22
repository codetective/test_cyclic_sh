export default () => ({
  MYSQL_USER: process.env.MYSQL_USER,
  MYSQL_PORT: process.env.MYSQL_PORT,
  MYSQL_PASSWORD: process.env.MYSQL_PASSWORD,
  MYSQL_Host: process.env.MYSQL_HOST,
  MYSQL_DB: process.env.MYSQL_DB,
  JWT_Secret: process.env.JWT_Secret,
});
