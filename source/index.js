const { execFile } = require(`child_process`)

const aliases = require(`./aliases`)
const arrayParser = require(`./array-parser`)
const args = (
  require(`options-to-args`)
  .alias(aliases)
  .behaviour(`array`, arrayParser)
)

const sips = require(`./sips`)

module.exports = sips.bind(null, { execFile, args })
