<script>

export default {
    data() {
        return {

        };
    },
    created() {

    },
    mounted() {

    },
    computed: {

    },
    components: {

    },

    methods: {

    }
};
</script>

<template>
    <div class="area">
        <div class="lineArea">
            <p>使用中</p>
            <div class="line"></div>
        </div>
        <div></div>
    </div>
</template>

<style scoped lang="scss">
$dark01: #e2e2e2;
$dark02: #c4c4c4;
$dark03: #b0b0b0;
$white: #FDFDFB;
$black: #878787;

.area {
    width: 1189px;
    height: 112px;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.lineArea {
    width: 1040px;
    height: 112px;
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
</style>