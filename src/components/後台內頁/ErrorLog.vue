<script>
import CategoryButton from '@/components/CategoryButton.vue';
export default {
    data() {
        return {
            divArr: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        };
    },
    created() {

    },
    mounted() {

    },
    computed: {

    },
    components: {
        CategoryButton
    },

    methods: {

    }
};
</script>

<template>
    <div class="area">
        <CategoryButton/>
        <div class="lineArea">
            <p>設備故障紀錄</p>
            <div class="line"></div>
        </div>
        <div class="history" v-for="(div, index) in divArr">
        </div>
    </div>
</template>

<style scoped lang="scss">
@import '@/assets/main.scss';
.area {
    width: 1200px;
    height: 926px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    &::-webkit-scrollbar {
        width: 7px;
    }

    &::-webkit-scrollbar-button {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: black;
        border-radius: 15px;

    }

    &::-webkit-scrollbar-track {
        background: #ffffff;
        border-radius: 15px;
    }
}
.lineArea {
    width: 1040px;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .line {
        width: 924px;
        height: 0;
        border: solid 1px $white;
    }

    p {
        font-size: 20px;
        font-weight: 500;
        color: $white;
    }
}
.history {
    width: 1170px;
    height: 57px;
    margin: 0 0 20px 0;
    background: $dark03;
    border-radius: 35px;
}
</style>