<!-- 前台-首頁-左上角公告-元件 -->
<script>
import Switch from '@/components/Switch.vue';

export default {
    props: {
        id: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            type: "除濕機",
            current_humidity: 0.0,
            target_humidity: 55.0,
            fan_speed: "中",
            status: false,
        };
    },
    components: {
        Switch,
    },
    methods: {
        setFanSpeed(speed) {
            this.fan_speed = speed;
            this.emitUpdate();
        },
        increaseHumidity() {
            this.target_humidity = Math.min(parseFloat((this.target_humidity + 1).toFixed(1)), 100);
            console.log('增加後的濕度:', this.target_humidity, typeof this.target_humidity);
            this.emitUpdate();
        },
        decreaseHumidity() {
            this.target_humidity = Math.max(parseFloat((this.target_humidity - 1).toFixed(1)), 0);
            console.log('減少後的濕度:', this.target_humidity, typeof this.target_humidity);
            this.emitUpdate();
        },
        updateDeviceStatus(index, status) {
            this.status = status;
            this.emitUpdate();
        },
        emitUpdate() {
            const updatedData = {
                status: this.status,
                target_humidity: parseFloat(this.target_humidity.toFixed(1)),
                fan_speed: this.mapFanSpeed(this.fan_speed),
            };
            console.log('DehumidifierControl 發送的數據:', updatedData, 'target_humidity type:', typeof updatedData.target_humidity);
            this.$emit('update-dehumidifiers', updatedData);
        },
        updateCurrentHumidity(humidity) {
            this.current_humidity = humidity;
        },
        mapFanSpeed(speed) {
            const speedMap = {
                '自動': 'AUTO',
                '低': 'LOW',
                '中': 'MEDIUM',
                '高': 'HIGH'
            };
            return speedMap[speed] || 'MEDIUM';
        }
    }
};
</script>

<template>
    <div class="outArea">
        <div class="switch">
            <Switch :id="id" v-model:checked="status" @update:checked="updateDeviceStatus($event)" />
        </div>
        <div class="left">
            <i class="fa-solid fa-droplet-slash"></i>
            <p>{{ this.type }}</p>
        </div>
        <div class="right">
            <div class="rightUp">
                <p class="id">總控台</p>
            </div>
            <div class="rightDown">
                <div class="rightDownLeft">
                    <div class="target_temp">
                        <span>當前濕度</span>
                        <div class="time">
                            <i class="fa-solid fa-droplet"></i>
                            <p>{{ this.current_humidity.toFixed(1) }}</p>
                            <P>%</P>
                        </div>
                    </div>
                    <div class="fan_speed target_temp">
                        <span>運轉強度</span>
                        <div @click="setFanSpeed('自動')" :class="{ selected: fan_speed === '自動' }">
                            <i class="fa-solid fa-a"></i>
                            <P v-show="fan_speed === '自動'">自動</P>
                        </div>
                        <div @click="setFanSpeed('低')"
                            :class="{ selected: fan_speed === '低' || fan_speed === '中' || fan_speed === '高' }">
                            <i class="fa-solid fa-wind"> </i>
                            <P v-show="fan_speed === '低'">低</P>
                        </div>
                        <div @click="setFanSpeed('中')" :class="{ selected: fan_speed === '中' || fan_speed === '高' }">
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
                    <span>目標濕度</span>
                    <div class="mode">
                        <i class="fa-solid fa-caret-up" @click="increaseHumidity"></i>
                        <p>{{ target_humidity.toFixed(1) }}%</p>
                        <i class="fa-solid fa-caret-down" @click="decreaseHumidity"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import '@/assets/main.scss';


.outArea {
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

    .left {
        height: 100%;
        width: 30%;
        text-align: center;

        i {
            font-size: 80px;
            color: $dark01;
            margin-top: 75px;
        }

        p {
            font-size: 20px;
            margin-top: 10px;
            color: $black;
        }
    }

    .right {
        height: 100%;
        width: 70%;

        // border: 1px solid black;
        p {
            margin: 10px 0 20px 5px;
            font-size: 16px;
        }

        .rightUp {
            width: 100%;
            color: $black1;
        }

        .rightDown {
            width: 100%;
            display: flex;

            // border: 1px solid black;
            .rightDownLeft {
                height: 100%;
                width: 65%;

                // border: 1px solid black;
                .target_temp {
                    width: 234px;
                    height: 92px;
                    border-radius: 15px;
                    background-color: $dark01;
                    display: flex;
                    justify-content: space-evenly;
                    position: relative;

                    span {
                        position: absolute;
                        color: $black1;
                    }

                    i {
                        font-size: 25px;
                        color: $dark03;
                        cursor: pointer;
                    }

                    p {
                        margin: 0;
                        color: $dark03;
                        cursor: pointer;
                    }

                    div {
                        width: 33px;
                        margin-top: 35px;
                        text-align: center;
                    }

                    .time {
                        display: flex;
                        height: 30px;
                        width: 100%;
                        margin-left: 65px;

                        p {
                            line-height: 30px;
                            margin-left: 10px;
                            font-size: 27px;
                            color: $black1;
                            cursor: default;
                        }

                        i {
                            font-size: 25px;
                            line-height: 34px;
                            color: $black1;
                            margin-right: 10px;
                            cursor: default;
                        }
                    }
                }

                .selected {
                    i {
                        color: $black1;
                    }

                    p {
                        color: $black1;
                    }
                }

                .fan_speed {
                    margin-top: 10px;
                }
            }

            .rightDownRight {
                width: 110px;
                height: 194px;
                border-radius: 15px;
                background-color: $dark01;
                text-align: center;
                position: relative;

                span {
                    position: absolute;
                    color: $black1;
                    left: 21px;
                    top: 10px;
                }

                .mode {
                    padding-top: 55px;
                    color: $black1;

                    i {
                        font-size: 25px;
                        cursor: pointer;
                    }

                    p {
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