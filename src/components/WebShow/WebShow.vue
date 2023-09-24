<template>
    <table border>
        <tr>
            <td>
                統計データ
            </td>
            <td>
                累計のデータや！全世界共通や！
            </td>
        </tr>
        <tr>
            <td>
                どんぐりが足りないで！<br>
            </td>
            <td>
                {{serverTotalArcon}} 個集まってるで！<br>
                たくさん食べちゃうからたくさん集めるんや！
            </td>
        </tr>
        <tr>
            <td>
                集めた回数<br>
            </td>
            <td>
                {{serverPlayCount}} 回集めたで～<br>
                たくさん遊んでくれてありがとう！
            </td>
        </tr>
        <tr>
            <td>アクセスカウンタ</td>
            <td>
                {{serverAcccessCount}} 回のアクセスがあったわ。<br>
            </td>
        </tr>
    </table>
</template>

<script setup lang="ts">
import {serverTotalArcon, serverAcccessCount, serverPlayCount} from '../GameManager/GameDataModel.ts'
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
