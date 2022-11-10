<template lang="pug">
  .v-modal
    .v-modal__head
        inline-svg.v-modal__head-download.v-modal__head-button(:src="require('@/assets/download.svg')" width="25" height="25" fill="white" @click="downloadImage(imgSource)")
        inline-svg.v-modal__head-fullscreen.v-modal__head-button(:src="require('@/assets/fullscreen.svg')" width="25" height="25" fill="white" @click="closeModal")
        inline-svg.v-modal__head-rotate.v-modal__head-button(:src="require('@/assets/rotate.svg')" width="25" height="25" fill="white" @click="rotateImage")
        inline-svg.v-modal__head-close.v-modal__head-button(:src="require('@/assets/close.svg')" width="25" height="25" fill="white" @click="closeModal")
    .v-modal__middle
        img.v-modal-item(:src="imgSource" alt="deneme" :style="{ 'transform': `translate3d(0%, 0%, 0px) rotate(${rotateDeg}deg)` }" :ref="imageRef")
    //- span.v-modal-image__item-description {{ description }}
</template>

<script>
import { ref } from 'vue'

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
        const rotateDeg = ref(0);
        const imageRef = ref(null);
        
        const closeModal = () => {
            emit('closeModal')
        }

        const rotateImage = () => {
            rotateDeg.value === 360 ? rotateDeg.value = 90 : rotateDeg.value += 90;
        }

        const downloadImage = async source => {
            const image = await fetch(source)
            const imageBlog = await image.blob()
            const imageURL = URL.createObjectURL(imageBlog)

            const link = document.createElement('a')
            link.href = imageURL
            link.download = 'image file name here'
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
        }

        return {
            closeModal,
            rotateDeg,
            rotateImage,
            imageRef,
            downloadImage
        }
    }
} 
</script>

<style src="./v-modal.scss" lang="scss"></style>
