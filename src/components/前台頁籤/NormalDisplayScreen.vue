<script>
import ACcontrol from '@/components/ACcontrol.vue';
import AirPurifierControl from '@/components/AirPurifierControl.vue';
import Announcement from '@/components/Announcement.vue';
import DehumidifierControl from '@/components/DehumidifierControl.vue';
import DeviceCell from '@/components/DeviceCell.vue';
import ElectricityConsumptionData from '@/components/ElectricityConsumptionData.vue';
import EnvironmentalDataDisplay from '@/components/EnvironmentalDataDisplay.vue';
import lampControl from '@/components/lampControl.vue';

export default {
    data() {
        return {
            roomDevices: [],
            dehumidifiers: [],
            lights: [],
            airPurifiers: [],
        };
    },
    components: {
        Announcement,  //公告元件
        ElectricityConsumptionData,  //能源消耗
        EnvironmentalDataDisplay,  //即時顯示環境數據
        DeviceCell,  //啟動中設備顯示元件
        ACcontrol,   //冷氣控制元件
        AirPurifierControl,  //空氣清淨機
        DehumidifierControl,  //除濕機控制元件
        lampControl,
    },
    created() {
        this.fetchRoomDevices();
    },
    methods: {
        fetchRoomDevices() {
            fetch('http://localhost:8080/rooms/1')
                .then(response => response.json())
                .then(data => {
                    this.roomDevices = data.devices;
                    this.dehumidifiers = this.roomDevices.filter(device => device.type === '除濕機');
                    this.lights = this.roomDevices.filter(device => device.type === '燈');
                    this.airPurifiers = this.roomDevices.filter(device => device.type === '空氣清淨機');

                    this.$nextTick(() => {
                        if (this.dehumidifiers.length > 0) {
                            this.$refs.dehumidifierControl.updateCurrentHumidity(this.dehumidifiers[0].dehumidifier.current_humidity);
                        }
                        if (this.lights.length > 0) {
                            this.$refs.lampControl.updateLightStatus(this.lights[0].light);
                        }
                    });
                })
                .catch(error => console.error('獲取房間設備失敗：', error));
        },
        updateDehumidifiers(newSettings) {
            console.log('接收到的 newSettings:', newSettings, 'target_humidity type:', typeof newSettings.target_humidity);

            const payload = this.dehumidifiers.map(dehumidifier => ({
                id: dehumidifier.id,
                status: newSettings.status,
                target_humidity: parseFloat(newSettings.target_humidity.toFixed(1)),
                fan_speed: newSettings.fan_speed
            }));

            console.log('準備發送的 payload:', payload);

            const requestBody = JSON.stringify(payload);
            console.log('最終的 API 請求體字符串:', requestBody);

            fetch('http://localhost:8080/dehumidifiers/batch', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: requestBody,
            })
                .then(response => {
                    if (!response.ok) {
                        return response.text().then(text => {
                            throw new Error(`HTTP error! status: ${response.status}, message: ${text}`);
                        });
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('除濕機設置已更新', data);
                    this.fetchRoomDevices();
                })
                .catch(error => {
                    console.error('更新除濕機設置失敗：', error);
                    alert('更新除濕機設置失敗，請稍後再試。');
                });
        },
        updateLights(newSettings) {
            const payload = this.lights.map(light => ({
                id: light.id,
                status: newSettings.status ? 1 : 0,
                brightness: newSettings.brightness,
                color_temp: newSettings.color_temp
            }));

            console.log('準備發送的 payload:', payload);

            const requestBody = JSON.stringify(payload);
            console.log('最終的 API 請求體字符串:', requestBody);

            fetch('http://localhost:8080/lights/batch', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: requestBody,
            })
                .then(response => {
                    if (!response.ok) {
                        return response.text().then(text => {
                            throw new Error(`HTTP error! status: ${response.status}, message: ${text}`);
                        });
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('燈光設置已更新', data);
                    this.fetchRoomDevices();
                })
                .catch(error => {
                    console.error('更新燈光設置失敗：', error);
                    alert('更新燈光設置失敗，請稍後再試。');
                });
        },
        updateAirPurifiers(newSettings) {
            const payload = this.airPurifiers.map(airPurifier => ({
                id: airPurifier.id,
                status: newSettings.status ? 1 : 0,
                fan_speed: newSettings.fan_speed
            }));

            console.log('準備發送的 payload:', payload);

            const requestBody = JSON.stringify(payload);
            console.log('最終的 API 請求體字符串:', requestBody);

            fetch('http://localhost:8080/air-purifiers/batch', {
                method: 'PATCH',
                headers: {
                    'accept': '*/*',
                    'Content-Type': 'application/json',
                },
                body: requestBody,
            })
                .then(response => {
                    if (!response.ok) {
                        return response.text().then(text => {
                            throw new Error(`HTTP error! status: ${response.status}, message: ${text}`);
                        });
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('空氣清淨機設置已更新', data);
                    this.fetchRoomDevices();
                })
                .catch(error => {
                    console.error('更新空氣清淨機設置失敗：', error);
                    alert(`更新空氣清淨機設置失敗：${error.message}`);
                });
        },
    },
};
</script>

<template>
    <div class="up">
        <!-- <Announcement /> -->
        <!-- <ACcontrol /> -->
        <AirPurifierControl :key="airPurifiers.length" :airPurifiers="airPurifiers"
            @update-air-purifiers="updateAirPurifiers" />
        <!-- <DehumidifierControl ref="dehumidifierControl" :id="dehumidifiers.length > 0 ? dehumidifiers[0].id : null"
            @update-dehumidifiers="updateDehumidifiers" /> -->
        <!-- <lampControl :key="lights.length" :lights="lights" @update-lights="updateLights" /> -->
        <ElectricityConsumptionData />
    </div>
    <div class="middle">
        <EnvironmentalDataDisplay />
    </div>
    <div class="down">
        <DeviceCell />
    </div>



</template>

<style scoped lang="scss">
@import '@/assets/main.scss';

.up {
    display: flex;
    justify-content: space-between;
    height: 40%;
    // border: 1px solid black;
    padding: 33px 50px 19px 50px;
}

.middle {
    display: flex;
    justify-content: space-between;
    height: 15%;
    // border: 1px solid black;
    padding: 0 50px 0 50px;
}

.down {
    width: 957px;
    height: 31%;
    // border: 1px solid black;
    padding: 19px 50px 20px 50px;
    flex-wrap: nowrap;
    overflow-x: auto;
    overflow-y: hidden;

    &::-webkit-scrollbar {
        height: 10px;

    }

    &::-webkit-scrollbar-button {
        background: transparent;
        width: 55px;
    }

    &::-webkit-scrollbar-thumb {
        background: $black1;
        border-radius: 15px;

    }

    &::-webkit-scrollbar-track {
        background: $dark01;
        border-radius: 15px;
        width: 957px;
    }
}
</style>