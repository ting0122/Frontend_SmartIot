<!-- 前台-首頁-中間環境及時數據顯示-元件 -->
<script>
export default {
    data() {
        return {
            dataArr: []
        };
    },
    created() {
        this.fetchData();
        setInterval(this.fetchData, 300000); // 300000 毫秒 = 5 分鐘
    },
    methods: {
        async fetchData() {
            try {
                const response = await fetch('http://localhost:8080/rooms/1');
                if (!response.ok) {
                    throw new Error('網絡響應不正確');
                }
                const roomData = await response.json();

                const airConditioner = roomData.devices.find(d => d.type === "冷氣機");
                const airPurifier = roomData.devices.find(d => d.type === "空氣清淨機");
                const dehumidifier = roomData.devices.find(d => d.type === "除濕機");

                this.dataArr = [
                    { name: "溫度", data: airConditioner ? `${airConditioner.airConditioner.current_temp.toFixed(1)}˚C` : '無數據' },
                    { name: "空氣品質", data: airPurifier ? `${airPurifier.airPurifier.air_quality}` : '無數據' },
                    { name: "濕度", data: dehumidifier ? `${dehumidifier.dehumidifier.current_humidity.toFixed(1)}%` : '無數據' }
                ];
            } catch (error) {
                console.error('獲取數據時出錯：', error);
            }
        }
    }
};
</script>

<template>
    <div class="outArea" v-for="(data, index) in dataArr" :key="index">
        <p>{{ data.name }}</p>
        <span>{{ data.data }}</span>
    </div>
</template>

<style scoped lang="scss">
@import '@/assets/main.scss';

.outArea {
    width: 303px;
    height: 100%;
    border-radius: 25px;
    background-color: $dark02;
    display: flex;
    justify-content: space-between;

    p {
        margin: 0 20px 0 40px;
        font-size: 18px;
        line-height: 104px;
    }

    span {
        margin: 17px 65px 20px 30px;
        font-size: 45px;

    }
}
</style>