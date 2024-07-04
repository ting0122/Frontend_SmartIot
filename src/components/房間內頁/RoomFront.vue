<script>
import Energy from '@/components/Energy.vue';
import CreateDevice from '@/components/CreateDevice.vue';
import CreateAndDeleteButtonNoUsing from '@/components/CreateAndDeleteButtonNoUsing.vue';
import Using from '@/components/Using.vue';
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
        Energy,
        CreateDevice,
        CreateAndDeleteButtonNoUsing,
        Using,
        Idle
    },

    methods: {

    }
};
</script>

<template>
    <Energy />
    <div class="frontArea">
        <div class="roomTitle">
            <p><span>601</span><span>會議室</span></p>
            <CreateAndDeleteButtonNoUsing />
        </div>
        <div class="CreateDevice">
            <CreateDevice />
        </div>
        <div class="roomState">
            <Using />
            <div class="device" v-for="(div, index) in divArr" :key="index">
                <div class="switch">
                    <Switch :id="'on-' + index" />
                </div>
            </div>
            <Idle/>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import '@/assets/main.scss';

.frontArea {
    height: 586px;
    width: 1189px;
    background: $dark03;
    margin-top: 25px;
    border-radius: 35px;
}

.roomTitle {
    height: 100px;
    width: 1100px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        font-size: 32px;
        font-weight: 500;
        color: $white;
    }
}

.CreateDevice {
    width: 1189px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>