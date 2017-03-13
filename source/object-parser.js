const arrayParserOverride = ({ parse, prefix, option, value }) => {
  return [ option, value ]
}

module.exports = ({ parse, prefix, option, value }) =>
  Object.keys(value)
  .reduce((args, key) =>
    args
    .concat(prefix + option)
    .concat(key)
    .concat(
      typeof (value[key]) === `object`
      ? parse.behaviour(`array`, arrayParserOverride)(value[key])
      : value[key])
  , [])
