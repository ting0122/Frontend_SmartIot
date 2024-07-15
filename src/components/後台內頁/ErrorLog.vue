<script>
//以下為PINIA
import location from '@/stores/location';
import { mapState, mapActions } from 'pinia';
import SearchError from '@/components/SearchError.vue';
export default {
    data() {
        return {
            allLogss:[],
            dataArr: [{ id: 203154, type: "冷氣", mane: "前方的冷氣", question: "網路連線中斷", date: "2024-06-02", area: 602, roommane: "會議室" }, { id: 203157, type: "冷氣", mane: "後方的冷氣", question: "網路連線中斷", date: "2024-06-02", area: 602, roommane: "會議室" }, { id: 203151, type: "電燈", mane: "右側電燈", question: "網路連線中斷", date: "2024-06-02", area: 602, roommane: "會議室" }, { id: 203157, type: "冷氣", mane: "後方的冷氣", question: "網路連線中斷", date: "2024-06-02", area: 602, roommane: "南方麒麟股份有限公司" }, { id: 203157, type: "空氣清淨機", mane: "後方的冷氣", question: "網路連線中斷", date: "2024-06-02", area: 602, roommane: "會議室" }, { id: 203157, type: "冷氣", mane: "後方的冷氣", question: "網路連線中斷", date: "2024-06-02", area: 602, roommane: "會議室" }, { id: 203157, type: "冷氣", mane: "後方的冷氣", question: "網路連線中斷", date: "2024-06-02", area: 602, roommane: "會議室" }, { id: 203157, type: "冷氣", mane: "後方的冷氣", question: "網路連線中斷", date: "2024-06-02", area: 602, roommane: "會議室" }, { id: 203157, type: "冷氣", mane: "後方的冷氣", question: "網路連線中斷", date: "2024-06-02", area: 602, roommane: "會議室" }, { id: 203157, type: "冷氣", mane: "後方的冷氣", question: "網路連線中斷", date: "2024-06-02", area: 602, roommane: "會議室" }, { id: 203157, type: "冷氣", mane: "後方的冷氣", question: "網路連線中斷", date: "2024-06-02", area: 602, roommane: "會議室" }, { id: 203157, type: "冷氣", mane: "後方的冷氣", question: "網路連線中斷", date: "2024-06-02", area: 602, roommane: "會議室" }]
        };
    },
    created() {
        this.getAllLogs()
    },
    mounted() {
        
    },
    computed: {
        ...mapState(location, ['allLogs']),
    },
    components: {
        SearchError
    },

    methods: {
        ...mapActions(location, ['getAllLogs']),
        // getAllLogs() {
        //     fetch(`http://localhost:8080/history`, {
        //         method: "get",
        //         body: JSON.stringify()
        //     })
        //         .then(res => res.json())
        //         .then(data => {
        //             console.log('allLog',data)
        //             this.allLogs = data
        //         })
        // }
    }
};
</script>

<template>
    <button @click="this.getAllLogs">00000</button>
    <div class="out">
        <SearchError />
        <div class="down">
            <div class="history" v-for="(data, index) in dataArr">
                <div class="box">
                    <h2>{{ data.area }}-{{ data.roommane }}</h2>
                    <p class="id">{{ data.id }}</p>
                    <p>{{ data.type }}</p>
                    <p>{{ data.mane }}</p>
                    <p class="right">{{ data.question }}</p>
                </div>
                <p class="date">{{ data.date }}</p>
            </div>

        </div>
    </div>
</template>

<style scoped lang="scss">
@import '@/assets/main.scss';

.out {
    width: 1238px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: end;
    border-radius: 25px;
    border: 1px solid black;

}

.lineArea {
    width: 1040px;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .line {
        width: 924px;
        height: 0;
        border: solid 1px $white;
    }

    p {
        font-size: 20px;
        font-weight: 500;
        color: $white;
    }
}

.down {
    width: 100%;
    height: 825px;
    overflow-y: auto;
    border: 1px solid black;
    border-radius: 0 0 25px 25px;
    background-color: $dark01;
    padding-top: 10px;

    &::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-button {
        background: transparent;
        height: 30px;
    }

    &::-webkit-scrollbar-thumb {
        background: $black1;
        border-radius: 15px;

    }

    &::-webkit-scrollbar-track {
        background: transparent;
        border-radius: 15px;
    }

    .history {
        width: 1170px;
        height: 57px;
        margin: 20px auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: $dark03;
        border-radius: 35px;

        .box {
            // width: 305px;
            height: 30px;
            display: flex;
            padding-left: 10px;

            h2 {
                display: block;
                font-size: 18px;
                line-height: 30px;
                margin-left: 23px;
                margin-right: 25px;
                color: $white;

            }

            p {
                // font-size: 1px;
                line-height: 30px;
                margin-right: 18px;
                color: $white;
            }

            .right {
                display: block;
                margin-left: 8px;
                padding-left: 28px;
                // width: 500px;
                color: $white;
                border-left: 1px solid $white;
            }
        }

        .date {
            display: block;
            margin-right: 30px;
            color: $white;
        }
    }
}
</style>