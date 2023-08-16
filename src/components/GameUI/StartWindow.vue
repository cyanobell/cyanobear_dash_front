<template>
    <div class="game-layer10 game-layer">
        <div @click="gameStart" class="text-container">
             クリックかタップ でゲームスタート！
        </div>
    </div>
</template>
<script setup lang="ts">
import { gameStart } from '../GameManager/GameSystemController'

</script>
<style scoped>
.text-container {
    display: flex;
    /* Flexboxを使用 */
    justify-content: center;
    /* 横方向の中央揃え */
    align-items: center;
    /* 縦方向の中央揃え */
    width: 100%;
    /* コンテナの幅 */
    height: 100%;
    /* コンテナの高さ */
    font-size: 32px;
    font-weight: bold;
}
</style>