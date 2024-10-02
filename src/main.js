import { createApp } from 'vue'
// import App from './App.vue'
import './css/LiteO2.css'
import { register } from 'swiper/element/bundle'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import LiteO2 from './LiteO2.vue'
import store from './store'
import { ls } from './localstorage'
library.add(faUser,faMagnifyingGlass)

register()
var app = createApp(LiteO2)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(store)
app.use(ls)

var new_date = new Date(); //新建一个日期对象，默认现在的时间
var old_date = new Date("2021-8-6 09:30:00"); //设置过去的一个时间点，"yyyy-MM-dd HH:mm:ss"格式化日期
var difftime = (new_date - old_date) / 1000; //计算时间差,并把毫秒转换成秒
var days = parseInt(difftime / 86400); // 天  24*60*60*1000 
var hours = parseInt(difftime / 3600) - 24 * days;    // 小时 60*60 总小时数-过去的小时数=现在的小时数 
var nowyear = new_date.getFullYear();

var version = "3.3.0";
app.config.globalProperties.$version = version;
app.config.globalProperties.$localStorage = ls

function MobileDeviceCheck() {

    let userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // 移动端特有的字符串  
    let mobileRegex = /iPhone|iPad|iPod|Android|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS|FxiOS|windows phone|MeeGo|SymbianOS|Palm|webOS|S60|Linux/i;

    if (mobileRegex.test(userAgent)) {
      return true;
    }



    return false;
  }

app.config.globalProperties.$isMobileDeviceVisit = MobileDeviceCheck()

console.log("%c" + "LiteO2 on Vue     Version " + version + "  \n本站从本地优化制作至今共：" + days + "天 " + hours + "小时 \n © 2020-" + nowyear + " 晚挽工作室 仅作参考学习使用，禁止用于任何商业活动", "color: rgb(0,187,255);");

app.mount('#app')