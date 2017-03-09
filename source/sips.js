module.exports = ({ execFile, args }, { imagefile, destination, options }) =>
  new Promise((resolve, reject) => {
    execFile(
      `sips`,
      args(options)
      .concat(imagefile || [])
      .concat(destination ? [ `--out`, destination ] : []),
      (error, stdout, stderr) => {
        error
        ? reject(error)
        : resolve(stdout.trim())
      }
    )
  })
