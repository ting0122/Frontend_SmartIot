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
        // 按鈕被點擊時通知父層並觸發父層方法
        handleAddClick() {
            this.$emit('add-click');
        },
        handleSearchClick() {
            this.$emit('search-click');
        }
    }
};
</script>

<template>
    <div class="buttonArea">
        <div class="lineArea">
            <slot name="text">
                <p>所有空間</p>
            </slot>    
            <div class="line"></div>
        </div>
        <div class="createAndDeleteButton">
            
            <button><i class="fa-solid fa-magnifying-glass" @click="handleSearchClick"></i></button>
            <button><i class="fa-solid fa-trash-can"></i></button>
            <button><i class="fa-solid fa-circle-plus" @click="handleAddClick"></i></button>
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
        padding-bottom: 6px
    }
}

.createAndDeleteButton {
    width: 175px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    margin-right: 36px;

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