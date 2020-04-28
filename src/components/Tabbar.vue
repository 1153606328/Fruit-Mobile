<template>
  <div class="tabbar">
    <van-tabbar v-model="active" route>
      <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/cart" icon="shopping-cart-o" dot>购物车</van-tabbar-item>
      <van-tabbar-item replace to="/order" icon="balance-list-o" badge="5">订单</van-tabbar-item>
      <van-tabbar-item replace to="/my" icon="friends-o" >我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'Tabbar',
  props: {
    title: String
  },
  data(){
    return{
      active:0
    }
  }
}
</script>
<style scoped lang="less">

</style>
