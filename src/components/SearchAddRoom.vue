<script>
//sweetalert2提示窗套件
import Swal from 'sweetalert2'
import location from '@/stores/location';
import { mapState, mapActions } from 'pinia';
export default {
    data() {
        return {
            name: "",
            type: "",
            area: "",
            status: null
        };
    },
    created() {
        this.searchAllRoom();
    },
    mounted() {

    },
    computed: {
        ...mapState(location, ['allArea', 'annRoom']),
    },
    components: {

    },

    methods: {
        ...mapActions(location, ['searchAllRoom', 'searchAnnRoom','addAllroom']),
        
    }
};
</script>

<template>
    <div class="createRoom">
        <label for=""><input type="text" placeholder="空間名稱" v-model="this.name"></label>
        <select name="" id="" v-model="this.type">
            <option value="">空間類型</option>
            <option value="公司">公司</option>
            <option value="會議室">會議室</option>
            <option value="公共區域">公共區域</option>
            <option value="機房">機房</option>
            <option value="廁所">廁所</option>
            <option value="教室">教室</option>
            <option value="其他">其他</option>
        </select>
        <button @click="searchAnnRoom(this.name, this.type, this.area, this.status)">搜尋寄送對象</button>
        <button @click="addAllroom">添加所有空間</button>
    </div>
</template>

<style scoped lang="scss">
@import '@/assets/main.scss';

.createRoom {
    width: 800px;
    display: flex;
    align-items: center;
    padding-bottom: 15px;

    select {
        width: 100px;
        height: 40px;
        font-size: 16px;
        border: none;
        border-radius: 35px;
        background: $white;
        outline: none;
        padding-left: 13px;
        margin-left: 20px;
        color: $black1;
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
    }

    input {
        width: 180px;
        height: 40px;
        border-radius: 35px;
        border: none;
        outline: none;
        background: $white;
        font-size: 16px;
        padding-left: 13px;
        color: $black1;
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
    }

    ::placeholder {
        color: $black1;
    }

    button {
        width: 130px;
        height: 40px;
        border-radius: 35px;
        border: none;
        cursor: pointer;
        background: $white;
        color: $black1;
        font-size: 16px;
        margin-left: 20px;
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
    }
}
</style>