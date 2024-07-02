<script>
import BookMark from '@/components/前台元件2/BookMark.vue';
export default {
    data() {
        return {
            //這個頁面vue想要幾個內頁
            tabsArray: {
                buttonName: ["首頁", "設備列表", "故障紀錄", "通知訊息", "新增設備"],
                //tab1、2、3是為了標記插槽名稱
                tabsNumber: ['tab1', 'tab2', 'tab3', 'tab4', 'tab5']
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
        BookMark
    },

    methods: {


    }
};
</script>

<template>
    <!-- this.tabsArray.buttomName是頁籤的名字陣列 可以往上拉到data看詳細內容 -->
    <!-- 這邊透過父傳子 父是這個vue傳想要幾個內頁給BookMark BookMark會v-for傳過去的這個陣列並生成插槽 -->
    <BookMark :tabsPresent="this.tabsArray.buttonName" :tabsName="this.tabsArray.tabsNumber">
        <!-- 子BookMark會v-for我們所需要的插槽數量出來 -->
        <!-- 下面template接收插槽並放入你所想要顯示的內頁資料 -->
        <template v-slot:tab1>
            
        </template>
        <template v-slot:tab2>

        </template>
        <template v-slot:tab3>

        </template>
        <template v-slot:tab4>

        </template>
        <template v-slot:tab5>

        </template>

    </BookMark>


</template>

<style scoped lang="scss"></style>