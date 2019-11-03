<template>
  <!-- <div :class="isActive ? 'nav' : 'nav-active'" v-bind="display">  -->
  <div class="nav">
    <ul class="nav-img">
      <img src="../assets/images/logo.png" alt />
    </ul>
    <div class="dnav">
      <li class="has_menu te3 wow bounceInRight" data-wow-duration="1.6s" data-wow-delay="04rems">
        <router-link to="/home" >
          <span class="te1">首页</span>
        </router-link>
      </li>
      <li class="has_menu te3 wow bounceInRight" data-wow-duration="1.6s" data-wow-delay="1.2s">
        <router-link to="/ChingCourt/0">
          <span class="te1">关于庆苑</span>
        </router-link>
        <ul class="te2">
          <li>
            <router-link to="/ChingCourt/0">
              <span>集团简介</span>
            </router-link>
          </li>
          <li>
            <router-link to="/ChingCourt/1">
              <span>组织架构</span>
            </router-link>
          </li>
          <li>
            <router-link to="/ChingCourt/2">
              <span>资质荣誉</span>
            </router-link>
          </li>
        </ul>
      </li>
      <li class="has_menu te3 wow bounceInRight" data-wow-duration="1.6s" data-wow-delay="1.6s">
        <router-link to="/Power/0" >
          <span class="te1">集团力量</span>
        </router-link>
        <ul class="te2">
          <li>
            <router-link to="/Power/0">
              <span>材料生产</span>
            </router-link>
          </li>
          <li>
            <router-link to="/Power/1">
              <span>家具生产</span>
            </router-link>
          </li>
          <li>
            <router-link to="/Power/2">
              <span>智能家居</span>
            </router-link>
          </li>
          <li>
            <router-link to="/Power/3">
              <span>保洁服务</span>
            </router-link>
          </li>
        </ul>
      </li>
      <li class="nv wow bounceInRight" data-wow-duration="1.6s" data-wow-delay="2s">
        <router-link to="/Case" >
          <span class="te1">作品案例</span>
        </router-link>
      </li>
      <li class="nv wow bounceInRight" data-wow-duration="1.6s" data-wow-delay="2.4s">
        <router-link to="/contact" >
          <span class="te1">联系我们</span>
        </router-link>
      </li>
    </div>
  </div>
</template>
<script>
export default {
  name: "Nav",
  data() {
    return {
      isActive: true
    };
  },
  props: {},
  mounted() {
    $(function() {
      $(".has_menu").hover(
        function() {
          $(this)
            .find("ul")
            .slideDown("1500");
        },
        function() {
          $(this)
            .find("ul")
            .slideUp("fast");
        }
      );
    });
  }
};
</script>
<style scoped>
.nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 0;
  width: 94%;
  height: 3.2rem;
  margin: 2% 3%;
  position: fixed;
  top: 1rem;
  z-index: 999;
  background: rgba(255, 255, 255, 0.8);
}
.nav-img {
  padding: 0 3%;
  margin-top: -0.19rem;
}
.nav-img img {
  height: 2rem;
  width: 2.5rem;
}
.nav-list {
  padding: 0 2%;
  width: 80%;
  font-size: 1rem;
}
.nav-list__active {
  color: #ea471c;
}
.nav-list span {
  padding-right: 0.4rem;
}
a {
  text-decoration: none;
}
.dnav {
  width: 60%;
  display: flex;
  justify-content: space-around;
}
.dnav > li {
  height: 1.5rem;
  line-height: 2rem;
  text-align: center;
  position: relative;
  top: -0.2rem;
  cursor: pointer;
  right: 2rem;
}
.dnav li a {
  display: block;
  padding-bottom: 1.5rem;
}
.dnav li ul {
  display: none;
  width: 5rem;
  position: absolute;
  left: -0.8rem;
  top: 2.5rem;
  background: rgba(255, 255, 255, 0.8);
  padding-top: 1.5rem;
}
.dnav li .te1 {
  font: .8rem/1.8rem "";
  display: inline-block;
}
.te2 li {
  font-size: 0.7rem;
  line-height: 1rem;
  padding: 0.1rem 0.3rem;
}
</style>
