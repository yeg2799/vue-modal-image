<template>
 <div id="app">
    <VModalImage ext="https://i.imgur.com/" source="V4fWcfi.jpg" description="Hide Download Button" hideDownload="hideDownload" />
    <VModalImage ext="https://i.imgur.com/" source="V4fWcfi.jpg" description="Hide Zoom Button" hideZoom="hideZoom" />
    <VModalImage ext="https://i.imgur.com/" source="V4fWcfi.jpg" description="Hide Rotate Button" hideRotate="hideRotate" />
    <VModalImage ext="https://i.imgur.com/" source="V4fWcfi.jpg" description="Hide All Buttons" hideDownload="hideDownload" hideZoom="hideZoom" hideRotate="hideRotate" />
</div>
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
