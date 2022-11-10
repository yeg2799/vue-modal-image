<template lang="pug">
  #app
    v-modal-images(ext="https://i.imgur.com/" source="V4fWcfi.jpg" description="bu bir açıklama")
</template>

<script>

import VModalImages from '@/components/v-modal-images';

export default {
  name: 'App',
  components: {
    VModalImages
  },
}
</script>
