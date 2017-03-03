module.exports = ({ execFile, args }, options) =>
  new Promise((resolve, reject) => {
    execFile(
      `sips`,
      args
      .addAlias({ getProperty: `g` })
      .addAlias({ extractTag: `X` })
      .addAlias({ verify: `v` })
      .addAlias({ extractProfile: `x` })
      .addAlias({ setProperty: `s` })
      .addAlias({ deleteProperty: `d` })
      .addAlias({ deleteTag: `-deleteTag` })
      .addAlias({ copyTag: `-copyTag` })
      .addAlias({ loadTag: `-loadTag` })
      .addAlias({ repair: `-repair` })
      .addAlias({ embedProfile: `e` })
      .addAlias({ embedProfileIfNone: `E` })
      .addAlias({ matchTo: `m` })
      .addAlias({ matchToWithIntent: `M` })
      .addAlias({ deleteColorManagementProperties: `-deleteColorManagementProperties` })
      .addAlias({ rotate: `r` })
      .addAlias({ flip: `f` })
      .addAlias({ cropToHeightWidth: `c` })
      .addAlias({ padToHeightWidth: `p` })
      .addAlias({ padColor: `-padColor` })
      .addAlias({ resampleHeightWidth: `z` })
      .addAlias({ resampleWidth: `-resampleWidth` })
      .addAlias({ resampleHeight: `-resampleHeight` })
      .addAlias({ resampleHeightWidthMax: `Z` })
      .addAlias({ addIcon: `i` })(options),
      (error, stdout, stderr) => {
        error
        ? reject(error)
        : resolve(stdout.trim())
      }
    )
  })
