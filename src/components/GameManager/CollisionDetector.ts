import { cyano_bear as player } from '../CyanoBear/CyanoBearModel'
import { arcons, Arcon } from '../ItemArcon/ItemArconModel'
import { caterpillars, Caterpillar } from '../EnemyCaterpiller/EnemyCaterpillerModel'
import { point } from './GameDataModel'
import { gameOver } from './GameSystemController'


export const detect = () => {
    // playerとarconの衝突判定
    // 適当に大きめに判定
    const deleteArcons: Arcon[] = []
    arcons.value.forEach((arcon: Arcon) => {
        if (arcon.left < player.x.value + player.imageWidth &&
            player.x.value < arcon.left + 14 &&
            arcon.top < player.y.value + player.imageHeight &&
            player.y.value < arcon.top + 14) {
            deleteArcons.push(arcon)
            point.value += 1
        }
    })

    arcons.value = arcons.value.filter((arcon: Arcon) => {
        return !deleteArcons.includes(arcon)
    })

    // playerとCaterpillarの衝突判定
    // 適当に小さめに判定
    // 当たったらゲームオーバー
    const deleteCaterpillars: Caterpillar[] = []
    caterpillars.value.forEach((caterpillar: Caterpillar) => {
        if (caterpillar.left < player.x.value + player.imageWidth - 30 &&
            player.x.value + 30 < caterpillar.left &&
            caterpillar.top < player.y.value + player.imageHeight - 50 &&
            player.y.value - 30 < caterpillar.top) {
            gameOver()
        }
    })
}