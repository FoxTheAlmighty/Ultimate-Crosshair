/* */ 
"use strict";
var merge,
    mixins;
merge = require("./merge"), mixins = require("./transform-mixins"), module.exports = function(e, r) {
  var i;
  return i = merge(e), mixins(i, r);
};
