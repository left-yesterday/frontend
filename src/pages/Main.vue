<template>
  <div>
    <TopBar/>
    <div class="main">
      <h1 class="main_title">{{ name }}님! 주변에 옷 4개가 신청이 가능합니다.</h1>
      <h2 class="main_subtitle">양복</h2>
      <div class="grid">
        <template v-for="(data, i) in dataList" >
        <a v-bind:href="'/item/'+data.it_id"  v-bind:key="data.it_id"><div class="block" v-bind:style="{ 'background-image': 'url(' + data.image + ')' }">
          <div class="block_set">
            <div class="block_det">
              <p class="block_is_available" v-if="data.available==1">거래가능</p>
              <p class="block_is_available" v-else>거래불가</p>
              <p class="block_is_available2">{{ data.name }}</p>
              <p class="block_is_available">{{ data.location || '없음' }}</p>
            </div>
            <p class="block_cnt">{{i+1}}</p>
          </div>
        </div></a>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import TopBar from '@/components/TopBar'
import axios from 'axios'

export default {
  name: 'Main',
  components : {
    TopBar,
  },
  data () {
    return {
      dataList:[],
      name: ''
    }
  },
  created(){
    this.fetchData()
    this.name = this.getCookie('authUser')
  },
  mounted(){

  },
  methods: {
    getCookie: function (name) {
      var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)')
      return value ? value[2] : null
    },
    fetchData: function (){
      axios.get('http://tg-test-dev.ap-northeast-2.elasticbeanstalk.com/v1/list')
        .then(res => {
          if(res.data.code == 200){
            this.dataList = res.data.dataList
          }else{
            alert(res.data.status);
          }
        })
    }
  }
}
</script>