<!-- 前台-故障設備搜尋-元件 -->
<script>
// vue3-datepicker製作日曆用
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

export default {
    data() {
        return {
            dateRange: null, //儲存日期區間
        };
    },
    components : {
        VueDatePicker,  //日曆用
    },
    
};
</script>

<template>
    <div class="search_big_area">
        <div class="left">
            <div class="name" >
                <input type="text" placeholder="設備名稱">
            </div>
            <div class="state">
                <select >
                    <option value="所有類別" selected>所有類別</option>
                    <option value="冷氣">冷氣</option>
                    <option value="電燈">電燈</option>
                    <option value="空氣清淨機">空氣清淨機</option>
                    <option value="除濕機">除濕機</option>
                </select>
            </div>
            <div class="start_date">
                <VueDatePicker 
                v-model="dateRange" 
                range format="yyyy-MM-dd" 
                style="width: 260px" />
                <!-- <input type="date"  class="date"> -->
                <!-- <i class="fa-regular fa-calendar"></i> -->
            </div>
            <button class="seach_list" >搜尋</button>

        </div>
       
    </div>
</template>

<style scoped lang="scss">
@import '@/assets/main.scss';

    .search_big_area{
        width: 800px;
        height: 100%;
        display: flex;
        align-items: center;
        padding-bottom: 15px;
        padding-left: 82px;
        .left{
            display: flex;
            .name{
                input{
                    width: 110px;
                    height: 40px;
                    border-radius: 35px;
                    padding-left: 20px;
                    padding-right: 10px;
                    color: $white;
                    background-color: $dark02;
                    border: 0;
                    outline:none;
                    font-size: 16px;
                }
                ::placeholder {
                    color: $white;
                }
            }
            .state{
                margin-left: 20px;
                i{
                    font-style: normal;
                    margin-left: 10px;
                    font-size: 16px;
                    color: $white;
                }
                select{
                    width: 100px;
                    height: 40px;
                    border-radius: 35px;
                    padding-left: 10px;
                    color: $white;
                    font-size: 16px;
                    background-color: $dark02;
                    border: 0;
                    outline:none;
                }
            }
            .start_date{
                margin-left: 20px;
                width: 260px;
                border-radius: 35px;
                display: flex;
                justify-content: center;
                align-items: center;  
                background-color: $dark02;

                // i {
                //     position: absolute;
                //     right: 10px;
                //     top: 50%;
                //     transform: translateY(-50%);
                //     width: 20px;
                //     height: 20px;
                //     color: $white;
                //     background: transparent; /* 自定义图标颜色 */
                //     pointer-events: none;
                // }
                //原版input樣式
                // .date{
                //     width: 300px;
                //     height: 35px;
                //     border-radius: 30px;
                //     padding-left: 9px;
                //     padding-right: 10px;
                //     color: $white;
                //     background-color: $dark02;
                //     border: 0;
                //     outline:none; 
                // }
                // ::-webkit-calendar-picker-indicator {
                //     opacity: 0; /* 圖示設為透明 */
                // }
            
            }
            .seach_list{
                width: 60px;
                height: 40px;
                border-radius: 35px;
                border-width: 0;
                margin-left: 20px;
                font-size: 16px;
                cursor: pointer;
                background-color: $dark02;
                color: $white;
            }
         
            
        }
        
    }
    

</style>