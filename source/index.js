const args = require(`options-to-args`)
const { execFile } = require(`child_process`)
const sips = require(`./sips`)

module.exports = sips.bind(null, { args, execFile })
