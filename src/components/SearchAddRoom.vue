<script>
import location from '@/stores/location';
import { mapState, mapActions } from 'pinia';
export default {
    data() {
        return {
            name:"",
            type:"",
            area:"",
            status:null
        };
    },
    created() {
        this.searchAllRoom();
    },
    mounted() {

    },
    computed: {

    },
    components: {

    },

    methods: {
        ...mapActions(location, ['searchAllRoom','searchOnlyRoom']),
    }
};
</script>

<template>
    <div class="createRoom">
        <div class="left">
            <label for=""><input type="text"  placeholder="空間名稱" v-model="this.name"></label>
            <select name="" id="" v-model="this.area" >
                <option value="">房間編號</option>
                <option value="601">601</option>
                <option value="602">602</option>
            </select>
            <select name="" id="" v-model="this.type" >
                <option value="">空間類型</option>
                <option value="公司">公司</option>
                <option value="會議室">會議室</option>
                <option value="公共區域">公共區域</option>
                <option value="機房">機房</option>
                <option value="廁所">廁所</option>
                <option value="教室">教室</option>
                <option value="其他">其他</option>
            </select>
            <button @click="this.searchOnlyRoom(this.name,this.type,this.area,this.status)">添加接收對象</button>
        </div>
        <div class="right">
            <button @click="this.searchOnlyRoom(this.name,this.type,this.area,this.status)">添加所有空間</button>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import '@/assets/main.scss';

.createRoom {
    width: 100%;
    height: 113px;
    background: $dark03;
    display: flex;
    justify-content:space-between;
    align-items: center;
    border-radius: 25px 25px 0 0;
    
    select{
        width: 155px;
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
    input{
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
    button{
        width: 130px;
        height: 40px;
        border-radius: 35px;
        border: none;
        cursor: pointer;
        background: $dark02;
        color: $white;
        font-size: 16px;
        margin-left: 30px;
        margin-right: 30px;
    }
}
</style>