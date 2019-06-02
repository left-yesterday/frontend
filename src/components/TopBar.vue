<template>
  <div class="header">
    <div class="top">
      <div class="left">
        <div class="logo">
          <a href="/" style="text-decoration: none;"><span class="godo-r-font">closet</span>&nbsp;|&nbsp;&nbsp;패션 아이템 공유 매칭서비스</a>
        </div>
      </div>
      <div class="right-icon">
        <img src="@/assets/img/Network Icon.png" width="16px" height="16px" />
        <a href="/user"><img src="@/assets/img//User Icon.png" width="16px" height="16px" /></a>
      </div>
    </div>
    <br />
    <div class="bottom">
      <!-- <span class="padding-med-right menu-font"><img src="@/assets/img/icons8-upload-to-cloud-52.png" width="25px" height="20px" />&nbsp; 상품 등록</span> -->
      <a href="/regist/item" style="text-decoration: none;"><span class="padding-med-right menu-font"><img src="@/assets/img/icons8-upload-to-cloud-52.png" width="25px" height="20px" />&nbsp; 상품 등록</span></a>
      <input class="padding-med-right menu-font searchinput" type="text" v-model="text" placeholder="검색..."/><button type="button" v-on:click="search">검색</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'TopBar',
  data () {
    return {
      text: ''
    }
  },
  methods: {
    search: function () {
      window.location.href = '/search?q='+this.text
    }
  }
}
</script>