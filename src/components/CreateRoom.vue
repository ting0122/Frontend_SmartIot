<script>

export default {
    data() {
        return {
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
        createRoom() {
            fetch("http://localhost:8080/rooms", {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(this.createObj)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })
        },
    }
};
</script>

<template>
    <div class="createRoom">
        <label for=""><input type="text" v-model="this.createObj.area" placeholder="空間編號"></label>
        <select name="" id="" v-model="this.createObj.type" >
            <option value="">設備類型</option>
            <option value="會議室">會議室</option>
            <option value="公共空間">公共空間</option>
        </select>
        <label for=""><input type="text" v-model="this.createObj.name" placeholder="空間名稱"></label>
        <button @click="this.createRoom()">新增</button>
    </div>
</template>

<style scoped lang="scss">
@import '@/assets/main.scss';

.createRoom {
    width: 1189px;
    height: 87px;
    background: $dark02;
    border-radius: 35px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 20px;
    
    select{
        width: 126px;
        height: 40px;
        font-size: 16px;
        font-weight: 500;
        border: none;
        border-radius: 35px;
        background: $dark03;
        outline: none;
        margin: 0 20px;
        color: $white;
    }
    input{
        width: 180px;
        height: 40px;
        border-radius: 35px;
        border: none;
        outline: none;
        background: $dark03;
        font-size: 16px;
        font-weight: 500;
        color: $white;
        
    }
    button{
        width: 88px;
        height: 40px;
        border-radius: 35px;
        border: none;
        background: $dark03;
        color: $white;
        font-size: 16px;
        font-weight: 500;
    }
}
</style>