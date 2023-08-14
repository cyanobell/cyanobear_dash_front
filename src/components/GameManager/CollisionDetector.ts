import { cyano_bear as player } from '../CyanoBear/CyanoBearModel'
import { arcons ,Arcon} from '../ItemArcon/ItemArconModel'
import { point} from './GameDataModel'



export const detect = () => {
    // playerとarconの衝突判定
    const deleteArcons :Arcon[]= []
    arcons.value.forEach((arcon) => {
        if (arcon.left < player.x.value + player.imageWidth &&
            player.x.value < arcon.left + 14 &&
            arcon.top < player.y.value + player.imageHeight &&
            player.y.value < arcon.top + 14) {
            deleteArcons.push(arcon)
            point.value += 1
        }
    })

    arcons.value = arcons.value.filter((arcon) => {
        return !deleteArcons.includes(arcon)
    })
}