<script>
// vue3-datepicker製作日曆用
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

export default {
    data() {
        return {
            createObj: {
                name: "",
                area: "",
                type: "",
                dateRange: null,  //儲存日期區間
            }
        };
    },
    created() {

    },
    mounted() {

    },
    computed: {

    },
    components: {
        VueDatePicker,   //日曆用
    },

    methods: {
        
    }
};
</script>

<template>
    <div class="createRoom">
        
        <div class="date">

            <VueDatePicker 
                    v-model="dateRange" 
                    range format="yyyy-MM-dd" 
                    style="width: 260px"
             />
        </div>
        <label for=""><input type="text" v-model="this.createObj.area" placeholder="設備名稱"></label>
        <select name="" id="" v-model="this.createObj.type" >
            <option value="">空間編號</option>
            <option value="使用中">601</option>
            <option value="閒置中">602</option>
        </select>
        <select name="" id="" v-model="this.createObj.type" >
            <option value="">設備類型</option>
            <option value="公司">冷氣</option>
            <option value="會議室">電燈</option>
            <option value="公共區域">空氣清淨機</option>
            <option value="機房">除濕機</option>
        </select>
        <button @click="this.createRoom()">搜尋</button>
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
    border-radius: 25px 25px 0 0 ;
    .date{
        margin-left: 30px;
        width: 262px;
        height: 40px;
        border-radius: 35px;
        background: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
    }
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