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
            <p>使用中</p>
            <div class="line"></div>
        </div>
        <div class="createAndDeleteButton">
            <button><i class="fa-solid fa-trash-can"></i></button>
            <button><i class="fa-solid fa-circle-plus"></i></button>
        </div>
    </div>
</template>

<style scoped lang="scss">
$dark01:#e2e2e2;
$dark02:#c4c4c4;
$dark03:#b0b0b0;
$white:#FDFDFB;
$black:#878787;
.buttonArea {
    width: 1189px;
    height: 112px;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.lineArea {
width: 950px;
height: 112px;
display: flex;
flex-direction: column;
justify-content: center;
    .line {
        width: 924px;
        height: 0;
        border: solid 1px $white;
    }
    p{
        font-size: 20px;
        font-weight: 500;
        color: $white;
    }
}

.createAndDeleteButton {
    width: 96px;
    height: 40px;
    display: flex;
    justify-content: space-between;

}
button {
    height: 40px;
    width: 40px;

    background: $dark03;
    border-radius: 50%;
    border: none;
    outline: none;
    color: $white;
    font-size: 26px;
}
</style>