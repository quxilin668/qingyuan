<template>
  <div class="home">
    <div class="header">
      <transition
        appear
        name="component-fade" mode="out-in"
      >
    <Navs v-if="!display" />
    </transition>
    <lunboActive v-if="!phone"/>
    <Lunbo v-if="phone"/>
    </div>
    <transition name="pull-up" 
    enter-active-class="animated bounceInDown"
    >
    
    <NavActive v-if="display"/>
    </transition>
    <Zsf/>
    <Connect />
    <Xak/>
    <Flu/>
    <FooterNav />
  </div>
</template>

<script>
import Navs from '../components/Nav';
import NavActive from '../components/NavActive';
import Lunbo from '../components/lunbo'
import Zsf from '../components/Zsf';
import Connect from '../components/Connect';
import FooterNav from '../components/FooterNav';
import Xak from '../components/xak';
import Flu from '../components/Flu';
import LunboActive from '../components/lunboActive';
import '../utils/sp'
import Sp from '../utils/sp';

export default {
  name: 'home',
  data(){
    return {
      display : false,
      phone: true,
    }
  },
  components: {
    Navs,
    NavActive,
    Zsf,
    Lunbo,
    Connect,
    Xak,
    Flu,
    LunboActive,
    FooterNav
  },
  created(){
  // window.addEventListener('width', this.windoWidth)
  },
  beforeMount(){
  console.log(this.phone,"这是123451341")
  if(Sp()==0){
  console.log('移动端拿到了')
  this.phone = false;
  }else{
  console.log("这是pc端")
  this.phone = true;
  }
  },
  mounted () {
    window.addEventListener('scroll', this.windowScroll)
  },
  methods: {
    windowScroll () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop 
      let scrollWidth = window.pageXOffset || document.documentElement.scrollWidth || document.body.scrollWidth 
      let clientWidth  = window.innerWidth ||document.documentElement.clientWidth||documnet.body.offsetWidth
      if(scrollTop >= 400 ){
        this.display = true;
      }
      if(scrollWidth<1200){
        this.display = false;
      }
      if(scrollWidth>=1200){
        this.display = true;
      }
      if(scrollTop < 400 ){
        this.display = false;
      }
      // if(clientWidth>1200){
      //   this.phone = true;
      //   // console.log(this.phone)
      // }
      // if(clientWidth<900){
      //   this.phone = false;
      //   // console.log(this.clientWidth)
      // }
    },
  width(){
     let clientWidth  = window.innerWidth ||document.documentElement.clientWidth||documnet.body.offsetWidth
     console.log(width)
      if(clientWidth>1200){
        this.phone = true;
        // console.log(this.phone)
      }
      if(clientWidth<900){
        this.phone = false;
        // console.log(this.clientWidth)
      }
  }
  }
}
</script>

<style scoped>
.header{width: 100%;
}
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity 1.5s ease;
}
.component-fade-enter, .component-fade-leave-to {
  opacity: 0;
}

</style>
