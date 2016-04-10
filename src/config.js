require('babel-polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT,
  app: {
    title: 'hCard Builder',
    head: {
      titleTemplate: 'hCard Builder: %s',
      meta: [
        {charset: 'utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'},
        {property: 'og:site_name', content: 'hCard Builder'},
        {property: 'og:locale', content: 'en_US'}
      ],
      link: [
        {type: 'text/css', rel: 'stylesheet', 'href': 'https://fonts.googleapis.com/css?family=Merriweather+Sans:400,300,300italic,400italic,700,700italic,800,800italic'}
      ]
    }
  },

}, environment);
