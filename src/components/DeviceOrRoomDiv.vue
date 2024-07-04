<script>
import Switch from '@/components/Switch.vue';
export default {
    data() {
        return {
            divArr: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
        };
    },
    created() {

    },
    mounted() {

    },
    computed: {

    },
    components: {
        Switch
    },

    methods: {

    },
    props:[
        "name"
    ]
};
</script>

<template>
    <div class="room" v-for="(div, index) in divArr" :key="index">
        <div class="switch">
            <Switch :id="this.name + index" />
        </div>
    </div>
</template>

<style scoped lang="scss">
@import '@/assets/main.scss';

.room {
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