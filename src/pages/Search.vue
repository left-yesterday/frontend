<template>
  <div>
    <TopBar/>
    <div class="main">
    <h2 class="main_title">일치하는 {{dataList.length}}건의 상품을 찾았습니다!</h2><br>
      <div class="grid">
        <div class="resultset">
          <div class="result_blocks">
            <template v-for="(data, i) in dataList">
            <a v-bind:href="'/item/'+data.it_id"  v-bind:key="data.it_id"><div class="result_block" v-bind:style="{ 'background-image': 'url(' + data.image + ')' }">
              <div class="block_set mg-tp-170">
                <div class="block_det">
                  <p class="block_is_available" v-if="data.available==1">거래가능</p>
                  <p class="block_is_available" v-else>거래불가</p>
                  <p class="block_is_available2">{{ data.name }}</p>
                  <p class="block_is_available">{{ data.location || '없음' }}</p>
                </div>
                <p class="block_cnt">{{i+1}}</p>
              </div>
            </div></a></template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopBar from '@/components/TopBar'
import axios from 'axios'

export default {
  name: 'Search',
  components : {
    TopBar
  },
  data () {
    return {
      dataList: []
    }
  },
  created(){
    this.fetchData()
  },
  mounted(){
  },
  methods: {
    fetchData: function () {
      axios.get('http://tg-test-dev.ap-northeast-2.elasticbeanstalk.com/v1/item/search?name='+this.$route.query.q)
        .then(res => {
          this.dataList = res.data.dataList
        })
    }
  }
}
</script>