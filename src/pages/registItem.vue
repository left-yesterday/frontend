<template>
  <div>
    <TopBar/>
    <div class="main">
    <h2 class="main_title">상품 등록을 시작합니다.</h2><br>
    <form action="">
      <div class="input_set">
        <label for="email" class="labeled_text">상품종류 *</label><br>
        <select class="input_select" type="text" name="email" required>
          <option value="1"></option>
        </select>
      </div>
      <div class="input_set">
        <label for="email2" class="labeled_text">상품세부종류 *</label><br>
        <select class="input_select" type="text" name="email2" required>
          <option value="1"></option>
        </select>
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
import TopBar from '@/components/TopBar'

export default {
  name: 'Search',
  components : {
    TopBar
  },
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