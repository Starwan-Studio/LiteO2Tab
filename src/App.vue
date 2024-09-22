<template>


  <div>
    <swiper-container init="false" class="mainSwiper" :swiper-theme-color="'#b1d9ec'" >
      <swiper-slide>
        <div class="negativepage"></div>
      </swiper-slide>
      <swiper-slide>
      <br><SearchPage/>
      </swiper-slide>
      <swiper-slide>
        <br><div class="negativepage">1919810</div>
      </swiper-slide>
    </swiper-container>

    <AppFooter />
  </div>


</template>

<script>
import AppFooter from './components/Footer.vue'
import SearchPage from './components/SearchPage.vue'

export default {
  name: 'App',
  components: {
    AppFooter,
    SearchPage

  },
  data() {
    return {
      showModal: false,
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
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      pagination: {
        clickable: true,
      }
    })
    swiper.initialize()
    document.querySelector(".mainSwiper").style.setProperty("--swiper-theme-color","#b1d9ec")
    document.querySelector(".mainSwiper").shadowRoot.querySelector("div[part='pagination'").style.top="0px";
    document.querySelector(".mainSwiper").shadowRoot.querySelector("div[part='pagination'").style.zIndex="-1";
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

.negativepage{
  backdrop-filter: blur(15px);
    width: 100%;
    height: 100%;
    color:white;
}
</style>

<style>
/* :root {
  --swiper-theme-color: #b1d9ec !important;
} */
</style>