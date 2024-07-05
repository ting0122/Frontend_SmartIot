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
    <div class="buttonArea">
        <div class="lineArea">
            <p>所有空間</p>
            <div class="line"></div>
        </div>
        <div class="createAndDeleteButton">
            <button><i class="fa-solid fa-magnifying-glass"></i></button>
            <button><i class="fa-solid fa-trash-can"></i></button>
            <button><i class="fa-solid fa-circle-plus"></i></button>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import '@/assets/main.scss';
.buttonArea {
    width: 1208px;
    height: 112px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.lineArea {
width: 950px;
height: 112px;
display: flex;
flex-direction: column;
justify-content: center;
    .line {
        width: 960px;
        height: 0;
        border: solid 1px $white;
    }
    p{
        font-size: 20px;
        color: $white;
        padding-left: 10px;
        padding-bottom: 5px
    }
}

.createAndDeleteButton {
    width: 175px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    margin-right: 32px;

}
button {
    height: 45px;
    width: 45px;
    background: $dark03;
    border-radius: 50%;
    border: none;
    outline: none;
    color: $white;
    font-size: 26px;
    line-height: 45px;
}
</style>