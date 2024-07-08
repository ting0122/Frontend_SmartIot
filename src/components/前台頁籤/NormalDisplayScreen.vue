<script>
import Announcement from '@/components/Announcement.vue';
import ACcontrol from '@/components/ACcontrol.vue';
import DehumidifierControl from '@/components/DehumidifierControl.vue';
import AirPurifierControl from '@/components/AirPurifierControl.vue';
import lampControl from '@/components/lampControl.vue';
import ElectricityConsumptionData from '@/components/ElectricityConsumptionData.vue';
import EnvironmentalDataDisplay from '@/components/EnvironmentalDataDisplay.vue';
import DeviceCell from '@/components/DeviceCell.vue';

export default {
    data() {
        return {

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

};
</script>

<template>
    <div class="up">
        <!-- <Announcement /> -->
        <!-- <ACcontrol /> -->
        <!-- <AirPurifierControl/> -->
        <!-- <DehumidifierControl/> -->
        <lampControl/>
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