<!-- 前台-故障紀錄-頁面 -->
<script>
import FaultSearch from '@/components/FaultSearch.vue';

export default {
    data() {
        return {
            dataArr:[{id:203154,type:"冷氣",mane:"前方的冷氣",question:"網路連線中斷",date:"2024-06-02"},{id:203157,type:"冷氣",mane:"後方的冷氣",question:"網路連線中斷",date:"2024-06-02"},{id:203151,type:"電燈",mane:"右側電燈",question:"網路連線中斷",date:"2024-06-02"},{id:203157,type:"冷氣",mane:"後方的冷氣",question:"網路連線中斷",date:"2024-06-02"},{id:203157,type:"空氣清淨機",mane:"後方的冷氣",question:"網路連線中斷",date:"2024-06-02"},{id:203157,type:"冷氣",mane:"後方的冷氣",question:"網路連線中斷",date:"2024-06-02"},{id:203157,type:"冷氣",mane:"後方的冷氣",question:"網路連線中斷",date:"2024-06-02"},{id:203157,type:"冷氣",mane:"後方的冷氣",question:"網路連線中斷",date:"2024-06-02"},{id:203157,type:"冷氣",mane:"後方的冷氣",question:"網路連線中斷",date:"2024-06-02"},{id:203157,type:"冷氣",mane:"後方的冷氣",question:"網路連線中斷",date:"2024-06-02"},{id:203157,type:"冷氣",mane:"後方的冷氣",question:"網路連線中斷",date:"2024-06-02"},{id:203157,type:"冷氣",mane:"後方的冷氣",question:"網路連線中斷",date:"2024-06-02"}]
        };
    },
    components: {
        FaultSearch,
    
    },

};
</script>

<template>
    
    <div class="down">
        <div class="search">
            <FaultSearch/>
        </div>
        <div class="oo">
            <div class="outArea" v-for="(data, index) in dataArr" :key="index">
                <h2>{{ data.mane }}</h2>
                <div class="box">
                    <p class="id">{{ data.id }}</p>
                    <p>{{ data.type }}</p>
                </div>
                <p class="right">{{ data.question }}</p>
                <p class="date">{{ data.date }}</p>
            </div>

        </div>
    </div>


</template>

<style scoped lang="scss">
@import '@/assets/main.scss';

.down {
    width: 900px;
    height: 650px;
    padding: 41px 0px 16px 50px;  
    .oo{
        padding-left: 82px;
        width: 830px;
        height: 600px;
        // border: 1px solid black;
        overflow-y: auto;
        overflow-x: hidden;
        &::-webkit-scrollbar {
            width: 13px;
        }

        &::-webkit-scrollbar-button {
            background: transparent;
            height: 12px;
        }

        &::-webkit-scrollbar-thumb {
            background: $black1;
            border-radius: 15px;

        }

        &::-webkit-scrollbar-track {
            background: transparent;
            border-radius: 15px;
        }
        .outArea{
            position: relative;
            display: flex;
            align-items: center;
            width: 790px;
            height: 53px;
            border-radius: 30px;
            margin-bottom: 15px;
            background-color: $dark02;
            flex: 0 0 auto; /* 确保每个项目不会缩小并且保持其内容的宽度 */
          
            h2{
                display: block;
                width: 120px;
                font-size: 18px;
                line-height: 52px;
                margin-left: 23px;
                color: $white;
                
            }
            .box{
                width: 185px;
                height: 30px;
                border-right: 1px solid $white;
                display: flex;
                padding-left: 10px;
                p{
                    // font-size: 1px;
                    line-height: 30px;
                    margin-right: 18px;
                    color: $white;
                }
            }
            .right{
                display: block;
                margin-left: 28px;
                width: 258px;
                color: $white;
                // border: 1px solid black;
            }
            .date{
                display: block;
                margin-left: 50px;
                color: $white;
                

            }
        }
        
    }  
}

</style>