<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbList" :key="item.src">
        <img :src="item.src" alt />
      </mt-swipe-item>
    </mt-swipe>
    <!-- <img src="../../images/dudu1.jpg" alt=""> -->
    <!-- <div class="mui-content"> -->
      <div class="list-item">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-home"></span>
            <div class="mui-media-body">注意事项</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-email">
            </span>
            <div class="mui-media-body">不能乱吃</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-chatbubble"></span>
            <div class="mui-media-body">关于洗澡</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-location"></span>
            <div class="mui-media-body">培养感情</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-search"></span>
            <div class="mui-media-body">感冒症状</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-phone"></span>
            <div class="mui-media-body">新手注意</div>
          </a>
        </li>
      </ul>
      </div>
    <!-- </div>  -->
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      lunbList: []
    };
  },
  created: function() {
    this.getLunb();
  },
  methods: {
    getLunb() {
      this.$http
        .get("https://www.easy-mock.com/mock/5d31af5c37871a197fe41e80/dd/lunbo")
        .then(function(date) {
          this.lunbList = date.body.data.lunb;
          console.log(this.lunbList);
        });
    }
  }
};
</script>
<style >
div.mint-swipe {
  height: 414px;
}
.mint-swipe-items-wrap div img {
  width: 100%;
}
.list-item{
  padding-bottom: 50px;
}
</style>

