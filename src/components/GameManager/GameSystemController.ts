import { computed } from "vue";
import { game_show_state, gameCounter, GameShowStatus, point } from "./GameDataModel"
import { updateDoc, increment, getDoc } from "@firebase/firestore"
import cyanobearDashRef from "../../firebase_settings/index"
import { serverAcccessCount, serverPlayCount, serverTotalArcon } from "./GameDataModel"

export const increaseGameCounter = () => {
    gameCounter.value++
}
export const gameReset = () => {
    game_show_state.value = GameShowStatus.GAME_BEFORE_START
    point.value = 0
    gameCounter.value = 0
}
export const gameStart = () => {
    gameCounter.value = 0
    game_show_state.value = GameShowStatus.GAME_PLAYING
}
export const gameOver = () => {
    gameCounter.value = 0
    game_show_state.value = GameShowStatus.GAME_OVER
    postAndFetchData(point.value)
}

const postAndFetchData = async (point: number) => {
    await updateDoc(cyanobearDashRef, {
        arcon_collection: increment(point),
        play_count: increment(1)
    });
    serverTotalArcon.value += point
    serverPlayCount.value += 1

    await new Promise(resolve => setTimeout(resolve, 1000)); // 1秒待機
    await getData()
}

export const getData = async () => {
    const docSnap = await getDoc(cyanobearDashRef);
    if(docSnap.exists()){
        docSnap.data()
        serverTotalArcon.value = docSnap.data().arcon_collection
        serverAcccessCount.value = docSnap.data().web_count
        serverPlayCount.value = docSnap.data().play_count
    }
}

export const isBeforeStart = computed(() => game_show_state.value === GameShowStatus.GAME_BEFORE_START)
export const isPlaying = computed(() => game_show_state.value === GameShowStatus.GAME_PLAYING)
export const isGameOver = computed(() => game_show_state.value === GameShowStatus.GAME_OVER)
