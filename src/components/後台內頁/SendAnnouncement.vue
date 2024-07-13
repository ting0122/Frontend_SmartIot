<script>
//以下為PINIA
import location from '@/stores/location';
import { mapState, mapActions } from 'pinia';
//sweetalert2提示窗套件
import Swal from 'sweetalert2'
//以下為元件
import CreateAndDeleteButton from '@/components/CreateAndDeleteButton.vue';
import SearchAddRoom from '@/components/SearchAddRoom.vue';
import AnnouncementSearch from '@/components/AnnouncementSearch.vue';


export default {
    data() {
        return {
            annArr:[{id:1,title:"除果蠅公告",content:"因近期果蠅眾多，營運團隊將進行場域除蟲消毒，以下是相關安排和注意事項，請大家務必配合因近期果蠅眾多，營運團隊將進行場毒，以下是相關安排和注意事項，請大家務必配合因近期果蠅眾多，營運團隊將進行場毒，以下是相關安排和注意事項，請大家務必配合因近期果蠅眾多，營運團隊將進行場毒，以下是相關安排和注意事項，請大家務必配合因近期果蠅眾多，營運團隊將進行場毒，以下是相關安排和注意事項，請大家務必配合因近期果蠅眾多，營運團隊將進行場毒，以下是相關安排和注意事項，請大家務必配合因近期果蠅眾多，營運團隊將進行場",time:"2024-06-03",expanded: false},{id:2,title:"除果蠅公告",content:"因近期果蠅眾多，營運團隊將進行場域除蟲消毒，以下是相關安排和注意事項，請大家務必配合",time:"2024-06-03",expanded: false},{id:3,title:"除果蠅公告",content:"因近期果蠅眾多，營運團隊將進行場域除蟲消毒，以下是相關安排和注意事項，請大家務必配合",time:"2024-06-03",expanded: false},{id:4,title:"除果蠅公告",content:"因近期果蠅眾多，營運團隊將進行場域除蟲消毒，以下是相關安排和注意事項，請大家務必配合",time:"2024-06-03",expanded: false},{id:5,title:"除果蠅公告",content:"因近期果蠅眾多，營運團隊將進行場域除蟲消毒，以下是相關安排和注意事項，請大家務必配合",time:"2024-06-03",expanded: false},{id:6,title:"除果蠅公告",content:"因近期果蠅眾多，營運團隊將進行場域除蟲消毒，以下是相關安排和注意事項，請大家務必配合",time:"2024-06-03",expanded: false},{id:7,title:"除果蠅公告",content:"因近期果蠅眾多，營運團隊將進行場域除蟲消毒，以下是相關安排和注意事項，請大家務必配合",time:"2024-06-03",expanded: false},{id:8,title:"除果蠅公告",content:"因近期果蠅眾多，營運團隊將進行場域除蟲消毒，以下是相關安排和注意事項，請大家務必配合",time:"2024-06-03",expanded: false},{id:9,title:"除果蠅公告",content:"因近期果蠅眾多，營運團隊將進行場域除蟲消毒，以下是相關安排和注意事項，請大家務必配合",time:"2024-06-03",expanded: false},{id:10,title:"除果蠅公告",content:"因近期果蠅眾多，營運團隊將進行場域除蟲消毒，以下是相關安排和注意事項，請大家務必配合",time:"2024-06-03",expanded: false},{id:11,title:"除果蠅公告",content:"因近期果蠅眾多，營運團隊將進行場域除蟲消毒，以下是相關安排和注意事項，請大家務必配合",time:"2024-06-03",expanded: false}],
            sendroomARR:[{area:601,roomname:"南哥公司"},{area:602,roomname:"tta公司"},{area:603,roomname:"迪卡農公司"},{area:604,roomname:"愛迪達公司"},{area:605,roomname:"天方夜譚公司"},{area:606,roomname:"鵝你媽媽公司"},{area:607,roomname:"小小兵公司"}],
            showCreateRoom: false, // 用於控制顯示 CreateRoom 或 SearchRoom 组件
            showCheckbox: false, // 控制顯示 checkbox 的狀態
            select:[]  //儲存被選中的 id
        };
    },
    created() {
        
    },
    mounted() {

    },
    computed: {
        ...mapState(location, ['deviceArr']),
    },
    components: {
        CreateAndDeleteButton,
        SearchAddRoom,
        AnnouncementSearch,

    
    },

    methods: {
        //點擊切換expanded的ture/false屬性
        toggleContent(index) {
        this.annArr[index].expanded = !this.annArr[index].expanded;
        },
        // 控制顯示刪除 checkbox 的狀態
        toggleCheckbox() {
            this.annArr.forEach(ann => {
                ann.expanded = false;
            });
            this.showCheckbox = !this.showCheckbox;
            if (!this.showCheckbox) {
                this.showDeleteConfirmation();
            }
        },
        // 彈出 SweetAlert2 的刪除確認彈窗
        showDeleteConfirmation() {
            if (this.select.length === 0) {
                Swal.fire({
                    title: '無選取任何公告',
                    text: '請選擇至少一個公告進行刪除',
                    icon: 'info',
                    customClass: {
                        popup: 'swal2-custom-popup DeviceManagement-custom-popup', // 自定義樣式
                    },
                });
                return;
            }
            const selectedDevices = this.annArr.filter(ann => this.select.includes(ann.id));
            const selectedNames = selectedDevices.map(ann => `${ann.title}-${ann.time}`).join('<br>'); 
            Swal.fire({
                title: '確認刪除以下公告?',
                html:  `<p>${selectedNames}<p>`, // 使用 html 属性
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: '確認刪除',
                cancelButtonText: '取消',
                customClass: {
                    popup: 'swal2-custom-popup DeviceManagement-custom-popup', // 自定義樣式
                },
            }).then((result) => {
                if (result.isConfirmed) {
                    // 在這裡處理確認刪除的邏輯
                    this.annArr = this.annArr.filter(ann => !this.select.includes(ann.id));
                    this.select = [];
                    Swal.fire({
                        title:'已刪除',
                        text:'所選公告已被刪除',
                        icon:'success',
                        customClass: {
                            popup: 'swal2-custom-popup DeviceManagement-custom-popup', // 自定義樣式
                        },
                    });
                } else {
                    // 在這裡處理取消刪除的邏輯
                    this.select = [];
                    this.showCheckbox = false;
                }
            });
        },
        // 將被選中的設備 ID 加入或移除 select 陣列的方法(刪除設備用)
        addToSelect(id) {
            const index = this.select.indexOf(id);
            if (index === -1) {
                this.select.push(id);
            } else {
                this.select.splice(index, 1);
            }
            console.log(this.select)
        }
        
    },
  
};
</script>

