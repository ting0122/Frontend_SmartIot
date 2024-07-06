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

        <div class="createAndDeleteButton">
            <button><i class="fa-solid fa-magnifying-glass" @click="handleSearchClick"></i></button>
            <button><i class="fa-solid fa-trash-can"></i></button>
            <button><i class="fa-solid fa-circle-plus" @click="handleAddClick"></i></button>
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