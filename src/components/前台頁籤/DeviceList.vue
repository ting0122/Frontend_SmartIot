<script>
import location from '@/stores/location';
import { mapState, mapActions } from 'pinia';
import Switch from '@/components/Switch.vue';
import ForestageSearchDevice from '@/components/ForestageSearchDevice.vue';

export default {
    data() {
        return {
            createObj: {
                name: "",
                type: "",
                roomId: 1
            },

            dataArr: [
                { id: 203154, type: "冷氣", mane: "前方的冷氣", expanded: false, showControl: false, mode: '', fan_speed: '', target_temp: 24 },
                { id: 203157, type: "空氣清淨機", mane: "後方的冷氣", expanded: false, showControl: false, operating_time: '1.23', fan_speed: '', air_quality: 12 },
                { id: 203151, type: "電燈", mane: "右側電燈", expanded: false, showControl: false, brightness: 70, color_temp: 5500 },
                { id: 203157, type: "除濕機", mane: "後方的冷氣", expanded: false, showControl: false, tank_capacity: 150, fan_speed: '', target_humidity: 60 },
                { id: 203157, type: "空氣清淨機", mane: "後方的冷氣", expanded: false, showControl: false, operating_time: '2', fan_speed: '', air_quality: 30 },
                { id: 203157, type: "除濕機", mane: "後方的冷氣", expanded: false, showControl: false, tank_capacity: 150, fan_speed: '', target_humidity: 55 },
                { id: 203157, type: "冷氣", mane: "後方的冷氣", expanded: false, showControl: false, mode: '', fan_speed: '', target_temp: 24 },
                { id: 203157, type: "空氣清淨機", mane: "後方的冷氣", expanded: false, showControl: false, operating_time: '0.5', fan_speed: '', air_quality: 35 },
                { id: 203157, type: "除濕機", mane: "後方的冷氣", expanded: false, showControl: false, tank_capacity: 150, fan_speed: '', target_humidity: 55 },
                { id: 203157, type: "電燈", mane: "後方的冷氣", expanded: false, showControl: false, brightness: 20, color_temp: 4000 },
                { id: 203157, type: "冷氣", mane: "後方的冷氣", expanded: false, showControl: false, mode: '', fan_speed: '', target_temp: 24 },
                { id: 203157, type: "電燈", mane: "後方的冷氣", expanded: false, showControl: false, brightness: 30, color_temp: 3500 }]
        };
    },
    created() {
        this.searchRoom(1);
    },
    components: {
        Switch,
        ForestageSearchDevice,
    },
    computed: {
        // ...mapState(location, ['dataArr']),
        

    },
    methods: {
        ...mapActions(location, ['deviceStatus', 'searchRoom']),


        //點擊亮起當前選項
        setMode(index, mode) {
            this.dataArr[index].mode = mode;
        },
        setFanSpeed(index, fan_speed) {
            this.dataArr[index].fan_speed = fan_speed;
        },
        //控制數值加減
        increaseTemp(index) {
            if (this.dataArr[index].type === "冷氣") {
                this.dataArr[index].target_temp++;
            } else if (this.dataArr[index].type === "除濕機") {
                this.dataArr[index].target_humidity++;
            }
        },
        decreaseTemp(index) {
            if (this.dataArr[index].type === "冷氣") {
                this.dataArr[index].target_temp--;
            } else if (this.dataArr[index].type === "除濕機") {
                this.dataArr[index].target_humidity--;
            }
        },
        createDevice() {
            fetch("http://localhost:8080//devices", {
                method: "get",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify()
            })
                .then(data => {
                    console.log(data)
                })
        },
        toggleExpand(index) {
            this.dataArr[index].expanded = !this.dataArr[index].expanded;
            console.log(index)
            if (this.dataArr[index].expanded) {
                setTimeout(() => {
                    this.dataArr[index].showControl = true;
                }, 300); // 0.3秒後顯示控制區塊
            } else {
                setTimeout(() => {
                    this.dataArr[index].showControl = false;
                }, 0); // 0.3秒後隱藏控制區塊
            }
        }

    }

};
</script>

