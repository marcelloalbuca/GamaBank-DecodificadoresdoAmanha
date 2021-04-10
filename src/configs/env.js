const dotenv = require("dotenv");

const env = process.env.NODE_ENV;
let path;

switch (env) {
  case "testing":
    path = ".env.testing";
    break;

  case "development":
    path = ".env.development";
    break;

  default:
    path = ".env";
}

dotenv.config({
  path: path,
});

module.exports = {
  env,
  secret: process.env.JWT_SECRET,
  salt: process.env.SALT,
  database: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
  },
  mail: {
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
};
