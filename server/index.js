const express = require('express');
const cors = require('cors');
const morganLogger = require('morgan');
const bodyParser = require('body-parser');
const initRoutes = require('./routes/index');

//require('dotenv').config(); // virker med .env fil
console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
console.log(`API_URL: ${process.env.API_URL}`);
console.log(`API_PORT: ${process.env.API_PORT}`);

const env = process.env.NODE_ENV || 'development';
const app = express();
console.log(`env: ${env}`);
if (env === 'development') {
  app.use(cors());
}

app.use(morganLogger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

initRoutes(app);

app.use(function (req, res, next) {
  const error = 'Here be dragons. Route not found';
  console.info(`404 error! ${error}`)
  res.status(404).send(error);
});

const url = process.env.API_URL || "http://localhost";
console.log(`Resolved url: ${url}`);
const port = parseInt(process.env.API_PORT) || 4011;
console.log(`Resolved port: ${port}`);

app.listen({ port }, async () => {
  //const baseUrl = `http://localhost:${port}`;
  const baseUrl = `${url}:${port}`;
  console.log(`Server running at: \t @ ${baseUrl}/`);
});