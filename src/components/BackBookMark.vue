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
$dark01:#e2e2e2;
$dark02:#c4c4c4;
$dark03:#b0b0b0;
$white:#FDFDFB;
$black:#878787;
.tabArea {
    height: 1080px;
    width: 1920px;
    display: flex;
    padding: 112px 220px 0 220px;
    margin: 0 auto;
    background: $black;
}


.tabs {
    height: 926px;
    width: 232.6px;
    // margin-top: 112px;
    background-color: $dark03;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.tablink {
    width: 172px;
    height: 80px;
    font-size: 26px;
    font-weight: 500px;
    background-color: $dark03;
    color: $white;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 45px;

    &.active {
        background-color: #6e5656;
    }
}

/* 頁籤內容 */
.tabcontent {
    display: none;
    padding-left: 27.4px;
    // position: relative;
}
/* 顯示選中的頁籤內容 */
.show {
    display: block;
}
</style>