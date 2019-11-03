<template>
<div class="lunbo">
    <swiper  ref="mySwiper">
    <swiper-slide>
    <div class="box">
      <img src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/sy.jpg">
    </div>
      <div class="top_video_gundong">
      <div class="gdong1"></div>
      <div class="gdong2"></div>
      <div class="gdong3"></div></div>
    </swiper-slide>
  </swiper>
  <div class="money">
    <p class="wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.4s">努力造就实力 态度决定高度</p>
  </div>
</div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
components: {
    swiper,
    swiperSlide
  },
data(){
      return {
        swiperOption: {
         
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    }
}
</script>
<style scoped>
.lunbo{
  height:40%;
  position:relative;
  /* border: 1px solid #000; */
  }
.box{
  width:100%;
  height: 100%;
}
.top_video_gundong {
  position: absolute;
  top: 60%;
  left: 50%;
  border: solid .1875rem /* 3/16 */ #fff;
  width: 1.625rem /* 26/16 */;
  height: 2.5rem /* 40/16 */;
  border-radius: 1.25rem /* 20/16 */;
  display: inline-block;
}
.top_video_gundong .gdong1 {
    top: 2.1875rem /* 35/16 */;
    -webkit-animation: trackBallSlide 5s ease-out infinite;
    animation: trackBallSlide 5s ease-out infinite;
}
.top_video_gundong div {
    width: .3125rem /* 5/16 */;
    height: .3125rem /* 5/16 */;
    background: #fff;
    border-radius: .3125rem /* 5/16 */;
    position: absolute;
    left: .5rem /* 10/16 */;
}

.top_video_gundong .gdong2 {
    top: 2.8125rem /* 45/16 */;
    -webkit-animation: trackBallSlide 5s ease-out infinite;
    animation: trackBallSlide 5s ease-out infinite;
}
.top_video_gundong .gdong3 {
    top: .9375rem /* 15/16 */;
}
.box img{width: 100%;height: 100%;}
.money{padding:3% 0%;text-align: center;position: absolute;top:50%;left:50%;color:#fff;z-index:999;transform: translate(-50%,-50%);font-size:2rem;}
@keyframes trackBallSlide{
  0% {
    opacity: 1;
    /* -webkit-transform: scale(1) translateY(-20px); */
    transform: scale(1) translateY(-1.25rem /* 20/16 */);
}
6% {
    opacity: 1;
    /* -webkit-transform: scale(.9) translateY(5px); */
    transform: scale(.9) translateY(.3125rem /* 5/16 */);
}
14% {
    opacity: 0;
    /* -webkit-transform: scale(.4) translateY(40px); */
    transform: scale(.4) translateY(2.5rem /* 40/16 */);
}
15%, 19% {
    opacity: 0;
    transform: scale(.4) translate(-1.25rem)
}
28%, 29.99% {
    opacity: 1;
    /* -webkit-transform: scale(1) translateY(-20px); */
    transform: scale(1) translateY(-1.25rem);
}
30% {
    opacity: 1;
    /* -webkit-transform: scale(1) translateY(-20px); */
    transform: scale(1) translateY(-1.25rem);
}
36% {
    opacity: 1;
    /* -webkit-transform: scale(.9) translateY(5px); */
    transform: scale(.9) translateY(.3125rem );
}
44% {
    opacity: 0;
    -webkit-transform: scale(.4) translateY(40px);
    transform: scale(.4) translateY(40px);
}
45%,49%{
  opacity: 1;
  transform: scale(.4) translateY(-1.25rem);
}
58% ,59.99%{
    opacity: 1;
    /* -webkit-transform: scale(1) translateY(-20px); */
    transform: scale(1) translateY(-1.25rem);
}
60% {
    opacity: 1;
    /* -webkit-transform: scale(1) translateY(-20px); */
    transform: scale(1) translateY(-1.25rem);
}
66%{
   opacity: 1;
    /* -webkit-transform: scale(.9) translateY(.3125rem 5/16); */
    transform: scale(.9) translateY(.3125rem );
}
74%{
  opacity: 0;
  -webkit-transform: scale(.4) translateY(40px);
  transform: scale(.4) translateY(40px);
}
 75%,79% {
    opacity: 0;
    /* -webkit-transform: scale(.4) translateY(-20px); */
    transform: scale(.4) translateY(-1.25rem);
}
88%,100% {
    opacity: 1;
    /* -webkit-transform: scale(1) translateY(-20px); */
    transform: scale(1) translateY(-1.25rem);
}
}

</style>
