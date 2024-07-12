<!-- 前台-首頁-下方設備顯示欄-元件 -->
<script>
import Switch from '@/components/Switch.vue';

export default {
    data() {
        return {
            dataArr:[{type:"冷氣機"},{type:"燈"},{type:"除濕機"},{type:"空氣清淨機"}]
        };
    },
    components: {
        Switch,
    
    },
    created() {
        // this.searchRoom();
    },
    methods: {
        // searchRoom() {
        //     fetch(`http://localhost:8080/rooms/${1}`, {
        //         method: "get",
        //         headers: {
        //             "Content-Type": "application/json"
        //         },
        //         body: JSON.stringify()
        //     })
        //         .then(res => res.json())
        //         .then(data => {
        //             console.log(data)
        //             this.dataArr = data.devices
        //             console.log(this.dataArr)
        //         })
        // },
        
    }
};
</script>

<template>
    <div class="oo">
        <div class="outArea" v-for="(data, index) in dataArr" :key="index">
            <i class="fa-regular fa-snowflake" v-if="data.type === '冷氣機'" :class="{ hidden: data.showControl }"></i>
            <i class="fa-solid fa-leaf" v-if="data.type === '空氣清淨機'" :class="{ hidden: data.showControl }"></i>
            <i class="fa-solid fa-droplet-slash" v-if="data.type === '除濕機'" :class="{ hidden: data.showControl }"></i>
            <i class="fa-regular fa-lightbulb" v-if="data.type === '燈'" :class="{ hidden: data.showControl }"></i>
            <br>
            <span>{{ data.type }}</span>
            <p>總控台</p>
        </div>

    </div>
    
</template>

<style scoped lang="scss">
@import '@/assets/main.scss';
.oo{
    display: flex;
    flex-direction: row;
    .outArea{
        width: 221px;
        height: 210px;
        border-radius: 25px;
        margin-bottom: 15px;
        background-color: $dark02;
        flex: 0 0 auto; /* 确保每个项目不会缩小并且保持其内容的宽度 */
        margin-right: 25px; /* 可选的间距 */
        text-align: center;
        cursor: pointer;
        i{
            font-size: 80px;
            color: $dark01;
            margin: auto;
            margin-top: 36px;
            margin-bottom: 9px;
        }
        span{
            margin: auto;
            font-size: 20px;
            color: $black1;
        }
        p{
            color: $black;
        }
    }
    
}  

</style>