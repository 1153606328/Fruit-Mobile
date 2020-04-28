<template>
  <div class="home">
    <!--轮播图-->
    <div class="banner">
      <van-swipe :autoplay="3000" height="200">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- list列表 -->
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
      class="listBOX"
    >
      <!-- <van-cell v-for="item in list" :key="item" :title="item" /> -->
      <!-- <div class="listItem" v-for="item in list" :key="item">
        <div class="itemImg"><div class="itemTitle">这里是标题描述这里是标题描述这里是标题描述这里是标题描述这里是标题描述</div></div>
        <van-row type="flex" justify="space-between" class="mb5">
          <van-col span="12">价格：100</van-col>
          <van-col span="12">销量: 6</van-col>
        </van-row>
      </div>-->
      <van-card
        num="2"
        price="2.00"
        desc="描述信息"
        title="商品标题"
        thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
        v-for="item in list" :key="item"
      />
    </van-list>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "Home",
  components: {},
  data() {
    return {
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg"
      ],
      list: [],
      loading: false,
      finished: false
    };
  },
  methods: {
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    }
  }
};
</script>
<style lang="less">
.mb5 {
  margin-bottom: 5px;
}
</style>