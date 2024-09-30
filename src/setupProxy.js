const proxy = require('http-proxy-middleware').createProxyMiddleware;

module.exports = (app) => {
  console.log("proxy")
  app.use(proxy('/auth/**', { target: 'http://localhost:5001' }));
}

