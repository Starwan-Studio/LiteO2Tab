<template>


  <div>
    <swiper-container init="false" class="mainSwiper" :swiper-theme-color="'#b1d9ec'">
      <swiper-slide>

          <div class="negativepage">
            <br><br>
            <BlurryCard >
              <span><h2>LiteO2 Tab 更新日志</h2></span>
              <p>当前版本：{{version}}</p>

              <NoticeBox/>
            </BlurryCard>
          </div>

      </swiper-slide>
      <swiper-slide>
        <br>
        <transition name="fade">
          <SearchPage v-if="ature" />
        </transition>
      </swiper-slide>
      <swiper-slide>
        <br>
        <transition name="fade">
          <div class="secpage" v-if="ature">这里啥都木有~</div>
        </transition>
      </swiper-slide>
    </swiper-container>

    <AppFooter />
  </div>
</template>

<script>
import AppFooter from './components/Footer.vue'
import SearchPage from './components/SearchPage.vue'
import BlurryCard from './components/NegativePageComponents/BlurryCard.vue'
import NoticeBox from './components/NoticeBox.vue'

export default {
  name: 'LiteO2',
  components: {
    AppFooter,
    SearchPage,
    BlurryCard,
    NoticeBox
  },
  data() {
    return {
      showModal: false,
      ature: true
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

  },
  computed: {
    version(){
      return this.$version
    }
  },
  mounted() {

    if (!this.isMobileDevice()) {
      document.body.style.backgroundImage = "url(" + require('@/assets/4af89134-3a01-4051-b130-ddd39cb14b19.png') + ")"
      document.body.style.backgroundSize = "cover"
    } else {
      document.body.style.backgroundImage = "url(" + require('@/assets/117253385_p0.png') + ")"
      document.body.style.backgroundSize = "cover"
    }


    document.body.style.backgroundRepeat = "no-repeat"
    document.body.style.overflow = "hidden"

    const swiper = document.querySelector('.mainSwiper');
    Object.assign(swiper, {
      initialSlide: 1,
      swiperThemeColor: '#b1d9ec',
      pagination: {
        clickable: true,
      },
      on: {
        slideChangeTransitionStart: () => {

        },
        slideChangeTransitionEnd: () => {

        }
      },
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
    })

    swiper.initialize()
    document.querySelector(".mainSwiper").style.setProperty("--swiper-theme-color", "#b1d9ec")
    document.querySelector(".mainSwiper").shadowRoot.querySelector("div[part='pagination'").style.top = "0px";
    document.querySelector(".mainSwiper").shadowRoot.querySelector("div[part='pagination'").style.zIndex = "-1";
  }
}
</script>

<style scoped>
.full-background,
.dynamic-bg {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
  z-index: -1;
}

.negativepage {
  color: white;
  position: relative;
  top: 20px;
  /* display: flex;
  flex-wrap: wrap; */
  /* 允许换行 */
  gap: 2rem;
  /* 卡片之间的间距 */
  padding: 2rem;
  /* 容器内边距 */
  overflow: scroll;
  overflow-y: scroll;
  height: 100%;
  width: 100%;

}

.secpage {
  backdrop-filter: blur(15px);
  width: 100%;
  height: 100%;
  color: white;
}
</style>

<style>
@font-face {
  font-family: "平方时光体";
  src: url("font/平方时光体.ttf");
}

:root {
  font-family: "平方时光体";
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active in <2.1.8 */
  {
  opacity: 0;
}

.backdrop {  
    position: fixed;  
    top: 0;  
    left: 0;  
    right: 0;  
    bottom: 0;  
    background: rgba(255, 255, 255, 0.3); /* 半透明白色背景 */  
    backdrop-filter: blur(10px) saturation(150%); /* 模糊背后的内容 */  
    z-index: -1; /* 确保在内容之下 */  
    pointer-events: none; /* 确保不会阻挡交互 */  
  }  
  
  /* 滚动内容区域 */  
  .content {  
    position: relative;  
    z-index: 1; /* 确保在毛玻璃背景之上 */  
    height: 200vh; /* 使内容足够长以产生滚动条 */  
    padding: 20px;  
    box-sizing: border-box;  
    background: rgba(255, 255, 255, 0.1); /* 轻微半透明背景，可选 */  
  }  
  
  /* 自定义滚动条样式（webkit内核浏览器） */  
  ::-webkit-scrollbar {  
    width: 8px; /* 滚动条宽度 */  
    height: 8px; /* 如果需要垂直滚动条也自定义，可以设置这个属性 */  
  }  
  
  ::-webkit-scrollbar-thumb {  
    background-color: #ffffff; /* 滚动条滑块颜色为白色 */  
    border-radius: 4px; /* 圆角 */  
    border: 2px solid rgba(0, 0, 0, 0); /* 透明边框，用于增加滑块大小（因为webkit滚动条有内置padding） */  
  }  
  
  ::-webkit-scrollbar-thumb:hover {  
    background-color: #f0f0f0; /* 滑块悬停时稍微变暗 */  
  }  
  
  ::-webkit-scrollbar-track {  
    background-color: #f0f0f081; /* 滚动条轨道透明 */  
    border-radius: 4px; /* 圆角 */
  }  
  

</style>