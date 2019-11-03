<template>
  <div class="background">
      <img src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/lx.jpg"  />
  </div>
</template>
<script>
export default {
  components: {
  }
};
</script>
<style scoped>
.background {
  display: flex;
  position: relative;
  height:15rem
}
img {
  flex: 1;height:100%
}
span {
  font: 900 0.4rem/1 "";
  color: rgba(14, 17, 16, 0.863);
  position: absolute;
  top: 33%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>

