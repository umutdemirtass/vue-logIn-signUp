<template>
  <div class="vue">
    <appHeader></appHeader>
    <appMain></appMain> 
    
  </div>
</template>

<script>
import Header from './components/Nav'
import Main from './components/Main'


export default {
  name: 'App',
  components :{
    appHeader : Header,
    appMain : Main
  }
}
</script>

