<script>
import BackBookMark from '@/components/BackBookMark.vue';
import RoomFront from '@/components/房間內頁/RoomFront.vue';
export default {
    data() {
        return {
            tabsArray: {
                buttonName: ["回總控表", "設備管理", "歷史記錄", "錯誤紀錄"],
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
        RoomFront
    },

    methods: {

    }
};
</script>

<template>
    <BackBookMark :tabsPresent="this.tabsArray.buttonName" :tabsName="this.tabsArray.tabsNumber">
        <template  v-slot:tab1>
            <RoomFront/>
        </template>
        <template  v-slot:tab2>
            
        </template>
        <template  v-slot:tab3>
            
        </template>
        <template  v-slot:tab4>
            
        </template>

    </BackBookMark>
</template>

<style scoped lang="scss">

</style>