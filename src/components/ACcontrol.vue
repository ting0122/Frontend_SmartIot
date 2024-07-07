<!-- 前台-首頁-左上角公告-元件 -->
<script>
import Switch from '@/components/Switch.vue';
export default {
    data() {
        return {
            id:0,
            name:"左前方冷氣",
            type:"冷氣",
            fan_speed:"",
            mode:"",
            target_temp:26,

        };
    },
    components: {
        Switch,
    
    },
    methods: {
        //點擊亮起當前選項
        setMode(mode) {
            this.mode = mode;
            console.log("Selected mode:", mode);
        },
        setFanSpeed(fan_speed) {
            this.fan_speed = fan_speed;
            console.log("Selected fan speed:", fan_speed);
        },
        //控制溫度加減
        increaseTemp() {
            this.target_temp += 1;
            console.log("Increased temperature to:", this.target_temp);
        },
        decreaseTemp() {
            this.target_temp -= 1;
            console.log("Decreased temperature to:", this.target_temp);
        },
    }
 
};
</script>

<template>
    <div class="outArea">
        <div class="switch">
            <Switch :id="this.id" />
        </div>
        <div class="left">
            <i class="fa-regular fa-snowflake"></i>
            <p>{{ this.type }}</p>
        </div>
        <div class="right">
            <div class="rightUp">
                <p class="id">{{this.name }}</p>
              
            </div>
            <div class="rightDown">
                <div class="rightDownLeft">
                    <div class="target_temp">
                        <span>模式</span>
                        <div @click="setMode('暖氣')" :class="{ selected: mode === '暖氣' }">
                            <i class="fa-solid fa-temperature-arrow-up"></i>
                            <P>暖氣</P>
                        </div>
                        <div @click="setMode('冷氣')" :class="{ selected: mode === '冷氣' }">
                            <i class="fa-regular fa-snowflake"></i>
                            <P>冷氣</P>
                        </div>
                        <div @click="setMode('除溼')" :class="{ selected: mode === '除溼' }">
                            <i class="fa-solid fa-droplet"></i>
                            <P>除溼</P>
                        </div>
                    </div>
                    <div class="fan_speed target_temp">
                        <span>風量</span>
                        <div  @click="setFanSpeed('低')" :class="{ selected: fan_speed === '低' || fan_speed === '中' || fan_speed === '高'}">
                            <i class="fa-solid fa-wind"> </i>
                            <P v-show="fan_speed === '低'">低</P>
                        </div>
                        <div  @click="setFanSpeed('中')" :class="{ selected: fan_speed === '中' || fan_speed === '高' }">
                            <i class="fa-solid fa-wind"></i>
                            <P v-show="fan_speed === '中'">中</P>
                        </div>
                        <div @click="setFanSpeed('高')" :class="{ selected: fan_speed === '高' }">
                            <i class="fa-solid fa-wind"></i>
                            <P v-show="fan_speed === '高'">高</P>
                        </div>
                    </div>
                </div>
                <div class="rightDownRight">
                    <span>溫度</span>
                    <div class="mode">
                        <i class="fa-solid fa-caret-up" @click="increaseTemp"></i>
                        <p>{{ this.target_temp }}</p>
                        <i class="fa-solid fa-caret-down" @click="decreaseTemp"></i>
                    </div>
                </div>
            </div>
        </div>

        
    </div>
    
</template>

<style scoped lang="scss">
@import '@/assets/main.scss';


.outArea{
    width: 541px;
    height: 268px;
    border-radius: 25px;
    // border: 1px solid black;
    background-color: $dark02;
    display: flex;
    justify-content: space-between;
    padding-top: 13px;
    position: relative;
    .switch {
        position: absolute;
        right: 24px;
        top: 15px;
    }
    .left{
        height: 100%;
        width: 30%;
        text-align: center;
        i{
            font-size: 80px;
            color: $dark01;
            margin-top: 75px;  
        }
        p{
            font-size: 20px;
            margin-top: 10px;
            color: $black;
        }
    }
    .right{
        height: 100%;
        width: 70%;
        // border: 1px solid black;
        p{
            margin: 10px 0 20px 5px;
            font-size: 16px;
        }
        .rightUp{
            width: 100%;
        }
        .rightDown{
            width: 100%;
            display: flex;
            // border: 1px solid black;
            .rightDownLeft{
                height: 100%;
                width: 65%;
                // border: 1px solid black;
                .target_temp{
                    width: 234px;
                    height: 92px;
                    border-radius: 15px;
                    background-color: $dark01;
                    display: flex;
                    justify-content: space-evenly;
                    position: relative;
                    span{
                        position: absolute;
                        color: $black1;
                    }
                    i{
                        font-size: 25px;
                        color: $dark03;
                        cursor: pointer;
                    }
                    p{
                        margin: 0;
                        color: $dark03;
                        cursor: pointer;
                    }
                    div{
                        width: 50px;
                        margin-top: 35px;
                        text-align: center;

                    }
                }
                .selected {
                    i{
                        color: $black1;
                    }
                    p{
                        color: $black1;
                    }
                }
                .fan_speed{
                    margin-top: 10px;
                }
            }
            .rightDownRight{
                width: 110px;
                height: 194px;
                border-radius: 15px;
                background-color: $dark01;
                text-align: center;
                position: relative;
                span{
                    position: absolute;
                    color: $black1;
                    left: 39px;
                    top: 10px;
                }
                .mode{
                    padding-top: 55px;
                    color: $black1;
                    
                    i{
                        font-size: 25px;
                        cursor: pointer;
                    }
                    p{
                        font-size: 35px;
                        margin: 0;
                        margin-bottom: 10px;
                    }
                }
            }

        }
    }
    
    
}


</style>