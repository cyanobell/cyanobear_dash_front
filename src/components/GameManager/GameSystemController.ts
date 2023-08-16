import { computed } from "vue";
import { game_show_state, gameCounter, GameShowStatus, point } from "./GameDataModel"

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
}
export const isBeforeStart = computed(() => game_show_state.value === GameShowStatus.GAME_BEFORE_START)
export const isPlaying = computed(() => game_show_state.value === GameShowStatus.GAME_PLAYING)
export const isGameOver = computed(() => game_show_state.value === GameShowStatus.GAME_OVER)
