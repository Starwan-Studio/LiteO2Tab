<template>
    <div class="search-box">
        <input type="text" class="search-input" v-model="searchQuery" @keyup.enter="handleSearch"
            @focus="showHistory = true" @blur="handleBlur" placeholder="搜点什么……" />

        <!-- <span class="search-icon" @click="handleSearch">&#x1F50D;</span> -->
        <font-awesome-icon class="search-icon" @click="handleSearch" icon="fa-solid fa-magnifying-glass" />
        <transition name="historybox">
        <div v-if="showHistory" class="history-list">
            <ul>
                <li v-for="(history, index) in searchHistory" :key="index" @click="selectHistory(history)">
                    {{ history }}
                </li>
            </ul>
        </div>  </transition>
    </div>
</template>

<script>
export default {
    name: 'SearchBox',
    components: {},
    data() {
        return {
            searchQuery: '',
            searchHistory: [],
            showHistory: false,
            historyTimeout: null,
            tot:null,
        };
    },
    methods: {
        handleSearch() {
            if (this.searchQuery.trim() !== '') {
                // 触发搜索操作，比如发送请求到后端  
                this.$emit('search', this.searchQuery);
                if (!this.searchHistory.includes(this.searchQuery)) {
                    this.searchHistory.unshift(this.searchQuery);

                    // 可选：限制搜索历史的长度  
                    if (this.searchHistory.length > 10) {
                        this.searchHistory.pop();
                    }
                }

                // 重置输入框  
                this.showHistory = false; // 可选：在搜索后隐藏历史记录
            }
        },
        selectHistory(history) {
            this.searchQuery = history;
            this.showHistory = false;
            // 可以在这里触发另一个搜索操作，如果用户选择了历史记录中的一项  
        },
        handleBlur() {
            // 在输入框失去焦点时隐藏历史记录（使用延迟，以防用户立即点击历史记录）  
            clearTimeout(this.historyTimeout);
            this.historyTimeout = setTimeout(() => {
                this.showHistory = false;
            }, 300); // 延迟时间可以根据需要调整  
        },
        onShowHistoryChange() {
            this.tot = setTimeout(()=>{
                var inputElement = document.querySelector(".search-input")
            document.querySelector('.history-list').style.width = inputElement.offsetWidth + 'px'
            },2000)
        }
    },
    mounted() {
        document.querySelector('.search-box input').addEventListener('focus', () => {
            var inputElement = document.querySelector(".search-input")
            var elementWidth = inputElement.offsetWidth
            var screenHalfWidth = document.body.offsetWidth / 2
            if (elementWidth > screenHalfWidth) {
                inputElement.style.width = elementWidth + 'px'
            }
        })

        document.querySelector('.search-box input').addEventListener('blur', () => {
            var inputElement = document.querySelector(".search-input")
            var elementWidth = inputElement.offsetWidth
            var screenHalfWidth = document.body.offsetWidth / 2
            if (elementWidth > screenHalfWidth) {
                inputElement.style.width = elementWidth + 'px'
            }
        })
    },
    watch: {
        showHistory(newVal) {
            if (newVal === true) {
                this.onShowHistoryChange()
            }else{
                clearInterval(this.tot)
            }
        }
    }
};
</script>

<style scoped>
.search-box {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.search-input {
    padding: 10px;
    padding-right: 40px;
    border: 2px solid #fff;
    border-radius: 4px;
    width: 300px;
    transition: width 0.3s ease;
    backdrop-filter: blur(15px);
    background-color: transparent;
    color: white;
}


.search-icon {
    color: white;
    position: relative;
    right: 25px;
    top: 10px;
    transform: translateY(-50%);
    cursor: pointer;
    pointer-events: none;
}

.search-box input:hover {
    border: 2px solid #ccc;
    /* 浅灰色边框，用于鼠标悬停 */
    /* 可以在这里添加其他悬停时的样式 */
}

.search-box input {
    margin: 0;
    /* 移除外边距 */
    padding: 10px;
    /* 保持内边距一致 */
    box-sizing: border-box;
    border: 2px solid #cccccc4b;
    /* 透明边框 */
}

.search-box input:focus {
    border: 2px solid #72b6ff;
    /* 边框颜色和宽度 */
    outline: none;
    /* 移除默认的焦点轮廓 */
    box-shadow: 0 0 5px #b1d9ec;
    /* 可选：添加阴影效果以增强视觉效果 */
    width: 50%;
}

.search-box input::placeholder,
textarea::placeholder {
    color: #fff;
    /* 浅灰色 */
    opacity: 1;
    /* 可选，确保透明度是满的 */
}

.history-list {
    position:fixed;
    top: 100%;
    /* 紧接在输入框下方 */
    background-color: white;
    border: 1px solid #ccc;
    z-index: 1;
    width:50%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}

.history-list ul {
    list-style: none;
    padding: 0;
    margin: 0;
    width:90%;
}

.history-list li {
    padding: 8px;
    cursor: pointer;
    width:100%;
}

.history-list li:hover {
    background-color: #eee;
}

.historybox-enter-active, .historybox-leave-active {  
  transition: opacity 0.3s;  
}  
.historybox-enter, .historybox-leave-to /* .fade-leave-active in <2.1.8 */ {  
  opacity: 0;  
}  
</style>