module.exports = ({ execFile, args }, { source, destination, options = {} } = {}) =>
  new Promise((resolve, reject) => {
    execFile(
      `sips`,
      args(options)
      .concat(source || [])
      .concat(destination ? [ `--out`, destination ] : []),
      (error, stdout, stderr) => {
        error
        ? reject(error)
        : resolve(stdout.trim())
      }
    )
  })
