<template>
    <div class="setting-page-box">
        <h2>设置</h2>
        <div class="setting-page-content">
            <div name="wallpaper">
                <h3>壁纸</h3>
                <p>（推荐大小：2500x1548【电脑】2021x2688【手机】<span color="red">其他分辨率可能出现问题！</span>）</p>
                <hr class="dashed-white">
                <label>自定义壁纸：&nbsp;&nbsp;<span><input type="input" name="wallpaper" placeholder="请输入图片链接"></span></label>
            </div>
        </div>
        <input @click="savebtnClickTrigger" type="button" class="liteo2-button" value="保存">
    </div>
</template>
<script>
export default {
    name: "SettingPage",
    methods:{
        savebtnClickTrigger(){
            this.$emit("savebtnClickTrigger")
    },
    
    },
    mounted(){
        
    }}
</script>
<style scoped>
.setting-page-box {
    overflow: hidden;
}

.setting-page-content {
    overflow: scroll;
    overflow-x: hidden;
}
</style>