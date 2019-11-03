<template>
<div class="lunbo">
    <swiper  ref="mySwiper">
    <swiper-slide><div class="box"><video muted autoplay="autoplay" loop="loop" width="100%" height="100%" style="object-fit:fill" >
     <source src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/video/index.mp4" type="video/mp4">
    </video></div></swiper-slide>
  </swiper>
  <div class="money">
    <p class="wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.4s">努力造就实力 态度决定高度</p>
    <van-icon name="arrow-down" />
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
  }
.money{padding:3% 8%;text-align: center;position: absolute;top:70%;left:50%;color:#fff;z-index:999;transform: translate(-50%,-50%);font-size:1.5rem;}


</style>
