<template>
   <baidu-map
     :center="center"  
     :zoom="zoom" 
     :dragging="true" 
     :scroll-wheel-zoom="true"
     class="map"
     @ready="handler" 
     @click="getClickInfo"
     @moving="syncCenterAndZoom"  
     @moveend="syncCenterAndZoom"
     @zoomend="syncCenterAndZoom"
   >
     <bm-navigation anchor="BMAP_ANCHOR_TOP_LEFT"></bm-navigation>
     <bm-geolocation
       anchor="BMAP_ANCHOR_BOTTOM_LEFT"
       :showAddressBar="true"
       :autoLocation="true"
     ></bm-geolocation>
      <bm-label content="上海庆苑集团" :position="{lng: 121.30343, lat: 31.20435}" :labelStyle="{color: 'block', fontSize : '18px',border:'1px solid #fff'}" title="Hover me"/>
     <bm-marker :position="{lng:center.lng, lat: center.lat}"></bm-marker>
   </baidu-map>
 </template>
 
<script>
export default {
    data(){
      return {
        baidumapSwitch:false,
        center: { lng:121.30343, lat:31.20435 },
        zoom: 17,
        location: "上海市",
        keyword: "请输入搜索关键词",
      }
    },
    methods:{
    handler({ BMap, map }) {
      this.center.lng = 121.30343
      this.center.lat = 31.20435
      this.zoom = 15
    },
//点击获取到当前经纬度
getClickInfo(e) {

  this.center.lng = e.point.lng;
  this.center.lat = e.point.lat;
},
//双向绑定经纬度以及缩放尺寸
syncCenterAndZoom(e) {
  const { lng, lat } = e.target.getCenter();
  this.center.lng = lng;
  this.center.lat = lat;
},
//经纬度同步
baidumap(){
 this.baiduDevicelocationx = this.center.lng
 this.baiduDevicelocationy = this.center.lat
}
}
}
</script>

<style scoped>
.map{
  width: 20rem;
  height: 10rem;
}
</style>