import { computed } from "vue";
import { game_show_state, gameCounter, GameShowStatus, point } from "./GameDataModel"
import axios from "axios";

export const increaseGameCounter = () => {
    gameCounter.value++
}
export const gameReset = () => {
    game_show_state.value = GameShowStatus.GAME_BEFORE_START
    point.value = 0
    gameCounter.value = 0
    loadServerTotalArcon()
}
export const gameStart = () => {
    gameCounter.value = 0
    game_show_state.value = GameShowStatus.GAME_PLAYING
}
export const gameOver = () => {
    axios.patch('/user', {
        arcon: gameCounter.value,
        lastName: 'Flintstone'
      })
    .then((response) => {
        console.log(response);
        
    })


    gameCounter.value = 0
    game_show_state.value = GameShowStatus.GAME_OVER
}

const loadServerTotalArcon = () => {
    axios.get('/user', {
      })
    .then((response) => {
        console.log(response);
    })
}

export const isBeforeStart = computed(() => game_show_state.value === GameShowStatus.GAME_BEFORE_START)
export const isPlaying = computed(() => game_show_state.value === GameShowStatus.GAME_PLAYING)
export const isGameOver = computed(() => game_show_state.value === GameShowStatus.GAME_OVER)
