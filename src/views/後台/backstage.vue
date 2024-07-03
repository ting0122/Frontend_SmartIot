<script>
import BackBookMark from '@/components/BackBookMark.vue';
import BackSpaceManagement from '@/components/後台內頁/BackSpaceManagement.vue';
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
        console.log("123")
    },
    mounted() {

    },
    computed: {

    },
    components: {
        BackBookMark,
        BackSpaceManagement
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
            <template v-slot:tab1>
            <BackSpaceManagement />
            </template>
            <template v-slot:tab2>

            </template>
            <template v-slot:tab3>

            </template>
            <template v-slot:tab4>

            </template>
            <template v-slot:tab5>

            </template>

        </BackBookMark>


</template>

<style scoped lang="scss">


</style>