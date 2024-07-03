<script>
import CreateAndDeleteButton from '@/components/CreateAndDeleteButton.vue';
import Switch from '@/components/Switch.vue';
import Idle from '@/components/Idle.vue';
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
        CreateAndDeleteButton,
        Switch,
        Idle
    },

    methods: {

    }
};
</script>

<template>
    <div class="devices">
        <CreateAndDeleteButton />
        <div class="device" v-for="(div, index) in divArr" :key="index">
            <div class="switch">
                <Switch :id="'on-' +index" />
            </div>
        </div>
        <Idle />
        <div class="device" v-for="(div, index) in divArr" :key="index">
            <div class="switch">
                <Switch :id="'off-' +index" />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
$dark01: #e2e2e2;
$dark02: #c4c4c4;
$dark03: #b0b0b0;
$white: #FDFDFB;
$black: #878787;

.devices {
    width: 1189px;
    height: 926px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
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

.device {
    width: 250px;
    height: 150px;
    background: $dark03;
    border-radius: 35px;
    margin: 10px 0;
    position: relative;

    .switch {
        position: absolute;
        right: 10px;
        top: 10px;
    }
}
</style>