<script>
//sweetalert2提示窗套件
import Swal from 'sweetalert2'
export default {
    data() {
        return {
            isActive: "",
            deviceTypes: ['冷氣', '電燈', '空氣清淨機','除濕機'] // 模擬設備類型
        };
    },
    created() {

    },
    mounted() {
        //進入頁面時會直接顯示第一個內頁，也就算是主頁
        this.openTab(this.tabsName[0]);

    },
    computed: {

    },
    components: {

    },
    props: [
        //這邊接收父也就是vue頁面傳來想生成的陣列
        "tabsPresent",
        "tabsName"
    ],

    methods: {
        //哪個內頁被點擊時執行方法 isActive紀錄哪個內頁被點擊會變不同顏色
        openTab(tabName) {
            console.log(tabName)
            var i, tabcontent;
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }

            console.log(document.getElementById(tabName))
            document.getElementById(tabName).style.display = "block";
            this.isActive = tabName;
        },
        // 顯示新增設備的彈窗
        showAddDeviceModal() {
            this.openTab('tab2');  // 切換到設備列表頁籤
            Swal.fire({
                title: '新增設備',
                html: `
                    <div class="arr">
                    <select id="deviceType" class="swal2-input-select">
                        ${this.deviceTypes.map(type => `<option value="${type}">${type}</option>`).join('')}
                    </select>
                    <input type="text" id="deviceName" class="swal2-input" placeholder="設備名稱">
                    </div>
                `,
                showCloseButton: true, //右上叉叉按鈕
                confirmButtonText: '新增',
                customClass: {
                    popup: 'swal2-custom-popup' // 自定義樣式
                },
                preConfirm: () => {
                    const deviceId = Swal.getPopup().querySelector('#deviceId').value;
                    const deviceType = Swal.getPopup().querySelector('#deviceType').value;
                    const deviceName = Swal.getPopup().querySelector('#deviceName').value;
                    if (!deviceId || !deviceType || !deviceName) {
                        Swal.showValidationMessage(`請輸入完整的設備資訊`);
                    }
                    return { deviceId, deviceType, deviceName };
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    this.addDevice(result.value);
                }
            });
        },
        // 新增設備的方法，這裡可以加入邏輯來處理設備新增
        addDevice(device) {
            console.log('新增的設備資訊：', device);
            // 這裡可以加入新增設備的邏輯，例如將設備資訊發送到伺服器或更新本地狀態
        }
    }
};
</script>

<template>
    <div class="tabArea">
        <!-- 同樣父vue頁面傳來需要幾個內頁 v-for插槽出來-->
        <div v-for="(item, index) in this.tabsName" :id="item" class="tabcontent">
            <slot :name="item"></slot>
        </div>
        <!-- 父vue頁面傳來需要幾個內頁，v-for的是頁籤名稱 -->
        <div class="tabs">
            <button v-for="(item, index) in this.tabsPresent" class="tablink"
                :class="{ 'active': isActive === tabsName[index] }" @click="openTab(this.tabsName[index])">{{ item
                }}</button>
            <button class="addnew" @click="showAddDeviceModal">
                新增設備
                <i class="fa-solid fa-circle-plus"></i>
            </button>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import '@/assets/main.scss';

.tabArea {

    .tabs {
        display: flex;
        align-items: center;
        width: 700px;
        height: 65px;
        border-radius: 30px;
        margin: auto;
        background-color: $dark03;
        padding-left: 14px;

        .tablink {
            width: 120px;
            height: 45px;
            margin-right: 2px;
            background-color: transparent;
            border: none;
            cursor: pointer;
            padding: 0 20px;
            font-size: 18px;
            line-height: 38px;
            color: $black1;

            &.active {
                background-color: $dark01;
                width: 120px;
                height: 45px;
                border-radius: 50px;
            }
        }

        .addnew {
            display: flex;
            align-items: center;
            width: 200px;
            height: 28px;
            margin-left: 15px;
            background-color: transparent;
            border: none;
            cursor: pointer;
            padding-left: 35px;
            font-size: 18px;
            line-height: 28px;
            color: $black1;
            border-left: 1px solid $black1;

            i {
                font-size: 42px;
                margin-left: 27px;
                color: $dark01;
            }
        }
    }

    /* 頁籤內容 */
    .tabcontent {
        width: 1060px;
        height: 695px;
        display: none;
        margin-bottom: 20px;
        // background-color: $dark02;
    }


}
</style>