<script setup>
import { ref, watchEffect, defineProps } from 'vue'

const props = defineProps(['imageSrc', 'imageWidth', 'imageHeight', 'totalImages', 'x', 'y', 'animFlipFrame'])

const currentImageIndex = ref(0)
const imageStyle = ref('')
const frameCount = ref(0) // フレームカウントの追加

watchEffect(() => {
    const xPos = currentImageIndex.value * props.imageWidth
    imageStyle.value = `background-position: -${xPos}px 0; background-image: url('${props.imageSrc}'); left: ${props.x}px; top: ${props.y}px;`
})

const nextImage = () => {
    frameCount.value++ // フレームカウントを増加
    if (frameCount.value % props.animFlipFrame === 0) { // props.animFlipFrameフレームごとに切り替え
        currentImageIndex.value = (currentImageIndex.value + 1) % props.totalImages
    }
    requestAnimationFrame(nextImage) // 次の描画フレームで再度呼び出す
}

requestAnimationFrame(nextImage) // 初回の呼び出し
</script>
<template>
    <div class="image-container" :style="{ width: props.imageWidth + 'px', height: props.imageHeight + 'px'}">
        <div :style="imageStyle"></div>
    </div>
</template>

<style scoped>
.image-container {
    cursor: pointer;
    position: relative;
    /* 子要素に対して位置を指定 */
}

.image-container div {
    width: 100%;
    height: 100%;
    position: absolute;
    /* 親要素に対して位置を指定 */
    background-repeat: no-repeat;
}
</style>