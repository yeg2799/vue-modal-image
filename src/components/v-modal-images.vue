<template lang="pug">
  .v-modal-image
    .v-modal-image__item
        img.v-modal-image__item-img(:src="ext + source" @click="isOpen = !isOpen" alt="deneme")
        span.v-modal-image__item-description {{ description }}
    #modal(v-if="isOpen")
      span Modal
</template>

<script>
import { ref } from 'vue'
export default {
    name: "VModalImages",
    props: {
        ext: {
            type: String,
            default: 'https://i.imgur.com/',
            required: true,
        }, 
        source: {
            type: String,
            default: 'V4fWcfi.jpg',
            required: true,
        },
        description: {
            type: String,
            default: '',
        }
    },
    setup() {
        const isOpen = ref(false);

        return {
        isOpen
        }
    }
}
</script>

<style src="./v-modal-images.scss" lang="scss"></style>
