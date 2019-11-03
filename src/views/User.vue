<template>
  <div class="qingyan">
    <Nav @click="Refresh" />
    <div class="ovehide">
      <div class="swiper-container swiper3">
        <div class="swiper-wrapper">
          <div class="swiper-slide swiper-no-swiping">
            <img
              src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/gy.jpg"
              class="img"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="bbox">
      <div class="container" style="overflow:-Scroll;overflow-y:hidden">
        <div class="swiper-container swiper1">
          <div class="swiper-wrapper">
            <div class="swiper-slide selected" style="4rem">
              <a  style="text-decoration:none;color:#000; ">
                <noscript>
                  <img
                    src="https://demo.themepark.com.cn/cloudengineering/wp-content/uploads/sites/6/2018/08/icon_images_03.jpg"
                  />
                </noscript>
                <span class>集团简介</span>
              </a>
            </div>
            <div class="swiper-slide">
              <a  style="text-decoration:none;color:#000; ">
                <noscript>
                  <img
                    src="https://demo.themepark.com.cn/cloudengineering/wp-content/uploads/sites/6/2018/08/icon_images_05.jpg"
                  />
                </noscript>
                <span>组织架构</span>
                <span></span>
              </a>
            </div>
            <div class="swiper-slide">
              <a  style="text-decoration:none;color:#000; ">
                <noscript>
                  <img
                    src="https://demo.themepark.com.cn/cloudengineering/wp-content/uploads/sites/6/2018/08/icon_images_07.jpg"
                  />
                </noscript>
                <span>资质荣誉</span>
              </a>
            </div>
          </div>
        </div>
        <!-- <swiper options="swiperOption" ref="mySwiper"></swiper> -->
        <!-- swiper -->
        <div class="box" v-if="this.index == 0">
        <div class="swiper-container swiper2">
          <div class="swiper-wrapper">
            <!-- start -->
            <div class="swiper-slide swiper-no-swiping">
              <div class="box" v-if="this.index1=='1'">
                <div class="flex_h" style="width: 90%;padding:0 5%">
                        <div class="onel">
                            <div class="swiper_png_l">
                              <img
                                src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/gy_jt.jpg"
                              />
                            </div>
                            <div class="swiper_png_r">
                              <p class="p" style="font-weight:700">上海庆苑建筑装饰集团</p>
                              <p
                                class="p1"
                              >上海庆苑建筑装饰集团，是以建筑装饰装修为核心，结合室内设计、材料集采、人工智能、应用软件、家具生产、保洁服务等为一体的多元化集团公司。</p>
                            
                              <p class="p1">业务范围覆盖上海、浙江、江苏、重庆、云南、贵州、四川、广东、陕西、甘肃、宁夏、湖北、湖南、山东、山西、河北等地区。</p>
                            
                              <p
                                class="p1"
                              >集团成员有上海庆苑建筑装饰、上海庆苑家居、上海轩棱装饰、上海轻飏建筑装饰、江苏溧阳银丰家具、上海刻灵宁保洁服务、上海臻居网络科技、上海归璨网络科技有限公司等八家成员公司。</p>
                            </div>
                        </div>
                    </div>
              </div>
              <div class="box" v-if="this.index1=='2'">
                    <div class="flex_h" style="width: 90%;padding:0 5%">
                <div class="one" style="width:23rem;">
                  <div class="swiper_png_c">
                    <div class="asd">
                      <p class="p1" style="font-weight:700">组织架构</p>
                      <p class="p2" style="font-weight:700">总经理</p>
                    </div>
                    <ul class="jiagou">
                      <li>
                        <p class="p3" style="font-weight:700">工程：</p>
                        <p class="p4">设计部</p>
                        <p>公装部</p>
                        <p>市场部</p>
                        <p>材料部</p>
                        <p>家装一部</p>
                        <p>公装二部</p>
                      </li>
                      <li>
                        <p class="p3" style="font-weight:700">各职能部门：</p>
                        <p class="p4">财务部</p>
                        <p>人事部</p>
                        <p>行政部</p>
                        <p>成本部</p>
                        <p>运营部</p>
                        <p>法务部</p>
                      </li>
                      <li class="te1">
                        <p class="p3" style="font-weight:700">各子公司：</p>
                        <p class="p4">庆苑装饰</p>
                        <p>臻居网络</p>
                        <p>轻飏装饰</p>
                        <p>溧阳家具</p>
                        <p>轩棱装饰</p>
                        <p>庆苑家居</p>
                        <p>归璨网络</p>
                        <p>刻灵宁保洁</p>
                      </li>
                    </ul>
                    <ul class="jiagou_1">
                      <li>
                        <p class="title" style="font-weight:700">上海轩棱装饰工程有限公司</p>
                        <p>企业地址:上海市虹桥商务区申滨南路1058号D栋301室；上海市孙浦路199号6号楼3楼</p>
                        <p>企业负责人:沈华君</p>
                        <p>联系联系电话:18001998982</p>
                        <p>企业邮箱:118100279@qq.com</p>
                      </li>
                      <li>
                        <p class="title" style="font-weight:700">上海臻居网络科技有限公司</p>
                        <p>企业地址：上海市孙浦路199号6号3层</p>
                        <p>企业负责人：Iris Hu</p>
                        <p>企业联系电话：13866713117</p>
                        <p>企业邮箱：iris.hu@bangcaijiancai.onaliyun.com</p>
                      </li>
                      <li>
                        <p class="title" style="font-weight:700">上海庆苑家居有限公司</p>
                        <p>企业地址 浦东新区南汇新城镇水芸路461号2层209室</p>
                        <p>企业负责人 祝春香</p>
                        <p>企业联系电话 17091908616</p>
                        <p>企业邮箱 515291996@qq.com</p>
                      </li>
                      <li>
                        <p class="title" style="font-weight:700">江苏银丰科艺家具有限公司</p>
                        <p>企业地址：江苏省常州市溧阳市埭头镇军荣路1号</p>
                        <p>企业负责人：黄春银</p>
                        <p>企业联系电话：051987166626</p>
                        <p>企业邮箱：jsivke@163.com</p>
                      </li>
                      <li>
                        <p class="title" style="font-weight:700">上海刻灵宁保洁有限公司</p>
                        <p>企业地址：上海市松江区洞业路999号7幢413</p>
                        <p>企业负责人：陈莹飞</p>
                        <p>企业联系电话：13611867887</p>
                        <p>企业邮箱：22197338@qq.com</p>
                      </li>
                      <li>
                        <p class="title" style="font-weight:700">上海庆苑建筑装饰集团龙岩有限公司</p>
                        <p>企业地址：福建省龙岩市新罗区商务板块龙工家园11楼</p>
                        <p>企业负责人：欧霖</p>
                        <p>企业联系电话：0597-3221399</p>
                        <p>企业邮箱：65777020@qq.com</p>
                      </li>
                      <li>
                        <p class="title" style="font-weight:700">上海轻矧建筑装饰工程有限公司</p>
                        <p>企业地址：上海市浦东新区南曹路883号</p>
                        <p>企业负责人：刘维明</p>
                        <p>企业联系电话：13693006414</p>
                        <p>企业邮箱：qq245795244@163.com</p>
                      </li>
                      <li>
                        <p class="title" style="font-weight:700">上海归璨网络科技有限公司</p>
                        <p>企业地址：上海市孙浦路199号6号楼3楼</p>
                        <p>企业负责人：邹志伟</p>
                        <p>企业联系电话：13817621140</p>
                        <p>企业邮箱：754816777@qq.com</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              </div>
          

            </div>
            <!-- 第二块 -->
            <div class="swiper-slide swiper-no-swiping">
              <div class="flex_h" style="width: 90%;padding:0 5%">
                <div class="one" style="width:100%;">
                  <div class="swiper-png-d">
                    <p>资质荣誉</p>
                    <div class="imgs">
                      <img
                        src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/gy_zz3.jpg"
                        width="180"
                        height="180"
                      />
                      <img
                        src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/gy_zz1.png"
                        width="180"
                        height="180"
                        class="ppp"
                      />
                      <img
                        src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/gy_zz2.jpg"
                        width="180"
                        height="180"
                        class="ppp"
                      />
                      <img
                        src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/gy_zz4.jpg"
                        width="180"
                        height="180"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- 第3块 -->
                <div class="swiper-slide swiper-no-swiping">
                    <div class="flex_h" style="width: 90%;padding:0 5%">
                        <div class="onel">
                            <div class="swiper_png_l">
                              <img
                                src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/gy_jt.jpg"
                              />
                            </div>
                            <div class="swiper_png_r">
                              <p class="p" style="font-weight:700">上海庆苑建筑装饰集团</p>
                              <p
                                class="p1"
                              >上海庆苑建筑装饰集团，是以建筑装饰装修为核心，结合室内设计、材料集采、人工智能、应用软件、家具生产、保洁服务等为一体的多元化集团公司。</p>
                            
                              <p class="p1">业务范围覆盖上海、浙江、江苏、重庆、云南、贵州、四川、广东、陕西、甘肃、宁夏、湖北、湖南、山东、山西、河北等地区。</p>
                            
                              <p
                                class="p1"
                              >集团成员有上海庆苑建筑装饰、上海庆苑家居、上海轩棱装饰、上海轻飏建筑装饰、江苏溧阳银丰家具、上海刻灵宁保洁服务、上海臻居网络科技、上海归璨网络科技有限公司等八家成员公司。</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 第3块结束 -->
          </div>
        </div>
        </div>
        <!-- 02 -->
        <div class="box" v-if="this.index ==1">
        <div class="swiper-container swiper2">
          <div class="swiper-wrapper">
            <!-- start -->
            <div class="swiper-slide swiper-no-swiping">
                    <div class="flex_h" style="width: 90%;padding:0 5%">
                <div class="one" style="width:23rem;">
                  <div class="swiper_png_c">
                    <div class="asd">
                      <p class="p1" style="font-weight:700">组织架构</p>
                      <p class="p2" style="font-weight:700">总经理</p>
                    </div>
                    <ul class="jiagou">
                      <li>
                        <p class="p3" style="font-weight:700">工程：</p>
                        <p class="p4">设计部</p>
                        <p>公装部</p>
                        <p>市场部</p>
                        <p>材料部</p>
                        <p>家装一部</p>
                        <p>公装二部</p>
                      </li>
                      <li>
                        <p class="p3" style="font-weight:700">各职能部门：</p>
                        <p class="p4">财务部</p>
                        <p>人事部</p>
                        <p>行政部</p>
                        <p>成本部</p>
                        <p>运营部</p>
                        <p>法务部</p>
                      </li>
                      <li class="te1">
                        <p class="p3" style="font-weight:700">各子公司：</p>
                        <p class="p4">庆苑装饰</p>
                        <p>臻居网络</p>
                        <p>轻飏装饰</p>
                        <p>溧阳家具</p>
                        <p>轩棱装饰</p>
                        <p>庆苑家居</p>
                        <p>归璨网络</p>
                        <p>刻灵宁保洁</p>
                      </li>
                    </ul>
                    <ul class="jiagou_1">
                      <li>
                        <p class="title" style="font-weight:700">上海轩棱装饰工程有限公司</p>
                        <p>企业地址:上海市虹桥商务区申滨南路1058号D栋301室；上海市孙浦路199号6号楼3楼</p>
                        <p>企业负责人:沈华君</p>
                        <p>联系联系电话:18001998982</p>
                        <p>企业邮箱:118100279@qq.com</p>
                      </li>
                      <li>
                        <p class="title" style="font-weight:700">上海臻居网络科技有限公司</p>
                        <p>企业地址：上海市孙浦路199号6号3层</p>
                        <p>企业负责人：Iris Hu</p>
                        <p>企业联系电话：13866713117</p>
                        <p>企业邮箱：iris.hu@bangcaijiancai.onaliyun.com</p>
                      </li>
                      <li>
                        <p class="title" style="font-weight:700">上海庆苑家居有限公司</p>
                        <p>企业地址 浦东新区南汇新城镇水芸路461号2层209室</p>
                        <p>企业负责人 祝春香</p>
                        <p>企业联系电话 17091908616</p>
                        <p>企业邮箱 515291996@qq.com</p>
                      </li>
                      <li>
                        <p class="title" style="font-weight:700">江苏银丰科艺家具有限公司</p>
                        <p>企业地址：江苏省常州市溧阳市埭头镇军荣路1号</p>
                        <p>企业负责人：黄春银</p>
                        <p>企业联系电话：051987166626</p>
                        <p>企业邮箱：jsivke@163.com</p>
                      </li>
                      <li>
                        <p class="title" style="font-weight:700">上海刻灵宁保洁有限公司</p>
                        <p>企业地址：上海市松江区洞业路999号7幢413</p>
                        <p>企业负责人：陈莹飞</p>
                        <p>企业联系电话：13611867887</p>
                        <p>企业邮箱：22197338@qq.com</p>
                      </li>
                      <li>
                        <p class="title" style="font-weight:700">上海庆苑建筑装饰集团龙岩有限公司</p>
                        <p>企业地址：福建省龙岩市新罗区商务板块龙工家园11楼</p>
                        <p>企业负责人：欧霖</p>
                        <p>企业联系电话：0597-3221399</p>
                        <p>企业邮箱：65777020@qq.com</p>
                      </li>
                      <li>
                        <p class="title" style="font-weight:700">上海轻矧建筑装饰工程有限公司</p>
                        <p>企业地址：上海市浦东新区南曹路883号</p>
                        <p>企业负责人：刘维明</p>
                        <p>企业联系电话：13693006414</p>
                        <p>企业邮箱：qq245795244@163.com</p>
                      </li>
                      <li>
                        <p class="title" style="font-weight:700">上海归璨网络科技有限公司</p>
                        <p>企业地址：上海市孙浦路199号6号楼3楼</p>
                        <p>企业负责人：邹志伟</p>
                        <p>企业联系电话：13817621140</p>
                        <p>企业邮箱：754816777@qq.com</p>
                      </li>
                    </ul>
               
                </div>
              </div>
              </div>
          

            </div>
            <!-- 第二块 -->
            <div class="swiper-slide swiper-no-swiping">
              <div class="flex_h" style="width: 90%;padding:0 5%">
                <div class="one" style="width:100%;">
                  <div class="swiper-png-d">
                    <p>资质荣誉</p>
                    <div class="imgs">
                      <img
                        src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/gy_zz3.jpg"
                        width="180"
                        height="180"
                      />
                      <img
                        src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/gy_zz1.png"
                        width="180"
                        height="180"
                        class="ppp"
                      />
                      <img
                        src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/gy_zz2.jpg"
                        width="180"
                        height="180"
                        class="ppp"
                      />
                      <img
                        src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/gy_zz4.jpg"
                        width="180"
                        height="180"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- 第3块 -->
                <div class="swiper-slide swiper-no-swiping">
                    <div class="flex_h" style="width: 90%;padding:0 5%">
                        <div class="onel">
                            <div class="swiper_png_l">
                              <img
                                src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/gy_jt.jpg"
                              />
                            </div>
                            <div class="swiper_png_r">
                              <p class="p" style="font-weight:700">上海庆苑建筑装饰集团</p>
                              <p
                                class="p1"
                              >上海庆苑建筑装饰集团，是以建筑装饰装修为核心，结合室内设计、材料集采、人工智能、应用软件、家具生产、保洁服务等为一体的多元化集团公司。</p>
                            
                              <p class="p1">业务范围覆盖上海、浙江、江苏、重庆、云南、贵州、四川、广东、陕西、甘肃、宁夏、湖北、湖南、山东、山西、河北等地区。</p>
                            
                              <p
                                class="p1"
                              >集团成员有上海庆苑建筑装饰、上海庆苑家居、上海轩棱装饰、上海轻飏建筑装饰、江苏溧阳银丰家具、上海刻灵宁保洁服务、上海臻居网络科技、上海归璨网络科技有限公司等八家成员公司。</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 第3块结束 -->
          </div>
        </div>
        </div>
        <!-- 03 -->
          <div class="box" v-if="this.index == 2">
        <div class="swiper-container swiper2">
          <div class="swiper-wrapper">
            <!-- start -->
            <div class="swiper-slide swiper-no-swiping">
              <div class="box" v-if="this.index1=='1'">
                 <div class="flex_h" style="width: 90%;padding:0 5%">
                <div class="one" style="width:100%;">
                  <div class="swiper-png-d">
                    <p>资质荣誉</p>
                    <div class="imgs">
                      <img
                        src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/gy_zz3.jpg"
                        width="180"
                        height="180"
                      />
                      <img
                        src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/gy_zz1.png"
                        width="180"
                        height="180"
                        class="ppp"
                      />
                      <img
                        src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/gy_zz2.jpg"
                        width="180"
                        height="180"
                        class="ppp"
                      />
                      <img
                        src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/gy_zz4.jpg"
                        width="180"
                        height="180"
                      />
                    </div>
                  </div>
                </div>
              </div>
              </div>
              <div class="box" v-if="this.index1=='2'">
                    <div class="flex_h" style="width: 90%;padding:0 5%">
                <div class="one" style="width:23rem;">
                  <div class="swiper_png_c">
                    <div class="asd">
                      <p class="p1" style="font-weight:700">组织架构</p>
                      <p class="p2" style="font-weight:700">总经理</p>
                    </div>
                    <ul class="jiagou">
                      <li>
                        <p class="p3" style="font-weight:700">工程：</p>
                        <p class="p4">设计部</p>
                        <p>公装部</p>
                        <p>市场部</p>
                        <p>材料部</p>
                        <p>家装一部</p>
                        <p>公装二部</p>
                      </li>
                      <li>
                        <p class="p3" style="font-weight:700">各职能部门：</p>
                        <p class="p4">财务部</p>
                        <p>人事部</p>
                        <p>行政部</p>
                        <p>成本部</p>
                        <p>运营部</p>
                        <p>法务部</p>
                      </li>
                      <li class="te1">
                        <p class="p3" style="font-weight:700">各子公司：</p>
                        <p class="p4">庆苑装饰</p>
                        <p>臻居网络</p>
                        <p>轻飏装饰</p>
                        <p>溧阳家具</p>
                        <p>轩棱装饰</p>
                        <p>庆苑家居</p>
                        <p>归璨网络</p>
                        <p>刻灵宁保洁</p>
                      </li>
                    </ul>
                    <ul class="jiagou_1">
                      <li>
                        <p class="title" style="font-weight:700">上海轩棱装饰工程有限公司</p>
                        <p>企业地址:上海市虹桥商务区申滨南路1058号D栋301室；上海市孙浦路199号6号楼3楼</p>
                        <p>企业负责人:沈华君</p>
                        <p>联系联系电话:18001998982</p>
                        <p>企业邮箱:118100279@qq.com</p>
                      </li>
                      <li>
                        <p class="title" style="font-weight:700">上海臻居网络科技有限公司</p>
                        <p>企业地址：上海市孙浦路199号6号3层</p>
                        <p>企业负责人：Iris Hu</p>
                        <p>企业联系电话：13866713117</p>
                        <p>企业邮箱：iris.hu@bangcaijiancai.onaliyun.com</p>
                      </li>
                      <li>
                        <p class="title" style="font-weight:700">上海庆苑家居有限公司</p>
                        <p>企业地址 浦东新区南汇新城镇水芸路461号2层209室</p>
                        <p>企业负责人 祝春香</p>
                        <p>企业联系电话 17091908616</p>
                        <p>企业邮箱 515291996@qq.com</p>
                      </li>
                      <li>
                        <p class="title" style="font-weight:700">江苏银丰科艺家具有限公司</p>
                        <p>企业地址：江苏省常州市溧阳市埭头镇军荣路1号</p>
                        <p>企业负责人：黄春银</p>
                        <p>企业联系电话：051987166626</p>
                        <p>企业邮箱：jsivke@163.com</p>
                      </li>
                      <li>
                        <p class="title" style="font-weight:700">上海刻灵宁保洁有限公司</p>
                        <p>企业地址：上海市松江区洞业路999号7幢413</p>
                        <p>企业负责人：陈莹飞</p>
                        <p>企业联系电话：13611867887</p>
                        <p>企业邮箱：22197338@qq.com</p>
                      </li>
                      <li>
                        <p class="title" style="font-weight:700">上海庆苑建筑装饰集团龙岩有限公司</p>
                        <p>企业地址：福建省龙岩市新罗区商务板块龙工家园11楼</p>
                        <p>企业负责人：欧霖</p>
                        <p>企业联系电话：0597-3221399</p>
                        <p>企业邮箱：65777020@qq.com</p>
                      </li>
                      <li>
                        <p class="title" style="font-weight:700">上海轻矧建筑装饰工程有限公司</p>
                        <p>企业地址：上海市浦东新区南曹路883号</p>
                        <p>企业负责人：刘维明</p>
                        <p>企业联系电话：13693006414</p>
                        <p>企业邮箱：qq245795244@163.com</p>
                      </li>
                      <li>
                        <p class="title" style="font-weight:700">上海归璨网络科技有限公司</p>
                        <p>企业地址：上海市孙浦路199号6号楼3楼</p>
                        <p>企业负责人：邹志伟</p>
                        <p>企业联系电话：13817621140</p>
                        <p>企业邮箱：754816777@qq.com</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              </div>
          

            </div>
            <!-- 第二块 -->
            <div class="swiper-slide swiper-no-swiping">
              <div class="flex_h" style="width: 90%;padding:0 5%">
                <div class="one" style="width:100%;">
                  <div class="swiper-png-d">
                    <p>资质荣誉</p>
                    <div class="imgs">
                      <img
                        src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/gy_zz3.jpg"
                        width="180"
                        height="180"
                      />
                      <img
                        src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/gy_zz1.png"
                        width="180"
                        height="180"
                        class="ppp"
                      />
                      <img
                        src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/gy_zz2.jpg"
                        width="180"
                        height="180"
                        class="ppp"
                      />
                      <img
                        src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/gy_zz4.jpg"
                        width="180"
                        height="180"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- 第3块 -->
                <div class="swiper-slide swiper-no-swiping">
                    <div class="flex_h" style="width: 90%;padding:0 5%">
                        <div class="onel">
                            <div class="swiper_png_l">
                              <img
                                src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/gy_jt.jpg"
                              />
                            </div>
                            <div class="swiper_png_r">
                              <p class="p" style="font-weight:700">上海庆苑建筑装饰集团</p>
                              <p
                                class="p1"
                              >上海庆苑建筑装饰集团，是以建筑装饰装修为核心，结合室内设计、材料集采、人工智能、应用软件、家具生产、保洁服务等为一体的多元化集团公司。</p>
                            
                              <p class="p1">业务范围覆盖上海、浙江、江苏、重庆、云南、贵州、四川、广东、陕西、甘肃、宁夏、湖北、湖南、山东、山西、河北等地区。</p>
                            
                              <p
                                class="p1"
                              >集团成员有上海庆苑建筑装饰、上海庆苑家居、上海轩棱装饰、上海轻飏建筑装饰、江苏溧阳银丰家具、上海刻灵宁保洁服务、上海臻居网络科技、上海归璨网络科技有限公司等八家成员公司。</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 第3块结束 -->
          </div>
        </div>
        </div>
        
        <!-- end -->

      </div>
    </div>
    <FooterNav />
  </div>
