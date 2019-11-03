<template>
  <div class="xak">
    <div class="text_video_title">
      <h2 class="text_video_ts wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.4s">
        <font>案例</font>展示
      </h2>
      <div id="underline"></div>
    </div>
    <div class="swiper-container swiper1">
      <div class="swiper-wrapper">
        <div class="swiper-slide selected">
          <a class="bottom_b">
            <img class="ls-is-cached lazyloaded" src="../assets/images/zhuzhai.png" />
            <span>住宅</span>
          </a>
        </div>
        <div class="swiper-slide">
          <a class="bottom_b">
            <img class="ls-is-cached lazyloaded" src="../assets/images/bieshu.png" />
            <span>别墅</span>
          </a>
        </div>
        <div class="swiper-slide">
          <a class="bottom_b">
            <img class="ls-is-cached lazyloaded" src="../assets/images/jiudian.png" />
            <span>酒店</span>
          </a>
        </div>
        <div class="swiper-slide">
          <a class="bottom_b">
            <img class="ls-is-cached lazyloaded" src="../assets/images/shangpu.png" />
            <span>商铺</span>
          </a>
        </div>
      </div>
    </div>

    <!-- swiper2 -->

    <div class="swiper-container swiper2">
      <div class="swiper-wrapper">
        <div class="swiper-slide swiper-no-swiping">
          <div class="lists">
            <ul>
              <li>
                <div class="cc" @click="winReload">
                  <router-link to="/case/0" @click="winReload">
                    <img
                      src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/al_bs_opsb1.jpg"
                    />
                  </router-link>
                </div>
              </li>
              <li>
                <div class="cc" @click="winReload">
                  <router-link to="/case/0" @click="winReload">
                    <img
                      src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/al_bs_opsb3.jpg"
                    />
                  </router-link>
                </div>
              </li>
              <li>
                <div class="cc" @click="winReload">
                  <router-link to="/case/0" @click="winReload">
                    <img
                      src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/al_bs_wkbm1.jpg"
                    />
                  </router-link>
                </div>
              </li>
              <li>
                <div class="cc" @click="winReload">
                  <router-link to="/case/0" @click="winReload">
                    <img
                      src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/al_bs_wkbm3.jpg"
                    />
                  </router-link>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="swiper-slide swiper-no-swiping">
          <div class="lists">
            <ul>
              <li>
                <div class="cc" @click="winReload">
                  <router-link to="/case/1">
                    <img
                      src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/al_jd_oyo1.jpg"
                    />
                  </router-link>
                </div>
              </li>
              <li>
                <div class="cc" @click="winReload">
                  <router-link to="/case/1" @click="winReload">
                    <img
                      src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/al_jd_oyo3.jpg"
                    />
                  </router-link>
                </div>
              </li>
              <li>
                <div class="cc" @click="winReload">
                  <router-link to="/case/1" @click="winReload">
                    <img
                      src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/al_jd_oyo6.jpg"
                    />
                  </router-link>
                </div>
              </li>
              <li>
                <div class="cc" @click="winReload">
                  <router-link to="/case/1" @click="winReload">
                    <img
                      src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/al_jd_zr5.jpg"
                    />
                  </router-link>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="swiper-slide swiper-no-swiping">
          <div class="lists">
            <ul>
              <li>
                <div class="cc" @click="winReload">
                  <router-link to="/case/2" @click="winReload">
                    <img
                      src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/al_sp_cg3.jpg"
                    />
                  </router-link>
                </div>
              </li>
              <li>
                <div class="cc" @click="winReload">
                  <router-link to="/case/2" @click="winReload">
                    <img
                      src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/al_sp_cg2.jpg"
                    />
                  </router-link>
                </div>
              </li>
              <li>
                <div class="cc" @click="winReload">
                  <router-link to="/case/2" @click="winReload">
                    <img
                      src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/al_sp_wfj1.jpg"
                    />
                  </router-link>
                </div>
              </li>
              <li>
                <div class="cc" @click="winReload">
                  <router-link to="/case/2" @click="winReload">
                    <img
                      src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/al_sp_wfj2.jpg"
                    />
                  </router-link>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="swiper-slide swiper-no-swiping">
          <div class="lists">
            <ul>
              <li>
                <div class="cc" @click="winReload">
                  <router-link to="/case/3" @click="winReload">
                    <img
                      src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/al_zz_zr6.jpg"
                    />
                  </router-link>
                </div>
              </li>
              <li>
                <div class="cc" @click="winReload">
                  <router-link to="/case/3" @click="winReload">
                    <img
                      src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/al_zz_zr7.jpg"
                    />
                  </router-link>
                </div>
              </li>
              <li>
                <div class="cc" @click="winReload">
                  <router-link to="/case/3" @click="winReload">
                    <img
                      src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/al_zz_zr8.jpg"
                    />
                  </router-link>
                </div>
              </li>
              <li>
                <div class="cc" @click="winReload">
                  <router-link to="/case/3" @click="winReload">
                    <img
                      src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/al_zz_zr9.jpg"
                    />
                  </router-link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import $ from "jquery";
