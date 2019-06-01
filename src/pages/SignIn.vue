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
      <form action="">
        <div class="input_set">
          <input class="input_box" type="email" name="email" required placeholder="EMAIL"/><br>
          <a class="input_link">이메일을 잊어버리셨나요?</a>
        </div>
        <div class="input_set">
          <input class="input_box" type="password" name="password" required placeholder="PASSWORD"/><br>
          <a class="input_link">암호를 잊어버리셨나요?</a>
        </div>
        <button class="btn_common">로그인</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignIn',
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
