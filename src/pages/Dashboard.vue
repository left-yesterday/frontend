<template>
  <div id="wrapper" class="flex-container">
    <div id="sidebar" style="flex: 0.5; height: calc(95vh - 50px);">
      <div class="profile-section" style="margin-bottom: 36px;">
        <div id="profileImg">
          <img src="@/assets/img/Picture.png" width="47.5px" height="47.5px" style="float: left;" />
          <span>
            <h3 style="margin-left: 70px; margin-bottom: 0; color: #12aaeb;">OOO</h3>
            <p style="margin-left: 70px; margin-top: 3px;">환영합니다!</p>
          </span>
        </div>
      </div>
      <div id="line"
        style="width: 27px; height: 3px; background-color: #0d2a49; opacity: 0.09; margin-left: 36px; margin-bottom: 50px;">
      </div>
      <div style="margin-left: 36px; font-size: 13px; font-style: none;">
        <h3>대쉬보드</h3>
        <h3>구매 관리</h3>
        <h3>판매 관리</h3>
      </div>
    </div>
    <div id="dashboard-content" style="flex: 2.5;">
      <div id="stat" class="flex-container" style="margin-left: 20px;">
        <div id="stat_1" class="flex-1"
          style="height: 120px; border-radius: 5px; margin-right: 10px; background-color: #0a95dd;">
          <div class="vertical-container">
            <div style="width: 56px; height:56px; border-radius: 50%; background-color: #01669a; opacity: 0.4;">
              <div class="vertical-container">
                <img src="@/assets/img/Forma 1 copy 8.png" width="20px" height="20px" />
              </div>
            </div>
            <div style="color: white; margin-left: 30px;">
              <h3 style="margin-bottom: 0;">325</h3>
              <p style="margin-top: 0;">누적 거래</p>
            </div>
          </div>
        </div>
        <div id="stat_2" class="flex-1"
          style="height: 120px; border-radius: 5px; margin-right: 10px; background-color: #0a95dd;">
          <div class="vertical-container">
            <div style="width: 56px; height:56px; border-radius: 50%; background-color: #01669a; opacity: 0.4;">
              <div class="vertical-container">
                <img src="@/assets/img/Forma 1 copy 8.png" width="20px" height="20px" />
              </div>
            </div>
            <div style="color: white; margin-left: 30px;">
              <h3 style="margin-bottom: 0;">325</h3>
              <p style="margin-top: 0;">누적 거래</p>
            </div>
          </div>
        </div>
        <div id="stat_3" class="flex-1"
          style="height: 120px; border-radius: 5px; margin-right: 10px; background-color: #0a95dd;">
          <div class="vertical-container">
            <div style="width: 56px; height:56px; border-radius: 50%; background-color: #01669a; opacity: 0.4;">
              <div class="vertical-container">
                <img src="@/assets/img/Forma 1 copy 8.png" width="20px" height="20px" />
              </div>
            </div>
            <div style="color: white; margin-left: 30px;">
              <h3 style="margin-bottom: 0;">325</h3>
              <p style="margin-top: 0;">누적 거래</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
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