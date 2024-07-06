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
        <label for=""><input type="text" v-model="this.createObj.area" placeholder="設備名稱"></label>
        <select name="" id="" v-model="this.createObj.type" >
            <option value="">設備類型</option>
            <option value="冷氣">冷氣</option>
            <option value="電燈">電燈</option>
            <option value="空氣清淨機">空氣清淨機</option>
            <option value="除濕機">除濕機</option>
        </select>
        <slot name="roomid">
            <select name="" id="" v-model="this.createObj.type" >
                <option value="">所屬空間</option>
                <option value="601">601</option>
                <option value="602">602</option>
                <option value="603">603</option>
            </select>
        </slot>
        <button @click="this.createRoom()">新增</button>
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
    // border: 1px solid black;
    select{
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