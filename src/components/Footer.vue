<template>
    <footer class="footer">
        <span>
            <p id="footer-text">&copy; 2024 饹汐工作室</p>
        </span>
    </footer>
</template>

<script>
export default {
    name: "AppFooter"
    , mounted() {
        document.getElementsByClassName("footer")[0].style.height = document.getElementsByClassName("footer")[0].clientHeight - 15 + "px";
        document.getElementById("footer-text").innerHTML = "&copy; 2020-"+new Date().getFullYear()+" <a href='https://space.bilibili.com/586310538?from=liteo2tab' target='_blank'>林晚晚ss.</a>";
    }
}
</script>

<style scoped>
.footer {
    background-color: #00000059;
    /*    padding: 20px;*/
    text-align: center;
    position: fixed;
    bottom: 0;
    width: 100%;
    /* padding: 20px 0; */
    z-index: -1;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;

}

.footer span {
    color: white;
    backdrop-filter: blur(15px);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>