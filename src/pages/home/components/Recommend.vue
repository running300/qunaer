<template>
  <div class="recommend">
    <div class="recommend-title">
      <span class="iconfont icon-heart">&#xe85c;</span>猜你喜欢
    </div>
    <ul>
      <router-link
        :to="'/detail/' + item.id"
        tag="li"
        class="list-item"
        v-for="item in recommendList"
        :key="item.id"
      >
        <div class="item-img">
          <img :src="item.imgUrl" alt />
        </div>
        <div class="item-img-tag">{{item.tag}}</div>
        <div class="item-info">
          <div class="inner-box">
            <div class="info-title">{{item.title}}</div>
            <div class="info-comment">
              <span class="iconfont icon-star">&#xe610;</span>
              <span class="iconfont icon-star">&#xe610;</span>
              <span class="iconfont icon-star">&#xe610;</span>
              <span class="iconfont icon-star">&#xe610;</span>
              <span class="iconfont icon-star">&#xe610;</span>
              <span class="comment-num">{{item.commentNum}}条评论</span>
            </div>
            <div class="info-price">
              <span class="price">
                ￥
                <em>{{item.price}}</em>
              </span>起
              <span class="district">{{item.district}}</span>
            </div>
          </div>
        </div>
      </router-link>
    </ul>
    <div class="findmore">查看更多</div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    recommendList: Array
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variables.styl';
@import '~@/assets/styles/mixin.styl';

div {
  box-sizing: border-box;
}

.recommend {
  background-color: #fff;
  width: 100%;
}

.recommend .findmore {
  width: 100%;
  height: 0.8rem;
  text-align: center;
  line-height: 0.8rem;
  color: #00afc7;
  background-color: #fff;
}

.recommend-title {
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
  background-color: #fff;
  ellipsis();
}

.recommend-title .icon-heart {
  color: #ff4040;
  margin: 0 0.1rem;
}

.list-item {
  position: relative;
  display: flex;
  width: 100%;
  height: 2.4rem;
  border-bottom: 1px solid #eee;
}

.list-item .item-img {
  width: 2.4rem;
  height: 2.4rem;
  padding: 0.2rem;
}

.list-item .item-img img {
  width: 100%;
  height: 100%;
}

.list-item .item-img-tag {
  position: absolute;
  top: 0.2rem;
  left: 0.2rem;
  width: 1.02rem;
  height: 0.38rem;
  background-image: url('https://img1.qunarzz.com/piao/fusion/1802/20/2ba6d10b17972e02.png');
  background-size: 100% 100%;
  font-size: 0.2rem;
  color: #fff;
  line-height: 0.38rem;
  text-indent: 0.04rem;
}

.list-item .item-info {
  flex: 1;
  min-width: 0;
  padding: 0.4rem 0.1rem;
}

.list-item .item-info .inner-box {
  width: 100%;
  height: 100%;
}

.list-item .item-info .inner-box .info-title {
  width: 100%;
  height: 0.6rem;
  line-height: 0.6rem;
  font-size: 0.32rem;
}

.list-item .item-info .inner-box .info-comment {
  position: relative;
  width: 100%;
  height: 0.4rem;
  line-height: 0.4rem;
  font-size: 0.24rem;
}

.item-info .inner-box .info-comment .icon-star {
  font-size: 0.2rem;
  color: #ffb436;
}

.item-info .inner-box .info-comment .comment-num {
  position: absolute;
  top: 0;
  left: 1.4rem;
  color: $lightTextColor;
}

.item-info .inner-box .info-price {
  position: relative;
  width: 100%;
  height: 0.6rem;
  line-height: 0.6rem;
  color: $lightTextColor;
}

.item-info .inner-box .info-price span {
  font-size: 0.24rem;
}

.item-info .inner-box .info-price .district {
  position: absolute;
  bottom: 0;
  right: 0.24rem;
}

.item-info .inner-box .info-price .price {
  color: #ff8300;
}

.item-info .inner-box .info-price .price em {
  font-size: 0.4rem;
}
</style>