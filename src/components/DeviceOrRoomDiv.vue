<script>
import Switch from '@/components/Switch.vue';
export default {
    data() {
        return {
            divArr: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,],
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
    <div class="out">
        <div class="room" v-for="(div, index) in divArr" :key="index">
            <div class="switch">
                <Switch :id="this.name + index" />
            </div>
        </div>

    </div>
</template>

<style scoped lang="scss">
@import '@/assets/main.scss';
.out{
    width: 100%;
    height: 713px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    overflow-y: auto;
    border: 1px solid black;
    border-radius: 0 0 25px 25px;
    &::-webkit-scrollbar {
        width: 10px;
    
    }
    
    &::-webkit-scrollbar-button {
        background: transparent;
        height: 10px;
    }
    
    &::-webkit-scrollbar-thumb {
        background: $black1;
        border-radius: 15px;
    
    }
    
    &::-webkit-scrollbar-track {
        background:transparent;
        border-radius: 15px;
    }
    .room {
        width: 282px;
        height: 150px;
        background: $dark03;
        border-radius: 25px;
        margin: 20px 0 0 0 ;
        position: relative;
        
        
        .switch {
            position: absolute;
            right: 18px;
            top: 15px;
        }
    }
}
</style>