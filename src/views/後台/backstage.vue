<script>
import BackBookMark from '@/components/BackBookMark.vue';
import BackSpaceManagement from '@/components/後台內頁/BackSpaceManagement.vue';
import DeviceManagement from '@/components/後台內頁/DeviceManagement.vue';
import HistoricalRecord from '@/components/後台內頁/HistoricalRecord.vue';
import ErrorLog from '@/components/後台內頁/ErrorLog.vue';
export default {
    data() {
        return {
            //這個頁面vue想要幾個內頁
            tabsArray: {
                buttonName: ["空間管理", "設備管理", "歷史記錄", "錯誤紀錄"],
                //tab1、2、3是為了標記插槽名稱
                tabsNumber: ['tab1', 'tab2', 'tab3', 'tab4']
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
        BackBookMark,
        BackSpaceManagement,
        DeviceManagement,
        HistoricalRecord,
        ErrorLog
    },

    methods: {


    }
};
</script>

<template>

    <!-- this.tabsArray.buttomName是頁籤的名字陣列 可以往上拉到data看詳細內容 -->
    <!-- 這邊透過父傳子 父是這個vue傳想要幾個內頁給BookMark BookMark會v-for傳過去的這個陣列並生成插槽 -->
    <BackBookMark :tabsPresent="this.tabsArray.buttonName" :tabsName="this.tabsArray.tabsNumber">
        <!-- 子BookMark會v-for我們所需要的插槽數量出來 -->
        <!-- 下面template接收插槽並放入你所想要顯示的內頁資料 -->
        <template class="tab" v-slot:tab1>
            <BackSpaceManagement />
        </template>
        <template class="tab" v-slot:tab2>
            <DeviceManagement />
        </template>
        <template class="tab" v-slot:tab3>
            <HistoricalRecord />
        </template>
        <template class="tab" v-slot:tab4>
            <ErrorLog/>
        </template>

    </BackBookMark>


</template>

<style scoped lang="scss">
// .tab{
//     padding: 112px 220px 0 220px;
// }
</style>