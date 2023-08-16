<template>
    <div class="score-container">
        取ったどんぐりの数：{{ point }}
    </div>
</template>
<script setup lang="ts">
import { point } from '../GameManager/GameDataModel'
</script>

<style scoped>
.score-container {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 24px;
    font-weight: bold;
}
</style>