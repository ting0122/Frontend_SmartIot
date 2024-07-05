<!-- 前台-故障設備搜尋-元件 -->
<script>

export default {
    data() {
        return {
            
        };
    },
   
};
</script>

<template>
    <div class="search_big_area">
        <div class="left">
            <div class="name" >
                <input type="text" v-model="this.name" placeholder="設備名稱">
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
                <input type="date" v-model="this.start_date" class="date">
                <i class="fa-regular fa-calendar"></i>
            </div>
            <button class="seach_list"  >搜尋</button>

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
                    height: 35px;
                    border-radius: 30px;
                    padding-left: 13px;
                    padding-right: 10px;
                    color: $white;
                    background-color: $dark02;
                    border: 0;
                    outline:none;
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
                    font-size: 14px;
                    color: $white;
                }
                select{
                    width: 100px;
                    height: 35px;
                    border-radius: 30px;
                    padding-left: 5px;
                    color: $white;
                    background-color: $dark02;
                    border: 0;
                    outline:none;
                }
            }
            .start_date{
                margin-left: 20px;
                position: relative;

                i {
                    position: absolute;
                    right: 10px;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 20px;
                    height: 20px;
                    color: $white;
                    background: transparent; /* 自定义图标颜色 */
                    pointer-events: none;
                }
                .date{
                    width: 150px;
                    height: 35px;
                    border-radius: 30px;
                    padding-left: 9px;
                    padding-right: 10px;
                    color: $white;
                    background-color: $dark02;
                    border: 0;
                    outline:none;
                }
                ::-webkit-calendar-picker-indicator {
                    opacity: 0; /* 圖示設為透明 */
                }
                }
            .seach_list{
                width: 60px;
                height: 35px;
                border-radius: 30px;
                border-width: 0;
                margin-left: 20px;
                cursor: pointer;
                background-color: $dark02;
                color: $white;
            }
            

        }
        

    }

</style>