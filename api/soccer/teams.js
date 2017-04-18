'use strict';

module.exports = {
  get: getTeams
};

function getTeamsFromAPI () {
  /* Add code */
}

function getTeams (req, res) {
  res({
    'statusCode': 200,
    'api': 'Hello api from file'
  });
}
