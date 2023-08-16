<template>
    <div class="game-container">
        <CyanoBear class="game-layer" />
        <GrassGround class="game-layer" />
        <ItemArcon class="game-layer" />
        <EnemyCaterpiller class="game-layer" />
        <GameUI class="game-layer" />
        <GameSystem />
    </div>
    <InstructionList />
</template>

<script setup lang="ts">
import GrassGround from './components/GrassGround/GrassGround.vue'
import CyanoBear from './components/CyanoBear/CyanoBear.vue'
import ItemArcon from './components/ItemArcon/ItemArcon.vue'
import EnemyCaterpiller from './components/EnemyCaterpiller/EnemyCaterpiller.vue'
import GameSystem from './components/GameManager/GameSystem.vue'
import GameUI from './components/GameUI/GameUI.vue'
import InstructionList from './components/InstructionList/InstructionList.vue'
</script>

<style>
.game-container {
    width: 960px;
    height: 540px;
    cursor: pointer;
    position: relative;
    /* 子要素に対して位置を指定 */
    overflow: hidden;
    /* 子要素がはみ出した部分を非表示にする */
    background-color: aqua;
}

.game-layer {
    width: 960px;
    height: 540px;
    position: absolute;
    /* 親要素に対して絶対位置 */
    top: 0;
    left: 0;
}

.game-layer0 {
    z-index: 0;
}

.game-layer1 {
    z-index: 1;
}

.game-layer2 {
    z-index: 2;
}

.game-layer9 {
    z-index: 9;
}

.game-layer10 {
    z-index: 10;
}</style>