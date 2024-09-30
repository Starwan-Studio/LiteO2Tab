<template>
    <div class="search-box">
        <input type="text" class="search-input" v-model="searchQuery" @keyup.enter="handleSearch"
            placeholder="搜点什么……" />

        <span class="search-icon" @click="handleSearch">&#x1F50D;</span>
    </div>
</template>

<script>
export default {
    name: 'SearchBox',
    data() {
        return {
            searchQuery: '',
        };
    },
    methods: {
        handleSearch() {
            if (this.searchQuery.trim() !== '') {
                // 触发搜索操作，比如发送请求到后端  
                this.$emit('search', this.searchQuery);
            }
        },
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
</style>