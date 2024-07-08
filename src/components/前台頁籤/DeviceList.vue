<script>
import location from '@/stores/location';
import { mapState, mapActions } from 'pinia';
import Switch from '@/components/Switch.vue';
import ForestageSearchDevice from '@/components/ForestageSearchDevice.vue';

export default {
    data() {
        return {
            createObj: {
                name: "",
                type: "",
                roomId: 1
            },

        };
    },
    created() {
        this.searchRoom(1);
    },
    components: {
        Switch,
    },
    computed: {
        ...mapState(location, ['dataArr']),
        ForestageSearchDevice
    
    },
    methods: {
        ...mapActions(location, ['deviceStatus','searchRoom']),
    },


};
</script>

<template>

    <div class="down">
        <ForestageSearchDevice>
            <template #roomid>
                <p></p>
            </template>
        </ForestageSearchDevice>
        <div class="oo">
            <div class="outArea" v-for="(data, index) in dataArr.devices" :key="index">
                <div >
                    <div class="switch">
                        <Switch :id="data.id" :checked="data.status" @change="deviceStatus(data.id,data.type,data.name,1,1)"/>
                    </div>
                    <p class="id">{{ data.id }}</p>
                    <i class="fa-regular fa-snowflake"></i>
                    <p>{{ data.type }}</p>

                    <span>{{ data.name }}</span>
                </div>
            </div>
        </div>
    </div>


</template>

<style scoped lang="scss">
@import '@/assets/main.scss';

.down {
    width: 900px;
    height: 650px;
    padding: 27px 0px 16px 50px;  
    
    .oo{
        height: 598px;
        display: flex;
        flex-wrap: wrap;
        padding-left: 82px;
        overflow-y: auto;
        &::-webkit-scrollbar {
            width: 13px;

        }

        &::-webkit-scrollbar-button {
            background: transparent;
            height: 3px;
        }

        &::-webkit-scrollbar-thumb {
            background: $black1;
            border-radius: 15px;

        }

        &::-webkit-scrollbar-track {
            background: transparent;
            border-radius: 15px;
        }
        .outArea{
            position: relative;
            width: 250px;
            height: 200px;
            border-radius: 25px;
            margin-bottom: 15px;
            background-color: $dark02;
            flex: 0 0 auto;
            /* 确保每个项目不会缩小并且保持其内容的宽度 */
            margin-right: 17px;
            /* 可选的间距 */
            padding-bottom: 10px;

            .switch {
                position: absolute;
                right: 18px;
                top: 15px;
            }

            i {
                font-size: 80px;
                color: $dark01;
                margin-left: 37%;
                margin-top: 21px;
            }

            .id {
                margin-top: 10px
            }

            p {
                margin: 5px 20px 0 30px;
                font-size: 16px;
            }

            span {
                margin: 20px 30px 20px 30px;
                font-size: 20px;

            }
        }

    }
}
</style>