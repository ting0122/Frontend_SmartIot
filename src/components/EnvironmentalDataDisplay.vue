<!-- 前台-首頁-中間環境及時數據顯示-元件 -->
<script>
export default {
    data() {
        return {
            dataArr:[{mane:"溫度",data:"25˚C"},{mane:"空氣品質",data:"20"},{mane:"濕度",data:"55%"}]
        };
    },
 
};
</script>

<template>
    <div class="outArea" v-for="(data, index) in dataArr" :key="index">
        <p>{{ data.mane }}</p>
        <span>{{ data.data }}</span>
    </div>
    
</template>

<style scoped lang="scss">
@import '@/assets/main.scss';
    
.outArea{
    width: 303px;
    height: 100%;
    border-radius: 25px;
    background-color: $dark02;
    display: flex;
    justify-content: space-between;
    p{
        margin: 0 20px 0 40px;
        font-size: 18px;
        line-height: 104px;
    }
    span{
        margin: 17px 65px 20px 30px;
        font-size: 45px;

    }
}

</style>