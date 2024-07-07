<script>
import CreateAndDeleteButton from '@/components/CreateAndDeleteButton.vue';
import Switch from '@/components/Switch.vue';
import Energy from '@/components/Energy.vue';
import CreateRoom from '@/components/CreateRoom.vue';
import SearchRoom from '@/components/SearchRoom.vue';
export default {
    data() {
        return {
            dataArr: [{id:203154,area:602,type:"會議室",roommane:"會議室"},{id:203154,area:602,type:"公司",roommane:"南方麒麟股份有限公司嘶嘶嘶嘶"},{id:203154,area:602,type:"會議室",roommane:"會議室"},{id:203154,area:602,type:"會議室",roommane:"會議室"},{id:203154,area:602,type:"會議室",roommane:"會議室"},{id:203154,area:602,type:"會議室",roommane:"會議室"},{id:203154,area:602,type:"公司",roommane:"南方麒麟股份有限公司嘶嘶嘶嘶"},{id:203154,area:602,type:"會議室",roommane:"會議室"},{id:203154,area:602,type:"會議室",roommane:"會議室"},{id:203154,area:602,type:"會議室",roommane:"會議室"},{id:203154,area:602,type:"會議室",roommane:"會議室"},{id:203154,area:602,type:"會議室",roommane:"會議室"},{id:203154,area:602,type:"公司",roommane:"南方麒麟股份有限公司嘶嘶嘶嘶"},{id:203154,area:602,type:"會議室",roommane:"會議室"},{id:203154,area:602,type:"會議室",roommane:"會議室"},{id:203154,area:602,type:"會議室",roommane:"會議室"},{id:203154,area:602,type:"會議室",roommane:"會議室"},{id:203154,area:602,type:"會議室",roommane:"會議室"},{id:203154,area:602,type:"會議室",roommane:"會議室"},{id:203154,area:602,type:"公司",roommane:"南方麒麟股份有限公司嘶嘶嘶嘶"},{id:203154,area:602,type:"會議室",roommane:"會議室"},{id:203154,area:602,type:"會議室",roommane:"會議室"},{id:203154,area:602,type:"會議室",roommane:"會議室"}],

            showCreateRoom: false, // 用於控制顯示 CreateRoom 或 SearchRoom 组件
        };
    },
    created() {
        // this.searchRoom()
    },
    mounted() {

    },
    computed: {
        //用來隱藏超出指定長度的空間名稱內容
        truncatedContent() {
            return this.dataArr.map(data => {
                return {
                    ...data,
                    truncatedContent: data.roommane.length > 9 ? data.roommane.slice(0, 9) + '...' : data.roommane
                };
            });
        }
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
        //以下兩個用於切換新增房間及搜尋房間2個元件的顯示
        toggleCreateRoom() {
            this.showCreateRoom = true;
        },
        toggleSearchRoom() {
            this.showCreateRoom = false;
        }
    }
};
</script>

<template>
    <div class="outarr">
        <Energy />
        <!-- 根據 showCreateRoom 的值決定顯示 CreateRoom 或 SearchRoom 组件 -->
        <CreateRoom v-if="showCreateRoom" />
        <SearchRoom v-else /> 
        <!-- 監聽 CreateAndDeleteButton 组件的 add-click 事件 -->
        <CreateAndDeleteButton @add-click="toggleCreateRoom" @search-click="toggleSearchRoom" />
        <div class="rooms">
            <div class="room" v-for="(data, index) in truncatedContent" :key="index">
                <div class="switch">
                    <Switch :id="'on-' +index" />
                </div>
                <p>{{ data.area }}-{{ data.type }}</p>
                <div class="area">
                    <span>{{ data.truncatedContent }}</span>
                </div>
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
    border-radius: 25px;
    border: 1px solid black;
    background-color: $dark02;
    .rooms {
        width: 100%;
        height: 609px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        overflow-y: auto;
        // background-color: $dark01;
        border: 1px solid black;
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
            background: transparent;
            border-radius: 15px;
        }
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
        p{
            margin: 50px 20px 0 30px;
            font-size: 16px;
        }
        .area{
            margin: 0 20px 0 30px;
            font-size: 20px;
            font-weight: 600;
            color:$black1;
        }
    }

}
</style>