<!-- 前台-通知訊息-頁面 -->
<script>
import AnnouncementSearch from '@/components/AnnouncementSearch.vue';

export default {
    data() {
        return {
            annArr:[{title:"除果蠅公告",content:"因近期果蠅眾多，營運團隊將進行場域除蟲消毒，以下是相關安排和注意事項，請大家務必配合因近期果蠅眾多，營運團隊將進行場毒，以下是相關安排和注意事項，請大家務必配合因近期果蠅眾多，營運團隊將進行場毒，以下是相關安排和注意事項，請大家務必配合因近期果蠅眾多，營運團隊將進行場毒，以下是相關安排和注意事項，請大家務必配合因近期果蠅眾多，營運團隊將進行場毒，以下是相關安排和注意事項，請大家務必配合因近期果蠅眾多，營運團隊將進行場毒，以下是相關安排和注意事項，請大家務必配合因近期果蠅眾多，營運團隊將進行場",time:"2024-06-03",expanded: false},{title:"除果蠅公告",content:"因近期果蠅眾多，營運團隊將進行場域除蟲消毒，以下是相關安排和注意事項，請大家務必配合",time:"2024-06-03",expanded: false},{title:"除果蠅公告",content:"因近期果蠅眾多，營運團隊將進行場域除蟲消毒，以下是相關安排和注意事項，請大家務必配合",time:"2024-06-03",expanded: false},{title:"除果蠅公告",content:"因近期果蠅眾多，營運團隊將進行場域除蟲消毒，以下是相關安排和注意事項，請大家務必配合",time:"2024-06-03",expanded: false},{title:"除果蠅公告",content:"因近期果蠅眾多，營運團隊將進行場域除蟲消毒，以下是相關安排和注意事項，請大家務必配合",time:"2024-06-03",expanded: false},{title:"除果蠅公告",content:"因近期果蠅眾多，營運團隊將進行場域除蟲消毒，以下是相關安排和注意事項，請大家務必配合",time:"2024-06-03",expanded: false},{title:"除果蠅公告",content:"因近期果蠅眾多，營運團隊將進行場域除蟲消毒，以下是相關安排和注意事項，請大家務必配合",time:"2024-06-03",expanded: false},{title:"除果蠅公告",content:"因近期果蠅眾多，營運團隊將進行場域除蟲消毒，以下是相關安排和注意事項，請大家務必配合",time:"2024-06-03",expanded: false},{title:"除果蠅公告",content:"因近期果蠅眾多，營運團隊將進行場域除蟲消毒，以下是相關安排和注意事項，請大家務必配合",time:"2024-06-03",expanded: false},{title:"除果蠅公告",content:"因近期果蠅眾多，營運團隊將進行場域除蟲消毒，以下是相關安排和注意事項，請大家務必配合",time:"2024-06-03",expanded: false},{title:"除果蠅公告",content:"因近期果蠅眾多，營運團隊將進行場域除蟲消毒，以下是相關安排和注意事項，請大家務必配合",time:"2024-06-03",expanded: false}]
        };
    },
    components: {
        AnnouncementSearch,
    
    },
    computed: {
        //用來隱藏超出指定長度的公告內容
        truncatedContent() {
            return this.annArr.map(data => {
                return {
                    ...data,
                    truncatedContent: data.content.length > 38 ? data.content.slice(0, 38) + '...' : data.content
                };
            });
        }
    },
    methods: {
        //點擊切換expanded的ture/false屬性
        toggleContent(index) {
        this.annArr[index].expanded = !this.annArr[index].expanded;
        }
    }
 
};
</script>

<template>
    <div class="down"> 
        <div class="announcementSearch">
            <AnnouncementSearch/>   
        </div> 
        <div class="outArea">
            <h2>公告</h2>
            <div class="list">
                <div class="content" v-for="(data, index) in truncatedContent" :key="index" @click="toggleContent(index)"
                :class="{ expanded: annArr[index].expanded }">
                    <div class="up">
                        <span>{{ data.title }}</span>
                        <p class="date">{{ data.time }}</p>
                    </div>
                    <p>{{ annArr[index].expanded ? data.content : data.truncatedContent }}</p>
                </div>
            </div>
        </div>
    </div>
    
</template>

<style scoped lang="scss">
@import '@/assets/main.scss';

.down {
    width: 900px;
    height: 650px;
    padding: 41px 0px 16px 80px;
    .announcementSearch{
        padding-left: 128px;
    }
    .outArea{
        border-radius: 25px;
        height: 594px;
        border: 1px solid $dark02;
        // background-color: $dark02;
        display: flex;
        justify-content: space-between;
        padding-top: 10px;
        h2{
            margin: 12px 0 0 30px;
        }
        .list{
            flex-wrap: nowrap;
            overflow-y: auto;
            margin-right: 30px;
            &::-webkit-scrollbar {
                width: 12px;
    
            }
    
            &::-webkit-scrollbar-button {
                background: transparent;
            }
    
            &::-webkit-scrollbar-thumb {
                background: $black1;
                border-radius: 15px;
    
            }
    
            &::-webkit-scrollbar-track {
                background: transparent;
                border-radius: 15px;
                width: 957px;
            }
    
            .content{
                width: 700px;
                border-radius: 20px;
                padding: 10px;
                overflow-y: hidden;
                background-color: $dark02;
                margin: 10px 15px;
                flex: 0 0 auto; /* 确保每个项目不会缩小并且保持其内容的宽度 */
                margin-top: 10px; /* 可选的间距 */
                //以下為點擊個別公告會展開的參數
                cursor: pointer;
                transition: max-height 1s ease;
                overflow: hidden;
                max-height: 58px; /* 初始高度，取决于你希望显示的截断内容的高度 */
                &.expanded {
                    max-height: 500px; /* 展开后的高度，可以根据内容长度调整 */
                }
                .up{
                    display: flex;
                    justify-content: space-between;
                    padding-right: 10px;
                }
                span{
                    font-size: 16px;
                    font-weight: 600;
                    margin-left: 10px;
                }
                p{
                    margin-top: 5px;
                    font-size: 14px;
                    margin-left: 10px;
                }
            }
        }
}
}

</style>