<script>

export default {
    data() {
        return {
            isActive: "",
        };
    },
    created() {

    },
    mounted() {
        //進入頁面時會直接顯示第一個內頁，也就算是主頁
        this.openTab(this.tabsName[0]);

    },
    computed: {

    },
    components: {

    },
    props: [
        //這邊接收父也就是vue頁面傳來想生成的陣列
        "tabsPresent" ,
        "tabsName"
    ],

    methods: {
        //哪個內頁被點擊時執行方法 isActive紀錄哪個內頁被點擊會變不同顏色
        openTab(tabName) {
            console.log(tabName)
            var i, tabcontent;
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }
            
            console.log(document.getElementById(tabName))
            document.getElementById(tabName).style.display = "block";
            this.isActive = tabName;
        },
    }
};
</script>

<template>
    <div class="tabArea">
        <!-- 父vue頁面傳來需要幾個內頁，v-for的是頁籤名稱 -->
        <div class="tabs">
            <button v-for="(item, index) in this.tabsPresent" class="tablink"
                :class="{ 'active': isActive === tabsName[index] }"
                @click="openTab(this.tabsName[index])">{{ item }}</button>
        </div>
        <!-- 同樣父vue頁面傳來需要幾個內頁 v-for插槽出來-->
        <div v-for="(item, index) in this.tabsName" :id="item" class="tabcontent">
            <slot :name="item"></slot>
        </div>
    </div>
</template>

<style scoped lang="scss">
.tabArea {
    display: flex;
}



.tablink {
    background-color: #f2f2f2;
    border: none;
    cursor: pointer;
    padding: 10px 20px;
    font-size: 18px;

    &.active {
        background-color: #ccc;
    }
}

/* 頁籤內容 */
.tabcontent {
    width: 85%;
    display: none;
    padding: 100px 10% 100px 15%;
    position: relative;
}
.tabs {
    width: 15%;
    display: flex;
    flex-direction: column;
}
/* 顯示選中的頁籤內容 */
.show {
    display: block;
}
</style>