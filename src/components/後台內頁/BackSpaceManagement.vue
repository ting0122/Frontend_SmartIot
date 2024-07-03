<script>
import CreateAndDeleteButton from '@/components/CreateAndDeleteButton.vue';
import Switch from '@/components/Switch.vue';
export default {
    data() {
        return {
            divArr: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
        Switch
    },

    methods: {

    }
};
</script>

<template>
    <div class="stateDiv"></div>
    <CreateAndDeleteButton />
    <div class="rooms">
        <div class="room" v-for="(div, index) in divArr" :key="index">
            <div class="switch">
                <Switch :id="index" />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.stateDiv {
    width: 1189px;
    height: 316px;
    background-color: #D9D9D9;
    border-radius: 45px;
}
.rooms{
    width: 1189px;
    height: 497px;
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
.room {
    width: 250px;
    height: 150px;
    background: #D9D9D9;
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