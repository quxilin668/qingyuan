<template>
  <div class="works">
    <transition appear name="component-fade" mode="out-in">
      <Nav />
    </transition>
    <Bg />
    <xakc />
    <FooterNav />
  </div>
</template>
<script>
import Nav from "@/components/Nav";
import Bg from "@/components/Bg";
import xakc from "@/components/xakc";
import FooterNav from "../components/FooterNav";
export default {
  name: "works",
  data() {
    return {};
  },
  components: {
    Nav,
    Bg,
    xakc,
    FooterNav
  }
};
</script>
<style scoped>
</style>
