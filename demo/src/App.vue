<template>
 <div id="app">
    <v-modal-image ext="https://i.imgur.com/" source="V4fWcfi.jpg" description="Hide Download Button" hideDownload="hideDownload"></v-modal-image>
    <v-modal-image ext="https://i.imgur.com/" source="V4fWcfi.jpg" description="Hide Zoom Button" hideZoom="hideZoom"></v-modal-image>
    <v-modal-image ext="https://i.imgur.com/" source="V4fWcfi.jpg" description="Hide Rotate Button" hideRotate="hideRotate"></v-modal-image>
    <v-modal-image ext="https://i.imgur.com/" source="V4fWcfi.jpg" description="Hide All Buttons" hideDownload="hideDownload" hideZoom="hideZoom" hideRotate="hideRotate"></v-modal-image>
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
