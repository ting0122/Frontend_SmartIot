<script>
import CreateAndDeleteButton from '@/components/CreateAndDeleteButton.vue';
import Switch from '@/components/Switch.vue';
import Energy from '@/components/Energy.vue';
import CreateRoom from '@/components/CreateRoom.vue';
import SearchRoom from '@/components/SearchRoom.vue';
export default {
    data() {
        return {
            divArr: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            
        };
    },
    created() {
        this.searchRoom()
    },
    mounted() {

    },
    computed: {

    },
    components: {
        CreateAndDeleteButton,
        Switch,
        Energy,
        CreateRoom,
        SearchRoom
    },

    methods: {
        searchRoom() {
            fetch("http://localhost:8080/rooms", {
                method: "get",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify()
            })
                // .then(res => res.json())
                .then(data => {
                    console.log(data)
                })
        },
    }
};
</script>

<template>
    <div class="outarr">
        <Energy />
        <CreateRoom />
        <!-- <SearchRoom/> -->
        <CreateAndDeleteButton />
        <div class="rooms">
            <div class="room" v-for="(div, index) in divArr" :key="index">
            </div>
        </div>

    </div>
</template>

<style scoped lang="scss">
@import '@/assets/main.scss';

.outarr{
    width: 1238px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items:end;
    border: 1px solid black;
    .rooms {
        width: 100%;
        height: 609px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        overflow-y: auto;
    
        &::-webkit-scrollbar {
            width: 10px;
    
        }
    
        &::-webkit-scrollbar-button {
            background: transparent;
            height: 6px;
        }
    
        &::-webkit-scrollbar-thumb {
            background: $black1;
            border-radius: 15px;
    
        }
    
        &::-webkit-scrollbar-track {
            background: transparent;
            border-radius: 15px;
        }
    }
    
    .room {
        width: 283px;
        height: 150px;
        background: $dark03;
        border-radius: 25px;
        margin: 10px 0;
        position: relative;
    
        .switch {
            position: absolute;
            right: 10px;
            top: 10px;
        }
    }

}
</style>