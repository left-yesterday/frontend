<template>
  <div class="container">
    <div class="noticebox">
      <div class="notice_content">
        <img src="@/assets/img/Network Icon.png" width="16px" height="16px" />
        <p class="noticemsg">로그인 후 해당 기능을 사용하실 수 있습니다.</p>
        <img src="@/assets/img/Cross.png" id="close_btn" width="9px" height="9px" />
      </div>
    </div>
    <div class="box">
      <h2 class="box_logo">my closet</h2>
      <h2 class="box_title">로그인</h2>
      <form action="" v-on:submit.prevent="signin">
        <div class="input_set">
          <input class="input_box" type="email" v-model="email" required placeholder="EMAIL"/><br>
          <a class="input_link">이메일을 잊어버리셨나요?</a>
        </div>
        <div class="input_set">
          <input class="input_box" type="password" v-model="password" required placeholder="PASSWORD"/><br>
          <a class="input_link">암호를 잊어버리셨나요?</a>
        </div>
        <button class="btn_common" type="button" v-on:click="signin">로그인</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'SignIn',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  created(){
    this.tokenChk()
  },
  mounted(){
  },
  methods: {
    signin: function () {
      const email = this.email
      const password = this.password
      var qs = {
        email: email,
        password: password
      }
      axios.post('http://tg-test-dev.ap-northeast-2.elasticbeanstalk.com/v1/auth/signin', qs)
        .then(res => {
          if(res.data.code == 200){
            alert(res.data.status);
            console.log(res.data)
            document.cookie = `authUser=${email};path=/`
            document.cookie = `authCheck=1;path=/`
            window.location.href = '/'
          }else{
            alert(res.data.status);
          }
        })
    },
    tokenChk: function () {
      var authUser = this.getCookie('authUser')
      var authCheck = this.getCookie('authCheck')
      if (Number(authCheck) == 1 && authUser) {
        alert('USER ALREADY SIGNED IN!')
        window.location.href = '/'
      }
    },
    getCookie: function (name) {
      var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)')
      return value ? value[2] : null
    }
  }
}
</script>
