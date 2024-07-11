<script>
import location from '@/stores/location';
import { mapState, mapActions } from 'pinia';
import Energy from '@/components/Energy.vue';
import CreateDeviceY from '@/components/CreateDeviceY.vue';
import CreateAndDeleteButtonNoUsing from '@/components/CreateAndDeleteButtonNoUsing.vue';
import Switch from '@/components/Switch.vue';
import SearchDevice from '@/components/SearchDevice.vue';

export default {
    data() {
        return {
            showCreateRoom: false, // 用於控制顯示 Create 或 Search 组件
            searchDeviceControl:true
        };
    },
    created() {
        
    },
    mounted() {
        
    },
    computed: {
        ...mapState(location, ['deviceArr','localRoomArea']),
    },
    components: {
        Energy,
        CreateAndDeleteButtonNoUsing,
        Switch,
        CreateDeviceY,
        SearchDevice
    },

    methods: {
        ...mapActions(location, ['searchDevice']),
        //以下兩個用於切換新增設備及搜尋設備2個元件的顯示
        toggleCreateDevice() {
            this.showCreateRoom = true;
        },
        toggleSearchDevice() {
            this.showCreateRoom = false;
        }
    }
};
</script>

<template>
    <div class="outarr">

        <div class="energy">
            <Energy />  
        </div>
        <div class="headerArea">
            <div class="roomtitle">
                <h2>602-會議室</h2><p>南方麒麟股份有限公司嘶嘶嘶嘶</p>
            </div>
            <CreateDeviceY v-if="showCreateRoom">
                <template #roomid>
                   <p></p>
                </template>
            </CreateDeviceY>
            <SearchDevice :searchDeviceControl="searchDeviceControl" v-else>
                <template #roomid>
                   <p></p>
                </template>
            </SearchDevice>
            <div class="botton">    
                <CreateAndDeleteButtonNoUsing @add-click="toggleCreateDevice" @search-click="toggleSearchDevice"/>
            </div> 
            <div class="out" >
                <div class="room" v-for="(data, index) in deviceArr" :key="index">
                    <div class="switch">
                        <Switch :id="data.id" />
                    </div>
                    <p class="id">{{ data.id }}</p>
                    <p>{{ data.type }}</p>
                    <i class="fa-regular fa-snowflake"></i>
                    <div class="area">
                        <p>{{ data.name}}</p>
                    </div>
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

    .energy{
        width: 100%;
        height: 341px;
        background-color:$dark03;
        border-radius: 25px;
    }

    .headerArea {
        height: 120px;
        width: 100%;
        background: $dark03;  
        margin-top: 25px;
        border-radius: 25px;
        position: relative;
        padding-top: 20px;
        .botton {
            position: absolute;
            right: 0;
            top: 62px;
        }
        .roomtitle{
            position: absolute;
            display: flex;
            align-items: center;
            top: 10px;
            left: 35px;
            color: $black1;
            p{
                display: block;
                font-size: 20px;
                margin-left: 20px;
            }
        }
        .out{
            width: 100%;
            height: 439px;
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
                i{
                    font-size: 50px;
                    color: $dark01;
                    margin-left: 43%;
                    margin-top: -40px;
                }
                .id{
                    margin-top: 10px
                }
                p{
                    margin: 0px 20px 0 30px;
                    font-size: 16px;
                }
                .area{
                    position: absolute;
                    bottom: 0;
                    width: 100%;
                    height: 50px;
                    border-radius: 0 0 25px 25px;
                    background-color: $dark01;
                    p{
                        margin: 0;
                        font-size: 20px;
                        line-height: 50px;
                        display: flex;
                        justify-content: center;
                    }
                }
            }
        }
    }

}
</style>