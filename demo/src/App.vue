<template>
 <div id="app">
    <VModalImage source="https://i.imgur.com/V4fWcfi.jpg" description="Hide Download Button" hideDownload @onclosedModal="onclosedModal"/>
    <VModalImage source="https://i.imgur.com/V4fWcfi.jpg" description="Hide Zoom Button" hideZoom />
    <VModalImage source="https://i.imgur.com/V4fWcfi.jpg" description="Hide Rotate Button" hideRotate />
    <VModalImage source="https://i.imgur.com/V4fWcfi.jpg" description="Hide All Buttons" hideDownload= hideZoom hideRotate />
</div>
</template>

<script>

import VModalImage from '../../src/v-modal-image.vue';

export default {
  name: 'App',
  components: {
    VModalImage
  },
  setup() {
    const onclosedModal = () => {
      console.log('onclosedModal');
    }
    return {
      onclosedModal,
    }
  }
}
</script>
