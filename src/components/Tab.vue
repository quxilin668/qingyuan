<template>
  <div class="contact_way">
    <div class="header_way">
      <span class="top">联系方式</span>
    </div>
    <div class="contact_one">
      <div class="contact_two">
        <div class="third">
          <dl>
            <dt>联系方式</dt>
            <dd>姓名：莫贞华</dd>
            <dd>电话：021-58588199</dd>
          </dl>
        </div>
        <div class="imgg">
          <Baidu />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Baidu from "./badu.vue";
export default {
  components: {
    Baidu
  }
};
</script>
<style scoped>
.header_way {
  display: flex;
  justify-content: center;
  font: 0.8rem/4 "";
 margin-top: 3rem;
  text-align: center;
}
.header_way:hover .top{ border-bottom: 0.2rem solid #ff8400;
  transform: scale(0.9);}
.header_way .top {
  padding: 0 1.5rem;
  border-bottom: #fff .2rem solid;
  float: left;
  font-size: 1rem
}
.header_way .s6 {
  margin-right: 5%;
  float: right;
}
.header_way .bottom1 {
  margin-left: -10%;
  padding: 0 0px;
  color: #666;
}
.header_way .bottom2 {
  margin-right: 5%;
  padding: 0 0px;
  color: #666;
}
.contact_one {
  padding: 4% 4%;
}
.contact_two {
  display: flex;
  padding-top: 5%;
  background: white;
  justify-content:center;
  flex-wrap: wrap;
  padding:5% 10%;
}
.third{flex:1;}
dl {
  text-align: left;
  padding: 2rem 10%;
  font-size: 1.5rem;
  
}
dt {
  padding-bottom: 5%;
  font: 0.8rem/1 "";
}
dd {
  padding: 0;
  padding-bottom: 5%;
  font-size: 0.8rem;
  color: #333;
}
.imgg {
  width: 10rem;
  height: 10rem;
   flex: 1;
  height: 80%;
  width: 100%;
  display: block;
  margin-left: 8%;
}
</style>