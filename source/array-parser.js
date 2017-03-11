module.exports = ({ prefix, option, value }) =>
  value.reduce((acc, v) => acc.concat([ prefix + option, v ]), [])
