<script setup>
import imageSrc from '@/assets/cyanobear.png'
import AnimImage from '../util/AnimImage.vue'
import { x, y, imageWidth, totalImages } from './CyanoBearModel.ts'
import { update, jump } from './CyanoBearController.ts'

const doUpdate = () => {
  update()
  requestAnimationFrame(doUpdate)
}

requestAnimationFrame(doUpdate) // 初回の呼び出し

</script>
<template>
  <div class="game-layer9" @mousedown="jump">
    <AnimImage :imageSrc="imageSrc" :imageWidth="imageWidth" :totalImages="totalImages" :x="x" :y="y" />
  </div>
</template>