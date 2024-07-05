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
        // createRoom() {
        //     fetch("http://localhost:8080/rooms", {
        //         method: "post",
        //         headers: {
        //             "Content-Type": "application/json"
        //         },
        //         body: JSON.stringify(this.createObj)
        //     })
        //         .then(res => res.json())
        //         .then(data => {
        //             console.log(data)
        //         })
        // },
    }
};
</script>

<template>
    <div class="createRoom">
        <label for=""><input type="text" v-model="this.createObj.area" placeholder="空間名稱"></label>
        <select name="" id="" v-model="this.createObj.type" >
            <option value="">空間使用狀態</option>
            <option value="使用中">使用中</option>
            <option value="閒置中">閒置中</option>
        </select>
        <!-- <label for=""><input type="text" v-model="this.createObj.name" placeholder="空間名稱"></label> -->
        <button @click="this.createRoom()">搜尋</button>
    </div>
</template>

<style scoped lang="scss">
@import '@/assets/main.scss';

.createRoom {
    width: 100%;
    height: 100px;
    background: $dark03;
    border-radius: 25px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 23px;
    
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