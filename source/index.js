const aliases = require(`./aliases`)
const args = require(`options-to-args`).alias(aliases)

const { execFile } = require(`child_process`)
const sips = require(`./sips`)

module.exports = sips.bind(null, { execFile, args })
