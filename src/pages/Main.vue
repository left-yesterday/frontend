<template>
  <div>
    <TopBar/>
    <div class="main">
      <h1 class="main_title">OOO님! 주변에 양복 4개가 신청이 가능합니다.</h1>
      <h2 class="main_subtitle">양복</h2>
      <div class="grid">
        <div class="block">
          <div class="block_set">
            <div class="block_det">
              <p class="block_is_available">거래가능</p>
              <p class="block_is_available2">신사용 양복 1SET</p>
              <p class="block_is_available">구로디지털단지 000호</p>
            </div>
            <p class="block_cnt">4</p>
          </div>
        </div>
        <div class="block">
          <div class="block_set">
            <div class="block_det">
              <p class="block_is_available">거래가능</p>
              <p class="block_is_available2">신사용 양복 1SET</p>
              <p class="block_is_available">구로디지털단지 000호</p>
            </div>
            <p class="block_cnt">4</p>
          </div>
        </div>
        <div class="block">
          <div class="block_set">
            <div class="block_det">
              <p class="block_is_available">거래가능</p>
              <p class="block_is_available2">신사용 양복 1SET</p>
              <p class="block_is_available">구로디지털단지 000호</p>
            </div>
            <p class="block_cnt">4</p>
          </div>
        </div>
        <div class="block">
          <div class="block_set">
            <div class="block_det">
              <p class="block_is_available">거래가능</p>
              <p class="block_is_available2">신사용 양복 1SET</p>
              <p class="block_is_available">구로디지털단지 000호</p>
            </div>
            <p class="block_cnt">4</p>
          </div>
        </div>
      </div>
      <h2 class="main_subtitle">양복</h2>
      <div class="grid">
        <div class="block">
          <div class="block_set">
            <div class="block_det">
              <p class="block_is_available">거래가능</p>
              <p class="block_is_available2">신사용 양복 1SET</p>
              <p class="block_is_available">구로디지털단지 000호</p>
            </div>
            <p class="block_cnt">4</p>
          </div>
        </div>
        <div class="block">
          <div class="block_set">
            <div class="block_det">
              <p class="block_is_available">거래가능</p>
              <p class="block_is_available2">신사용 양복 1SET</p>
              <p class="block_is_available">구로디지털단지 000호</p>
            </div>
            <p class="block_cnt">4</p>
          </div>
        </div>
        <div class="block">
          <div class="block_set">
            <div class="block_det">
              <p class="block_is_available">거래가능</p>
              <p class="block_is_available2">신사용 양복 1SET</p>
              <p class="block_is_available">구로디지털단지 000호</p>
            </div>
            <p class="block_cnt">4</p>
          </div>
        </div>
        <div class="block">
          <div class="block_set">
            <div class="block_det">
              <p class="block_is_available">거래가능</p>
              <p class="block_is_available2">신사용 양복 1SET</p>
              <p class="block_is_available">구로디지털단지 000호</p>
            </div>
            <p class="block_cnt">4</p>
          </div>
        </div>
      </div>
    </div>
    <vue-daum-map
      :appKey="appKey"
      :center.sync="center"
      :level.sync="level"
      :mapTypeId="mapTypeId"
      :libraries="libraries"
      @load="onLoad"
      @center_changed="onMapEvent('center_changed', $event)"
      @zoom_start="onMapEvent('zoom_start', $event)"
      @zoom_changed="onMapEvent('zoom_changed', $event)"
      @bounds_changed="onMapEvent('bounds_changed', $event)"
      @click="onMapEvent('click', $event)"
      @dblclick="onMapEvent('dblclick', $event)"
      @rightclick="onMapEvent('rightclick', $event)"
      @mousemove="onMapEvent('mousemove', $event)"
      @dragstart="onMapEvent('dragstart', $event)"
      @drag="onMapEvent('drag', $event)"
      @dragend="onMapEvent('dragend', $event)"
      @idle="onMapEvent('idle', $event)"
      @tilesloaded="onMapEvent('tilesloaded', $event)"
      @maptypeid_changed="onMapEvent('maptypeid_changed', $event)"
      style="width:500px;height:400px;">
    </vue-daum-map>
  </div>
</template>
<script>
import TopBar from '@/components/TopBar'
import VueDaumMap from 'vue-daum-map'
export default {
  name: 'Main',
  components : {
    TopBar,
    VueDaumMap
  },
  data () {
    return {
      appKey: 'd650a15bea81e28dadb716657ad03d75', // 테스트용 appkey
      center: {lat:33.450701, lng:126.570667}, // 지도의 중심 좌표
      level: 3, // 지도의 레벨(확대, 축소 정도),
      mapTypeId: VueDaumMap.MapTypeId.NORMAL, // 맵 타입
      libraries: [], // 추가로 불러올 라이브러리
      map: null // 지도 객체. 지도가 로드되면 할당됨.
    }
  },
  created(){
    //this.alpha()
  },
  mounted(){

  },
  methods: {
    onLoad (map) {
      this.map = map
    }
  }
}
</script>