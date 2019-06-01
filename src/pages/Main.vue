<template>
<div>
    <TopBar/>
    <div>
        <table style="width: 80%; text-align: center">
            <tbody>
                <tr>
                    <td ><img class="base"></td>
                    <td ><img class="base"></td>
                    <td ><img class="base"></td>
                </tr>
                <tr>
                        <td ><img class="base"></td>
                    <td ><img class="base"></td>
                    <td ><img class="base"></td>
                </tr>
                <tr >
                        <td ><img class="base"></td>
                    <td ><img class="base"></td>
                    <td ><img class="base"></td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>
<script>
import TopBar from '@/components/TopBar'
export default {
  name: 'Main',
  components : {
    TopBar
  },
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