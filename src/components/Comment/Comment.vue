<template>
  <div class="comments">
    <div class="weui-media-box weui-media-box_appmsg">
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
  </div>
</template>

<script>
export default {
  name: 'Comment',
  created () {
    // this.$axios({
    //   method: 'post',
    //   url: 'https://www.heyqun.net/7life/course/courseEvaluation',
    //   data: {
    //     courseId: 60255,
    //     status: 0,
    //     page: 0,
    //     size: 3
    //   }
    // })
    //   .then(function (response) {
    //     console.log(response)
    //   })
    //   .catch(function (err) {
    //     console.log(err)
    //   })
  }
}
</script>

<style scoped>

</style>
