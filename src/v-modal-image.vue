<template lang="pug">
  .v-modal-image
    .v-modal-image__item(v-if="!isOpen")
        img.v-modal-image__item-img(:src="ext + source" @click="openModal" :alt="alt")
        span.v-modal-image__item-description {{ description }}
    v-modal(v-if="isOpen" :imgSource="ext + source" @closeModal="closeModal" :alt="alt" :hideDownload="hideDownload" :hideFullScreen="hideFullScreen" :hideRotate="hideRotate")
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
        alt: {
            type: String,
            default: '',
        },
        description: {
            type: String,
            default: '',
        },
        hideDownload: {
            type: Boolean,
            default: false,
        },
        hideFullScreen: {          
            type: Boolean,
            default: false,
        },
        hideRotate: {          
            type: Boolean,
            default: false,
        },
    },
    setup() {
        const isOpen = ref(false);

        const closeModal = () => {
            isOpen.value = false;
        }

        const openModal = () => {
             isOpen.value = true;
        }
 
        return {
        isOpen,
        closeModal,
        openModal,
        }
    }
}
</script>

<style src="./v-modal-images.scss" lang="scss"></style>
