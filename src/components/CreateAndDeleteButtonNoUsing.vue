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

        <div class="createAndDeleteButton">
            <button  @click="handleSearchClick"><i class="fa-solid fa-magnifying-glass"></i></button>
            <button><i class="fa-solid fa-trash-can"></i></button>
            <button @click="handleAddClick"><i class="fa-solid fa-circle-plus" ></i></button>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import '@/assets/main.scss';

.buttonArea{
    
    .createAndDeleteButton {
        
        width: 175px;
        height: 40px;
        display: flex;
        justify-content: space-between;
        margin-right: 36px;
    
        button {
            height: 45px;
            width: 45px;
            background: $dark02;
            border-radius: 50%;
            border: none;
            outline: none;
            color: $white;
            font-size: 20px;
            line-height: 45px;
        }
    }
}

</style>