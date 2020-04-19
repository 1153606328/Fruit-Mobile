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
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad" class="listBOX">
      <!-- <van-cell v-for="item in list" :key="item" :title="item" /> -->
      <div class="listItem" v-for="item in list" :key="item">
        <div class="itemImg"><div class="itemTitle">这里是标题描述这里是标题描述这里是标题描述这里是标题描述这里是标题描述</div></div>
        <van-row type="flex" justify="space-between">
          <van-col span="12">价格：100</van-col>
          <van-col span="12">销量: 6</van-col>
        </van-row>
      </div>
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
.banner {
  img {
    width: 100%;
  }
}
.listBOX{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px;
}
.listItem{
  width: 160px;
  padding: 5px;
  .itemImg{
    background-image: url(https://img.yzcdn.cn/vant/empty-image-default.png);
    height: 160px;
    background-size: 100%;
    position: relative;
  }
  .itemTitle{
    position: absolute;
    bottom: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}
</style>