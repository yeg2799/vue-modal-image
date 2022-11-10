<template lang="pug">
  .v-modal-image
    .v-modal-image__item(v-if="!isOpen")
        img.v-modal-image__item-img(:src="ext + source" @click="isOpen = true" alt="deneme")
        span.v-modal-image__item-description {{ description }}
    v-modal(v-if="isOpen" :imgSource="ext + source" @closeModal="closeModal")
</template>

<script>
import { ref } from 'vue'
import VModal from './v-modal.vue'

export default {
    name: "VModalImages",
    components: {
        VModal
    },
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

        const closeModal = () => {
            isOpen.value = false;
        }
 
        return {
        isOpen,
        closeModal,
        }
    }
}
</script>

<style src="./v-modal-images.scss" lang="scss"></style>
