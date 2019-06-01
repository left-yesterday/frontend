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
      <form action="">
        <div class="input_set">
          <input class="input_box" type="email" name="email" required placeholder="EMAIL"/><br>
        </div>
        <div class="input_set">
          <input class="input_box" type="text" name="name" required placeholder="NAME"/><br>
        </div>
        <div class="input_set">
          <input class="input_box" type="password" name="password" required placeholder="PASSWORD"/><br>
        </div>
        <div class="input_set">
          <input class="input_box" type="password" name="password_retype" required placeholder="PASSWORD CHECK"/><br>
        </div>
        <h2 class="box_desc">회원가입시 이용약관 및 개인정보 처리 방침에 동의합니다.</h2>
        <button class="btn_common2">회원가입</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignUp',
  data () {
    return {
    }
  },
  created(){
  },
  mounted(){
  },
  methods: {
  }
}
</script>
