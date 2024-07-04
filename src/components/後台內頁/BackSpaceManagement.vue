<script>
import CreateAndDeleteButton from '@/components/CreateAndDeleteButton.vue';
import Switch from '@/components/Switch.vue';
import Energy from '@/components/Energy.vue';
import CreateRoom from '@/components/CreateRoom.vue';
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
        CreateRoom
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
    <Energy />
    <CreateRoom />
    <div class="rooms">
        <CreateAndDeleteButton />
        <div class="room" v-for="(div, index) in divArr" :key="index">
        </div>
    </div>
</template>

<style scoped lang="scss">
@import '@/assets/main.scss';


.rooms {
    width: 1189px;
    height: 609px;
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