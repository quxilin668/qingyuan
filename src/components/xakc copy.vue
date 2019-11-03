<template>
  <div class="bbox">
    <div class="container" style="overflow:-Scroll;overflow-y:hidden">
      <div class="swiper-container swiper1">
        <div class="swiper-wrapper">
          <div class="swiper-slide selected" style="4rem">
            <a  style="text-decoration:none;color:#000; ">
              <noscript>
                <img
                  src="https://demo.themepark.com.cn/cloudengineering/wp-content/uploads/sites/6/2018/08/icon_images_03.jpg"
                />
              </noscript>
              <span class>住宅</span>
              <span class="xxxian"></span>
            </a>
          </div>
          <div class="swiper-slide">
            <a  style="text-decoration:none;color:#000; ">
              <noscript>
                <img
                  src="https://demo.themepark.com.cn/cloudengineering/wp-content/uploads/sites/6/2018/08/icon_images_05.jpg"
                />
              </noscript>
              <span class>别墅</span>
              <span></span>
            </a>
          </div>
          <div class="swiper-slide">
            <a  style="text-decoration:none;color:#000; ">
              <noscript>
                <img
                  src="https://demo.themepark.com.cn/cloudengineering/wp-content/uploads/sites/6/2018/08/icon_images_07.jpg"
                />
              </noscript>
              <span class>酒店</span>
            </a>
          </div>
          <div class="swiper-slide">
            <a  style="text-decoration:none;color:#000; ">
              <noscript>
                <img
                  src="https://demo.themepark.com.cn/cloudengineering/wp-content/uploads/sites/6/2018/08/icon_images_09.jpg"
                />
              </noscript>
              <span class>商铺</span>
            </a>
          </div>
        </div>
      </div>
      <!-- swiper -->
      <div class="swiper-container swiper2">
        <div class="swiper-wrapper">
          <div class="swiper-slide swiper-no-swiping">
           <div class="box" v-if="this.index=='0'" >
              <div class="flex_h" style="width: 90%;padding:0 5%">
              <div class="one" style="width:23rem;">
                <img
                  src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/al_bs_opsb1.jpg"
                  width="100%"
                  height="300px"
                />
              </div>
              <div class="one" style="width:23rem;">
                <img
                  src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/al_bs_opsb2.jpg"
                  width="100%"
                  height="300px"
                />
              </div>
              <div class="one" style="width:23rem;">
                <img
                  src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/al_bs_opsb3.jpg"
                  width="100%"
                  height="300px"
                />
              </div>
              <div class="one" style="width:23rem;">
                <img
                  src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/al_bs_wkbm1.jpg"
                  width="100%"
                  height="300px"
                />
              </div>
              <div class="one" style="width:23rem;">
                <img
                  src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/al_bs_wkbm2.jpg"
                  width="100%"
                  height="300px"
                />
              </div>
              <div class="one" style="width:23rem;">
                <img
                  src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/al_bs_wkbm3.jpg"
                  width="100%"
                  height="300px"
                />
              </div>
            </div>
           </div>
           z
              <div class="box" v-if="this.index=='2'">
                 <div class="box" style="margin:0 auto">
              <h4 class="text_video_title">王妃家烤肉</h4>
              <div class="flex_h" style="width: 90%;padding:0 3.7%;">
                <div class="one" style="width:20rem; ">
                  <img
                    src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/al_sp_wfj1.jpg"
                    width="100%"
                    height="300px"
                  />
                </div>
                <div class="one" style="width:20rem; text-align:center;">
                  <img
                    src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/al_sp_wfj2.jpg"
                    width="100%"
                    height="300px"
                  />
                </div>
                <div class="one" style="width:20rem; text-align:center;">
                  <img
                    src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/al_sp_wfj3.jpg"
                    width="100%"
                    height="300px"
                  />
                </div>
                <div class="one" style="width:20rem; text-align:center;">
                  <img
                    src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/al_sp_wfj4.jpg"
                    width="100%"
                    height="300px"
                  />
                </div>
              </div>
              <h4 class="text_video_title">船歌鱼水饺</h4>
              <div class="flex_h" style="width: 90%;padding:0 3.7%; border">
                <div class="one" style="width:20rem; ">
                  <img
                    src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/al_sp_cg1.jpg"
                    width="100%"
                    height="300px"
                  />
                </div>
                <div class="one" style="width:20rem; text-align:center;">
                  <img
                    src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/al_sp_cg2.jpg"
                    width="100%"
                    height="300px"
                  />
                </div>
                <div class="one" style="width:20rem; text-align:center;">
                  <img
                    src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/al_sp_cg3.jpg"
                    width="100%"
                    height="300px"
                  />
                </div>
                <div class="one" style="width:20rem; text-align:center;">
                  <img
                    src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/al_sp_cg4.jpg"
                    width="100%"
                    height="300px"
                  />
                </div>
              </div>
              <h4 class="text_video_title">披头士</h4>
              <div class="flex_h" style="width: 90%;padding:0 3.7%; border">
                <div class="one" style="width:20rem; ">
                  <img
                    src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/al_sp_pts1.jpg"
                    width="100%"
                    height="300px"
                  />
                </div>
                <div class="one" style="width:20rem; text-align:center;">
                  <img
                    src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/al_sp_pts2.jpg"
                    width="100%"
                    height="300px"
                  />
                </div>
                <div class="one" style="width:20rem; text-align:center;">
                  <img
                    src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/al_sp_pts3.jpg"
                    width="100%"
                    height="300px"
                  />
                </div>
                <div class="one" style="width:20rem; text-align:center;">
                  <img
                    src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/al_sp_pts4.jpg"
                    width="100%"
                    height="300px"
                  />
                </div>
              </div>
            </div>
              </div>
              <div class="box" v-if="this.index=='1'">
                <div class="flex_h" style="width: 90%;padding:0 2%">
              <div class="one" style="width:20rem;">
                <img
                  src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/al_jd_oyo1.jpg"
                  width="100%"
                  height="300px"
                />
              </div>
              <div class="one" style="width:20rem;">
                <img
                  src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/al_jd_oyo2.jpg"
                  width="100%"
                  height="300px"
                />
              </div>
              <div class="one" style="width:20rem;">
                <img
                  src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/al_jd_oyo3.jpg"
                  width="100%"
                  height="300px"
                />
              </div>
              <div class="one" style="width:20rem;">
                <img
                  src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/al_jd_oyo4.jpg"
                  width="100%"
                  height="300px"
                />
              </div>
              <div class="one" style="width:20rem;">
                <img
                  src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/al_jd_zr1.jpg"
                  width="100%"
                  height="300px"
                />
              </div>
              <div class="one" style="width:20rem;">
                <img
                  src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/al_jd_zr2.jpg"
                  width="100%"
                  height="300px"
                />
              </div>
              <div class="one" style="width:20rem;">
                <img
                  src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/al_jd_zr3.jpg"
                  width="100%"
                  height="300px"
                />
              </div>
              <div class="one" style="width:20rem;">
                <img
                  src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/al_jd_zr4.jpg"
                  width="100%"
                  height="300px"
                />
              </div>
              <div class="one" style="width:20rem;">
                <img
                  src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/al_jd_zr5.jpg"
                  width="100%"
                  height="300px"
                />
              </div>
            </div>
          </div>
          </div>
          <div class="swiper-slide swiper-no-swiping">
            <div class="flex_h" style="width: 90%;padding:0 3%">
              <div class="one" style="width:20rem;">
                <img
                  src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/al_jd_oyo1.jpg"
                  width="100%"
                  height="300px"
                />
              </div>
              <div class="one" style="width:20rem;">
                <img
                  src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/al_jd_oyo2.jpg"
                  width="100%"
                  height="300px"
                />
              </div>
              <div class="one" style="width:20rem;">
                <img
                  src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/al_jd_oyo3.jpg"
                  width="100%"
                  height="300px"
                />
              </div>

              <div class="one" style="width:20rem;">
                <img
                  src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/al_jd_oyo4.jpg"
                  width="100%"
                  height="300px"
                />
              </div>
              <div class="one" style="width:20rem;">
                <img
                  src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/al_jd_zr1.jpg"
                  width="100%"
                  height="300px"
                />
              </div>
              <div class="one" style="width:20rem;">
                <img
                  src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/al_jd_zr2.jpg"
                  width="100%"
                  height="300px"
                />
              </div>
              <div class="one" style="width:20rem;">
                <img
                  src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/al_jd_zr3.jpg"
                  width="100%"
                  height="300px"
                />
              </div>
              <div class="one" style="width:20rem;">
                <img
                  src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/al_jd_zr4.jpg"
                  width="100%"
                  height="300px"
                />
              </div>
              <div class="one" style="width:20rem;">
                <img
                  src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/al_jd_zr5.jpg"
                  width="100%"
                  height="300px"
                />
              </div>
            </div>
          </div>
          <div class="swiper-slide swiper-no-swiping">
            <div class="box" style="margin:0 auto">
              <h4 class="text_video_title">王妃家烤肉</h4>
              <div id="underline"></div>
              <div class="flex_h" style="width: 90%;padding:0 3.7%; border">
                <div class="one" style="width:20rem; ">
                  <img
                    src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/al_sp_wfj1.jpg"
                    width="100%"
                    height="300px"
                  />
                </div>
                <div class="one" style="width:20rem; text-align:center;">
                  <img
                    src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/al_sp_wfj2.jpg"
                    width="100%"
                    height="300px"
                  />
                </div>
                <div class="one" style="width:20rem; text-align:center;">
                  <img
                    src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/al_sp_wfj3.jpg"
                    width="100%"
                    height="300px"
                  />
                </div>
                <div class="one" style="width:20rem; text-align:center;">
                  <img
                    src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/al_sp_wfj4.jpg"
                    width="100%"
                    height="300px"
                  />
                </div>
              </div>
              <h4 class="text_video_title">船歌鱼水饺</h4>
              <div class="flex_h" style="width: 90%;padding:0 3.7%; border">
                <div class="one" style="width:20rem; ">
                  <img
                    src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/al_sp_cg1.jpg"
                    width="100%"
                    height="300px"
                  />
                </div>
                <div class="one" style="width:20rem; text-align:center;">
                  <img
                    src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/al_sp_cg2.jpg"
                    width="100%"
                    height="300px"
                  />
                </div>
                <div class="one" style="width:20rem; text-align:center;">
                  <img
                    src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/al_sp_cg3.jpg"
                    width="100%"
                    height="300px"
                  />
                </div>
                <div class="one" style="width:20rem; text-align:center;">
                  <img
                    src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/al_sp_cg4.jpg"
                    width="100%"
                    height="300px"
                  />
                </div>
              </div>
              <h4 class="text_video_title">披头士</h4>
              <div class="flex_h" style="width: 90%;padding:0 3.7%; border">
                <div class="one" style="width:20rem; ">
                  <img
                    src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/al_sp_pts1.jpg"
                    width="100%"
                    height="300px"
                  />
                </div>
                <div class="one" style="width:20rem; text-align:center;">
                  <img
                    src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/al_sp_pts2.jpg"
                    width="100%"
                    height="300px"
                  />
                </div>
                <div class="one" style="width:20rem; text-align:center;">
                  <img
                    src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/al_sp_pts3.jpg"
                    width="100%"
                    height="300px"
                  />
                </div>
                <div class="one" style="width:20rem; text-align:center;">
                  <img
                    src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/al_sp_pts4.jpg"
                    width="100%"
                    height="300px"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide swiper-no-swiping">
            <div class="flex_h" style="width: 90%;padding:0 5%">
                  <div class="one" style="width:23rem;">
                    <img
                      src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/al_zz_zr1.jpg"
                      width="100%"
                      height="300px"
                    />
                    <h3 style="width: 90%;">双城苑-西苑</h3>
                    <hr />
                    <p style="width:20rem;">面积：40m² | 房型：1室1厅 | 风格：深呼吸1.0</p>
                  </div>
                <div class="one" style="width:23rem;">
                  <img
                    src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/al_zz_zr2.jpg"
                    width="100%"
                    height="300px"
                  />
                  <h3 style="width: 90%;">芳华路630弄小区</h3>
                  <hr />
                  <p style="width:20rem;">面积：29.1m² | 房型：1室1厅 | 风格： 清语3.1</p>
                </div>
                <div class="one" style="width:23rem;">
                  <img
                    src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/al_zz_zr3.jpg"
                    width="100%"
                    height="300px"
                  />
                  <h3 style="width: 90%;">自由二村</h3>
                  <hr />
                  <p style="width:20rem;">面积：13m² | 房型：3室1厅 | 风格：米苏4.0</p>
                </div>
                <div class="one" style="width:23rem;">
                  <img
                    src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/al_zz_zr4.jpg"
                    width="100%"
                    height="300px"
                  />
                  <h3 style="width: 90%;">潍坊二村</h3>
                  <hr />
                  <p style="width:20rem;">面积：32m² | 房型：1室1厅 | 风格：优格3.1</p>
                </div>
                <div class="one" style="width:23rem;">
                  <img
                    src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/al_zz_zr5.jpg"
                    width="100%"
                    height="300px"
                  />
                  <h3 style="width: 90%;">临沂二村</h3>
                  <hr />
                  <p style="width:20rem;">面积：40m² | 房型：1室1厅 | 风格：清语3.1</p>
                </div>
                <div class="one" style="width:23rem;">
                  <img
                    src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/al_zz_zr6.jpg"
                    width="100%"
                    height="300px"
                  />
                  <h3 style="width: 90%;">明丰佳园</h3>
                  <hr />
                  <p style="width:20rem;">面积：36m² | 房型：1室1厅 | 风格：清语3.1</p>
                </div>
                <div class="one" style="width:23rem;">
                  <img
                    src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/al_zz_zr7.jpg"
                    width="100%"
                    height="300px"
                  />
                  <h3 style="width: 90%;">金利公寓</h3>
                  <hr />
                  <p style="width:20rem;">面积：14m² | 房型：3室1厅 | 风格：米苏4.0</p>
                </div>
                <div class="one" style="width:23rem;">
                  <img
                    src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/al_zz_zr8.jpg"
                    width="100%"
                    height="300px"
                  />
                  <h3 style="width: 90%;">陆家嘴花园</h3>
                  <hr />
                  <p style="width:20rem;">面积：47m² | 房型：1室1厅 | 风格：优格3.1</p>
                </div>
                  <div class="one" style="width:23rem;">
                    <img
                      src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/al_zz_zr9.jpg"
                      width="100%"
                      height="300px"
                    />
                    <h3 style="width: 90%;">旭辉浦江国际</h3>
                    <hr />
                    <p style="width:20rem;">面积：33.69m² | 房型：1室1厅 | 风格：优格3.1</p>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
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
      index:'0',
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    // var root = document.body.offsetWidth;
    // var fragment = document.querySelector(".one img");
    // var ysh = fragment.height;
    // if (root < 400) {
    //   ysh = 200;
    // }
    this.index = this.$route.params;
    console.log(this.index)
    var _this = this;
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
          _this.index='0'
        });
      });

      var swiper2 = new Swiper(".swiper2", {
       
        direction: "horizontal", 
        loop: true,
        autoplay: false,
        autoHeight: true,
        onSlideChangeEnd: function(swiper) {
          var n = swiper.activeIndex;
          setCurrentSlide($(".swiper1 .swiper-slide").eq(n), n);
          swiper1.slideTo(n, 500, false);
        }
      });
    });
  }
};
</script>
<style scoped>
.box{
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
.bbox {
  margin-bottom: 0.5rem;
}
.bbox > .container {
  overflow: hidden;
}
.bbox > .container > .swiper1 {
  width: 100%;
  text-align: center;
}
.swiper1 .selected {
  color: #ff8400;
  margin-left: 15rem;
}
.swiper1 .swiper-wrapper {
  display: flex;
  justify-content: center;
  width: 60%;
  text-align: center;
  margin-bottom: 2rem;
  margin: 0 auto;
}
.swiper1 > .swiper-wrapper > .swiper-slide {
  height: 5rem;
  border-bottom: 0.3rem solid #fff;
  text-align: center;
  font-size: 1rem;
  height: 1rem;
  display: flex;
  margin-top: 3rem;
  justify-content: center;
  align-items: center;
  margin-left: 0.5rem;
  cursor: pointer;
  margin-bottom: 2rem;
}
.swiper1 .swiper-slide a span {
  margin-bottom: 2.2rem;
  text-align: center;
  display: block;
  font-size: 1rem;
  width: 4rem;
  padding-left: 0.5rem;
  text-align: center;
}
.swiper1 .swiper-slide a img {
  transition: all 0.4s;
}
.swiper1 .swiper-slide a:hover img {
  transform: scale(1.12);
}
.swiper1 .swiper-wrapper .swiper-slide:hover {
  border-bottom: 0.3rem solid #ff8400;
  transform: scale(0.9);
}
.swiper2 {
  width: 96%;
}
.swiper2 .swiper-wrapper h3 {
  font-size: 1rem;
}
.swiper2 .swiper-wrapper .swiper-slide .flex_h {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 5%;
  background: rgba(0, 0, 0, 0.05);
}
.swiper2 .swiper-wrapper .swiper-slide .box {
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}
.swiper2 .swiper-wrapper .swiper-slide .flex_h .one {
  padding: 2rem 0 0 1rem;
  margin: 0;
  width: 15rem;
}
.swiper2 .swiper-wrapper .swiper-slide .flex_h .one {
  position: relative;
  width: 100%;
  overflow: hidden;
}
.swiper2 .swiper-wrapper .swiper-slide .flex_h .one h5 {
  width: 100%;
  position: relative;
  text-align: center;
  left: 0;
  top: -1.6875rem /* 75/16 */;
  padding: 0.2rem 0;
  color: #fff;
  background: #000;
  transition: all 0.6s;
}
.swiper2 .swiper-wrapper .swiper-slide .flex_h .one:last-child {
  padding-bottom: 2rem;
}
.swiper2 .swiper-wrapper .swiper-slide .flex_h .one p {
  font-size: 0.8rem;
  width: 60%;
}
.swiper2 .swiper-wrapper .swiper-slide .flex_h .one h3 {
  padding-top: 0.5rem;
  color: black;
}
.swiper2 .swiper-wrapper .swiper-slide .flex_h .one img {
  height: 15rem;
}

.text_video_title {
  box-sizing: border-box;
  padding: 1rem 3rem;
  font-size: 1.5rem;
  padding-bottom: 0.5rem;
}
</style>

