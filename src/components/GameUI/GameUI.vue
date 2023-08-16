<template >
    <div v-if="isBeforeStart">
        <StartWindow />
    </div>
    <div v-else-if="isPlaying">
        <GamePoint />
    </div>
    <div v-else-if="isGameOver">
        <GameOverWindow />
    </div>
</template>

<script setup lang="ts">
import GamePoint from './GamePoint.vue'
import StartWindow from './StartWindow.vue'
import GameOverWindow from './GameOverWindow.vue'
import { isBeforeStart, isPlaying, isGameOver } from "../GameManager/GameSystemController"

</script>