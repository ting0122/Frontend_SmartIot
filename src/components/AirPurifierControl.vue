<!-- 前台-首頁-左上角公告-元件 -->
<script>
import Switch from '@/components/Switch.vue';
export default {
    data() {
        return {
            id:0,
            name:"呼呼",
            type:"空氣清淨機",
            fan_speed:"",
            air_quality:10,
            operating_time:"1.62",

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
            this.air_quality += 1;
            console.log("Increased temperature to:", this.air_quality);
        },
        decreaseTemp() {
            this.air_quality -= 1;
            console.log("Decreased temperature to:", this.air_quality);
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
            <i class="fa-solid fa-leaf"></i>
            <p>{{ this.type }}</p>
        </div>
        <div class="right">
            <div class="rightUp">
                <p class="id">總控台</p>
              
            </div>
            <div class="rightDown">
                <div class="rightDownLeft">
                    <div class="target_temp">
                        <span>運轉時間</span>
                        <div class="time">
                            <i class="fa-regular fa-clock"></i>
                            <p>{{ this.operating_time }}</p>
                            <P>小時</P>
                        </div>
                    </div>
                    <div class="fan_speed target_temp">
                        <span>風量</span>
                        <div  @click="setFanSpeed('自動')" :class="{ selected: fan_speed === '自動'}">
                            <i class="fa-solid fa-a"></i>
                            <P v-show="fan_speed === '自動'">自動</P>
                        </div>
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
                    <span>當前<br>空氣品質</span>
                    <div class="mode">
                        <p>{{ this.air_quality }}</p>
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
            color: $black1;
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
                        width: 33px;
                        margin-top: 35px;
                        text-align: center;
                    }
                    .time{
                        display: flex;
                        height: 30px;
                        width: 100%;
                        margin-left: 45px;
                        p{
                            line-height: 30px;
                            margin-left: 10px;
                            font-size: 22px;
                            color: $black1;
                            cursor: default;
                        }
                        i{
                            font-size: 25px;
                            line-height: 34px;
                            color: $black1;
                            margin-right: 10px;
                            cursor: default;
                        }
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
                    left: 23px;
                    top: 10px;
                }
                .mode{
                    padding-top: 55px;
                    color: $black1;    
                    p{
                        font-size: 38px;
                        margin: 0;
                        margin-top: 27px;
                    }
                }
            }

        }
    }
    
    
}


</style>