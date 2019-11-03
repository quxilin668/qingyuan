<template>
  <div class="qingyan">
    <Nav />
    <div class="ovehide">
      <div class="swiper-container swiper3">
        <div class="swiper-wrapper">
          <div class="swiper-slide swiper-no-swiping">
            <img class="img" src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/jt.jpg" />
          </div>
          <div class="swiper-slide swiper-no-swiping"></div>
          <div class="swiper-slide swiper-no-swiping"></div>
          <div class="swiper-slide swiper-no-swiping"></div>
        </div>
      </div>
    </div>
    <!-- swiper1 -->
    <div class="bbox">
      <div class="container" style="overflow:-Scroll;overflow-y:hidden">
        <div class="swiper-container swiper1">
          <div class="swiper-wrapper">
            <div class="swiper-slide selected" style="4rem">
              <a  style="text-decoration:none;color:#000; ">
                <span class>材料采集</span>
              </a>
            </div>
            <div class="swiper-slide">
              <a style="text-decoration:none;color:#000; ">
                <span>家具生产</span>
                <span></span>
              </a>
            </div>
            <div class="swiper-slide">
              <a style="text-decoration:none;color:#000; ">
                <span>智能家居</span>
              </a>
            </div>
            <div class="swiper-slide">
              <a style="text-decoration:none;color:#000; ">
                <span>保洁服务</span>
              </a>
            </div>
          </div>
        </div>
        <!-- swiper -->
        <!-- 0 -->
        <div class="box" v-if="this.index==0">
          <div class="swiper-container swiper2">
            <div class="swiper-wrapper">
              <!-- 01-1 -->
              <div class="swiper-slide swiper-no-swiping">
                <div class="box" v-if="this.index1=='1'">
                  <div class="flex_h" style="width: 86%;padding:0 1%">
                    <div class="one">
                      <img
                        src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/jt_cl.jpg"
                        width="100%"
                        height="300px"
                      />
                      <div>
                        <h3>上海臻居网络科技有限公司（帮采网）</h3>
                        <p>
                          “帮采网”,是一家“互联网+装饰材料集采+融服务”综合服务品牌公
                          司。
                        </p>
                        <p>
                          “帮采网”积极践行“没有中间商赚价”的运用理念,以“解决装修
                          装饰公司运行痛点”为使命,以金融思维作为顶层设计,以互联网平作为
                          链接工具,以装修材料集采主切入口,努力整合各大品牌厂商和优质装饰公
                          司,全力打造“材料升级时代”装修装饰的生态圈,全力锻造“材料市场的
                          稳定器、材料品牌的孵化器、材料厂商的优化器、社群文化的培育器”,为
                          材料标准升级和行业的发展尽心出力。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="box" v-if="this.index1=='2'">
                  <div class="flex_h" style="width: 86%;padding:0 1%">
                    <div class="one">
                      <img
                        src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/jt_jj.jpg"
                        width="100%"
                        height="300px"
                      />
                      <div>
                        <h3>江苏银丰科艺家具有限公司</h3>
                        <p>江苏银丰科艺家具有限公司是一家集设计开发、制造、销售和服务为一体的现代化家具制造企业。</p>
                        <p>公司位于江苏省旅游名城溧阳市，毗邻南京、与、苏、浙、皖三省接壤，前期总投资1000余万元，均采用国内最先进的全自动化家具生产设备，坚持以“造高品质绿色家具，提供心贴心服务”为使命，并以科学化管理体制，培养高素质人才，为企业做大做强奠定基础。</p>
                        <p>
                          公司主做的公寓酒店工程，主要成功案例银城集团、OYO连锁酒店、上海麦家、有家美宿、中天集团等项目。
                          公司现在主做家装系列，如橱柜、卧室家具等配套的家装系列，项目遍布江浙沪一带，得到广大客户的认可。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 02  -->
              <div class="swiper-slide swiper-no-swiping">
                <div class="flex_h" style="width: 86%;padding:0 1%">
                  <div class="onet">
                    <h3>上海归璨网络科技有限公司</h3>

                    <img
                      src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/jt_zn1.jpg"
                    />
                    <img
                      src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/jt_zn2.jpg"
                    />
                    <img
                      src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/jt_zn3.jpg"
                    />
                    <img
                      src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/jt_zn4.jpg"
                    />
                    <img
                      src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/jt_zn5.jpg"
                    />
                    <img
                      src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/jt_zn6.jpg"
                    />
                    <img
                      src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/jt_zn7.jpg"
                    />
                    <img
                      src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/jt_zn8.jpg"
                    />
                    <img
                      src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/jt_zn9.jpg"
                    />
                    <img
                      src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/jt_zn10.jpg"
                    />
                    <img
                      src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/jt_zn11.jpg"
                    />
                  </div>
                </div>
              </div>
              <!-- 02 -->
              <div class="swiper-slide swiper-no-swiping">
                <div class="flex_h" style="width: 86%;padding:0 1%">
                  <div class="one">
                    <img
                      src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/jc_bj.jpg"
                      width="400px"
                      height="300px"
                    />
                    <div>
                      <h3>上海刻灵宁保洁服务有限公司</h3>
                      <p>上海刻灵宁保洁有限公司是来自酒店公寓行业的保洁服务综合解决方案供应商。依托客房管理经验，秉持客户体验至上。</p>
                      <p>刻灵宁保洁关注空间环境的清洁与改善。业务现已覆盖全上海，维护1万+房源、3万+客房，拥有1000+专业保洁师。</p>
                      <p>我们致力于让人与环境的关系更加美好，建立行业的服务能力标准，提升用户的环境意识标准。有人的地方就有刻灵宁保洁！</p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 03 -->
              <div class="swiper-slide swiper-no-swiping">
                <div class="flex_h" style="width: 86%;padding:0 1%">
                  <div class="one">
                    <img
                      src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/jt_cl.jpg"
                      width="100%"
                      height="300px"
                    />
                    <div>
                      <h3>上海臻居网络科技有限公司（帮采网）</h3>
                      <p>“帮采网”,是一家“互联网+装饰材料集采+融服务”综合服务品牌公司。</p>
                      <p>
                        “帮采网”积极践行“没有中间商赚价”的运用理念,以“解决装修
                        装饰公司运行痛点”为使命,以金融思维作为顶层设计,以互联网平作为
                        链接工具,以装修材料集采主切入口,努力整合各大品牌厂商和优质装饰公
                        司,全力打造“材料升级时代”装修装饰的生态圈,全力锻造“材料市场的
                        稳定器、材料品牌的孵化器、材料厂商的优化器、社群文化的培育器”,为
                        材料标准升级和行业的发展尽心出力。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 1-->
        <div class="box" v-if="this.index=='1'">
          <div class="swiper-container swiper2">
            <div class="swiper-wrapper">
              <!-- 01 -->
              <div class="swiper-slide swiper-no-swiping">
                <div class="flex_h" style="width: 86%;padding:0 1%">
                  <div class="one">
                    <img
                      src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/jt_jj.jpg"
                      width="100%"
                      height="300px"
                    />
                    <div>
                      <h3>江苏银丰科艺家具有限公司</h3>
                      <p>江苏银丰科艺家具有限公司是一家集设计开发、制造、销售和服务为一体的现代化家具制造企业。</p>
                      <p>公司位于江苏省旅游名城溧阳市，毗邻南京、与、苏、浙、皖三省接壤，前期总投资1000余万元，均采用国内最先进的全自动化家具生产设备，坚持以“造高品质绿色家具，提供心贴心服务”为使命，并以科学化管理体制，培养高素质人才，为企业做大做强奠定基础。</p>
                      <p>
                        公司主做的公寓酒店工程，主要成功案例银城集团、OYO连锁酒店、上海麦家、有家美宿、中天集团等项目。
                        公司现在主做家装系列，如橱柜、卧室家具等配套的家装系列，项目遍布江浙沪一带，得到广大客户的认可。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <!--  -->
              <div class="swiper-slide swiper-no-swiping">
                <div class="flex_h" style="width: 86%;padding:0 1%">
                  <div class="onet">
                    <h3>上海归璨网络科技有限公司</h3>

                    <img
                      src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/jt_zn1.jpg"
                    />
                    <img
                      src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/jt_zn2.jpg"
                    />
                    <img
                      src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/jt_zn3.jpg"
                    />
                    <img
                      src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/jt_zn4.jpg"
                    />
                    <img
                      src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/jt_zn5.jpg"
                    />
                    <img
                      src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/jt_zn6.jpg"
                    />
                    <img
                      src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/jt_zn7.jpg"
                    />
                    <img
                      src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/jt_zn8.jpg"
                    />
                    <img
                      src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/jt_zn9.jpg"
                    />
                    <img
                      src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/jt_zn10.jpg"
                    />
                    <img
                      src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/jt_zn11.jpg"
                    />
                  </div>
                </div>
              </div>
              <!-- 0-->
              <div class="swiper-slide swiper-no-swiping">
                <div class="flex_h" style="width: 86%;padding:0 1%">
                  <div class="one">
                    <img
                      src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/jc_bj.jpg"
                      width="400px"
                      height="300px"
                    />
                    <div>
                      <h3>上海刻灵宁保洁服务有限公司</h3>
                      <p>上海刻灵宁保洁有限公司是来自酒店公寓行业的保洁服务综合解决方案供应商。依托客房管理经验，秉持客户体验至上。</p>
                      <p>刻灵宁保洁关注空间环境的清洁与改善。业务现已覆盖全上海，维护1万+房源、3万+客房，拥有1000+专业保洁师。</p>
                      <p>我们致力于让人与环境的关系更加美好，建立行业的服务能力标准，提升用户的环境意识标准。有人的地方就有刻灵宁保洁！</p>
                    </div>
                  </div>
                </div>
              </div>
              <!--  -->
              <div class="swiper-slide swiper-no-swiping">
                <div class="flex_h" style="width: 86%;padding:0 1%">
                  <div class="one">
                    <img
                      src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/jt_cl.jpg"
                      width="100%"
                      height="300px"
                    />
                    <div>
                      <h3>上海臻居网络科技有限公司（帮采网）</h3>
                      <p>“帮采网”,是一家“互联网+装饰材料集采+融服务”综合服务品牌公司。</p>
                      <p>
                        “帮采网”积极践行“没有中间商赚价”的运用理念,以“解决装修
                        装饰公司运行痛点”为使命,以金融思维作为顶层设计,以互联网平作为
                        链接工具,以装修材料集采主切入口,努力整合各大品牌厂商和优质装饰公
                        司,全力打造“材料升级时代”装修装饰的生态圈,全力锻造“材料市场的
                        稳定器、材料品牌的孵化器、材料厂商的优化器、社群文化的培育器”,为
                        材料标准升级和行业的发展尽心出力。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 2 -->
        <div class="box" v-if="this.index=='2'">
          <div class="swiper-container swiper2">
            <div class="swiper-wrapper">
              <!-- 01 -->
              <div class="swiper-slide swiper-no-swiping">
                <div class="box" v-if="this.index2=='1'">
                  <div class="flex_h" style="width: 86%;padding:0 1%">
                    <div class="onet">
                      <h3>上海归璨网络科技有限公司</h3>

                      <img
                        src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/jt_zn1.jpg"
                      />
                      <img
                        src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/jt_zn2.jpg"
                      />
                      <img
                        src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/jt_zn3.jpg"
                      />
                      <img
                        src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/jt_zn4.jpg"
                      />
                      <img
                        src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/jt_zn5.jpg"
                      />
                      <img
                        src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/jt_zn6.jpg"
                      />
                      <img
                        src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/jt_zn7.jpg"
                      />
                      <img
                        src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/jt_zn8.jpg"
                      />
                      <img
                        src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/jt_zn9.jpg"
                      />
                      <img
                        src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/jt_zn10.jpg"
                      />
                      <img
                        src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/jt_zn11.jpg"
                      />
                    </div>
                  </div>
                </div>
                <div class="box" v-if="this.index2=='2'">
                  <div class="flex_h" style="width: 86%;padding:0 1%">
                    <div class="one">
                      <img
                        src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/jt_jj.jpg"
                        width="100%"
                        height="300px"
                      />
                      <div>
                        <h3>江苏银丰科艺家具有限公司</h3>
                        <p>江苏银丰科艺家具有限公司是一家集设计开发、制造、销售和服务为一体的现代化家具制造企业。</p>
                        <p>公司位于江苏省旅游名城溧阳市，毗邻南京、与、苏、浙、皖三省接壤，前期总投资1000余万元，均采用国内最先进的全自动化家具生产设备，坚持以“造高品质绿色家具，提供心贴心服务”为使命，并以科学化管理体制，培养高素质人才，为企业做大做强奠定基础。</p>
                        <p>
                          公司主做的公寓酒店工程，主要成功案例银城集团、OYO连锁酒店、上海麦家、有家美宿、中天集团等项目。
                          公司现在主做家装系列，如橱柜、卧室家具等配套的家装系列，项目遍布江浙沪一带，得到广大客户的认可。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!--  -->
              <div class="swiper-slide swiper-no-swiping">
                <div class="flex_h" style="width: 86%;padding:0 1%">
                  <div class="onet">
                    <h3>上海归璨网络科技有限公司</h3>
                    <img
                      src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/jt_zn1.jpg"
                    />
                    <img
                      src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/jt_zn2.jpg"
                    />
                    <img
                      src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/jt_zn3.jpg"
                    />
                    <img
                      src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/jt_zn4.jpg"
                    />
                    <img
                      src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/jt_zn5.jpg"
                    />
                    <img
                      src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/jt_zn6.jpg"
                    />
                    <img
                      src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/jt_zn7.jpg"
                    />
                    <img
                      src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/jt_zn8.jpg"
                    />
                    <img
                      src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/jt_zn9.jpg"
                    />
                    <img
                      src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/jt_zn10.jpg"
                    />
                    <img
                      src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/jt_zn11.jpg"
                    />
                  </div>
                </div>
              </div>
              <!-- 0-->
              <div class="swiper-slide swiper-no-swiping">
                <div class="flex_h" style="width: 86%;padding:0 1%">
                  <div class="one">
                    <img
                      src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/jc_bj.jpg"
                      width="400px"
                      height="300px"
                    />
                    <div>
                      <h3>上海刻灵宁保洁服务有限公司</h3>
                      <p>上海刻灵宁保洁有限公司是来自酒店公寓行业的保洁服务综合解决方案供应商。依托客房管理经验，秉持客户体验至上。</p>
                      <p>刻灵宁保洁关注空间环境的清洁与改善。业务现已覆盖全上海，维护1万+房源、3万+客房，拥有1000+专业保洁师。</p>
                      <p>我们致力于让人与环境的关系更加美好，建立行业的服务能力标准，提升用户的环境意识标准。有人的地方就有刻灵宁保洁！</p>
                    </div>
                  </div>
                </div>
              </div>
              <!--  -->
              <div class="swiper-slide swiper-no-swiping">
                <div class="flex_h" style="width: 86%;padding:0 1%">
                  <div class="one">
                    <img
                      src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/jt_cl.jpg"
                      width="100%"
                      height="300px"
                    />
                    <div>
                      <h3>上海臻居网络科技有限公司（帮采网）</h3>
                      <p>“帮采网”,是一家“互联网+装饰材料集采+融服务”综合服务品牌公司。</p>
                      <p>
                        “帮采网”积极践行“没有中间商赚价”的运用理念,以“解决装修
                        装饰公司运行痛点”为使命,以金融思维作为顶层设计,以互联网平作为
                        链接工具,以装修材料集采主切入口,努力整合各大品牌厂商和优质装饰公
                        司,全力打造“材料升级时代”装修装饰的生态圈,全力锻造“材料市场的
                        稳定器、材料品牌的孵化器、材料厂商的优化器、社群文化的培育器”,为
                        材料标准升级和行业的发展尽心出力。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 3 -->
        <div class="box" v-if="this.index=='3'">
          <div class="swiper-container swiper2">
            <div class="swiper-wrapper">
              <!-- 01 -->
              <div class="swiper-slide swiper-no-swiping">
                <div class="box" v-if="this.index3=='1'">
                  <div class="flex_h" style="width: 86%;padding:0 1%">
                    <div class="one">
                      <img
                        src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/jc_bj.jpg"
                        width="400px"
                        height="300px"
                      />
                      <div>
                        <h3>上海刻灵宁保洁服务有限公司</h3>
                        <p>上海刻灵宁保洁有限公司是来自酒店公寓行业的保洁服务综合解决方案供应商。依托客房管理经验，秉持客户体验至上。</p>
                        <p>刻灵宁保洁关注空间环境的清洁与改善。业务现已覆盖全上海，维护1万+房源、3万+客房，拥有1000+专业保洁师。</p>
                        <p>我们致力于让人与环境的关系更加美好，建立行业的服务能力标准，提升用户的环境意识标准。有人的地方就有刻灵宁保洁！</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="box" v-if="this.index3=='2'">
                  <div class="flex_h" style="width: 86%;padding:0 1%">
                    <div class="one">
                      <img
                        src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/jt_jj.jpg"
                        width="100%"
                        height="300px"
                      />
                      <div>
                        <h3>江苏银丰科艺家具有限公司</h3>
                        <p>江苏银丰科艺家具有限公司是一家集设计开发、制造、销售和服务为一体的现代化家具制造企业。</p>
                        <p>公司位于江苏省旅游名城溧阳市，毗邻南京、与、苏、浙、皖三省接壤，前期总投资1000余万元，均采用国内最先进的全自动化家具生产设备，坚持以“造高品质绿色家具，提供心贴心服务”为使命，并以科学化管理体制，培养高素质人才，为企业做大做强奠定基础。</p>
                        <p>
                          公司主做的公寓酒店工程，主要成功案例银城集团、OYO连锁酒店、上海麦家、有家美宿、中天集团等项目。
                          公司现在主做家装系列，如橱柜、卧室家具等配套的家装系列，项目遍布江浙沪一带，得到广大客户的认可。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!--  -->
              <div class="swiper-slide swiper-no-swiping">
                <div class="flex_h" style="width: 86%;padding:0 1%">
                  <div class="onet">
                    <h3>上海归璨网络科技有限公司</h3>
                  </div>
                </div>
              </div>
              <!-- 0-->
              <div class="swiper-slide swiper-no-swiping">
                <div class="flex_h" style="width: 86%;padding:0 1%">
                  <div class="one">
                    <img
                      src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/jc_bj.jpg"
                      width="400px"
                      height="300px"
                    />
                    <div>
                      <h3>上海刻灵宁保洁服务有限公司</h3>
                      <p>上海刻灵宁保洁有限公司是来自酒店公寓行业的保洁服务综合解决方案供应商。依托客房管理经验，秉持客户体验至上。</p>
                      <p>刻灵宁保洁关注空间环境的清洁与改善。业务现已覆盖全上海，维护1万+房源、3万+客房，拥有1000+专业保洁师。</p>
                      <p>我们致力于让人与环境的关系更加美好，建立行业的服务能力标准，提升用户的环境意识标准。有人的地方就有刻灵宁保洁！</p>
                    </div>
                  </div>
                </div>
              </div>
              <!--  -->
              <div class="swiper-slide swiper-no-swiping">
                <div class="flex_h" style="width: 86%;padding:0 1%">
                  <div class="one">
                    <img
                      src="https://m7-1253550715.cos-website.ap-shanghai.myqcloud.com/image/jt_cl.jpg"
                      width="100%"
                      height="300px"
                    />
                    <div>
                      <h3>上海臻居网络科技有限公司（帮采网）</h3>
                      <p>
                        “帮采网”,是一家“互联网+装饰材料集采+融服务”综合服务品牌公
                        司。
                      </p>
                      <p>
                        “帮采网”积极践行“没有中间商赚价”的运用理念,以“解决装修
                        装饰公司运行痛点”为使命,以金融思维作为顶层设计,以互联网平作为
                        链接工具,以装修材料集采主切入口,努力整合各大品牌厂商和优质装饰公
                        司,全力打造“材料升级时代”装修装饰的生态圈,全力锻造“材料市场的
                        稳定器、材料品牌的孵化器、材料厂商的优化器、社群文化的培育器”,为
                        材料标准升级和行业的发展尽心出力。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
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
// import $ from "jquery";
import FooterNav from "../components/FooterNav";
import Nav from "../components/Nav";
import "swiper/dist/css/swiper.css";
import {
  swiper,
  swiperSlide,
  swiperContainer,
  Swiper
} from "vue-awesome-swiper";

