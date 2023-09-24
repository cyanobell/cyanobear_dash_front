<script setup lang="ts">
import { onMounted } from 'vue'
import { detect } from "./CollisionDetector"
import { getData, increaseGameCounter } from "./GameSystemController"
import { updateDoc, increment } from "@firebase/firestore"
import cyanobearDashRef from "../../firebase_settings/index"
import { serverAcccessCount } from './GameDataModel'


const doUpdate = () => {
    detect()
    requestAnimationFrame(doUpdate)
    increaseGameCounter()
}

onMounted(() => {
    doUpdate()
    postWebCount()
})

const postWebCount= async () => {
    await getData()
    serverAcccessCount.value += 1
    await updateDoc(cyanobearDashRef, {
        web_count: increment(1)
    });
}
</script>