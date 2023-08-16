import { y } from './CyanoBearModel'
const y_gravity: number = 0.8
const y_ground: number = 300.0
let y_speed: number = 0
let on_ground: boolean = true

export const update = () => {
    y_speed += y_gravity
    y.value += y_speed
    if (y.value > y_ground) {
        y.value = y_ground
        y_speed = 0
        on_ground = true
    }
}

export const jump = () => {
    if (on_ground) {
        on_ground = false
        y_speed = -20
    }
}
