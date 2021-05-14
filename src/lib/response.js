function response(status, message, data, statusCode = 200) {
  return {
    statusCode,
    status,
    message,
    data,
  };
}

module.exports = { response };
