<template>
    <div class="game-layer0">
        <div v-for="arcon in arcons" :key="arcon.id" class="game-layer1"
            :style="{ top: arcon.top + 'px', transform: `translateX(${arcon.left}px)` }">
            <img :src="imageSrc" class="game-image" />
        </div>
    </div>
</template>

<script setup lang="ts">
import imageSrc from '@/assets/arcon.png'
import { watch } from "vue"
import { game_show_state, GameShowStatus } from '../GameManager/GameDataModel'
import { arcons } from "./ItemArconModel"
import { update, addAcorn } from "./ItemArconController"
const doUpdate = () => {
    if (game_show_state.value === GameShowStatus.GAME_PLAYING) {
        update()
        requestAnimationFrame(doUpdate)
    }
}

const doAddAcorn = () => {
    if (game_show_state.value === GameShowStatus.GAME_PLAYING) {
        addAcorn()
        setTimeout(doAddAcorn, Math.random() * 1000)
    }
}

watch(game_show_state, (newVal) => {
    if (newVal === GameShowStatus.GAME_PLAYING) {
        doUpdate()
        setTimeout(doAddAcorn, 250);
    }
    else {
        arcons.value = []
    }
})
</script>

<style scoped>
.game-layer1 {
    width: auto;
    height: auto;
    position: absolute;
    display: flex;
}

.game-image {
    transform: scale(2);
    width: auto;
    height: auto;
}
</style>
