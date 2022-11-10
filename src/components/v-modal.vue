<template lang="pug">
  .v-modal
    inline-svg.v-modal__close-button(:src="require('@/assets/close.svg')" width="25" height="25" fill="white" @click="closeModal")
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
