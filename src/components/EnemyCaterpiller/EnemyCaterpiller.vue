<template>
    <div class="game-layer0">
        <div v-for="caterpillar in caterpillars" :key="caterpillar.id" class="game-layer2"
            :style="{ top: caterpillar.top + 'px', transform: `translateX(${caterpillar.left}px)` }">
            <img :src="imageSrc" class="game-image" />
        </div>
    </div>
</template>
  
<script setup lang="ts">
import imageSrc from '@/assets/caterpillar.png'
import { watch } from "vue"
import { game_show_state, GameShowStatus } from '../GameManager/GameDataModel'
import { caterpillars } from "./EnemyCaterpillerModel"
import { update, addCaterpillar, calcNextCaterpillarTime } from "./EnemyCaterpillerController"
const doUpdate = () => {
    if (game_show_state.value === GameShowStatus.GAME_PLAYING) {
        update()
        requestAnimationFrame(doUpdate)
    }
}

const doAddCaterpillar = () => {
    if (game_show_state.value === GameShowStatus.GAME_PLAYING) {
        addCaterpillar()
        setTimeout(doAddCaterpillar, calcNextCaterpillarTime())
    }
}

watch(game_show_state, (newVal) => {
    if (newVal === GameShowStatus.GAME_PLAYING) {
        doUpdate()
        setTimeout(doAddCaterpillar, 250);
    }
    else {
        caterpillars.value = []
    }
})
</script>
  
<style scoped>
.game-layer2 {
    width: auto;
    height: auto;
    position: absolute;
    display: flex;
}

.game-image {
    width: auto;
    height: auto;
}
</style>
  