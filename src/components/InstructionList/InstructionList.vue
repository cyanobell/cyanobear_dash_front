<template>
    <table border>
        <tr>
            <td>
                <div :style="{ backgroundImage: 'url(' + CyanoBearImage + ')', width: CyanoBearimageWidth + 'px', height: CyanoBearimageHeight + 'px' }"></div>
            </td>
            <td>
                ウチや！ クリックかタップ でジャンプするで！<br>
                画面のどこを クリックかタップ してもジャンプするで！
            </td>
        </tr>
        <tr>
            <td><img :src="ArconImage" :style="{ transform: 'scale(2)', padding: '10px'}" /></td>
            <td>
                美味しいどんぐりや！今日はこれをいっぱい集めるで～。<br>
                ウチが触れると集めることができるで！
            </td>
        </tr>
        <tr>
            <td><img :src="CaterpillarImage" /></td>
            <td>
                毛虫さんや！嫌やな～。<br>
                奥に行くほど増えていくんや！<br>
                ウチが触れるとゲームオーバーになっちゃうで！
            </td>
        </tr>
    </table>
</template>

<script setup lang="ts">
import CyanoBearImage from '@/assets/cyanobear.png'
import {imageWidth as CyanoBearimageWidth, imageHeight as CyanoBearimageHeight} from '../CyanoBear/CyanoBearModel'
import ArconImage from '@/assets/arcon.png'
import CaterpillarImage from '@/assets/caterpillar.png'
</script>

<style scoped>
table {
    border-collapse: collapse;
    border-spacing: 0;
    border: 1px solid #222;
    margin: 10px;
}
td {
    padding: 10px;
    text-align: center;
    vertical-align: middle;
}
</style>
