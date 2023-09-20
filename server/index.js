const express = require('express');
const cors = require('cors');
const morganLogger = require('morgan');
const bodyParser = require('body-parser');
const initRoutes = require('./routes/index');

require('dotenv').config(); // virker med .env fil
console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
console.log(`API_CORS_URL: ${process.env.API_CORS_URL}`);
console.log(`API_URL: ${process.env.API_URL}`);
console.log(`API_PORT: ${process.env.API_PORT}`);

const env = process.env.NODE_ENV || 'development';
const app = express();

console.log(`env: ${env}`);

if (env === 'development') {
  app.use(cors());
  console.log('app.use(cors());');
} else  {
  var corsOptions = {
    //origin: process.env.API_CORS_URL ,
    origin: 'https://skak-score.onrender.com' ,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
  app.get('/skak', cors(corsOptions), function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for only ' + process.env.API_CORS_URL});
  });
  console.log("app.get('/skak', cors(corsOptions) ...");

  app.get("/simple-cors", cors(), (req, res) => {
    console.info("GET /simple-cors");
    res.json({
      text: "Simple CORS requests are working. [GET]"
    });
  }); 
  app.get("/note", cors(), (req, res) => {
    console.info("GET /note");
    res.json({
      text: "Simple CORS note requests are working. [GET]"
    });
  }); 

}

app.use(express.static(__dirname + '/build/')); // kunne være et fix på et problem med 404 for fx css filer



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
const port = parseInt(process.env.API_PORT) || 10000;
console.log(`Resolved port: ${port}`);

app.listen({ port }, async () => {
  //const baseUrl = `http://localhost:${port}`;
  const baseUrl = `${url}:${port}`;
  console.log(`Server running at: \t @ ${baseUrl}/`);
});