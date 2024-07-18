<script>
import * as echarts from 'echarts';

export default {
    data() {
        return {
            chartData: null,
            carbonEmissionData: null,
            showCarbonComparison: false,
            carbonDifference: 0,
            chart: null,
        };
    },
    mounted() {
        this.fetchData();
    },
    methods: {
        async fetchData() {
            try {
                const year = new Date().getFullYear();
                const month = new Date().getMonth() + 1;
                const response = await fetch(`http://localhost:8080/power/monthly?year=${year}&month=${month}`);
                if (!response.ok) {
                    throw new Error('網絡響應不正確');
                }
                const data = await response.json();
                console.log('獲取的數據：', data);
                this.chartData = this.convertToWatts(data);
                this.carbonEmissionData = this.calculateCarbonEmission(data);
                console.log('碳排放數據：', this.carbonEmissionData);
                this.initChart();
            } catch (error) {
                console.error('獲取數據時出錯：', error);
            }
        },
        convertToWatts(data) {
            const convertedData = {};
            for (const [date, kWh] of Object.entries(data)) {
                convertedData[date] = kWh * 1;
            }
            return convertedData;
        },
        calculateCarbonEmission(data) {
            const carbonData = {};
            for (const [date, kWh] of Object.entries(data)) {
                carbonData[date] = kWh * 0.495; // 0.495kgCO2e/度電(kWh)
            }
            return carbonData;
        },
        initChart() {
            const chartDom = document.getElementById('energyChart');
            if (this.chart) {
                this.chart.dispose();
            }
            this.chart = echarts.init(chartDom);

            const dates = Object.keys(this.chartData);
            const values = Object.values(this.chartData);

            const option = {
                title: {
                    text: this.showCarbonComparison ? '今日與昨日碳排比較' : '本月電力消耗'
                },
                tooltip: {
                    trigger: 'axis',
                    formatter: function (params) {
                        const value = params[0].value.toFixed(2);
                        if (this.showCarbonComparison) {
                            return `${params[0].name}<br/>${value} kg CO2e`;
                        } else {
                            return `${params[0].name}<br/>${value} kW`;
                        }
                    }.bind(this)
                },
                xAxis: {
                    type: 'category',
                    data: this.showCarbonComparison ? ['昨日', '今日'] : dates
                },
                yAxis: {
                    type: 'value',
                    name: this.showCarbonComparison ? '碳排放量 (kg CO2e)' : '電力消耗 (kW)'
                },
                series: [{
                    data: this.showCarbonComparison ? this.getCarbonComparisonData() : values,
                    type: 'bar',
                    itemStyle: {
                        color: this.showCarbonComparison ? '#02F78E' : '#1E88E5' // 色碼:綠色用於碳排放，藍色用於電力消耗
                    },
                    label: {
                        show: true,
                        position: 'top',
                        formatter: function(params) {
                            return params.value.toFixed(2);
                        }
                    }
                }]
            };

            this.chart.setOption(option);

            if (this.showCarbonComparison) {
                this.calculateCarbonDifference();
            }
        },
        getCarbonComparisonData() {
            const today = new Date().toISOString().split('T')[0];
            const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
            
            const todayEmission = this.carbonEmissionData[today] || 0;
            const yesterdayEmission = this.carbonEmissionData[yesterday] || 0;

            console.log('昨天日期：', yesterday, '今天日期：', today);
            console.log('昨天和今天的碳排放數據：', yesterdayEmission, todayEmission);

            return [yesterdayEmission, todayEmission];
        },
        calculateCarbonDifference() {
            const [yesterdayEmission, todayEmission] = this.getCarbonComparisonData();
            this.carbonDifference = todayEmission - yesterdayEmission;
        },
        toggleCarbonComparison() {
            this.showCarbonComparison = !this.showCarbonComparison;
            this.initChart();
        }
    },
    computed: {
        carbonDifferenceText() {
            if (!this.showCarbonComparison) return '';
            const diff = Math.abs(this.carbonDifference).toFixed(2);
            const diffText = `<span style="color: #4CAF50;">${diff}</span>`;
            return this.carbonDifference > 0
                ? `比昨天多了 ${diffText} 公斤的碳排`
                : `比昨天少了 ${diffText} 公斤的碳排`;
        }
    }
};
</script>

<template>
    <div class="stateDiv">
        <div id="energyChart" style="width: 100%; height: 300px;"></div>
        <button @click="toggleCarbonComparison">
            {{ showCarbonComparison ? '顯示電力消耗' : '顯示碳排比較' }}
        </button>
        <p v-if="showCarbonComparison" class="carbon-difference" v-html="carbonDifferenceText"></p>
    </div>
</template>

<style scoped lang="scss">
@import '@/assets/main.scss';

.stateDiv {
    width: 100%;
    height: 316px;
    background-color: $white;
    border-radius: 25px 25px 0 0;
    position: relative;
}

button {
    position: absolute;
    top: 10px;
    right: 15px;
    padding: 5px 10px;
    background-color: $dark02;
    color: $white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.carbon-difference {
    text-align: center;
    margin-top: 10px;
    font-weight: bold;
}
</style>