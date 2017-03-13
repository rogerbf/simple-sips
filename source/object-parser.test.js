const objectParser = require(`./object-parser`)
const args = require(`options-to-args`)

it(`is a function`, () => {
  expect(typeof (objectParser)).toBe(`function`)
})

it(`parses as expected`, () => {
  expect(args.behaviour(`object`, objectParser)({ s: { a: `b` } }))
  .toEqual([ `-s`, `a`, `b` ])
})

it(`parses array of objects`, () => {
  expect(args.behaviour(`object`, objectParser)({ s: { a: `b`, c: `d` } }))
  .toEqual([ `-s`, `a`, `b`, `-s`, `c`, `d` ])
})
