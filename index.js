module.exports = function hello (name) {
  return 'hello' + (name == null ? '' : ' ' + name)
}
