const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
  path: path.join(__dirname, '../../.env')
});

  const PORT = process.env.PORT || 4000;
  const {NODE_ENV} = process.env;
  const {MONGO_CONNECTION_STRING} = process.env;
  const {JWT_SECRET_KEY} = process.env;
  const AUTH_MODE = process.env.AUTH_MODE === 'true';
  const LEVEL_LOG = process.env.LEVEL_LOG || '4';

export {
  PORT,
  NODE_ENV,
  MONGO_CONNECTION_STRING,
  JWT_SECRET_KEY,
  AUTH_MODE,
  LEVEL_LOG,
};
