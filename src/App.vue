<template lang="pug">
  #app
    v-modal-image(ext="https://i.imgur.com/" source="V4fWcfi.jpg" description="this is description")
</template>

<script>

import VModalImage from '@/components/v-modal-image';

export default {
  name: 'App',
  components: {
    VModalImage
  },
}
</script>
