<script setup lang="ts">
import { onMounted } from 'vue'
import { detect } from "./CollisionDetector"
import { increaseGameCounter } from "./GameSystemController"
const doUpdate = () => {
    detect()
    requestAnimationFrame(doUpdate)
    increaseGameCounter()
}

onMounted(() => {
    doUpdate()
})


</script>