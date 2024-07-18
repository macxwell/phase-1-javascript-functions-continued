

// Saturday fun function declaration
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // Monday work function expression
  let mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  }
  
  // Wrap adjective function
  function wrapAdjective(symbol = '*') {
    return function(adjective) {
      return `You are ${symbol}${adjective}${symbol}!`;
    }
  }
  
  // Exporting functions for testing
  module.exports = {
    saturdayFun,
    mondayWork,
    wrapAdjective
  };
  // helpers.js

const { saturdayFun, mondayWork, wrapAdjective } = require('./index');

describe("index.js", () => {
  // Your existing test suite goes here
});
