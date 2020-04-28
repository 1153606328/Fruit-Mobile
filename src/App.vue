<template>
  <div id="app">
    <van-nav-bar title="标题"  :fixed="true"  :placeholder="true" />
    <router-view />
    <Tabbar/>
  </div>
</template>
<script>
import Tabbar from './components/Tabbar';
export default {
  name: 'App',
  components: {
    Tabbar
  }
}
</script>
<style lang="less">
@import "./style/index.less";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
