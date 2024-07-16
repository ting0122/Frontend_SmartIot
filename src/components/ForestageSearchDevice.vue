<script>

export default {
    data() {
        return {
            showbox: false, // 控制顯示搜尋或刪除的狀態
            createObj: {
                name: "",
                area: "",
                type: ""
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

    },

    methods: {
        showsearch(){
            this.showbox=!this.showbox;
        }
    }
};
</script>

<template>
    <div class="createRoom">
        <input type="text" v-model="this.createObj.area" placeholder="設備名稱">
        <select name="" id="" v-model="this.createObj.type" >
            <option value="">設備狀態</option>
            <option value="使用中">使用中</option>
            <option value="閒置中">閒置中</option>
        </select>

        <slot name="roomid">
            <select name="" id="" v-model="this.createObj.type" >
                <option value="">空間編號</option>
                <option value="使用中">601</option>
                <option value="閒置中">602</option>
            </select>
        </slot>

        <select name="" id="" v-model="this.createObj.type" >
            <option value="">設備類型</option>
            <option value="公司">冷氣</option>
            <option value="會議室">電燈</option>
            <option value="公共區域">空氣清淨機</option>
            <option value="機房">除濕機</option>
        </select>
        <button @click="this.createRoom()">搜尋</button>
        <div class="createAndDeleteButton">
            <button @click="showsearch" :class="{chick:!showbox}"><i class="fa-solid fa-magnifying-glass"></i></button>
            <button @click="showsearch" :class="{chick:showbox}"><i class="fa-solid fa-trash-can"></i></button>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import '@/assets/main.scss';

.createRoom {
    width: 100%;
    height: 71px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    
    select{
        width: 125px;
        height: 40px;
        font-size: 16px;
        border: none;
        border-radius: 35px;
        background: $white;
        outline: none;
        padding-left: 20px;
        margin-left: 20px;
        color: $dark03;
        
    }
    input{
        width: 180px;
        height: 40px;
        border-radius: 35px;
        border: none;
        outline: none;
        background: $white;
        font-size: 16px;
        padding: 0;
        padding-left: 20px;
        color: $white;
        line-height: 40px;
        margin-left: 83px;
    }

    ::placeholder {
        color: $dark03;
    }
    button{
        width: 88px;
        height: 40px;
        border-radius: 35px;
        border: none;
        cursor: pointer;
        background: $white;
        color: $dark03;
        font-size: 16px;
        line-height: 40px;
        margin-left: 20px;
        padding: 0;
    }
    .createAndDeleteButton {  
        position: absolute;
        right: 0;   
        height: 40px;
        display: flex;
        // margin-right: 36px;
    
        button {
            height: 40px;
            width: 40px;
            background: $white;
            border-radius: 50%;
            border: none;
            outline: none;
            color: $dark03;
            font-size: 20px;
            line-height: 40px;
        }
        .chick{
            color: $white;
            background: $black;
        }
    }
}
</style>