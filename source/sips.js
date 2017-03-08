module.exports = ({ execFile, args }, options) =>
  new Promise((resolve, reject) => {
    execFile(
      `sips`,
      args(options),
      (error, stdout, stderr) => {
        error
        ? reject(error)
        : resolve(stdout.trim())
      }
    )
  })
