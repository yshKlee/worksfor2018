<template>
  <div>
    <div class="header"></div>
    <div class="index_bg index_bg1" id="image">
      <div class="index_bg_overlay"></div>
      <a href="agreement.html" class="activeline">
        邀请好友最高可享 <em id="groupTip">0</em> 奖励金 <i class="icon_right "></i>
      </a>
    </div>
    <div class="detailbox">
      <h2 id="title">基础瑜伽</h2>
      <em id="shortAddress">小黑裙超级瑜伽店／A教室</em>
      <!-- 信息栏  时间-建议-难度   -->
      <div class="titleline">
        <div class="timebox">
          <i class="myicon icon_time"></i>
          <span id="courseMin">0min</span>
        </div>
        <span id="proposeCycle">建议</span>
        <div class="hardbox">
          <span>难度</span>
          <HardLevel></HardLevel>
        </div>
      </div>
      <p id="brief"></p>
      <div class="topborder"></div>
      <div class="msglines ">
        <div class="msgline blue" id="suitPerson">
          <div class="leftpart">
            <i class="point"></i>
            <span>适合人群</span>
          </div>
          <div class="rightpart">
            <p></p>
          </div>
        </div>
        <div class="msgline blue" id="detail">
          <div class="leftpart">
            <i class="point"></i>
            <span>功效作用</span>
          </div>
          <div class="rightpart">
            <p></p>
          </div>
        </div>
        <div class="msgline red" id="attentionContent">
          <div class="leftpart">
            <i class="point"></i>
            <span>运动建议</span>
          </div>
          <div class="rightpart">
            <p></p>
          </div>
        </div>
      </div>
      <div class="topborder"></div>
      <div class="titlelink">
        <h3>用户评价</h3>
        <!--<em>（20484条）</em>-->
        <!--<a href="javascript:;"><em>更多</em> <i class="icon_right"></i> </a>-->
      </div>
      <Comment ></Comment>
      <!--<div class="weui-media-box weui-media-box_appmsg">
                  <div class="weui-media-box__hd">
                      <img class="weui-media-box__thumb" src="img/weixin@2x.png">
                  </div>
                  <div class="weui-media-box__bd">
                      <h4 class="weui-media-box__title">奥特曼</h4>
                      <div class="media-main">
                          <p>建议每周上1-2节课时议每周上1-2节课时议每周上1-2节课时议每周上1-2节课时议每周。</p>
                      </div>
                      <div class="media-foot">
                          <span class="left">03/23</span>
                          <a href="javascript:;" class="goods right">
                              <i class="myicon icon_def"></i>
                              <em>999+</em>
                          </a>
                      </div>
                  </div>
              </div>
              <div class="weui-media-box weui-media-box_appmsg">
                  <div class="weui-media-box__hd">
                      <img class="weui-media-box__thumb" src="img/weixin@2x.png">
                  </div>
                  <div class="weui-media-box__bd">
                      <h4 class="weui-media-box__title">奥特曼</h4>
                      <div class="media-main">
                          <p>建议每周上1-2节课时议每周上1-2节课时议每周上1-2节课时议每周上1-2节课时议每周。</p>
                      </div>
                      <div class="imgs">
                          <img src="img/tuanYogaImg.jpg" />
                          <img src="img/tuanYogaImg.jpg" />
                          <img src="img/tuanYogaImg.jpg" />
                      </div>

                      <div class="media-foot">
                          <span class="left">03/23</span>

                          <a href="javascript:;" class="goods right">
                              <i class="myicon icon_def"></i>
                              <em>999+</em>
                          </a>
                      </div>
                  </div>
              </div>-->
      <!--<div class="morebtn">
                查看全部
            </div>-->
      <div class="topborder"></div>
      <TeacherCard></TeacherCard>
      <div class="topborder"></div>
      <h4>订课须知</h4>
      <div class="ruleslist">
        <div class="ruleitem">
          <div class="ruleleft">
            <img src="img/xiangq_icon_dingke@2x.png" alt="" />
          </div>
          <div class="ruleright">
            <h5>订课</h5>
            <p>开课前10分钟内不可订课</p>
          </div>
        </div>
        <div class="ruleitem">
          <div class="ruleleft">
            <img src="img/xiangq_icon_huanke@2x.png" alt="" />
          </div>
          <div class="ruleright">
            <h5>换课</h5>
            <p>每人每月1次机会，开课前4小时外可换课</p>
          </div>
        </div>
        <div class="ruleitem">
          <div class="ruleleft">
            <img src="img/xiangq_icon_tuike@2x.png" alt="" />
          </div>
          <div class="ruleright">
            <h5>退课</h5>
            <p>开课前4小时内，将收取20%的手续费，次卡和优惠券不返还账户。</p>
          </div>
        </div>
      </div>
      <div class="topborder"></div>
    </div>
    <footer></footer>
    <div class="weui-gallery" id="gallery" style="">
      <span class="weui-gallery__img" id="galleryImg"></span>
      <div class="weui-gallery__opr">
        <a href="javascript:;" class="weui-gallery__del">
          <i class="weui-icon-cancel" style="color: #FFFFFF;"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>

import HardLevel from '@/components/hardLevel/hardLevel'
import TeacherCard from '@/components/TeacherCard/TeacherCard'
import Comment from '@/components/Comment/Comment'
import footer from '@/components/footer/footer'

export default {
  name: 'Detail',
  components: {
    HardLevel,
    TeacherCard,
    Comment,
    footer
  }
}
</script>

<style lang="less">
  @import 'index';
</style>
