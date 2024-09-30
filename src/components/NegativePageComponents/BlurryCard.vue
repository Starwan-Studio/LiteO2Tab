<template>
    <div class="blurry-card">
        <div class="card-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "BlurryCard",
    mount() {

    }
}
</script>

<style scoped>
.blurry-card {
    border-radius: 2px;
    /* 圆角 */
    overflow: scroll;
    background-color: rgba(255, 255, 255, 0.233);
    /* 毛玻璃效果 */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    /* 阴影效果 */
    margin: 1rem;
    /* 外边距 */
    color: white;
    z-index: -2;
    height: 50vh;
}

.card-content {
    /* padding: 2rem;*/
    padding: 3px;
    height: 50vh;
        /* 半透明背景，用于毛玻璃效果的基础 */
        backdrop-filter: blur(15px) saturation(150%);
}
</style>