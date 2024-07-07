<script>
import Switch from '@/components/Switch.vue';

export default {
    data() {
        return {
            createObj:{
                name:"",
                type:"",
                roomId:1
            },
            dataArr:[{id:203154,type:"冷氣",mane:"前方的冷氣"},{id:203157,type:"冷氣",mane:"後方的冷氣"},{id:203151,type:"電燈",mane:"右側電燈"},{id:203157,type:"冷氣",mane:"後方的冷氣"},{id:203157,type:"冷氣",mane:"後方的冷氣"},{id:203157,type:"冷氣",mane:"後方的冷氣"},{id:203157,type:"冷氣",mane:"後方的冷氣"},{id:203157,type:"冷氣",mane:"後方的冷氣"},{id:203157,type:"冷氣",mane:"後方的冷氣"},{id:203157,type:"冷氣",mane:"後方的冷氣"},{id:203157,type:"冷氣",mane:"後方的冷氣"},{id:203157,type:"冷氣",mane:"後方的冷氣"}]
        };
    },
    components: {
        Switch,
    
    },
    methods: {
        createDevice() {
            fetch("http://localhost:8080//devices", {
                method: "get",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify()
            })
                // .then(res => res.json())
                .then(data => {
                    console.log(data)
                })
        },
        
    }

};
</script>

<template>
    
    <div class="down">
        <div class="oo">
            <div class="outArea" v-for="(data, index) in dataArr" :key="index">
                <div class="switch">
                        <Switch :id="index" />
                </div>
                <p class="id">{{ data.id }}</p>
                <i class="fa-regular fa-snowflake"></i>
                <p>{{ data.type }}</p>
            
                <span>{{ data.mane }}</span>
            </div>

        </div>
    </div>


</template>

<style scoped lang="scss">
@import '@/assets/main.scss';

.down {
    width: 900px;
    height: 650px;
    padding: 27px 0px 16px 50px;  
    overflow-y: auto;
    &::-webkit-scrollbar {
        width: 13px;

    }

    &::-webkit-scrollbar-button {
        background: transparent;
        height: 30px;
    }

    &::-webkit-scrollbar-thumb {
        background: $black1;
        border-radius: 15px;

    }

    &::-webkit-scrollbar-track {
        background: transparent;
        border-radius: 15px;
    }
    .oo{
        display: flex;
        flex-wrap: wrap;
        padding-left: 82px;
        .outArea{
            position: relative;
            width: 250px;
            height: 200px;
            border-radius: 25px;
            margin-bottom: 15px;
            background-color: $dark02;
            flex: 0 0 auto; /* 确保每个项目不会缩小并且保持其内容的宽度 */
            margin-right: 17px; /* 可选的间距 */
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
}

</style>