<template>
  <div class="container">
    <div class="noticebox">
      <div class="notice_content">
        <img src="@/assets/img/Network Icon.png" width="16px" height="16px" />
        <p class="noticemsg">회원가입 후 다양한 기능을 사용하실 수 있습니다.</p>
        <img src="@/assets/img/Cross.png" id="close_btn" width="9px" height="9px" />
      </div>
    </div>
    <div class="box">
      <h2 class="box_logo">welcome to closet</h2>
      <h2 class="box_title">회원가입</h2>
      <form action="" v-on:submit.prevent="signup">
        <div class="input_set">
          <input class="input_box" type="email" v-model="email" required placeholder="EMAIL"/><br>
        </div>
        <div class="input_set">
          <input class="input_box" type="text" v-model="name" required placeholder="NAME"/><br>
        </div>
        <div class="input_set">
          <input class="input_box" type="password" v-model="password" required placeholder="PASSWORD"/><br>
        </div>
        <div class="input_set">
          <input class="input_box" type="password" v-model="password_retype" required placeholder="PASSWORD CHECK"/><br>
        </div>
        <h2 class="box_desc">회원가입시 이용약관 및 개인정보 처리 방침에 동의합니다.</h2>
        <button class="btn_common2" type="button" v-on:click="signup">회원가입</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignUp',
  data () {
    return {
      email: '',
      name: '',
      password: '',
      password_retype: ''
    }
  },
  created(){
    this.tokenChk()
  },
  mounted(){
  },
  methods: {
    signup: function () {
      const email = this.email
      const password = this.password
      const password_retype = this.password_retype
      const name = this.name
      var qs = {
        email: email,
        name: name,
        password: password,
        password_retype: password_retype
      }
      axios.post('http://tg-test-dev.ap-northeast-2.elasticbeanstalk.com/v1/auth/signup', qs)
        .then(res => {
          if(res.data.code == 200){
            alert(res.data.status)
            console.log(res.data)
            window.location.href = '/auth/signin'
          } else {
            alert(res.data.status)
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
