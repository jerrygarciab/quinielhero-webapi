module.exports = {
  info: info,
  warning: warning,
  error: error
};

function info (message) {
  console.info(message);
}

function warning (message) {
  console.warn(message);
}

function error (message) {
  console.error(message);
}