// console.log(swiper)
export default {
  components: {
    swiper,
    swiperSlide,
    swiperContainer
  },
  data() {
    return {
      index: "0",
      index1: "1",
      index2: "1",
      index3: "1"
    };
  },
  components: {
    FooterNav,
    Nav
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    this.index = this.$route.params.id;
    console.log(this.$route)
    console.log(this.index)
    var _this = this;
    $(function() {
      function setCurrentSlide(ele, index) {
        $(".swiper1 .swiper-slide").removeClass("selected");
        ele.addClass("selected");
      }
      var swiper1 = new Swiper(".swiper1", {
        slidesPerView: 5.5,
        paginationClickable: true,
        spaceBetween: 10,
        freeMode: true,
        loop: false,
        onTab: function(swiper) {
          var n = swiper1.clickedIndex;
        }
      });
      swiper1.slides.each(function(index, val) {
        var ele = $(this);
        ele.on("mouseover", function() {
          setCurrentSlide(ele, index);
          swiper2.slideTo(index, 500, true);
          _this.index1 = "2";
          _this.index2 = "2";
          _this.index3 = "2";
        });
      });

      var swiper2 = new Swiper(".swiper2", {
        direction: "horizontal",
        loop: true,
        autoplay: false,
        autoHeight: true,
        onSlideChangeEnd: function(swiper) {
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
.box {
  width: 100%;
  height: 100%;
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
  justify-content: center;
  margin: 0 7%;
}
.swiper2 .swiper-wrapper .swiper-slide .flex_h .one {
  padding: 2rem 0 0 0rem;
  display: flex;
  flex-wrap: wrap;
  width:96%;
  justify-content: space-between;
  text-align: center;
}
.swiper2 .swiper-wrapper .swiper-slide .flex_h .one img {
  height: 20rem;
  width: 20rem;
  margin-bottom: 2rem;
}
.swiper2 .swiper-wrapper .swiper-slide .flex_h .one div p {
  width: 20rem;
  line-height: 1.6rem;
  text-align: left;
  font-size: 0.8rem;
  width: 100%;
  margin-bottom: 1rem;
}
.swiper2 .swiper-wrapper .swiper-slide .flex_h .one div {
  width: 20rem;
}
.swiper2 .swiper-wrapper .swiper-slide .flex_h .one .box {
  position: relative;
  width: 100%;
  overflow: hidden;
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

.swiper2 .swiper-wrapper .swiper-slide .flex_h .one:hover h5 {
  transform: translateY(-100%);
}
.swiper2 .swiper-wrapper .swiper-slide .flex_h .one h3 {
  color: black;
  font-weight: 700;
  text-align: left;
  padding-bottom: 0.3rem;
}

.swiper2 .swiper-wrapper .swiper-slide .flex_h .onet {
  text-align: center;
  padding: 2rem 0;
}
.swiper2 .swiper-wrapper .swiper-slide .flex_h .onet h3 {
  font-weight: 700;
}
.swiper2 .swiper-wrapper .swiper-slide .flex_h .onet p {
  font-size: 0.8rem;
  text-indent: 2rem;
}
.swiper2 .swiper-wrapper .swiper-slide .flex_h .onet img {
  height: 8%;
  width: 80%;
  margin-top: 1rem;
}
.connect-model {
  width: 20%;
  height: 20%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
}
</style>


