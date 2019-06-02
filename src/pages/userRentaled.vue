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
      <div style="margin-left: 20px; width: calc(100% - 50px); background-color: #ffffff;">
        <table>
          <tr>
            <th width="5%">No.</th>
            <th width="10%">상품명</th>
            <th width="10%">구입처</th>
            <th width="15%">거래 시각</th>
            <th width="15%">반납 시각</th>
            <th width="10%">상태</th>
            <th width="15%">금액</th>
            <th>&nbsp;</th>
          </tr>
          <tr>
            <td>1</td>
            <td>양복 1SET</td>
            <td>양복 1SET</td>
            <td>2019-03-15 00:00:00</td>
            <td>2019-03-15 00:00:00</td>
            <td>승인 됨</td>
            <td>1,000 KRW / 일</td>
            <td>
              <div class="tooltip-btn" style="float: left;">
                <span style="color: #fafafa !important">연락처</span></div>
              &nbsp;
              <div class="tooltip-btn-red" style="float: left; margin-left: 15px;">
                <span style="color: #fafafa !important;border: none;">취소하기</span>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'userRentaled',
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