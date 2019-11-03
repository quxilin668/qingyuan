<template>
  <nav class="navbar navbar-default" role="navigation">
    <div class="container navbar-fixed-top">
      <div class="navbar-header">
        <button
          type="button"
          class="navbar-toggle"
          data-toggle="collapse"
          data-target=".navbar-collapse"
          @click="change"
        >
          <span class="sr-only">导航条</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <router-link to="/home" class="navbar-brand" style="padding: 10px 15px;" href>
          <img
            src="../assets/images/logo.png"
            style="width:2.5rem;
                    height:2erm"
            href
          />
        </router-link>
      </div>
      <!-- 默认显示 -->
      <div class="collapse navbar-collapse">
        <div class="box" v-if="this.display=='1'">
          <ul class="nav navbar-nav" id="nav-list">
            <li
              class="has_menu te3 wow bounceInRight"
              data-wow-duration="1.6s"
              data-wow-delay="04rems"
            >
              <router-link
                to="/home"
                active-class="nav-list__active"
                style="text-decoration:none; "
              >
                <span class="te1" target="_blank">首页</span>
              </router-link>
            </li>
            <li
              class="has_menu te3 wow bounceInRight"
              data-wow-duration="1.6s"
              data-wow-delay="1.2s"
            >
              <router-link
                to="/ChingCourt/0"
                active-class="nav-list__active"
                style="text-decoration:none; "
              >
                <span class="te1" target="_blank">关于庆苑</span>
              </router-link>
              <ul class="te2">
                <li @click="winReload">
                  <router-link to="/ChingCourt/0" style="text-decoration:none; ">
                    <span>集团简介</span>
                  </router-link>
                </li>
                <li @click="winReload">
                  <router-link to="/ChingCourt/1" style="text-decoration:none; ">
                    <span>组织架构</span>
                  </router-link>
                </li>
                <li @click="winReload">
                  <router-link to="/ChingCourt/2" style="text-decoration:none; ">
                    <span>资质荣誉</span>
                  </router-link>
                </li>
              </ul>
            </li>
            <li
              class="has_menu te3 wow bounceInRight"
              data-wow-duration="1.6s"
              data-wow-delay="1.6s"
            >
              <router-link
                to="/Power/0"
                active-class="nav-list__active"
                style="text-decoration:none; "
              >
                <span class="te1" target="_blank">集团力量</span>
              </router-link>
              <ul class="te2">
                <li @click="winReload">
                  <router-link to="/Power/0" style="text-decoration:none; ">
                    <span>材料采集</span>
                  </router-link>
                </li>
                <li @click="winReload">
                  <router-link to="/Power/1" style="text-decoration:none; ">
                    <span>家具生产</span>
                  </router-link>
                </li>
                <li @click="winReload">
                  <router-link to="/Power/2" style="text-decoration:none; ">
                    <span>智能家居</span>
                  </router-link>
                </li>
                <li @click="winReload">
                  <router-link to="/Power/3" style="text-decoration:none; ">
                    <span>保洁服务</span>
                  </router-link>
                </li>
              </ul>
            </li>
            <li class="nv wow bounceInRight" data-wow-duration="1.6s" data-wow-delay="2s">
              <router-link
                to="/Case/0"
                active-class="nav-list__active"
                style="text-decoration:none; "
              >
                <span class="te1" target="_blank">作品案例</span>
              </router-link>
            </li>
            <li class="nv wow bounceInRight" data-wow-duration="1.6s" data-wow-delay="2.4s">
              <router-link
                to="/contact"
                active-class="nav-list__active"
                style="text-decoration:none; "
              >
                <span class="te1" target="_blank">联系我们</span>
              </router-link>
            </li>
          </ul>
        </div>
        <!-- 按钮点击触发显示的下拉框 -->

        <div class="box1" v-if="display=='2'" style="height:41rem">
          <div class="info clear" style="height:40.5rem">
            <li class="yangshi">
              <router-link
                to="/home"
                active-class="nav-list__active"
                style="text-decoration:none; "
              >
                <span class="te1">首页</span>
              </router-link>
            </li>
            <li class="yangshi">
              <router-link
                to="/ChingCourt/0"
                active-class="nav-list__active"
                style="text-decoration:none; "
              >
                <span class="te1">关于庆苑</span>
              </router-link>
              <ul class="te2">
                <li @click="winReload">
                  <router-link to="/ChingCourt/0" style="text-decoration:none; ">
                    <span>集团简介</span>
                  </router-link>
                </li>
                <li @click="winReload">
                  <router-link to="/ChingCourt/1" style="text-decoration:none; ">
                    <span>组织架构</span>
                  </router-link>
                </li>
                <li @click="winReload">
                  <router-link to="/ChingCourt/2" style="text-decoration:none; ">
                    <span>资质荣誉</span>
                  </router-link>
                </li>
              </ul>
            </li>
            <li class="yangshi">
              <router-link
                to="/Power/0"
                active-class="nav-list__active"
                style="text-decoration:none; "
              >
                <span class="te1">集团力量</span>
              </router-link>
              <ul class="te2">
                <li @click="winReload">
                  <router-link to="/Power/0" style="text-decoration:none; ">
                    <span>材料采集</span>
                  </router-link>
                </li>
                <li @click="winReload">
                  <router-link to="/Power/1" style="text-decoration:none; ">
                    <span>家具生产</span>
                  </router-link>
                </li>
                <li @click="winReload">
                  <router-link to="/Power/2" style="text-decoration:none; ">
                    <span>智能家居</span>
                  </router-link>
                </li>
                <li @click="winReload">
                  <router-link to="/Power/3" style="text-decoration:none; ">
                    <span>保洁服务</span>
                  </router-link>
                </li>
              </ul>
            </li>
            <li class="yangshi">
              <router-link
                to="/Case/0"
                active-class="nav-list__active"
                style="text-decoration:none; "
              >
                <span class="te1">作品案例</span>
              </router-link>
            </li>
            <li class="yangshi">
              <router-link
                to="/contact"
                active-class="nav-list__active"
                style="text-decoration:none; "
              >
                <span class="te1">联系我们</span>
              </router-link>
            </li>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Nav",
  data() {
    return {
      isActive: true,
      display: "1"
    };
  },
  methods: {
    winReload() {
      setTimeout(() => {
        location.reload();
      }, 1);
    },
    change() {
      this.display = "2";
    },
    goTo() {
      this.$router.push({
        name: "ChingCourt",
        params: { id: 0 }
      });
    },
    goTo1() {
      this.$router.push({
        name: "ChingCourt",
        params: { id: 1 }
      });
    },
    goTo2() {
      this.$router.push({
        name: "ChingCourt",
        params: { id: 2 }
      });
    },
    goTo3() {
      this.$router.push({
        name: "Power",
        params: { id: 0 }
      });
    },
    goTo4() {
      this.$router.push({
        name: "Power",
        params: { id: 1 }
      });
    },
    goTo5() {
      this.$router.push({
        name: "Power",
        params: { id: 2 }
      });
    },
    goTo6() {
      this.$router.push({
        name: "Power",
        params: { id: 3 }
      });
    }
  },
  mounted() {
    // $(function() {
    //   console.log($(".has_menu"));
    //   $(".has_menu").hover(
    //     function() {
    //       $(this)
    //         .find("ul")
    //         .slideToggle("1500");
    //     }
        // function() {
        //   $(this)
        //     .find("ul")
        //     .slideUp("fast");
        // }
  //     );
  //   });
  }
};
</script>
<style scoped>
.container {
  width: 100%;
  height: 3.7rem;
  background: #fff;
}
#nav-list {
  display: flex;
  margin-left: 20%;
  width: 69%;
  justify-content: space-between;
  margin-top: 0.4rem;
}
.box .te2 {
  display: none;
  position: absolute;
  top: 3.2rem;
  left: -.2rem;
  padding-top: 0.5rem;
  background: #fff;
  width: 5rem;
}
.box .nav .has_menu{height:3.4rem;display: inline-block;}
.box .nav .has_menu:hover .te2 {
  display: block;
}
.box .te2 li {
  font-size: 0.7rem;
  line-height: 2.5rem;
  padding: 0rem 0.8rem;
  text-align: center;
}
.navbar-toggle {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.box1 .info {
  background: #000;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  color: #000;
  margin-right: -15px;
  /* right: 0rem;
  top: 3.6rem;
  left: 7.2rem; */
  width: 80%;
  z-index: 1000;
  float: right;
}

.box1 .info > li {
  border: 0.05rem solid #565656;

  background: #323232;
  margin-bottom: -0.05rem;
}
.box1 .info li span {
  margin-left: 10%;
}

.box1 .te1 {
  width: 100%;
  color: #fff;
  font: 700 2rem/2 "";
  padding: 1rem 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
/* .box1 .te1:hover{background: #000} */
.navbar-fixed-bottom .navbar-collapse,
.navbar-fixed-top .navbar-collapse {
  max-height: 50rem;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.box1 .te2 {
  display: block;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.box1 .te2 li:hover {
  background: #000;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.box1 .yangshi .te1 {
  font: 700 1.8rem/3 "";
  padding: 1rem 0rem;
  display: block;
}
.box1 .te2 li {
  border-top: 0.05rem solid #565656;
  height: 3rem;
  line-height: 3rem;
  padding-left: 1rem;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  color: #ffd;
}
.box1 .te2 li a {
  display: block;
}
.box1 .te2 li a span {
  color: #fff;
  font: 700 1.4rem/3 "";
  color: rgb(244, 246, 246);
  display: block;
  width: 18rem;
  height: 3rem;
}
</style>
