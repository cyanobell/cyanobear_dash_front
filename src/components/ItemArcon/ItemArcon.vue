<template>
  <div class="game-layer0">
    <div v-for="arcon in arcons" :key="arcon.id" class="game-layer1"
      :style="{ top: arcon.top + 'px', transform: `translateX(${arcon.left}px)` }">
      <img :src="imageSrc" class="game-image" />
    </div>
  </div>
</template>

<script setup>
import imageSrc from '@/assets/arcon.png'
import { onMounted } from 'vue'
import {arcons} from "./ItemArconModel.ts"
import {update,addAcorn} from "./ItemArconController.ts"

const doUpdate = () => {
  update()
  requestAnimationFrame(doUpdate)
}

const doAddAcorn = () => {
  addAcorn()
  setTimeout(doAddAcorn, Math.random() * 1000)
}

onMounted(() => {
  doUpdate()
  setTimeout(doAddAcorn,  250);
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
