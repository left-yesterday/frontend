<template>
  <div>
    <TopBar/>
    <div class="flex-container">
      <div class="flex-1">
        <div class="info-container">
          <div class="info-title">
            <div class="flex-container">
              <div id="title" class="flex-2">
                <h3>남성용 정장 1SET</h3>
                <p>구로 디지털 단지</p>
              </div>
              <div id="stat" class="flex-1 margin-r-l">
                <div class="flex-container">
                  <div class="flex-3">
                    <div class="vertical-container">
                      <span class="stat-light">730</span>
                    </div>
                    <div class="vertical-container">
                      <span class="stat-small">조회 수</span>
                    </div>
                  </div>
                  <div class="flex-3">
                    <div class="vertical-container">
                      <span class="stat-light">569</span>
                    </div>
                    <div class="vertical-container">
                      <span class="stat-small">누적 판매 수</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="info-container margin-t-li">
          <div class="flex-2">
            <div class="d-line">
              <span class="span-size-info"><img src="@/assets/img/icons8-drag-52.png" width="20px"
                  height="20px" />&nbsp;&nbsp;사이즈 정보</span><br />
              <span>신장&nbsp;&nbsp;180cm</span><br />
              <span>신장&nbsp;&nbsp;180cm</span><br />
              <span>신장&nbsp;&nbsp;180cm</span><br />
            </div>
          </div>
          <div class="flex-1 margin-r-l">
            <div class="vertical-container bar-text">
              상태
            </div><br />
            <div class="vertical-container">
              <div class="bar-base"></div>
              <div class="bar"></div>
              <div class="bar-over-text">
                <div class="vertical-container">
                    최상
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="cald" class="info-container">
          <div class="flex-1 mg-left-m">
            <br />
            <h3>2019</h3>
            <p style="margin-top: 150px; font-weight: 350; font-size: 20px;">남성용 양복 1SET</p>
            <div style="padding: 5px; border-radius: 3px; height: 20px; width: 80px; background-color: #8bc058; color: #fafafa; font-size: 12px; margin-top: 180px;">
              <div class="vertical-container">
                거래 신청
              </div>
            </div>
            <p style="color: red; margin-top: 15px">※ 5일 구입시 1일 무료!</p>
          </div>
          <div class="flex-2 bd-rad-10 bg-black">
            <br />
            <div class="mg-left-m">
              <h3><span style="margin-right: 9px;">MO</span><span style="margin-right: 9px;">MO</span><span style="margin-right: 9px;">MO</span><span style="margin-right: 9px;">MO</span><span style="margin-right: 9px;">MO</span><span style="margin-right: 9px;">MO</span><span style="margin-right: 9px;">MO</span></h3>
              <p><span style="margin-right: 21px;">27</span><span style="margin-right: 21px;">27</span><span style="margin-right: 21px;">27</span><span style="margin-right: 21px;">27</span><span style="margin-right: 21px;">27</span><span style="margin-right: 21px;">27</span><span style="margin-right: 21px;">27</span></p>
              <p><span style="margin-right: 21px;">27</span><span style="margin-right: 21px;">27</span><span style="margin-right: 21px;">27</span><span style="margin-right: 21px;">27</span><span style="margin-right: 21px;">27</span><span style="margin-right: 21px;">27</span><span style="margin-right: 21px;">27</span></p>
              <p><span style="margin-right: 21px;">27</span><span style="margin-right: 21px;">27</span><span style="margin-right: 21px;">27</span><span style="margin-right: 21px;">27</span><span style="margin-right: 21px;">27</span><span style="margin-right: 21px;">27</span><span style="margin-right: 21px;">27</span></p>
              <p><span style="margin-right: 21px;">27</span><span style="margin-right: 21px;">27</span><span style="margin-right: 21px;">27</span><span style="margin-right: 21px;">27</span><span style="margin-right: 21px;">27</span><span style="margin-right: 21px;">27</span><span style="margin-right: 21px;">27</span></p>
              <p><span style="margin-right: 21px;">27</span><span style="margin-right: 21px;">27</span><span style="margin-right: 21px;">27</span><span style="margin-right: 21px;">27</span><span style="margin-right: 21px;">27</span><span style="margin-right: 21px;">27</span><span style="margin-right: 21px;">27</span></p>
              <p><span style="margin-right: 21px;">27</span><span style="margin-right: 21px;">27</span><span style="margin-right: 21px;">27</span><span style="margin-right: 21px;">27</span><span style="margin-right: 21px;">27</span><span style="margin-right: 21px;">27</span><span style="margin-right: 21px;">27</span></p>
            </div>
            <div>
              <br /><br />
              <div style="width: 100%; height: 3px; border-radius: 1px; background-color: rgba(0,0,0,0.3);"></div>
              <br />
              <div class="mg-left-m">
                <h2 style="position: absolute; z-index: 1000; color: #ecc30a;">11</h2>
                <h2 style="position: absolute; z-index: 1001; margin-left: 35px; margin-top: 35px; color: #ecc30a;">30</h2>
                <p style="position: absolute; z-index: 1002; margin-left: 80px; margin-top: 35px; color: #ecc30a; font-size: 13px;">판매자가 지정한 연락 가능 시각입니다.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-2">
        <img src="@/assets/img/hunters-race-408744-unsplash.png" width="100%" height="100%" />
      </div>
    </div>
  </div>
</template>

<script>
import TopBar from '@/components/TopBar'

export default {
  name: 'Item',
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