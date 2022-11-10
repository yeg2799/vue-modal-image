<template lang="pug">
  .v-modal
    .v-modal__head
        inline-svg.v-modal__head-download.v-modal__head-button(:src="require('@/assets/download.svg')" width="25" height="25" fill="white" @click="closeModal")
        inline-svg.v-modal__head-fullscreen.v-modal__head-button(:src="require('@/assets/fullscreen.svg')" width="25" height="25" fill="white" @click="closeModal")
        inline-svg.v-modal__head-rotate.v-modal__head-button(:src="require('@/assets/rotate.svg')" width="25" height="25" fill="white" @click="closeModal")
        inline-svg.v-modal__head-close.v-modal__head-button(:src="require('@/assets/close.svg')" width="25" height="25" fill="white" @click="closeModal")
    .v-modal__middle
        img.v-modal-item(:src="imgSource" alt="deneme")
    //- span.v-modal-image__item-description {{ description }}
</template>

<script>

export default {
    name: "VModal",
    props: {
        imgSource: {
            type: String,
            default: '',
            required: true,
        }
    },
    setup(props, {emit}) {
        
        const closeModal = () => {
            emit('closeModal')
        }

        return {
            closeModal
        }
    }
} 
</script>

<style src="./v-modal.scss" lang="scss"></style>
