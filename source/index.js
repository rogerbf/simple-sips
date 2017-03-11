const { execFile } = require(`child_process`)

const args = (
  require(`options-to-args`)
  .alias(require(`./aliases`))
  .behaviour(`array`, require(`./array-parser`))
)

const sips = require(`./sips`)

module.exports = sips.bind(null, { execFile, args })
