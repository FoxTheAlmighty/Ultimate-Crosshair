/* */ 
(function(process) {
  "use strict";
  var os = require("os");
  var child_process = require("child_process");
  var hasUnicode = module.exports = function() {
    if (os.type() == "Windows_NT") {
      return true;
    }
    var isUTF8 = /[.]UTF-8/;
    if (isUTF8.test(process.env.LC_ALL) || process.env.LC_CTYPE == 'UTF-8' || isUTF8.test(process.env.LANG)) {
      return true;
    }
    return false;
  };
})(require("process"));
