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

Returns a Promise. config is an object with the keys: file, destination and options.
Options are parsed and passed on to sips.
