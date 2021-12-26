// const { v4: uuidv4 } = require('uuid');
const { PORT } = require('./common/config');
const app = require('./app');


app.listen(PORT, () =>
  console.log(`App is running on http://localhost:${PORT}`)
);
