<!-- 前台-通知訊息-頁面 -->
<script>
import AnnouncementSearch from '@/components/AnnouncementSearch.vue';

export default {
    data() {
        return {
            annArr: [],
            expandedIndex: null // 追蹤當前展開的公告索引
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
        async fetchAnnouncements() {
            try {
                const response = await fetch('http://localhost:8080/announcements/1', {
                    method: 'GET',
                    headers: {
                        'Accept': '*/*'
                    }
                });
                if (!response.ok) {
                    throw new Error(`HTTP 錯誤！狀態: ${response.status}`);
                }
                const data = await response.json();
                // 對公告按發布時間進行排序，最新的在前
                this.annArr = data.sort((a, b) => {
                    const dateA = new Date(a.publishTime);
                    const dateB = new Date(b.publishTime);
                    return dateB - dateA;
                }).map(item => ({
                    ...item,
                    expanded: false,
                    time: item.publishTime
                }));
            } catch (error) {
                console.error('獲取公告時出錯：', error);
            }
        },
        //點擊切換expanded的ture/false屬性
        toggleContent(index) {
            if (this.expandedIndex === index) {
                // 如果點擊的是當前展開的公告，則收起
                this.expandedIndex = null;
            } else {
                // 否則，展開新點擊的公告
                this.expandedIndex = index;
            }
        },
        handleSearchResults(filteredAnnouncements) {
            this.annArr = filteredAnnouncements.map(item => ({
                ...item,
                time: item.publishTime
            }));
            this.expandedIndex = null; // 重置展開狀態
        }
    },
    mounted() {
        this.fetchAnnouncements();
    }
};
</script>

<template>
    <div class="down">
        <div class="announcementSearch">
            <AnnouncementSearch @search-results="handleSearchResults" />
        </div>
        <div class="outArea">
            <h2>公告</h2>
            <div class="list">
                <div class="content" v-for="(data, index) in truncatedContent" :key="data.id"
                    @click="toggleContent(index)" :class="{ expanded: expandedIndex === index }">
                    <div class="up">
                        <span>{{ data.title }}</span>
                        <p class="date">{{ data.time }}</p>
                    </div>
                    <p class="truncated-content">{{ data.truncatedContent }}</p>
                    <p class="full-content">{{ data.content }}</p>
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

    .announcementSearch {
        padding-left: 128px;
    }

    .outArea {
        border-radius: 25px;
        height: 594px;
        border: 1px solid $dark02;
        // background-color: $dark02;
        display: flex;
        justify-content: space-between;
        padding-top: 10px;

        h2 {
            margin: 12px 0 0 30px;
        }

        .list {
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

            .content {
                width: 700px;
                border-radius: 20px;
                padding: 10px;
                overflow-y: hidden;
                background-color: $dark02;
                margin: 10px 15px;
                flex: 0 0 auto;
                /* 确保每个项目不会缩小并且保持其内容的宽度 */
                margin-top: 10px;
                /* 可选的间距 */
                //以下為點擊個別公告會展開的參數
                cursor: pointer;
                transition: max-height 0.5s ease, padding 0.5s ease;
                overflow: hidden;
                max-height: 80px;

                /* 初始高度，取决于你希望显示的截断内容的高度 */
                &.expanded {
                    max-height: 500px;
                    /* 展开后的高度，可以根据内容长度调整 */
                    padding-bottom: 20px;
                }

                .up {
                    display: flex;
                    justify-content: space-between;
                    padding-right: 10px;
                }

                span {
                    font-size: 16px;
                    font-weight: 600;
                    margin-left: 10px;
                }

                p {
                    margin-top: 5px;
                    font-size: 14px;
                    margin-left: 10px;
                }

                .truncated-content {
                    display: block;
                    transition: opacity 0.3s ease;
                }

                .full-content {
                    display: none;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }

                &.expanded {
                    .truncated-content {
                        display: none;
                    }

                    .full-content {
                        display: block;
                        opacity: 1;
                    }
                }
            }
        }
    }
}
</style>