import "swiper/dist/css/swiper.css";
import {
  swiper,
  swiperSlide,
  swiperContainer,
  Swiper
} from "vue-awesome-swiper";
export default {
  components: {
    swiper,
    swiperSlide,
    swiperContainer
  },
  name: "carrousel",
  data() {
    return {
      index1: "0",
      index2: "1",
      index3: "2"
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  methods: {
    winReload: function(cond) {
      window.location.reload();
    }
  },
  mounted() {
    $(function() {
      function setCurrentSlide(ele, index) {
        $(".swiper1 .swiper-slide").removeClass("selected");
        ele.addClass("selected");
      }
      var swiper1 = new Swiper(".swiper1", {
        slidesPerView: 5.5,
        paginationClickable: true,
        spaceBetween: 10,
        freeMode: true,
        loop: false,
        onTab: function(swiper) {
          var n = swiper1.clickedIndex;
        }
      });
      swiper1.slides.each(function(index, val) {
        var ele = $(this);
        ele.on("mouseover", function() {
          setCurrentSlide(ele, index);
          swiper2.slideTo(index, 500, true);
          swiper2.autoplay.start();
          _this.index1 = "2";
          _this.index2 = "2";
          _this.index3 = "2";
        });
      });
      var swiper2 = new Swiper(".swiper2", {
        direction: "horizontal",
        loop: true,
        autoplay: true,
        onSlideChangeEnd: function(swiper) {
          var n = swiper.activeIndex;
          setCurrentSlide($(".swiper1 .swiper-slide").eq(n), n);
        }
      });
    });
  }
};
</script>
<style scoped>
.xak {
  margin-top: 3rem;
  height: 30%;
  width: 100%;
}
.xak .text_video_title {
  text-align: center;
  color: #000;
  font-size: 0.9rem;
}
.xak .text_video_title font {
  color: #ff8400;
}

#underline {
  width: 6rem;
  height: 0.01rem;
  background: #fff;
  position: relative;
  left: 0;
  right: 0;
  top: 0.3rem;
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
.xak .swiper1 {
  width: 55%;
  margin-top: 1.3rem;
}
.xak .swiper1 .swiper-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 8%;
  margin: 1rem 0;
}
.xak .swiper1 .swiper-wrapper a.bottom_b {
  margin-right: 0;
  text-decoration: none
}
.xak .swiper1 .swiper-wrapper a img {
  width: 1.7rem;
  height: 1.7rem;
  margin: 0 auto;
  transition: all 0.4s;
}
.xak .swiper1 .swiper-wrapper a span {
  display: block;
  margin-top: 0.3rem;
  font-size: 0.8rem;
  color: #000;
}
.swiper1 .swiper-slide a:hover img {
  transform: scale(1.12);
}
.xak .swiper2 {
  width: 100%;
  /* border: 1px solid #000; */
}

.lists ul {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;
}
.lists ul li {
  width: 12rem;
  height: 15rem;
  text-align: center;
}
.lists ul li .cc {
  width: 98%;
  padding: 0 2%;
  height: 90%;
}

.lists ul li .cc img {
  width: 100%;
  height: 100%;
}

.lists ul li p {
  font: 700 0.2rem/1 "";
}
</style>