</template>
<script>
import $ from "jquery";
import FooterNav from "../components/FooterNav";
import Nav from "../components/Nav";
import "swiper/dist/css/swiper.css";
import {
  swiper,
  swiperSlide,
  swiperContainer,
  Swiper
} from "vue-awesome-swiper";
export default {
  components: {
    swiper,
    swiperSlide,
    swiperContainer,
    FooterNav,
    Nav
  },
  data() {
    return {
      index: "0",
      index1: "1",
      index2: "1",
      swipe: {}
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  methods: {
    Refresh: function() {
      $(".swiper1 .swiper-slide")
        .eq(this.index)
        .addClass("selected");
    }
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    // console.log('this is current swiper instance object', this.swiper)
    // this.swiper.slideTo(3, 1000, false)
      this.index = this.$route.params.id;
    var _this = this;
    console.log(this.index)
    $(function() {
      function setCurrentSlide(ele, index) {
        $(".swiper1 .swiper-slide").removeClass("selected");
        ele.addClass("selected");
        //swiper1.initialSlide=index;
        // console.log($(".swiper1 .swiper-slide"));
      }
      var swiper1 = new Swiper(".swiper1", {
        //设置slider容器能够同时显示的slides数量(carousel模式)。
        //					可以设置为number或者 'auto'则自动根据slides的宽度来设定数量。
        //loop模式下如果设置为'auto'还需要设置另外一个参数loopedSlides。
        slidesPerView: 5.5,
        paginationClickable: true, //此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。
        spaceBetween: 10, //slide之间的距离（单位px）。
        freeMode: true, //默认为false，普通模式：slide滑动时只滑动一格，并自动贴合wrapper，设置为true则变为free模式，slide会根据惯性滑动且不会贴合。
        loop: false, //是否可循环
        onTab: function(swiper) {
          var n = swiper1.clickedIndex;
        }
      });
      swiper1.slides.each(function(index, val) {
        var ele = $(this);
        ele.on("mouseover", function() {
          setCurrentSlide(ele, index);
          swiper2.slideTo(index, 500, true);
          console.log((_this.index1 = "2"));
          console.log((_this.index2 = "2"));
          console.log((_this.index3 = "2"));
          // swiper2.autoplay.start();
          //mySwiper.initialSlide=index;
        });
      });

      var swiper2 = new Swiper(".swiper2", {
        //freeModeSticky  设置为true 滑动会自动贴合
        direction: "horizontal", //Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)。
        loop: true,
        autoplay: false,
        //					effect : 'fade',//淡入
        //effect : 'cube',//方块
        //effect : 'coverflow',//3D流
        //					effect : 'flip',//3D翻转
        autoHeight: true, //自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化。
        onSlideChangeEnd: function(swiper) {
          //回调函数，swiper从一个slide过渡到另一个slide结束时执行。
          var n = swiper.activeIndex;
          setCurrentSlide($(".swiper1 .swiper-slide").eq(n), n);
          swiper1.slideTo(n, 500, false);
        }
      });
    });
  }
};
</script>
<style scoped>
.box{
  width: 100%;
  height: 100%;
}
.qingyan {
  position: relative;
}
.bbox {
  margin-bottom: 0.5rem;
}
.bbox > .container {
  overflow: hidden;
}
.bbox > .container > .swiper1 {
  width: 100%;
  text-align: center;
}
.swiper1 .selected {
  color: #ff8400;
  margin-left: 15rem;
}
.img {
  height: 15rem;
  width: 100%;
}
.swiper1 .swiper-wrapper {
  display: flex;
  justify-content: center;
  width: 60%;
  text-align: center;
  margin-bottom: 2rem;
  margin: 0 auto;
}
.swiper1 > .swiper-wrapper > .swiper-slide {
  height: 5rem;
  border-bottom: 0.3rem solid #fff;
  text-align: center;
  font-size: 1rem;
  height: 1rem;
  display: flex;
  margin-top: 3rem;
  justify-content: center;
  align-items: center;
  margin-left: 0.5rem;
  cursor: pointer;
  margin-bottom: 2rem;
}
.swiper1 .swiper-slide a span {
  margin-bottom: 2.2rem;
  text-align: center;
  display: block;
  font-size: 1rem;
  width: 5rem;
  text-align: center;
}
.swiper1 .swiper-slide a img {
  transition: all 0.4s;
}
.swiper1 .swiper-slide a:hover img {
  transform: scale(1.12);
}
.swiper1 .swiper-wrapper .swiper-slide:hover {
  border-bottom: 0.3rem solid #ff8400;
  transform: scale(0.9);
}
.swiper2 {
  width: 96%;
}
.swiper2 .swiper-wrapper h3 {
  font-size: 1rem;
}
.swiper2 .swiper-wrapper .swiper-slide .flex_h {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 5%;
}
.swiper2 .swiper-wrapper .swiper-slide .flex_h .one .swiper_png_c{display:flex;
flex-direction: column;justify-content: center;}
.swiper2 .swiper-wrapper .swiper-slide .flex_h .one {
  /* padding: 2rem 0 0 1rem; */
  width: 15rem;
  text-align: center;
  width: 96%;
}
.swiper2 .swiper-wrapper .swiper-slide .flex_h .onel {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 1rem;
  /* width: 80%; */
}
.swiper2 .swiper-wrapper .swiper-slide .flex_h .onel .swiper_png_l img {
  height: 20rem;
  width: 12.5rem;
}
.swiper2 .swiper-wrapper .swiper-slide .flex_h .onel .swiper_png_r {
  width: 25rem;
  padding: 0rem 2rem;
  /* display: flex; */
  padding-top: 1rem;

}
.swiper2 .swiper-wrapper .swiper-slide .flex_h .onel .swiper_png_r .p{
  font: 700 .8rem/2 "";
}
.swiper2 .swiper-wrapper .swiper-slide .flex_h .onel .swiper_png_r .p1{
  font: .7rem/1.5rem "";
  
}
.swiper2 .swiper-wrapper .swiper-slide .flex_h .onel img {
  width: 12rem;
  height: 12rem;
  margin: 1rem;
}
.swiper2 .swiper-wrapper .swiper-slide .flex_h .one .jiagou {
  display: flex;
  justify-content: center;
}
.swiper2 .swiper-wrapper .swiper-slide .flex_h .one .jiagou_1 li {
  padding: 1rem;
}
.swiper2 .swiper-wrapper .swiper-slide .flex_h .one .jiagou_1 li .title {
  font: 700 1rem/1rem "";
}
.swiper2 .swiper-wrapper .swiper-slide .flex_h .one .jiagou li {
  margin: 1rem 0.5rem;
}
.swiper2 .swiper-wrapper .swiper-slide .flex_h .one .jiagou li p {
  width: 5rem;
}
.swiper2 .swiper-wrapper .swiper-slide .flex_h .one .box {
  position: relative;
  width: 100%;
  overflow: hidden;
}
.swiper2 .swiper-slide .imgs {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  align-content: center;
  padding-top: 2rem;
}
.swiper2 .swiper-wrapper .swiper-slide .flex_h .one .box h5 {
  width: 100%;
  position: absolute;
  text-align: center;
  left: 0;
  bottom: -12.9%;
  padding: 0.2rem 0;
  color: #fff;
  background: #000;
  transition: all 0.6s;
}
.swiper2 .swiper-wrapper .swiper-slide .flex_h .one:last-child {
  padding-bottom: 2rem;
}
.swiper2 .swiper-wrapper .swiper-slide .flex_h .one p {
  font-size: 0.8rem;
  width: 100%;
  margin-bottom: 1rem;
}
.swiper2 .swiper-wrapper .swiper-slide .flex_h .one:hover h5 {
  transform: translateY(-100%);
}
.swiper2 .swiper-wrapper .swiper-slide .flex_h .one h3 {
  color: black;
  font-weight: 700;
}
.swiper2 .swiper-wrapper .swiper-slide .flex_h .one img {
  height: 15rem;
}
.swiper2 .swiper-wrapper .swiper-slide .flex_h .one .imgs img {
  margin: 0.1rem;
  width: 10rem;
  height: 15rem;
}
.swiper2 .swiper-wrapper .swiper-slide .flex_h .one .imgs .ppp {
  height: 7rem;
}
.connect-model {
  width: 20%;
  height: 20%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
}
</style>

