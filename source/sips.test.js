const sips = require(`./sips`)

test(`sips is defined`, () => {
  expect(sips).toBeDefined()
})

test(`execFile called with the expected arguments`, () => {
  const execFile = jest.fn((command, args, cb) => {
    cb(null, `success`)
  })
  const args = jest.fn(() => [ `some`, `args` ])

  sips(
    { execFile, args },
    {
      source: `path/to/file`,
      destination: `/path/output`,
      options: { rotate: 45 }
    }
  )
  .then(() => {
    expect(execFile).toHaveBeenCalled()
    expect(args).toHaveBeenCalledWith({ rotate: 45 })
    expect(execFile.mock.calls[0]).toContain(`sips`)
    expect(execFile.mock.calls[0]).toContainEqual([
      `some`, `args`, `path/to/file`, `--out`, `/path/output`
    ])
  })
  .catch(error => expect(error).toBeUndefined())
})

test(`execFile called with the expected arguments`, () => {
  const execFile = jest.fn((command, args, cb) => {
    cb(null, `success`)
  })
  const args = jest.fn(() => [ `some`, `args` ])

  sips(
    { execFile, args }
  )
  .then(() => {
    expect(execFile).toHaveBeenCalled()
    expect(args).toHaveBeenCalledWith({})
    expect(execFile.mock.calls[0]).toContain(`sips`)
    expect(execFile.mock.calls[0]).toContainEqual([ `some`, `args` ])
  })
  .catch(error => expect(error).toBeUndefined())
})

test(`rejects`, () => {
  const execFile = jest.fn((command, args, cb) => {
    cb(`an error`)
  })
  const args = jest.fn(() => [ `some`, `args` ])

  sips(
    { execFile, args }
  )
  .then(() => {})
  .catch(error => expect(error).toEqual(`an error`))
})
