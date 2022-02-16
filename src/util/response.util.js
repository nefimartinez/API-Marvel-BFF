"use strict";

function getResponseFormat(message, data) {
  return {
    message,
    result: data,
  };
}

module.exports = getResponseFormat;
