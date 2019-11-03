<template>
  <div class="contact">
    <div class="header">
        <Nav />
      <Introduction />
      <Tab />
      <FooterNav />
    </div>
  </div>
</template>
<script>
import Nav from "../components/Nav";
import Introduction from "../components/Introduction";
import Tab from "../components/Tab";
import FooterNav from "../components/FooterNav";
import Xak from "../components/xak";
export default {
  name: "home",
  data() {
    return {
      display: false
    };
  },
  components: {
    Nav,
    Introduction,
    Tab,
    FooterNav
  },
  methods: {}
};
</script>
<style scoped>
.header {
  width: 100%;
  height: 700px;
}
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 5.3s ease;
}
.component-fade-enter,
.component-fade-leave-to {
  opacity: 0;
}
</style>
