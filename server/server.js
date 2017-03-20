const express = require('express');
const path = require('path');
const bodyParser = require('webpack-body-parser');
const session = require('express-session');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
// const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('../webpack.config.js');
const router = require('./routes/router.js');

const app = express();
const PORT = process.env.PORT || 3000;
// const webpackPort = 4000;

const compiler = webpack(webpackConfig);
// new WebpackDevServer(compiler, {
//   publicPath: webpackConfig.output.publicPath,
//   historyApiFallback: true
// }).listen(webpackPort, (err) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log('Webpack dev server listening at: ', webpackPort);
//   }
// });

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, '../public')));
app.use('/www', express.static(path.join(__dirname, '../www')));

app.use(session({
  secret: 'None',
  resave: false,
  saveUninitialized: true
}));

app.use('/', router);

const server = app.listen(PORT, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log('SAT Compare Short listening at http://%s:%s', host, PORT);
});
