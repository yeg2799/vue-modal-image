# vue-modal-image

## Features

- Zero dependencies.
- Esc, Enter & click outside the image close the lightbox
- User can zoom & move the image or download the highest quality one
- Download, Zoom and Rotate -buttons can be hidden.
- Image alt shown as title

## Simple API

## Getting started

### Installation

```shell
npm install vue-modal-image
```
Add dependencies to your `main.js`:

```javascript
import Vue from 'vue'
import ModalImage from 'vue-modal-image'

Vue.use(ModalImage)
```

Add the global component to your `App.vue`:

```js
   <VModalImage source="https://i.imgur.com/V4fWcfi.jpg" description="Hide Download Button" hideDownload @onclosedModal="onclosedModal" />
```

| Prop                   | Type      | Description                                                                                                   |
| ---------------------- | --------- | ------------------------------------------------------------------------------------------------------------- |
| `alt`                  | `String`  | Optional. `alt` for the the heading text in image.                                                            |
| `description`          | `String`  | Optional. `description` for the the description text in ModalImage.                                           |
| `source`               | `URL`     | `source` for the image.                                                                                       |
| `hideDownload`         | `boolean` | Optional. Set to `false` to hide download-button from the ModalImage.                                         |
| `hideZoom`             | `boolean` | Optional. Set to `false` to hide zoom-button from the ModalImage.                                             |
| `hideZoom`             | `boolean` | Optional. Set to `false` to show rotate-button within the ModalImage.                                         |

[npm]: https://www.npmjs.com/package/vue-modal-images