<template>
    <div class="outarr">
        <div class="announcementSearch">
            <AnnouncementSearch />
            <div class="button">
                <button @click="toggleCheckbox" :class="{chick:showCheckbox}"><i class="fa-solid fa-trash-can" ></i></button>
                <button @click="handleAddClick"><i class="fa-solid fa-circle-plus" ></i></button>
            </div>
        </div>
        <div class="outArea">
            <div class="list">
                <div class="content" v-for="(data, index) in annArr" :key="index" @click="toggleContent(index)"
                :class="{ expanded: annArr[index].expanded }">
                    <div class="Modify"></div>
                    <div class="up">
                        <span>{{ data.title }}</span>
                        <p class="date">{{ data.time }}</p>
                    </div>
                    <p>{{ data.content}}</p>
                    <div class="sendrooms">
                        <p class="t">公告發送房間</p>
                        <div class="sendroom" v-for="(room, index) in sendroomARR" :key="index">
                            <p>{{ room.area }}-{{ room.roomname }}</p>
                        </div>
                    </div>
                    <div class="checkbox-overlay" v-if="showCheckbox" @click="addToSelect(data.id)">
                        <input type="checkbox" :checked="select.includes(data.id)"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import '@/assets/main.scss';

.outarr {
    width: 1238px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: end;
    border-radius: 25px;
    border: 1px solid black;
    background-color: $dark02;
    .announcementSearch{
        display: flex;
        justify-content: space-between;
        width: 1078px;
        height: 85px;
        background-color: $dark01;
        border-radius: 25px 25px 0 0;
        padding-top: 40px;
        padding-left: 80px;
        padding-right: 80px;
        button {
            height: 45px;
            width: 45px;
            background: $dark03;
            border-radius: 50%;
            border: none;
            outline: none;
            color: $white;
            font-size: 20px;
            line-height: 45px;
            margin-top: 12px;
            margin-left: 20px; 
            cursor: pointer;
        }
        .chick{
            color: $black1;
            background: salmon;
        }
    }  
    .text {
        font-size: 20px;
        color: $white;
        padding-left: 10px;
        padding-bottom: 6px
    }
    .outArea{
        border-radius: 25px;
        width: 1100px;
        height: 700px;
        border: 1px solid $dark03;
        // background-color: $dark02;
        display: flex;
        justify-content: space-between;
        padding-top: 10px;
        margin: 50px auto;
        h2{
            margin: 12px 0 0 30px;
        }
        .list{
            flex-wrap: nowrap;
            overflow-y: auto;
            overflow-x:hidden;
            &::-webkit-scrollbar {
                width: 12px;
            }
    
            &::-webkit-scrollbar-button {
                background: transparent;
            }
    
            &::-webkit-scrollbar-thumb {
                background: $black1;
                border-radius: 15px;
    
            }
    
            &::-webkit-scrollbar-track {
                background: transparent;
                border-radius: 15px;
                width: 957px;
            }
    
            .content{
                position: relative;
                width: 1000px;
                border-radius: 20px;
                padding: 10px;
                padding-top: 30px;
                overflow-y: hidden;
                background-color: $dark01;
                margin: 10px 20px;
                flex: 0 0 auto; /* 确保每个项目不会缩小并且保持其内容的宽度 */
                margin-top: 10px; /* 可选的间距 */
                //以下為點擊個別公告會展開的參數
                cursor: pointer;
                transition: max-height 1s ease;
                overflow: hidden;
                max-height: 75px; /* 初始高度，取决于你希望显示的截断内容的高度 */
                .Modify{
                    position: absolute;
                    z-index: 3;
                    left: 0;
                    bottom: 0;
                    width: 1030px;
                    height: 25px;
                    background-color: $dark01;
                    // background-color:aqua;
                    border-radius: 0 0 25px 25px;
                }
                &.expanded {
                    max-height: 500px; /* 展开后的高度，可以根据内容长度调整 */
                }
                .date{
                    margin: 0;
                }
                .up{
                    display: flex;
                    justify-content: space-between;
                    padding-right: 42px;
                }
                span{
                    font-size: 18px;
                    font-weight: 600;
                    margin-left: 30px;
                }
                p{
                    margin-top: 5px;
                    font-size: 16px;
                    margin-left: 30px;
                    margin-right: 30px;
                }
                .sendrooms{
                    width: 950px;
                    margin: 0 auto;
                    margin-top: 30px;
                    padding-bottom: 20px;
                    padding-top: 40px;
                    border-top: 1px solid black;
                    display: flex;
                    flex-wrap: wrap;
                    position: relative;
                    .t{
                        margin: 0;
                        position: absolute;
                        left: 3px;
                        top: 13px;
                    }
                    .sendroom{
                        padding: 0 10px;
                        margin-top: 10px;
                        margin-right: 10px;
                        width: auto;
                        height: 40px;
                        border-radius: 20px;
                        background-color: $white;
                        p{
                            margin: 0;
                            line-height: 40px;
                            margin:0 10px ;
                        }
                    }
                }
                .checkbox-overlay {
                    position: absolute;
                    z-index: 3;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.5);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: $white;

                    input[type='checkbox'] {
                        /* 自定義 checkbox 样式 */
                        appearance: none;
                        width: 30px;
                        height: 30px;
                        border: 2px solid $white;
                        border-radius: 3px;
                        background-color: transparent;
                        cursor: pointer;
                        position: relative;
                        &:checked {
                            background-color:$dark02; /* 勾選後的背景色 */
                        }
                        &:checked::after {
                            content: '';
                            position: absolute;
                            top: 4px;
                            left: 9px;
                            width: 6px;
                            height: 12px;
                            border: solid $white;
                            border-width: 0 2px 2px 0;
                            transform: rotate(45deg);
                        }
                    }
                }
            }
        }
    }
}


</style>