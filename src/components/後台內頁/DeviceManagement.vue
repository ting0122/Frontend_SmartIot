<script>
import CreateAndDeleteButton from '@/components/CreateAndDeleteButton.vue';
import Idle from '@/components/Idle.vue';
import DeviceOrRoomDiv from '@/components/DeviceOrRoomDiv.vue';
import SearchDevice from '@/components/SearchDevice.vue';
import CreateDeviceY from '@/components/CreateDeviceY.vue';
export default {
    data() {
        return {
            divArr: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            showCreateRoom: false, // 用於控制顯示 CreateRoom 或 SearchRoom 组件
        };
    },
    created() {

    },
    mounted() {

    },
    computed: {

    },
    components: {
        CreateAndDeleteButton,
        Idle,
        DeviceOrRoomDiv,
        SearchDevice,
        CreateDeviceY
    },

    methods: {
        //以下兩個用於切換新增房間及搜尋房間2個元件的顯示
        toggleCreateRoom() {
            this.showCreateRoom = true;
        },
        toggleSearchRoom() {
            this.showCreateRoom = false;
        }
    }
};
</script>

<template>
    <div class="outarr">
        <!-- 根據 showCreateRoom 的值決定顯示 CreateRoom 或 SearchRoom 组件 -->
        <CreateDeviceY v-if="showCreateRoom"/>
        <SearchDevice v-else/>
        <!-- 監聽 CreateAndDeleteButton 组件的 add-click 事件 -->
        <CreateAndDeleteButton @add-click="toggleCreateRoom" @search-click="toggleSearchRoom">
            <template #text >
                <p class="text">所有設備</p>
            </template>
        </CreateAndDeleteButton>
        <div class="deviceDiv">
            <DeviceOrRoomDiv :name="'閒置中'"/>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import '@/assets/main.scss';

.outarr {
    width: 1238px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items:end;
    border-radius: 25px;
    border: 1px solid black;
    background-color: $dark02;

    
    .text{
        font-size: 20px;
        color: $white;
        padding-left: 10px;
        padding-bottom: 6px
    }
}

.device {
    width: 250px;
    height: 150px;
    background: $dark03;
    border-radius: 35px;
    margin: 10px 0;
    position: relative;

    .switch {
        position: absolute;
        right: 10px;
        top: 10px;
    }
}
</style>