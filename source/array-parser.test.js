const parser = require(`./array-parser`)

it(`is a function`, () => {
  expect(typeof (parser)).toBe(`function`)
})

it(`parses as expected`, () => {
  expect(parser({
    prefix: `-`,
    option: `g`,
    value: [ `pixelHeight`, `pixelWidth` ]
  }))
  .toEqual([ `-g`, `pixelHeight`, `-g`, `pixelWidth` ])
})
