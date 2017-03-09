# simple-sips

Image manipulation with scriptable image processing system.

## usage

```javascript
const sips = require(`simple-sips`)

sips({
  image: `/path/to/image`,
  destination: `/path/to/destination`,
  options: {
    rotate: 45
  }
})
.then(() => console.log(`rotated image 45 degrees clockwise`))
.catch(console.error)
```

## api
