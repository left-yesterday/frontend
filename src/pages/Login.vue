<template>
      <div class="container" >
      <div class="modal_container" style="width:50%">
        <div class="noticebox">
        </div>
        <div class="box" style="text-align: center">
          <div>
          <h2 class="my-Closet">my closet</h2>
          </div>
          <div>
              <h2 class="text-login">로그인</h2>
          </div>
          <form action="">
            <div class="input_set">
              <input class="Rectangle" type="text" name="email" required/><br>
              <a class="text-notice" style="text-align: right">이메일을 잊어버리셨습니까?</a>
            </div>
            <div class="input_set">
              <input class="Rectangle" type="password" name="password" required/><br>
              <a class="text-notice">암호를 잊어벼리셨습니까?</a>
            </div>
            <div>
                <button class="btn-common">로그인</button>
            </div>
          </form>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      email: ''
    }
  },
  created(){
    //this.alpha()
  },
  mounted(){

  },
  methods: {
    alpha: function(){
      alert('aaa')
    },
    login: function(){
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
