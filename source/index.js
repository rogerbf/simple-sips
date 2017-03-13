const { execFile } = require(`child_process`)

const args = (
  require(`options-to-args`)
  .alias(require(`./aliases`))
  .behaviour(`array`, require(`./array-parser`))
  .behaviour(`object`, require(`./object-parser`))
)

const sips = require(`./sips`)

module.exports = sips.bind(null, { execFile, args })
