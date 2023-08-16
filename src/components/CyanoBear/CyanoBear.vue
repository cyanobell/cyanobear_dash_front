<script setup lang="ts">
import imageSrc from '@/assets/cyanobear.png'
import AnimImage from '../util/AnimImage.vue'
import { x, y, imageWidth, totalImages } from './CyanoBearModel'
import { update, jump } from './CyanoBearController'
import { ref, watch } from 'vue'
import { game_show_state, GameShowStatus } from '../GameManager/GameDataModel'

const animFlipFrame = ref(5)

const doUpdate = () => {
    update()
    requestAnimationFrame(doUpdate)
}

watch(game_show_state, (newVal) => {
    if (newVal === GameShowStatus.GAME_OVER) {
        animFlipFrame.value = 0
    }
    else {
        animFlipFrame.value = 5
    }
})


requestAnimationFrame(doUpdate) // 初回の呼び出し

</script>
<template>
    <div class="game-layer9" @mousedown="jump">
        <AnimImage :imageSrc="imageSrc" :imageWidth="imageWidth" :totalImages="totalImages" :x="x" :y="y"
            :animFlipFrame="animFlipFrame" />
    </div>
</template>