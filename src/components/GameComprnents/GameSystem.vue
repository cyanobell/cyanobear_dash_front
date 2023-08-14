<script setup>
import { onMounted } from 'vue'
const doUpdate = () => {
  requestAnimationFrame(doUpdate)
}

onMounted(() => {
  doUpdate()
})
</script>