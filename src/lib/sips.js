const exec = require('execa')
const path = require('path')

const defaults = {
  format: 'png',
  path: process.cwd(),
  resampleHeightWidthMax: 512
}

function sips (input, opts) {
  const options = opts ? opts : {}

  const config = Object.assign(
    {},
    defaults,
    { filename: `${path.parse(input).name}` },
    options
  )

  const output = path.join(config.path, `${config.filename}.${config.format}`)

  const args = [
    '-s', 'format', config.format,
    '--resampleHeightWidthMax', config.resampleHeightWidthMax,
    input, '--out', output
  ]

  return new Promise((resolve, reject) => {
    exec('sips', args)
      .then(() => resolve(output))
      .catch(e => reject(e))
  })
}

module.exports = sips
