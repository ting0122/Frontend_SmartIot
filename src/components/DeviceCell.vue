<!-- 前台-首頁-下方設備顯示欄-元件 -->
<script>
import Switch from '@/components/Switch.vue';

export default {
    data() {
        return {
            dataArr:[{id:203154,type:"冷氣",mane:"前方的冷氣"},{id:203157,type:"冷氣",mane:"後方的冷氣"},{id:203151,type:"電燈",mane:"右側電燈"},{id:203157,type:"冷氣",mane:"後方的冷氣"},{id:203157,type:"冷氣",mane:"後方的冷氣"},{id:203157,type:"冷氣",mane:"後方的冷氣"}]
        };
    },
    components: {
        Switch,
    
    },
 
};
</script>

<template>
    <div class="oo">
        <div class="outArea" v-for="(data, index) in dataArr" :key="index">
            <div class="switch">
                    <Switch :id="'on-' +index" />
            </div>
            <p class="id">{{ data.id }}</p>
            <i class="fa-regular fa-snowflake"></i>
            <p>{{ data.type }}</p>
            <span>{{ data.mane }}</span>
        </div>

    </div>
    
</template>

<style scoped lang="scss">
@import '@/assets/main.scss';
.oo{
    display: flex;
    flex-direction: row;
    .outArea{
        position: relative;
        width: 250px;
        height: 200px;
        border-radius: 25px;
        margin-bottom: 15px;
        background-color: $dark02;
        flex: 0 0 auto; /* 确保每个项目不会缩小并且保持其内容的宽度 */
        margin-right: 25px; /* 可选的间距 */
        padding-bottom: 10px;
        .switch {
            position: absolute;
            right: 18px;
            top: 15px;
        }
        i{
            font-size: 80px;
            color: $dark01;
            margin-left: 37%;
            margin-top: 21px;
        }
        .id{
            margin-top: 10px
        }
        p{
            margin: 5px 20px 0 30px;
            font-size: 16px;
        }
        span{
            margin: 20px 30px 20px 30px;
            font-size: 20px;
    
        }
    }
    
}  

</style>