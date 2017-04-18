var teams = require('./soccer/teams');

module.exports = [
  {
    method: 'GET',
    path: '/api/teams',
    handler: teams.get,
    config: {
      state: {
        parse: false, // parse and store in request.state
        failAction: 'ignore' // may also be 'ignore' or 'log'
      }
    }
  }
];
