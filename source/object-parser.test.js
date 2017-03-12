const parse = require(`./object-parser`)

it(`is a function`, () => {
  expect(typeof (parse)).toBe(`function`)
})

it(`parses as expected`, () => {
  expect(parse({ prefix: `-`, option: `s`, value: { a: `b` } }))
  .toEqual([ `-s`, `a`, `b` ])
})
