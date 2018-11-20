<template>
    <div>
      <h3 class="teachertitle">教师介绍</h3>
      <div class="teachercard">
        <div class="weui-media-box weui-media-box_appmsg">
          <div class="weui-media-box__hd">
            <img class="weui-media-box__thumb" id="userIcon" src="">
          </div>
          <div class="weui-media-box__bd">
            <h4 class="weui-media-box__title" id="nickname">教师</h4>
            <p id="teachDuration">0 年教学时长</p>
            <div class="media-line" id="courseNum">
              0服务人次
              <!--<a href="javascript:;">详情</a>-->
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'TeacherCard'
}
</script>

<style scoped>

</style>
