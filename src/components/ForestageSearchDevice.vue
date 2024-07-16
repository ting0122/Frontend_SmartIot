<script>
export default {
    data() {
        return {
            searchObj: {
                name: "",
                status: "",
                type: ""
            }
        };
    },
    watch: {
        searchObj: {
            handler() {
                this.searchDevices();
            },
            deep: true
        }
    },
    methods: {
        searchDevices() {
            fetch('https://backend-smartiot.onrender.com/rooms/1')
                .then(response => response.json())
                .then(data => {
                    let filteredDevices = data.devices.filter(device => {
                        return (this.searchObj.name === "" || device.name.includes(this.searchObj.name)) &&
                            (this.searchObj.status === "" || device.status === (this.searchObj.status === "使用中")) &&
                            (this.searchObj.type === "" || device.type === this.searchObj.type);
                    });
                    this.$emit('search-results', filteredDevices);
                })
                .catch(error => console.error('搜尋設備失敗：', error));
        }
    }
};
</script>

<template>
    <div class="createRoom">
        <input type="text" v-model="searchObj.name" placeholder="設備名稱">
        <select v-model="searchObj.status">
            <option value="">全部</option>
            <option value="使用中">使用中</option>
            <option value="閒置中">閒置中</option>
        </select>

        <slot name="roomid"></slot>

        <select v-model="searchObj.type">
            <option value="">設備類型</option>
            <option value="冷氣機">冷氣</option>
            <option value="燈">電燈</option>
            <option value="空氣清淨機">空氣清淨機</option>
            <option value="除濕機">除濕機</option>
        </select>
        <button @click="searchDevices">搜尋</button>
        <div class="createAndDeleteButton">
            <button><i class="fa-solid fa-magnifying-glass"></i></button>
            <button><i class="fa-solid fa-trash-can"></i></button>
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

    select {
        width: 125px;
        height: 40px;
        font-size: 16px;
        border: none;
        border-radius: 35px;
        background: $dark02;
        outline: none;
        padding-left: 20px;
        margin-left: 20px;
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
        padding: 0;
        padding-left: 20px;
        color: $white;
        margin-left: 83px;
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
            background: $dark02;
            border-radius: 50%;
            border: none;
            outline: none;
            color: $white;
            font-size: 20px;
            line-height: 40px;
        }
    }
}
</style>