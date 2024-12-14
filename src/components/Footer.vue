<template>
    <footer class="footer">
        <span>
            <p id="footer-text">&copy; 2024 晚挽工作室</p>
        </span>
    </footer>
</template>

<script>
export default {
    name: "AppFooter"
    , mounted() {
        if (this.isMobileDevice()) {
            document.getElementsByClassName("footer")[0].style.height = document.getElementsByClassName("footer")[0].clientHeight - 15 + "px";
            // document.getElementById("footer-text").innerHTML = "&copy; 2020-" + new Date().getFullYear() + " <a href='https://space.bilibili.com/586310538?from=liteo2tab' target='_blank'>林晚晚ss.</a> | "+'<a href="https://icp.gov.moe/?keyword=20235217" target="_blank">萌ICP备20235217号</a>';
            document.getElementById("footer-text").innerHTML = "&copy; 2020-" + new Date().getFullYear() + " <a href='https://space.bilibili.com/586310538?from=liteo2tab' target='_blank'>林晚晚ss.</a>" + " | " + "如果你我从不孤独，又怎会踏上渐行渐远的道路" + "</a> | " + '<a href="https://icp.gov.moe/?keyword=20235217" target="_blank">萌ICP备20235217号</a>';
            document.getElementById("footer-text").style.fontSize = "15px";
        } else {
            document.getElementsByClassName("footer")[0].style.height = document.getElementsByClassName("footer")[0].clientHeight - 15 + "px";


            try {
                fetch('https://v1.hitokoto.cn')
                    .then(response => response.json())
                    .then(data => {
                        document.getElementById("footer-text").innerHTML = "&copy; 2020-" + new Date().getFullYear() + " <a href='https://space.bilibili.com/586310538?from=liteo2tab' target='_blank'>林晚晚ss.</a>" + " | <a href=' " + `https://hitokoto.cn/?uuid=${data.uuid}` + "' target='_blank' id='hitokoto_text'>" + data.hitokoto + "</a> | " + '<a href="https://icp.gov.moe/?keyword=20235217" target="_blank">萌ICP备20235217号</a>';
                    })
            } catch (e) {
                console.error(e)
                document.getElementById("footer-text").innerHTML = "&copy; 2020-" + new Date().getFullYear() + " <a href='https://space.bilibili.com/586310538?from=liteo2tab' target='_blank'>林晚晚ss.</a>" + " | " + "于高山之巅，方见大河奔涌；于群峰之上，更觉长风浩荡。" + "</a> | " + '<a href="https://icp.gov.moe/?keyword=20235217" target="_blank">萌ICP备20235217号</a>';
            }


        }
    },
    methods: {
        isMobileDevice() {

            let userAgent = navigator.userAgent || navigator.vendor || window.opera;

            // 移动端特有的字符串  
            let mobileRegex = /iPhone|iPad|iPod|Android|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS|FxiOS|windows phone|MeeGo|SymbianOS|Palm|webOS|S60|Linux/i;

            if (mobileRegex.test(userAgent)) {
                return true;
            }



            return false;
        },
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