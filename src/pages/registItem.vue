<template>
  <div>
    <TopBar/>
    <div class="main">
      <h2 class="main_title">상품 등록을 시작합니다.</h2><br>
      <form action="">
        <div style="display: -webkit-flex;">
          <div class="input_set">
            <label for="email" class="labeled_text">상품종류 *</label><br>
            <select class="input_select" type="text" name="email" required>
              <option value="1"></option>
            </select>
          </div>
          <div class="input_set ml-100">
            <label for="email2" class="labeled_text">상품세부종류 *</label><br>
            <select class="input_select" type="text" name="email2" required>
              <option value="1"></option>
            </select>
          </div>
        </div>
        <div style="display: -webkit-flex;">
          <div class="input_set">
            <label for="name" class="labeled_text">상품 제목 *</label><br>
            <input class="input_box2" type="text" name="name" required/><br>
          </div>
          <div class="input_set ml-100">
            <label for="name2" class="labeled_text">1일당 가격 *</label><br>
            <input class="input_box2" type="text" name="name2" required/><br>
          </div><br>
        </div>
        <div style="display: -webkit-flex;">
          <div class="input_set">
            <label for="name3" class="labeled_text">상품 정보를 입력해주세요(사이즈) *</label><br>
            <textarea class="text_box" type="text" name="name3" required></textarea>
          </div>
          <div class="input_set ml-100">
            <label for="email3" class="labeled_text">상품상태 *</label><br>
            <select class="input_select" type="text" name="email3" required>
              <option value="1"></option>
            </select>
          </div>
          <div class="input_set ml-100">
            <label for="email4" class="labeled_text">상품이미지(1개) *</label><br>
            <input class="input_select" type="file" name="email4" required/>
          </div>
        </div>
        <div style="display: -webkit-flex;">
          <h2 class="box_desc">판매 등록 시 판매약관에 동의합니다.</h2>
          <button class="btn_common2">회원가입</button>
        </div>
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