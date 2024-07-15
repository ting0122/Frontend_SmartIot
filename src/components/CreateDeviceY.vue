<script>
import location from '@/stores/location';
import { mapState, mapActions } from 'pinia';
export default {
    data() {
        return {
            name: "",
            type: "",
            area: "",
            

        };
    },
    created() {
        
    },
    mounted() {

    },
    computed: {
        ...mapState(location, ['localRoomId', 'createRoomDevice','allArea']),
    },
    components: {

    },

    methods: {
        ...mapActions(location, ['deviceStatus', 'createRoomDeviceSearch']),
    },
    props: {
        createRoomDeviceControl: {
            type: Boolean,
            required: true
        }
    }
};
</script>

<template>
    <div class="createRoom">
        <label for=""><input type="text" v-model="this.name" placeholder="設備名稱"></label>
        <select name="" id="" v-model="this.type">
            <option value="">設備類型</option>
            <option value="冷氣機">冷氣</option>
            <option value="燈">電燈</option>
            <option value="空氣清淨機">空氣清淨機</option>
            <option value="除濕機">除濕機</option>
        </select>
        <slot name="roomid">
            <select name="" id="" v-model="this.area" @change="createRoomDeviceSearch(null, null, this.area, null)">
                <option value="">空間編號</option>
                <option v-for="(item,index) in allArea" :value=item.area>{{ item.area }}</option>
                
            </select>
        </slot>
        <button v-if="this.createRoomDeviceControl"
            @click="this.deviceStatus(null, this.type, this.name, 0, this.localRoomId,true)">新增</button>
        <button v-else
            @click="this.deviceStatus(null, this.type, this.name, 0, this.createRoomDevice[0].id,false)">新增</button>
    </div>
</template>

<style scoped lang="scss">
@import '@/assets/main.scss';

.createRoom {
    width: 100%;
    height: 123px;
    background: $dark03;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-radius: 25px 25px 0 0;

    // border: 1px solid black;
    select {
        width: 126px;
        height: 40px;
        font-size: 16px;
        border: none;
        border-radius: 35px;
        background: $dark02;
        outline: none;
        padding-left: 13px;
        margin-left: 30px;
        color: $white;
    }

    input {
        width: 180px;
        height: 40px;
        border-radius: 35px;
        border: none;
        outline: none;
        background: $dark02;
        font-size: 16px;
        padding-left: 13px;
        color: $white;
        margin-left: 30px;
    }

    ::placeholder {
        color: $white;
    }

    button {
        width: 88px;
        height: 40px;
        border-radius: 35px;
        border: none;
        cursor: pointer;
        background: $dark02;
        color: $white;
        font-size: 16px;
        margin-left: 30px;
    }
}
</style>