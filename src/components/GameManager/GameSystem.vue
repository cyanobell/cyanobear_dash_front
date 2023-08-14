<script setup>
import { onMounted } from 'vue'
import { detect } from "./CollisionDetector.ts"
const doUpdate = () => {
    detect()
    requestAnimationFrame(doUpdate)
}

onMounted(() => {
    doUpdate()
})
</script>