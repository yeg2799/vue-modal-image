<template lang="pug">
  #app
    v-modal-image(ext="https://i.imgur.com/" source="V4fWcfi.jpg" description="Hide Download Button" hideDownload)
    v-modal-image(ext="https://i.imgur.com/" source="V4fWcfi.jpg" description="Hide Zoom Button" hideZoom)
    v-modal-image(ext="https://i.imgur.com/" source="V4fWcfi.jpg" description="Hide Rotate Button" hideRotate)
    v-modal-image(ext="https://i.imgur.com/" source="V4fWcfi.jpg" description="Hide All Buttons" hideDownload hideFullScreen hideRotate)
</template>

<script>

import VModalImage from '../../src/v-modal-image.vue';

export default {
  name: 'App',
  components: {
    VModalImage
  },
}
</script>
