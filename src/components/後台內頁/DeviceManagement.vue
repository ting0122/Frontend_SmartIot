<script>
import location from '@/stores/location';
import { mapState, mapActions } from 'pinia';
import CreateAndDeleteButton from '@/components/CreateAndDeleteButton.vue';
import Idle from '@/components/XIdle.vue';
import SearchDevice from '@/components/SearchDevice.vue';
import CreateDeviceY from '@/components/CreateDeviceY.vue';
import Switch from '@/components/Switch.vue';
export default {
    data() {
        return {
            dataArr: [{ id: 203154, type: "冷氣", mane: "前方的冷氣", area: 602, roommane: "會議室" }, { id: 203157, type: "冷氣", mane: "後方的冷氣", area: 602, roommane: "會議室" }, { id: 203151, type: "電燈", mane: "右側電燈", area: 602, roommane: "南方麒麟股份有限公司嘶嘶嘶嘶" }, { id: 203157, type: "冷氣", mane: "後方的冷氣", area: 602, roommane: "會議室" }, { id: 203157, type: "冷氣", mane: "後方的冷氣", area: 602, roommane: "會議室" }, { id: 203157, type: "冷氣", mane: "後方的冷氣", area: 602, roommane: "會議室" }, { id: 203157, type: "冷氣", mane: "後方的冷氣", area: 602, roommane: "會議室" }, { id: 203157, type: "冷氣", mane: "後方的冷氣", area: 602, roommane: "會議室" }, { id: 203157, type: "冷氣", mane: "後方的冷氣", area: 602, roommane: "會議室" }, { id: 203157, type: "冷氣", mane: "後方的冷氣", area: 602, roommane: "會議室" }, { id: 203157, type: "冷氣", mane: "後方的冷氣", area: 602, roommane: "會議室" }, { id: 203157, type: "冷氣", mane: "後方的冷氣", area: 602, roommane: "會議室" }, { id: 203157, type: "冷氣", mane: "後方的冷氣", area: 602, roommane: "會議室" }, { id: 203157, type: "冷氣", mane: "後方的冷氣", area: 602, roommane: "會議室" }, { id: 203157, type: "冷氣", mane: "後方的冷氣", area: 602, roommane: "會議室" }, { id: 203157, type: "冷氣", mane: "後方的冷氣", area: 602, roommane: "會議室" }, { id: 203157, type: "冷氣", mane: "後方的冷氣", area: 602, roommane: "會議室" }, { id: 203157, type: "冷氣", mane: "後方的冷氣", area: 602, roommane: "會議室" }, { id: 203157, type: "冷氣", mane: "後方的冷氣", area: 602, roommane: "會議室" }, { id: 203157, type: "冷氣", mane: "後方的冷氣", area: 602, roommane: "會議室" }, { id: 203157, type: "冷氣", mane: "後方的冷氣", area: 602, roommane: "會議室" }],
            showCreateRoom: false, // 用於控制顯示 CreateRoom 或 SearchRoom 组件
            isChecked: false,  //處理switch子元件值得同步
            showCheckbox:false, // 控制顯示 checkbox 的狀態
            
        };
    },
    created() {
        this.searchDevice(null, null, null, null)
    },
    mounted() {

    },
    computed: {
        ...mapState(location, ['deviceArr']),
        //用來隱藏超出指定長度的空間名稱內容
        truncatedContent() {
            return this.deviceArr.map(data => {
                return {
                    ...data,
                    truncatedContent: data.name.length > 9 ? data.name.slice(0, 9) + '...' : data.name
                };
            });
        }
    },

    components: {
        CreateAndDeleteButton,
        Idle,
        SearchDevice,
        CreateDeviceY,
        Switch
    },

    methods: {
        ...mapActions(location, ['searchDevice', 'deviceStatus']),
        //以下兩個用於切換新增房間及搜尋房間2個元件的顯示
        toggleCreateRoom() {
            this.showCreateRoom = true;
        },
        toggleSearchRoom() {
            this.showCreateRoom = false;
        },

        updateDeviceStatus(index, status) {
            this.deviceArr[index].status = status;
            this.deviceStatus(this.deviceArr[index].id,this.deviceArr[index].type,this.deviceArr[index].name,this.deviceArr[index].status,this.deviceArr[index].roomId,false)
            console.log('設備開關狀態',this.deviceArr[index].status,index)
        },
        // 控制顯示刪除 checkbox 的狀態
        toggleCheckbox() {
            this.showCheckbox = !this.showCheckbox;
        }
    },
};
</script>

<template>
    <div class="outarr">
        <!-- 根據 showCreateRoom 的值決定顯示 CreateRoom 或 SearchRoom 组件 -->
        <CreateDeviceY  v-if="showCreateRoom">
            
        </CreateDeviceY>
        <SearchDevice v-else />
        <!-- 監聽 CreateAndDeleteButton 组件的 add-click 事件 -->
        <CreateAndDeleteButton @add-click="toggleCreateRoom" @search-click="toggleSearchRoom" @delete-click="toggleCheckbox">
            <template #text>
                <p class="text">所有設備</p>
            </template>
        </CreateAndDeleteButton>

        <div class="deviceDiv">
            <div class="room" v-for="(data, index) in truncatedContent" :key="index" >
                <div class="switch">
                    <Switch  v-model:checked="data.status"
                        @update:checked="updateDeviceStatus(index, $event)" />
                </div>
                <p class="id">{{ data.id }}</p>
                <p>{{ data.type }}</p>
                <i class="fa-regular fa-snowflake"></i>
                <div class="area">
                    <p>{{ data.area }}-{{ data.truncatedContent }}</p>
                </div>             
                <div class="checkbox-overlay" v-if="showCheckbox">
                    <input type="checkbox"  />
                </div>
            </div>
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
    align-items: end;
    border-radius: 25px;
    border: 1px solid black;
    background-color: $dark02;

    .text {
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

.deviceDiv {
    width: 100%;
    height: 713px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    overflow-y: auto;
    border: 1px solid black;
    border-radius: 0 0 25px 25px;

    &::-webkit-scrollbar {
        width: 10px;   
    }

    &::-webkit-scrollbar-button {
        background: transparent;
        height: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background: $black1;
        border-radius: 15px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
        border-radius: 15px;
    }

    .room {
        width: 282px;
        height: 150px;
        background: $dark03;
        border-radius: 25px;
        margin: 20px 0 0 0;
        position: relative;

        .switch {
            position: absolute;
            right: 18px;
            top: 15px;
        }

        i {
            font-size: 50px;
            color: $dark01;
            margin-left: 43%;
            margin-top: -40px;
        }

        .id {
            margin-top: 10px
        }

        p {
            margin: 0px 20px 0 30px;
            font-size: 16px;
        }

        .area {
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 50px;
            border-radius: 0 0 25px 25px;
            background-color: $dark01;

            p {
                margin: 0;
                font-size: 20px;
                line-height: 50px;
                display: flex;
                justify-content: center;
            }
        }
        .checkbox-overlay {
            position: absolute;
            z-index: 3;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            color: $white;
            border-radius: 25px;

            input[type='checkbox'] {
                /* 調整 checkbox 样式 */
                transform: scale(2); /* 放大 checkbox */
                color: aqua;
            }
        }
    }
}
</style>