<template>
    <div class="game-layer0">
        <div class="image-container" ref="imageContainerRef">
            <img :src="imageSrc" class="game-image" />
            <img :src="imageSrc" class="game-image" />
            <img :src="imageSrc" class="game-image" />
            <img :src="imageSrc" class="game-image" />
        </div>
    </div>
</template>

<script setup>
import imageSrc from '@/assets/ground.png'
import { ref, onMounted, watch } from 'vue'
import { game_show_state, GameShowStatus } from '../GameManager/GameDataModel'

const imageContainerRef = ref(null)
const containerPositionX = ref(0)
const scrollSpeed = 10 // この値を変更してスクロール速度を調整
const imageWidth = 329; // 画像の幅

const scrollBackground = () => {
    containerPositionX.value -= scrollSpeed
    if (containerPositionX.value <= -imageWidth) {
        containerPositionX.value = 0
    }
    imageContainerRef.value.style.transform = `translateX(${containerPositionX.value}px)`
    if (game_show_state.value !== GameShowStatus.GAME_OVER) {
        requestAnimationFrame(scrollBackground)
    }
}

onMounted(() => {
    scrollBackground()
})
watch(game_show_state, (newVal) => {
    if (newVal === GameShowStatus.GAME_BEFORE_START) {
        scrollBackground()
    }
})
</script>

<style scoped>
.game-layer0 {
    width: 960px;
    height: 540px;
    overflow: hidden;
    /* 子要素がはみ出した部分を非表示にする */
    position: relative;
}

.image-container {
    width: calc(329px * 4);
    /* 4つの画像の幅の合計 */
    height: auto;
    /* 画像の自然な高さを保持 */
    position: absolute;
    top: 410px;
    left: 0;
    display: flex;
    /* 画像を横並びにする */
}

.game-image {
    width: auto;
    /* 画像の自然な幅を保持 */
    height: auto;
    /* 画像の自然な高さを保持 */
}
</style>