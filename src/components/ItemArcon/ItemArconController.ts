import { Arcon, arcons } from './ItemArconModel'

const scrollSpeed :number = 10 // この値を変更してスクロール速度を調整

export const addAcorn = () => {
    if (!arcons.value) {
        return
    }
    arcons.value.push(new Arcon(Date.now(), Math.random() * 350 + 60, 960))
}

export const update = () => {
    if (!arcons.value) {
        return
    }
    arcons.value.forEach((arcon: Arcon, index) => {
        arcon.left -= scrollSpeed
        if (arcon.left <= -14) {
            if (!arcons.value) {
                return
            }
            arcons.value.splice(index, 1)
        }
    })
}