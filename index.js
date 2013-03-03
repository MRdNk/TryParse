function tryparse () {}

tryparse.prototype.integer = tryparse.prototype.int = function (value) {
  return (parseInt(value) === value) ? parseInt(value) : null;
}

tryparse.prototype.float = function (value) {
  return (parseFloat(value) === value) ? parseFloat(value) : null;
}

module.exports = new tryparse;