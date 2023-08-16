<template>
    <div class="game-layer10 game-layer">
        <div @click="gameResetWithQuestion" class="text-container">
            毛虫さんに触っちゃったから帰るわ…。<br><br>
            {{ point }} 個のどんぐりを拾ったで！<br><br>
            クリックでリセットするで！
        </div>
    </div>
</template>
<script setup lang="ts">
import { gameReset } from '../GameManager/GameSystemController'
import { point } from '../GameManager/GameDataModel'

const gameResetWithQuestion = () => {
    if (confirm('リセットしてもええんか？')) {
        gameReset()
    }

}
</script>
<style scoped>
.text-container {
    display: flex;
    /* Flexboxを使用 */
    justify-content: center;
    /* 横方向の中央揃え */
    align-items: flex-start;
    /* 縦方向の上揃え */
    width: 100%;
    /* コンテナの幅 */
    height: 100%;
    /* コンテナの高さ */
    font-size: 32px;
    font-weight: bold;
    padding: 50px;
    /* 例として20pxのパディングを追加 */
}
</style>