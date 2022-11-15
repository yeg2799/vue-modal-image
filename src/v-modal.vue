<template>
<div class="v-modal">
    <div class="v-modal__head">
        <div class="v-modal__head-download v-modal__head-button" v-if="!hideDownload" @click="downloadImage(imgSource)">
            <download-icon />
        </div>
        <div class="v-modal__head-fullscreen v-modal__head-button" v-if="!hideZoom" @click="fullScreenImage">
            <zoom-icon />
        </div>
        <div class="v-modal__head-rotate v-modal__head-button" v-if="!hideRotate" @click="rotateImage">
            <rotate-icon />
        </div>
        <div class="v-modal__head-close v-modal__head-button" @click="closeModal">
            <close-icon />
        </div>
    </div>
    <div class="v-modal__middle">
        <img class="v-modal-item" :src="imgSource" :alt="alt" :style="{ 'transform': `translate3d(0%, 0%, 0px) rotate(${rotateDeg}deg)` }" ref="imageRef" />
    </div>
</div>
</template>

<script>
import { ref } from 'vue'
import { DownloadIcon, ZoomIcon, CloseIcon, RotateIcon } from "@/utils/icons";

export default {
    name: "VModal",
    components: {
        DownloadIcon,
        ZoomIcon,
        CloseIcon,
        RotateIcon
    },
    props: {
        imgSource: {
            type: String,
            default: '',
            required: true,
        },
        alt: {
            type: String,
            default: '',
        },
        hideDownload: {
            type: Boolean,
            default: false,
        },
        hideZoom: {          
            type: Boolean,
            default: false,
        },
        hideRotate: {          
            type: Boolean,
            default: false,
        },
    },
    setup(props, {emit}) {
        const rotateDeg = ref(0);
        const imageRef = ref(null);
        const isFullScreen = ref(false);
        
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

        const fullScreenImage = () => {
            const image = imageRef.value.style;

            if (isFullScreen.value) {
                image.width = "50%";
                image.height = "auto";
                image.top = "25%";
                image.left = "25%";
                isFullScreen.value = false;
            } else {
                image.width = "100%";
                image.height = "100%";
                image.top = "auto";
                image.left = "0%";
                isFullScreen.value = true;
            }

        }

        return {
            closeModal,
            rotateDeg,
            rotateImage,
            imageRef,
            downloadImage,
            fullScreenImage,
        }
    }
} 
</script>

<style src="./v-modal.scss" lang="scss"></style>
