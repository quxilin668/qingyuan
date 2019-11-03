<template>
  <div class="flu">
    <a class="list_nav_title">
      <div class="list_nav_ts">
        <font>合作</font>伙伴
      </div>
      <div id="underline"></div>
    </a>
    <swiper :options="swiperOption" ref="mySwiper" class="swiper">
      <!-- slides -->
      <swiper-slide>
        <div class="swiper-slide">
          <div class="obx">
            <div class="l">
              <div class="l-l">
                <img src="../assets/images/ycdc.png" />
              </div>
              <div class="l-c">
                <span style="font:1rem/1.2rem '';">银城使命我们致力于持续不断地创新以品质领先、服务卓越、绿色节能作为企业的核心竞争力</span>
              </div>
            </div>
            <div class="c">
              <div class="c-l">
                <img src="../assets/images/zy.png" />
              </div>
              <div class="c-c">
                <span
                  style="font:1rem/1.2rem '';"
                >共筑卓越人生,以卓越的产品服务，为客户筑就消费体验与快乐感,以卓越的企业贡献,为社会筑就标杆效应与进步感</span>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="swiper-slide">
          <div class="obx">
            <div class="l">
              <div class="l-l">
                <img src="../assets/images/oyo.png" />
              </div>
              <div class="l-c">
                <span
                  style="font:1rem/1.2rem '';"
                >OYO酒店秉承“体验标准化”理念，竭力为住客提供良好及贴心的入住服务，为每一位的用户带来品质的旅居体验</span>
              </div>
            </div>
            <div class="c">
              <div class="c-l">
                <img src="../assets/images/lj.gif" />
              </div>
              <div class="c-c">
                <span style="font:1rem/1.2rem '';">链家是以数据驱动的全价值链房产服务平台。并开展安心服务承诺，建立亿元保障金，保证消费者交易安全。</span>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="swiper-slide">
          <div class="obx">
            <div class="l">
              <div class="l-l">
                <img src="../assets/images/slh.png" />
              </div>
              <div class="l-c">
                <span style="font:1rem/1.2rem '';">世联行,持续推动行业进步为己任，以客户为中心，为“让更多人享受真正的不动产服务”而不断努力。</span>
              </div>
            </div>
            <div class="c">
              <div class="c-l">
                <img src="../assets/images/zr.gif" />
              </div>
              <div class="c-c">
                <span style="font:1rem/1.2rem '';">北京自如生活企业管理有限公司是一家提供品质居住产品与生活服务的科技独角兽公司。欢迎你的加入！</span>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="swiper-slide">
          <div class="obx">
            <div class="l">
              <div class="l-l t">
                <img src="../assets/images/zt.png" />
              </div>
              <div class="l-c">
                <span
                  style="font:1rem/1.2rem '';"
                >中天美好集团，全称中天美好集团有限公司，是中国企业500强——中天控股集团有限公司旗下“美好生活服务商”</span>
              </div>
            </div>
            <div class="c">
              <div class="c-l">
                <img src="../assets/images/pf2.png" />
              </div>
              <div class="c-c">
                <span
                  style="font:1rem/1.2rem '';"
                >上海浦东房地产有限公司上海浦东房地产集团是一家以房地产开发,走上了经济稳步增长、实力显著增强的发展之路。</span>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        notNextTick: true,
        loop: true,
        autoplay: {
          delay: 2000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        autoHeight: true,
        observeParents: true
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {}
};
</script>

<style scoped>
.flu {
  height: 30%;
  margin-top: 3rem;
}
.flu .list_nav_title {
  text-align: center;
  font-weight: 700;
  text-decoration: none;
  color:black
}
.flu .list_nav_title .list_nav_ts {
  font-size: 1.3rem;
  padding-bottom: 1.2rem;
}
.flu .list_nav_title font {
  color: #ff8400;
}
#underline {
  width: 6rem;
  height: 0.01rem;
  background: #fff;
  position: relative;
  left: 0;
  right: 0;
  top: -1rem;
  bottom: 0;
  margin: auto;
}

#underline:after {
  content: "";
  width: 2.8rem;
  height: 0.3rem;
  background: #ff8400;
  position: absolute;
  top: 100%;
  left: 30%;
  transition: all 0.8s;
}

#underline:hover:after {
  left: 0%;
  width: 100%;
}
.swiper {
  height: 20%;
}
.swiper .obx .l-l {
  height: 3rem;
  width: 8rem;
  margin: 2% 3% 0 3%;
}
.swiper .obx .l-l img {
  width: 100%;
  height: 100%;
}
.swiper .obx .l-l .t img {
  width: 4rem;
  height: 4rem;
}
.swiper .obx .l-c {
  height: 3rem;
  width: 8rem;
  margin-top: 2%;
  width: 70%;
}
.swiper .obx .l {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 1.1rem;
}
.swiper .obx .c {
  display: flex;
  justify-content: center;
  align-items: center;
}
.swiper .obx .c-l {
  height: 3rem;
  width: 8rem;
  margin: 0.3% 3% 0 3%;
}
.swiper .obx .c-l img {
  width: 100%;
  height: 100%;
}
.swiper .obx .c-c {
  margin-top: 0.3%;
  width: 70%;
  font: 1rem/1.2rem "";
}
.swiper .obx .l-c {
  margin-top: 0.3%;
  width: 70%;
  font: 1rem/1.2rem "";
}
</style>
