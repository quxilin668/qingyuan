<template>
  <div class="connect">
    <div class="text_video_title">
      <h2 class="text_video_ts wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.4s">
        <font>专业为您应对</font>各种装修类型
      </h2>
      <div id="underline"></div>
      <p
        class="te2 wow zoomInUp msg"
        data-wow-duration="1.6s"
        data-wow-delay="0.6s"
      >上海庆苑建筑装饰集团立足于传统业态，与科技进步和经济发展同轨，秉持“修合无人见</p>
      <p
        class="wow zoomInUp msg"
        data-wow-duration="1.6s"
        data-wow-delay="0.8s"
      >存心有天知”的经营服务理念。专注致力于装修业务、整合产业资源，倾力为合作伙伴提供</p>
      <p class="wow zoomInUp msg" data-wow-duration="1.6s" data-wow-delay="1s">装修过程中的全面解决方案和增值服务</p>
    </div>
    <ul class="lists">
      <li class="wow flipInX" data-wow-duration="1.6s" data-wow-delay="0.4s">
        <img class="aa" src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/sy_zy_zz.jpg" />
        <div class="connect-model">
          <h3>住宅装修</h3>
          <h3></h3>
        </div>
        <div class="info">
        </div>
      </li>
      <li class="wow flipInX" data-wow-duration="1.6s" data-wow-delay="0.4s">
        <img class="aa" src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/sy_zy_bs.jpg" />
        <div class="connect-model">
          <h3>别墅装修</h3>
          <h3></h3>
        </div>
        <div class="info">
        </div>
      </li>
      <li class="wow jackInTheBox" data-wow-duration="2s">
        <img class="aa" src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/sy_zy_jd.jpg" />
        <div class="connect-model">
          <h3>酒店装修</h3>
          <h3></h3>
        </div>
        <div class="info">
        </div>
      </li>
      <li class="wow flipInX" data-wow-duration="1.6s" data-wow-delay="0.4s">
        <img class="aa" src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/sy_zy_sp.jpg" alt />
        <div class="connect-model">
          <h3>商铺装修</h3>
          <h3></h3>
        </div>
        <div class="info">
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import WOW from "../../node_modules/wowjs/dist/wow";
export default {
  name: "HelloWorld",
  data() {
    return {
      showAni: false
    };
  },
  created() {},
  mounted() {
    let wow = new WOW.WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: true,
      live: true
    });
    wow.init();
  },
  props: {
    msg: String
  }
};
</script>
<style scoped>
.connect {
  margin-top: 3rem;
}
.connect .text_video_title {
  text-align: center;
  display: block;
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 0.6rem;
}
.connect .text_video_title .te2 {
  margin-top: 1rem;
}
.connect .text_video_title p {
  line-height: 1.8rem;
}
.connect .text_video_title font {
  color: #ff8400;
}

.lists {
  list-style-type: none;
  padding: 0% 5%;
  width: 100%;
  margin: 0rem auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.lists li {
  display: block;
  overflow: hidden;
  margin: 0.4rem 0.4rem;
  background-color: rosybrown;
  position: relative;
  color: #fff;
  text-align: center;
  word-wrap: inherit;
  width: 11.25rem;
  height: 21.5rem;
  padding: 0;
}
.lists li:nth-child(odd) {
  background-color: #7497bc;
}
.lists li .b {
  box-sizing: border-box;
}
.lists li .aa {
  width: 11.25rem;
  height: 21.5rem;
  transition: all 0.6s;
}
.lists li:hover img {
  transform: scale(1.4);
}
.lists li h3 {
  transition: all 0.6s;
  font: 700 0.3rem/0.2rem "";
  position: absolute;
  top: 10rem;
  left: 0;
  right: 0;
  margin: 0 auto;
  font-size: 1.3rem;
}
.lists h4 {
  font: 700 0.2rem/0.25rem "";
  padding-top: 2.4rem;
}
.lists li:hover h3 {
  transform: translateY(-0.8rem);
}
.lists li .info {
  width: 11.25rem;
  height: 21.5rem;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  background: rgba(0, 0, 0, 0.6);
  opacity: 0;
  transition: all 0.35s ease-in-out;
}
.lists li:hover .info {
  opacity: 1;
}
.lists li .info h4 {
  margin-top: 0.3rem;
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
</style>
