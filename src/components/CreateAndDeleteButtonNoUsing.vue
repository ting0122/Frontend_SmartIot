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
    <div class="createAndDeleteButton">
            <button><i class="fa-solid fa-trash-can"></i></button>
            <button><i class="fa-solid fa-circle-plus"></i></button>
        </div>
</template>

<style scoped lang="scss">
@import '@/assets/main.scss';

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