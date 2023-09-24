
import { ref, Ref } from 'vue'

export const point: Ref<number> = ref(0)
export enum GameShowStatus {
    GAME_BEFORE_START = 0,
    GAME_PLAYING = 1,
    GAME_OVER = 2,
}

export const game_show_state: Ref<GameShowStatus> = ref(GameShowStatus.GAME_BEFORE_START)
export const gameCounter = ref(0)
export const serverTotalArcon = ref(0)
export const serverAcccessCount= ref(0)
export const serverPlayCount = ref(0)