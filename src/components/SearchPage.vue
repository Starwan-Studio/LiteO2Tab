<script>
import TimeBox from './SearchPageComponents/Time.vue'
import SearchBox from './SearchPageComponents/SearchBox.vue'

export default {
  name: 'SearchPage',
  data() {

  },components: {
      TimeBox,SearchBox
  },
  methods: {
    performSearch(query) {  
      // 在这里处理搜索逻辑，比如发送API请求  
      console.log('Searching for:', query);  
      //后面在处理，现在先使用baidu
      window.open(`https://www.baidu.com/s?wd=${query}`);
    },  
    handleInputChange(query) {  
      // 可以在这里处理输入框内容变化时的逻辑  
      console.log('Input changed:', query);  
    },  
}
}
</script>

<template>
<div style="height:100%">
    <br>
    <TimeBox/><br>
<SearchBox @search="performSearch" @input-changed="handleInputChange"/>
</div>
</template>