<template>

    <div class="down">
        <ForestageSearchDevice>
            <template #roomid>
                <p></p>
            </template>
        </ForestageSearchDevice>

        <div class="oo">
            <!-- <div class="outArea" v-for="(data, index) in dataArr.devices" :key="index">
                <div>
                    <div class="switch">
                        <Switch :id="data.id" :checked="data.status"
                            @change="deviceStatus(data.id, data.type, data.name, 1, 1)" />
                    </div>
                    <p class="id">{{ data.id }}</p>
                    <i class="fa-regular fa-snowflake"></i>
                    <p>{{ data.type }}</p> -->

            <div class="outArea" v-for="(data, index) in dataArr" :key="index" :class="{ expanded: data.expanded }">
                <div class="switch">
                    <Switch :id="index" />
                </div>
                <p class="id">{{ data.id }}</p>
                <i class="fa-regular fa-snowflake" v-if="data.type === '冷氣'" :class="{ hidden: data.showControl }"></i>
                <i class="fa-solid fa-leaf" v-if="data.type === '空氣清淨機'" :class="{ hidden: data.showControl }"></i>
                <i class="fa-solid fa-droplet-slash" v-if="data.type === '除濕機'"
                    :class="{ hidden: data.showControl }"></i>
                <i class="fa-regular fa-lightbulb" v-if="data.type === '電燈'" :class="{ hidden: data.showControl }"></i>
                <p>{{ data.type }}</p>
                <span>{{ data.mane }}</span>
                <button class="updated" @click="toggleExpand(index)">
                    <i class="fa-solid fa-gear"></i>
                </button>
                <transition name="fade">
                    <div v-if="data.showControl" class="control">
                        <!-- 以下是冷氣 -->
                        <div v-if="data.type === '冷氣'" class="AC">
                            <div @click="setMode(index, '暖氣')" :class="{ selected: data.mode === '暖氣' }">
                                <i class="fa-solid fa-temperature-arrow-up"></i>
                                <P>暖氣</P>
                            </div>
                            <div @click="setMode(index, '冷氣')" :class="{ selected: data.mode === '冷氣' }">
                                <i class="fa-regular fa-snowflake"></i>
                                <P>冷氣</P>
                            </div>
                            <div @click="setMode(index, '送風')" :class="{ selected: data.mode === '送風' }">
                                <i class="fa-solid fa-fan"></i>
                                <P>送風</P>
                            </div>
                        </div>
                        <div v-if="data.type === '冷氣'" class="AC">
                            <div @click="setFanSpeed(index, '高')" :class="{ selected: data.fan_speed === '高' }">
                                <i class="fa-solid fa-wind"></i>
                                <P :class="{ hidden: data.fan_speed !== '高' }">高</P>
                            </div>
                            <div @click="setFanSpeed(index, '中')"
                                :class="{ selected: data.fan_speed === '中' || data.fan_speed === '高' }">
                                <i class="fa-solid fa-wind"></i>
                                <P :class="{ hidden: data.fan_speed !== '中' }">中</P>
                            </div>
                            <div @click="setFanSpeed(index, '低')"
                                :class="{ selected: data.fan_speed === '低' || data.fan_speed === '中' || data.fan_speed === '高' }">
                                <i class="fa-solid fa-wind"> </i>
                                <P :class="{ hidden: data.fan_speed !== '低' }">低</P>
                            </div>
                            <!-- <div  @click="setFanSpeed(index,'自動')" :class="{ selected: data.fan_speed === '自動'}">
                                <i class="fa-solid fa-a"></i>
                                <P :class="{ hidden: data.fan_speed !== '自動' }">自動</P>
                            </div> -->
                        </div>
                        <div v-if="data.type === '冷氣'" class="AC">
                            <div class="mode">
                                <span>目標溫度</span>
                                <i class="fa-solid fa-caret-up" @click="increaseTemp(index)"></i>
                                <p>{{ data.target_temp }}°C</p>
                                <i class="fa-solid fa-caret-down" @click="decreaseTemp(index)"></i>
                            </div>
                        </div>
                        <!-- 以下是空氣清淨機 -->
                        <div v-if="data.type === '空氣清淨機'" class="Air">
                            <span>設備<br>運轉時間</span>
                            <div class="time">
                                <p>{{ data.operating_time }}</p>
                                <p class="hr">小時</p>
                            </div>
                        </div>
                        <div v-if="data.type === '空氣清淨機'" class="AC">
                            <div @click="setFanSpeed(index, '高')" :class="{ selected: data.fan_speed === '高' }">
                                <i class="fa-solid fa-wind"></i>
                                <P :class="{ hidden: data.fan_speed !== '高' }">高</P>
                            </div>
                            <div @click="setFanSpeed(index, '中')"
                                :class="{ selected: data.fan_speed === '中' || data.fan_speed === '高' }">
                                <i class="fa-solid fa-wind"></i>
                                <P :class="{ hidden: data.fan_speed !== '中' }">中</P>
                            </div>
                            <div @click="setFanSpeed(index, '低')"
                                :class="{ selected: data.fan_speed === '低' || data.fan_speed === '中' || data.fan_speed === '高' }">
                                <i class="fa-solid fa-wind"> </i>
                                <P :class="{ hidden: data.fan_speed !== '低' }">低</P>
                            </div>
                        </div>
                        <div v-if="data.type === '空氣清淨機'" class="Air">
                            <div class="mode">
                                <p>{{ data.air_quality }}</p>
                                <span>當前<br>空氣品質</span>
                            </div>
                        </div>
                        <!-- 以下是除濕機 -->
                        <div v-if="data.type === '除濕機'" class="Air">
                            <span>水箱<br>剩餘容量</span>
                            <div class="time">
                                <p>{{ data.tank_capacity }}</p>
                                <p class="hr">ml</p>
                            </div>
                        </div>
                        <div v-if="data.type === '除濕機'" class="AC">
                            <div @click="setFanSpeed(index, '高')" :class="{ selected: data.fan_speed === '高' }">
                                <i class="fa-solid fa-wind"></i>
                                <P :class="{ hidden: data.fan_speed !== '高' }">高</P>
                            </div>
                            <div @click="setFanSpeed(index, '中')"
                                :class="{ selected: data.fan_speed === '中' || data.fan_speed === '高' }">
                                <i class="fa-solid fa-wind"></i>
                                <P :class="{ hidden: data.fan_speed !== '中' }">中</P>
                            </div>
                            <div @click="setFanSpeed(index, '低')"
                                :class="{ selected: data.fan_speed === '低' || data.fan_speed === '中' || data.fan_speed === '高' }">
                                <i class="fa-solid fa-wind"> </i>
                                <P :class="{ hidden: data.fan_speed !== '低' }">低</P>
                            </div>
                        </div>
                        <div v-if="data.type === '除濕機'" class="AC">
                            <div class="mode">
                                <span>目標濕度</span>
                                <i class="fa-solid fa-caret-up" @click="increaseTemp(index)"></i>
                                <p>{{ data.target_humidity }}%</p>
                                <i class="fa-solid fa-caret-down" @click="decreaseTemp(index)"></i>
                            </div>
                        </div>
                        <!-- 以下是電燈 -->
                        <div v-if="data.type === '電燈'" class="Lamp">
                            <div class="brightnessRange">
                                <div class="brightness">
                                    <span>{{ data.brightness }} %</span>
                                </div>
                                <div class="area">
                                    <p>亮度</p>
                                    <input type="range" min="0" max="100" v-model="data.brightness">
                                </div>
                            </div>
                            <div class="color_tempRange">
                                <div class="color_temp">
                                    <span>{{ data.color_temp }}K</span>
                                </div>
                                <div class="area">
                                    <p>色溫</p>
                                    <input type="range" min="1000" max="10000" step="100" v-model="data.color_temp">
                                </div>
                            </div>
                        </div>
                    </div>
                </transition>
            </div>

            <!-- <span>{{ data.name }}</span> -->
            <!-- </div>
            </div> -->
        </div>
    </div>


