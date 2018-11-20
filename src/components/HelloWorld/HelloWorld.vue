<template>
  <div class="hello">
    <router-link to="/detail">detail</router-link>
    <ul>
      <li v-for="(item, index) in items" :key='index'>
        <Link :content='item.text'
              :linkIndex='index'
              :link='item.links'
              @delete='handleDel'
        />
      </li>
      <Button @click.native="$refs.alert.open()">Show Alert</Button>
    </ul>
    <Button class='btn' v-for="(item, index) in btnList" :key='index' :type='item.type'>{{item.name}}</Button>
    <Button class='btn' @click.native="$refs.p2.open()">Show Popup</Button>
    <alert :title="'Hello'" :content="'Hello there!'" :on-ok="log" ref="alert"></alert>
    <popup ref="p2">
      <!--<h2 class="demos-sub-title">Popup Content</h2>-->
      <!--<div class="content-padded">-->
      <!--<p>You can put any content here</p>-->
      <!--</div>-->
      <!-- 外部定义的子组件内容 由 slot 标签接受 -->
      <div class="popup_sex">
        <div class="sexbox">
          <span class="selectline">男</span>
          <span class="selectline">女</span>
        </div>
        <div class="cancelbtn" @click="$refs.p2.close()">
          取消
        </div>
      </div>
    </popup>
  </div>
</template>
<!--<script>-->
<!--import $ from 'jquery'-->
<!--import weui from 'jquery-weui/dist/js/jquery-weui.min'-->
<!--function fff(){-->
<!--$.alert("自定义的消息内容");-->
<!--}-->
<!--</script>-->
<script>
import $ from 'jquery'
import weui from 'jquery-weui/dist/js/jquery-weui.min'
import Button from '../buttons/button'
import Link from './link'
import Popup from '../popup'
import { Alert, Confirm, Prompt, Modal } from '../modal'
import axios from 'axios'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js A',
      btnList: [{
        type: 'default',
        name: 'default-Btn'
      }, {
        type: 'light',
        name: 'light-Btn'
      }, {
        type: 'danger',
        name: 'danger-Btn'
      }, {
        type: 'warning',
        name: 'warning-Btn'
      }, {
        type: 'success',
        name: 'success-Btn'
      }],
      items: [{
        links: 'javascript:;',
        target: '_blank',
        text: 'test1'
      }, {
        links: 'javascript:;',
        target: '_blank',
        text: 'test2'
      }]
    }
  },
  components: { Link,
    Button,
    Popup,
    Alert,
    Confirm,
    Modal,
    Prompt},
  methods: {
    close () {
      console.log(weui)
      $.alert('123')
    },
    handleDel (index, that) {
      // console.log('outDel' + index)
      console.log(index % 2)
      if (index % 2 === 0) {
        //
        this.items.splice(index, 1)
      } else {
        this.items.push({
          links: 'javascript:;',
          target: '_blank',
          text: 'test2'
        })
      }
    },
    log (m) {
      console.log(m || 'log')
    }
  },
  created () {
    // axios.get('https://www.heyqun.net/7life/usr/isLogin')
    //   .then(function (response) {
    //     console.log(response)
    //   })
    //   .catch(function (err) {
    //     console.log(err)
    //   })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*@import url('./jquery-weui/dist/css/jquery-weui.css');*/
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .btn{
    width:calc(100% - 20px);
    margin: 10px auto;
  }
  .popup_sex{
    background: transparent;
    height: 201px;
  }
  .sexbox{
    width: calc(100% - 24px*2);
    margin: 0 auto;
    height: 116px;
    background: #ffffff;
    border-radius: 16px;
  }
  .selectline{
    font-size: 17px;
    color: #4A90E2;
    text-align: center;
    display: block;
    height: 58px;
    line-height: 58px;
    position: relative;
  }
  .selectline:after{
    content: '';
    position: absolute;
    bottom: 1px;
    left: 0;
    display: block;
    width: 100%;
    height: 1px;
    border-bottom: 1px solid #D8D8D8;
  }
  .selectline:last-child:after{
    display: none;
  }
  .cancelbtn{
    width: calc(100% - 24px*2);
    margin: 12px auto 0;
    height: 57px;
    line-height: 57px;
    border-radius: 14px;
    background: #FFFFFF;
    font-size: 17px;
    color: #4A90E2;
    letter-spacing: -0.41px;
    text-align: center;
  }
</style>
