<script>
export default {
  name: "TimeBox",
  props:{
    accurtosec:{
      type: Boolean,
      default: false
    }
  },
  mounted(){
    this.StartTime()
  },
  data(){
    return{
      timerId: null,
  }},
  methods:{
      StartTime(){
        var clock = document.querySelector("h1[name='clock']")
        var clockContent = ""
        this.timerId = setInterval(() =>{
            const date = new Date()
            if(!this.accurtosec){
                clockContent = date.getHours().toString().padStart(2, '0') + ':' + date.getMinutes().toString().padStart(2, '0')
            }else{
                clockContent = date.getHours().toString().padStart(2, '0') + ':' + date.getMinutes().toString().padStart(2, '0') + ':' + date.getSeconds().toString().padStart(2, '0')
            }
            clock.innerHTML = clockContent
        })
      }
  }
}
</script>
<template>
    <div class="time">
        <h1 name="clock">00:00</h1>
    </div>
</template>

<style scoped>
.time{
    position: relative;
    text-align: center;
    color: #fff;
    top:10px;
}
</style>