"use strict";

function User(options) {
  this.name = options.name;
}

User.prototype.rename = function(name) {
  this.name = name;
}

exports.create = function(options) {
  return new User(options);
}
