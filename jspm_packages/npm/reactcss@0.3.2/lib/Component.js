/* */ 
"use strict";
var React,
    ReactCSSComponent,
    inline,
    extend = function(t, e) {
      function n() {
        this.constructor = t;
      }
      for (var r in e)
        hasProp.call(e, r) && (t[r] = e[r]);
      return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t;
    },
    hasProp = {}.hasOwnProperty;
React = require("react"), inline = require("./inline"), module.exports = ReactCSSComponent = function(t) {
  function e() {
    return e.__super__.constructor.apply(this, arguments);
  }
  return extend(e, t), e.contextTypes = {mixins: React.PropTypes.object}, e.prototype.css = function(t) {
    return inline.call(this, t);
  }, e.prototype.styles = function() {
    return this.css();
  }, e;
}(React.Component);
