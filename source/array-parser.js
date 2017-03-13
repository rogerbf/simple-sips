module.exports = ({ parse, prefix, option, value }) =>
  value.reduce((acc, v) => acc.concat(prefix + option).concat(v), [])
