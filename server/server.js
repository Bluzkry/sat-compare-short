const express = require('express');
const bodyParser = require('webpack-body-parser');
const session = require('express-session');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');
const handler = require('./request-handler.js');

const app = express();

const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../www'));

app.use(session({
  secret: 'None',
  resave: false,
  saveUninitialized: true
}));

app.post('/score', handler.postScore);
app.get('/score', handler.getScore);
app.post('/', handler.getMain);

const server = app.listen(3000, function() {
  const host = server.address().address;
  const port = server.address().port;
});