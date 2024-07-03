<script>
import Idle from '@/components/Idle.vue';
import Using from '@/components/Using.vue';
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
        Idle,
        Using
    },

    methods: {

    }
};
</script>

<template>
    <div class="historyArea">
        <Using />
        <div class="history" v-for="(div, index) in divArr">
            <div class="historyName"></div>
            <div class="historyCurve"></div>
        </div>
        <Idle />
        <div class="history" v-for="(div, index) in divArr">
            <div class="historyName"></div>
            <div class="historyCurve"></div>
        </div>
    </div>
</template>

<style scoped lang="scss">
$dark01: #e2e2e2;
$dark02: #c4c4c4;
$dark03: #b0b0b0;
$white: #FDFDFB;
$black: #878787;

.historyArea {
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

.history {
    width: 1170px;
    margin: 0 0 20px 0;
    display: flex;
}
.historyName {
    width: 20%;
    height: 107px;
    border-radius: 35px 0 0 35px;
    background: $dark03;
}
.historyCurve{
    width:80%;
    height: 107px;
    border-radius: 0 35px 35px 0 ;
    background: $dark02;
}

</style>