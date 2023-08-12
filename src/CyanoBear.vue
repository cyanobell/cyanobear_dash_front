<script setup>
import AnimImage from './AnimImage.vue'
import { ref } from 'vue'
import imageSrc from '@/assets/cyanobear.png'


const imageWidth = 135
const totalImages = 7
const x = ref(400)
const y = ref(200.0)
const y_speed = ref(200)
const y_gravity = 0.5


const update = () => {
  requestAnimationFrame(update) // 次の描画フレームで再度呼び出す
}
const jump = () => {
  y.value -= 100
}

requestAnimationFrame(update) // 初回の呼び出し
</script>
<template>
  <div class="game-container" @click="jump">
    <AnimImage :imageSrc="imageSrc" :imageWidth="imageWidth" :totalImages="totalImages" :x="x" :y="y" />
  </div>
</template>