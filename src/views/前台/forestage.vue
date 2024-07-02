<script>
//pinia用
import location from '@/stores/location';
import {mapState,mapActions } from 'pinia';


export default {
    data() {
        return {
            
        };
    },
    
  
};
</script>

<template>
    <div class="ipad">
        <div class="showArea"></div>
    </div>
</template>

<style scoped lang="scss">
   .ipad{
    height: 100px;
    width: 100px;
    border: 1px solid black;
   }

</style>