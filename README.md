# simple-sips

Image manipulation with scriptable image processing system.

From the sips manpage:

> This tool is used to query or modify raster image files and ColorSync ICC profiles.

All options are supported.

## usage

```javascript
const sips = require(`simple-sips`)

sips({
  source: `/path/to/image`,
  destination: `/path/to/destination`,
  options: {
    rotate: 45
  }
})
.then(stdout => console.log(`rotated image 45 degrees clockwise`))
.catch(console.error)
```

## api

### `sips(config)`

Returns a Promise. `config` is an object with the keys: `source`, `destination` and `options`.

`source` - original image path

`destination` - output path for the modified image

`options` - object containing sips operations

#### options object examples

##### image query functions

```javascript
{
  getProperty: [ `pixelHeight`, `pixelWidth` ]
}
```

##### image modification functions

```javascript
{
  setProperty: { description: 'A hotel', copyright: 'Lynyrd' }
}
```
