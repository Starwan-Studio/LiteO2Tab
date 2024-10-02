<template>  
    <transition name="toast">  
      <div v-if="visible" class="toast-container">  
        <div class="toast-message">{{ message }}</div>  
      </div>  
    </transition>  
  </template>  
    
  <script>  
  /* eslint-disable */
  export default {  
    props: {  
      message: {  
        type: String,  
        required: true  
      },  
      visible: {  
        type: Boolean,  
        required: true  
      }  
    }  
  }  
  </script>  
    
  <style scoped>  
  .toast-container {  
    position: fixed;  
    right: 20px;  
    bottom: 20px;  
    width: 300px;  
    padding: 15px;  
    background-color: #333;  
    color: #fff;  
    border-radius: 5px;  
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);  
    opacity: 0;  
    transform: translateY(100%);  
    transition: all 0.3s ease-in-out;  
  }  
    
  .toast-container.toast-enter-active,  
  .toast-container.toast-leave-active {  
    opacity: 1;  
    transform: translateY(0);  
  }  
    
  .toast-container.toast-leave-active {  
    transition: all 0.3s ease-in-out reverse;  
  }  
  </style>