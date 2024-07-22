<script>
//sweetalert2提示窗套件
import Swal from 'sweetalert2'
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
        ...mapState(location, ['allArea','roomArr']),
    },
    components: {

    },

    methods: {
        ...mapActions(location, ['searchAllRoom','searchOnlyRoom']),
        async searchAndShowResults(name, type, area, status) {
            console.log('搜索方法被调用');  // 调试信息，确保方法被调用
            console.log('搜索参数:', name, type, area, status);  // 调试信息，打印搜索参数
            this.searchOnlyRoom(this.name, this.type, this.area, this.status)
            try {
                const results = this.roomArr;
                console.log('搜索结果:', results);

                // 处理搜索结果
                if (results && results.length > 0) {
                    const resultHtml = results.map(item => 
                        `<div>
                            <input type="checkbox" id="room-${item.id}" value="${item.id}">
                            <label class="large-text" for="room-${item.id}" >${item.area || '未提供'} - ${item.name || '未提供'}</label>
                        </div>`
                    ).join('');

                    Swal.fire({
                        title: '搜尋結果',
                        html: resultHtml,
                        icon: 'info',
                        confirmButtonText: '確認',
                        customClass: {
                            popup: 'swal2-custom-popup DeviceManagement-custom-popup', // 自定義樣式
                        },
                        preConfirm: () => {
                            const selectedIds = [];
                            results.forEach(item => {
                                const checkbox = Swal.getPopup().querySelector(`#room-${item.id}`);
                                if (checkbox.checked) {
                                    selectedIds.push(item.id);
                                }
                            });
                            return selectedIds;
                        }
                        }).then((result) => {
                            if (result.isConfirmed) {
                                console.log('選中的房间ID:', result.value);
                                // 選中房間的ID
                            }
                    });
                } else {
                    Swal.fire({
                        title: '無結果',
                        text: '未找到符合條件的空間',
                        icon: 'warning',
                        confirmButtonText: '確認',
                        customClass: {
                            popup: 'swal2-custom-popup DeviceManagement-custom-popup', // 自定義樣式
                        },
                    });
                }
            } catch (error) {
                console.error(error);
                Swal.fire({
                    title: '錯誤',
                    text: '搜尋過程中發生錯誤',
                    icon: 'error',
                    confirmButtonText: '確認',
                    customClass: {
                        popup: 'swal2-custom-popup DeviceManagement-custom-popup', // 自定義樣式
                    },
                });
            }
        }
        
    }
};
</script>

<template>
    <div class="createRoom">
            <label for=""><input type="text"  placeholder="空間名稱" v-model="this.name"></label>
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
            <button  @click="searchAndShowResults(this.name,this.type,this.area,this.status)">搜尋寄送對象</button>      
            <button>添加所有空間</button>
    </div>
</template>

<style scoped lang="scss">
@import '@/assets/main.scss';

.createRoom {
    width: 800px;
    display: flex;
    align-items: center;
    padding-bottom: 15px;
    
    select{
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
    }
    input{
        width: 180px;
        height: 40px;
        border-radius: 35px;
        border: none;
        outline: none;
        background: $white;
        font-size: 16px;
        padding-left: 13px;
        color: $black1;
    }
    ::placeholder {
        color: $black1;
    }
    button{
        width: 130px;
        height: 40px;
        border-radius: 35px;
        border: none;
        cursor: pointer;
        background: $white;
        color: $black1;
        font-size: 16px;
        margin-left: 20px;
    }
}
</style>