</template>

<style scoped lang="scss">
@import '@/assets/main.scss';

.down {
    width: 900px;
    height: 650px;
    padding: 27px 0px 16px 50px;

    .oo {
        height: 598px;
        display: flex;
        flex-wrap: wrap;
        padding-left: 82px;
        overflow-y: auto;

        &::-webkit-scrollbar {
            width: 13px;

        }

        &::-webkit-scrollbar-button {
            background: transparent;
            height: 3px;
        }

        &::-webkit-scrollbar-thumb {
            background: $black1;
            border-radius: 15px;

        }

        &::-webkit-scrollbar-track {
            background: transparent;
            border-radius: 15px;
        }

        .outArea {
            position: relative;
            width: 250px;
            height: 200px;
            border-radius: 25px;
            margin-bottom: 15px;
            background-color: $dark02;
            

            // flex: 0 0 auto; /* 确保每个项目不会缩小并且保持其内容的宽度 */
            margin-right: 17px;
            /* 可选的间距 */
            padding-bottom: 10px;
            transition: width 0.3s;

            /* 添加過渡效果 */
            &.expanded {
                width: 517px;
                /* 展開後的寬度 */
            }

            .switch {
                position: absolute;
                right: 18px;
                top: 15px;
            }

            i {
                font-size: 80px;
                color: $dark01;
                margin-left: 37%;
                margin-top: 21px;

                &.hidden {
                    visibility: hidden;
                    /* 隱藏但保留佔位 */
                }
            }

            .id {
                margin-top: 10px
            }

            p {
                margin: 5px 20px 0 30px;
                font-size: 16px;
            }

            span {
                margin: 20px 30px 20px 30px;
                font-size: 20px;

            }

            .updated {
                position: absolute;
                right: 21px;
                bottom: 18px;
                height: 30px;
                width: 30px;
                text-align: center;
                background-color: transparent;
                cursor: pointer;

                i {
                    margin: 0;
                    line-height: 30px;
                    font-size: 21px;
                    color: $dark03 ;
                }
            }

            .control {
                position: absolute;
                top: 50px;
                right: 46px;
                display: flex;
                align-items: center;
                margin-top: 10px;

                .AC {
                    width: 95px;
                    height: 120px;
                    background-color: $dark01;
                    margin-right: 12px;
                    border-radius: 20px;
                    padding-top: 10px;

                    i {
                        width: 30px;
                        font-size: 25px;
                        color: $dark03;
                        cursor: pointer;
                        margin: 0;
                    }

                    p {
                        margin: 0;
                        color: $dark03;
                        cursor: pointer;

                        &.hidden {
                            visibility: hidden;
                            /* 隱藏但保留佔位 */
                        }
                    }

                    div {
                        width: 68px;
                        display: flex;
                        justify-content: space-evenly;
                        margin: auto;
                        margin-top: 10px;

                    }

                    .selected {
                        i {
                            color: $black1;
                        }

                        p {
                            color: $black1;
                        }
                    }

                    .mode {
                        flex-direction: column;
                        align-items: center;
                        color: $black1;
                        padding-top: 10px;

                        i {
                            width: auto;
                            font-size: 25px;
                            cursor: pointer;
                        }

                        p {
                            font-size: 30px;
                            margin: 0;
                            color: $black1;
                            margin-top: -8px;
                        }

                        span {
                            position: absolute;
                            left: 234px;
                            top: 3px;
                            color: $black1;
                            margin: 0;
                            font-size: 14px;
                        }
                    }

                }

                .Air {
                    width: 95px;
                    height: 120px;
                    background-color: $dark01;
                    margin-right: 12px;
                    border-radius: 20px;
                    padding-top: 10px;

                    span {
                        position: absolute;
                        left: 19px;
                        top: 3px;
                        color: $black1;
                        margin: 0;
                        font-size: 14px;
                        text-align: center;
                    }

                    i {
                        width: 30px;
                        font-size: 25px;
                        color: $dark03;
                        cursor: pointer;
                        margin: 0;
                    }

                    p {
                        margin: 0;
                        color: $dark03;
                        cursor: pointer;

                        &.hidden {
                            visibility: hidden;
                            /* 隱藏但保留佔位 */
                        }
                    }

                    div {
                        width: 68px;
                        display: flex;
                        justify-content: space-evenly;
                        margin: auto;
                        margin-top: 10px;

                    }

                    .selected {
                        i {
                            color: $black1;
                        }

                        p {
                            color: $black1;
                        }
                    }

                    .mode {
                        flex-direction: column;
                        align-items: center;
                        color: $black1;
                        margin-top: 19px;

                        p {
                            font-size: 35px;
                            margin: 0;
                            color: $black1;
                            margin-top: 24px;
                            cursor: default;
                        }

                        span {
                            position: absolute;
                            color: $black1;
                            text-align: center;
                            margin: 0;
                            left: 233px;
                            top: 3px;
                            font-size: 14px;
                        }
                    }

                    .time {
                        display: flex;
                        align-items: center;
                        flex-direction: column;

                        p {
                            color: $black1;
                            cursor: default;
                            font-size: 30px;
                            margin: 0;
                            margin-top: 26px;
                        }

                        .hr {
                            font-size: 14px;
                            margin-top: 0;
                        }
                    }
                }

                .Lamp {
                    width: 309px;
                    height: 130px;
                    background-color: $dark01;
                    margin-right: 12px;
                    border-radius: 20px;

                    .brightnessRange {
                        height: 65px;
                        display: flex;
                        border-bottom: 1px solid $dark03;

                        span {
                            font-size: 20px;
                            color: $black1;
                            font-size: 30px;
                            margin: 0;
                            line-height: 60px;
                        }

                        .brightness {
                            width: 120px;
                            text-align: center;
                        }

                        .area {
                            padding-top: 10px;

                            p {
                                margin: 0;
                                color: $black1;
                            }

                            input {
                                width: 170px;
                            }
                        }
                    }

                    .color_tempRange {
                        display: flex;

                        span {
                            font-size: 20px;
                            color: $black1;
                            font-size: 30px;
                            margin: 0;
                            line-height: 60px;
                        }

                        .color_temp {
                            width: 120px;
                            text-align: center;
                        }

                        .area {
                            padding-top: 10px;

                            p {
                                margin: 0;
                                color: $black1;
                            }

                            input {
                                width: 170px;
                            }
                        }
                    }






                }
            }

        }

    
    }

    /* 過渡效果 */
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.3s width 0.3s;
    }

    .fade-enter,
    .fade-leave-to

    /* .fade-leave-active in <=2.1.8 */
        {
        opacity: 0;
        width: 0;
    }

}


</style>