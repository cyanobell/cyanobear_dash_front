import { gameCounter } from '../GameManager/GameDataModel'
import { Caterpillar, caterpillars } from './EnemyCaterpillerModel'

const scrollSpeed: number = 10 // この値を変更してスクロール速度を調整

export const addCaterpillar = () => {
    if (!caterpillars.value) {
        return
    }
    caterpillars.value.push(new Caterpillar(Date.now(), Math.random() * 320 + 60, 960))
}

export const calcNextCaterpillarTime = () => {
    //段々と早くなるようにする
    //gameCounterをもとに、段々減っていく関数を使う
    const speed = 1000 * 1000 / (gameCounter.value + 1000)
    return speed + 500
}

export const update = () => {
    if (!caterpillars.value) {
        return
    }
    caterpillars.value.forEach((caterpillar: Caterpillar, index) => {
        caterpillar.left -= scrollSpeed
        if (caterpillar.left <= -80) {
            if (!caterpillars.value) {
                return
            }
            caterpillars.value.splice(index, 1)
        }
    })
}