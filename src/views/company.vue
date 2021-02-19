<template>
    <div>
        <txtimg name="Company" source="company.jpg" ></txtimg>
        <br><br><br>
<div v-if="$vuetify.breakpoint.mdAndUp==true">
            <v-row>
              <v-card color="transparent" tile flat height="0" style="margin-top: 10%"></v-card>
            </v-row>
              <div class="grey lighten-4" style="padding: 0 0 22% 0">
                        <div style="padding:10% 0 3% 0%; font-size:41pt; text-align:center;">우리의 노력이 당신의 힘이 되기에 "The work we love"</div>
            <v-row>
              <v-col offset="3" style="margin-bottom:10%; margin-top:5%;">
                <v-expand-transition css="true" class="expand-transition-enter-active">
                  <v-card elevation="0" width="100%" height="110%" id="card_border"  style="margin-left:-18%; text-align:center; padding:4%" class="grey lighten-4">
                      <div style="font-size: 35px" id="com_card">
                      </div><br>
                      <div style="font-size: 22px" id="com_card">
                        (주)브로넥스는 2016년 설립하여 IoT 기술로 스마트 팩토리 시장을 선도하는 기업으로 성장해 왔으며,<br/>
                        최고의 기술을 보유한 젊은 인재들이 긍지와 자부심을 가지고 최선을 다하고 있습니다.<br/>
                        브로넥스는 급변하는 시장환경과 IT기술 발전 속도에 발맞춰 고객의 니즈를 선도하며,<br/>
                        중소기업형 MES/POP, ERP, FA 솔루션을 다년간 정부 지원사업에 참여 하였으며,<br/>
                        주요기업 고객을 대상으로 주목할 만한 사업성과를 이루어왔습니다.<br/>
                        브로넥스는 앞으로도 젊음의 열정과 패기로 최고의 제품과 서비스를 창출할 것이며,<br/>
                        고객의 가치를 먼저 생각하고, 고객과 더불어 성장하는 IT Innovator로 행복한 미래를 위해 끊임없이 도전하겠습니다.
                      </div>
                  </v-card>
                </v-expand-transition>
              </v-col>
            </v-row>
              </div>
<h1 style="font-weight: bold; font-size: 30px; padding:8% 0 5% 10%;">사업 연혁</h1>
<v-card flat style="background-color:rgba(0,0,0,0);">
    <v-layout row wrap style="margin-left:12%;">
    <v-card-text class="py-0">
      <v-card width=10% height=2% style=" padding: 0 0 0 17%" elevation="0">
      <v-slider
      vertical
      height="600px"
      color="black"
      style="font-weight: bold;"
      v-model="model"
      :max="rounded.length-1"
      :tick-labels="rounded"
      background-color="rgba(0,0,0,0)"
    >
    </v-slider></v-card>
<v-card
      style="border: 1px solid; padding: 1.5%"
      :class="radius"
      class="mx-auto transition-swing"
      width="30%"
      elevation="0"
    >
       <div v-if="model===3" style="font-size: 120%; padding: 0 0 84% 0">
      세신기전 반응형 홈페이지 제작 완료<br>
      경남 창조혁신센터 공급기업 선정<br>
      스마트팩토리(공장)추진단 공급업체 선정<br>
      주식회사 브로넥스 창업(04.26)
    </div>
    <div v-else-if="model===2" style="font-size: 120%; padding: 0 0 74% 0">
     효림산업 MES 시스템 구축 완료<br>
삼원기술 모바일 APP 주문 시스템 구축 완료<br>
한국자동제어 반응형 홈페이지 제작 완료<br>
정우하이텍 MES 시스템 구축 완료<br>
창조혁신센터 공급기업 선정<br>
경북창조경제혁신센터 공급업체 선정
    </div>
    <div v-else-if="model===1" style="font-size: 120%; padding: 0 0 54.3% 0">
     상미식품 로봇자동화 설비 구축 완료<br>
영인이엔지 MES 시스템 구축 완료<br>
도아드림 MES 시스템 구축 완료<br>
효림산업 MES 시스템 구축 완료<br>
러버원 MES 시스템 구축 완료<br>
케이더블유 MES 시스템 구축 완료<br>
씨앤아이전자 MES 시스템 구축 완료<br>
알에스이 MES 시스템 구축 완료<br>
KPI(폴란드/해외) MES 시스템 구축 완료<br>
엘파워텍 로봇자동화 설비 구축 완료
    </div>
    <div v-else-if="model===0" style="font-size: 120%;">
     (주)엠피코 데이터바우처 우수기업 선정<br>
데이터바우처 사업 데이터 가공 공급기업 등록<br>
대중소 상생형 자동차 스마트 공장 공급기업 등록<br>
(주)달마솔루션 MES 시스템 구축 진행 중<br>
(주)코리아엘텍 MES 시스템 구축 진행 중<br>
(주)우리기업 MES 시스템 구축 진행 중<br>
동일전자(주) MES 시스템 구축 완료<br>
퍼스프 공정자동화 고도화 구축 완료<br>
(주)대한과학 MES 시스템 구축 완료<br>
태형기공 MES 시스템 구축 완료<br>
(주)엠피코 MES 시스템 구축 완료<br>
(주)명신 MES 시스템 구축 완료<br>
경북진공열처리 MES 시스템 구축 완료<br>
에스에프에서 제조 자동화 구축완료<br>
농업법인 송산 MES 시스템 구축 완료<br>
한성식품 스마트공장 1단계 구축 완료<br>
(https://www.smart-factory.kr/ 농업법인 주식회사 퍼스프)<br>
스마트제조 혁신추진단 스마트공장 우수구축사례 선정<br>
한국에프아이 MES 시스템 구축완료<br>
한국에프엠 MES 시스템 구축완료<br>
안산 스마트제조혁신센터 OPC-UA, AML 구축
    </div>
</v-card>
    </v-card-text>
    </v-layout>
  </v-card>
<h1 style="font-weight: bold; font-size: 30px; padding: 0 0 0 10%; margin-top: -15%">오시는 길</h1><br><br><br><br>
<div style="margin-left: 20%;">
<v-img :src="require(`@/assets/images/company_information.png`)" width="72%"></v-img></div>
  <br><br><br><br><br><br><br><br>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d396.9952152827253!2d127.05723460944793!3d37.2
4861564544385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b4559f35f82ef%3A0xcf45ec35db296972!2z7JiB7Ya
17JeQ7J207Iqk7ZWY7J207JeU65Oc7YOA7JuM!5e0!3m2!1sko!2skr!4v1612774230431!5m2!1sko!2skr" width="85%" height="600" 
frameborder="0" style="border:0; padding:0 0 0 15%;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    <div style="margin: 10%"></div>
</div>
<div v-if="$vuetify.breakpoint.mdAndUp==false">
            <v-row>
              <v-card color="transparent" tile flat height="0" style="margin-top: 10%"></v-card>
            </v-row>
              <div class="grey lighten-4" style="padding: 0 0 22% 0">
                        <div style="padding:10% 0 3% 0%; font-size:190%; text-align:center;">우리의 노력이 당신의 힘이 되기에 "The work we love"</div>
            <v-row>
              <v-col offset="3" style="margin-bottom:10%; margin-top:5%;">
                <v-expand-transition css="true" class="expand-transition-enter-active">
                  <v-card elevation="0" width="100%" height="110%" id="card_border"  style="margin-left:-18%; text-align:center; padding:3%" class="grey lighten-4">
                  <br>
                      <div style="font-size: 100%" id="com_card">
                        (주)브로넥스는 2016년 설립하여 IoT 기술로 스마트 팩토리 시장을 선도하는 기업으로 성장해 왔으며,<br/>
                        최고의 기술을 보유한 젊은 인재들이 긍지와 자부심을 가지고 최선을 다하고 있습니다.<br/>
                        브로넥스는 급변하는 시장환경과 IT기술 발전 속도에 발맞춰 고객의 니즈를 선도하며,<br/>
                        중소기업형 MES/POP, ERP, FA 솔루션을 <br/>다년간 정부 지원사업에 참여 하였으며,<br/>
                        주요기업 고객을 대상으로 주목할 만한 사업성과를 이루어왔습니다.<br/>
                        브로넥스는 앞으로도 젊음의 열정과 패기로 최고의 제품과 서비스를 창출할 것이며,<br/>
                        고객의 가치를 먼저 생각하고, 고객과 더불어 성장하는 IT Innovator로 행복한 미래를 위해 끊임없이 도전하겠습니다.
                      </div>
                  </v-card>
                </v-expand-transition>
              </v-col>
            </v-row>
              </div>
<h1 style="font-weight: bold; font-size: 30px; padding:20% 0 5% 10%;">사업 연혁</h1>
<v-card flat style="background-color:rgba(0,0,0,0);">
    <v-layout row wrap style="margin-left:9%;">
    <v-card-text class="py-0">
      <v-card width=10% height=1.5% style="margin-left:-11%" elevation="0">
      <v-slider
      vertical
      height="600px"
      color="black"
      style="font-weight: bold"
      v-model="model"
      :max="rounded.length-1"
      :tick-labels="rounded"
      background-color="rgba(0,0,0,0)"
    >
    </v-slider></v-card>
<v-card
      style="border: 1px solid; padding: 1.5%;"
      :class="radius"
      class="mx-auto transition-swing"
      width="77%"
      elevation="0"
    >
       <div v-if="model===3" style="padding: 0 0 199% 0">
      세신기전 반응형 홈페이지 제작 완료<br>
      경남 창조혁신센터 공급기업 선정<br>
      스마트팩토리(공장)추진단 공급업체 선정<br>
      주식회사 브로넥스 창업(04.26)
    </div>
    <div v-else-if="model===2" style="padding: 0 0 172% 0">
     효림산업 MES 시스템 구축 완료<br>
삼원기술 모바일 APP 주문 시스템 구축 완료<br>
한국자동제어 반응형 홈페이지 제작 완료<br>
정우하이텍 MES 시스템 구축 완료<br>
창조혁신센터 공급기업 선정<br>
경북창조경제혁신센터 공급업체 선정
    </div>
    <div v-else-if="model===1" style="padding: 0 0 145% 0">
     상미식품 로봇자동화 설비 구축 완료<br>
영인이엔지 MES 시스템 구축 완료<br>
도아드림 MES 시스템 구축 완료<br>
효림산업 MES 시스템 구축 완료<br>
러버원 MES 시스템 구축 완료<br>
케이더블유 MES 시스템 구축 완료<br>
씨앤아이전자 MES 시스템 구축 완료<br>
알에스이 MES 시스템 구축 완료<br>
KPI(폴란드/해외) MES 시스템 구축 완료<br>
엘파워텍 로봇자동화 설비 구축 완료
    </div>
    <div v-else-if="model===0">
     (주)엠피코 데이터바우처 우수기업 선정<br>
데이터바우처 사업 데이터 가공 공급기업 등록<br>
대중소 상생형 자동차 스마트 공장 공급기업 등록<br>
(주)달마솔루션 MES 시스템 구축 진행 중<br>
(주)코리아엘텍 MES 시스템 구축 진행 중<br>
(주)우리기업 MES 시스템 구축 진행 중<br>
동일전자(주) MES 시스템 구축 완료<br>
퍼스프 공정자동화 고도화 구축 완료<br>
(주)대한과학 MES 시스템 구축 완료<br>
태형기공 MES 시스템 구축 완료<br>
(주)엠피코 MES 시스템 구축 완료<br>
(주)명신 MES 시스템 구축 완료<br>
경북진공열처리 MES 시스템 구축 완료<br>
에스에프에서 제조 자동화 구축완료<br>
농업법인 송산 MES 시스템 구축 완료<br>
한성식품 스마트공장 1단계 구축 완료<br>
(https://www.smart-factory.kr/ 농업법인 주식회사 퍼스프)<br>
스마트제조 혁신추진단 스마트공장 우수구축사례 선정<br>
한국에프아이 MES 시스템 구축완료<br>
한국에프엠 MES 시스템 구축완료<br>
안산 스마트제조혁신센터 OPC-UA, AML 구축
    </div>
</v-card>
    </v-card-text>
    </v-layout>
  </v-card>
<h1 style="font-weight: bold; font-size: 30px; padding: 0 0 0 10%;; margin-top: -70%">오시는 길</h1><br><br><br><br>
<div style="margin-left: 5%;">
<v-img :src="require(`@/assets/images/company_information.png`)" width="95%"></v-img></div>
  <br><br><br><br>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d396.9952152827253!2d127.05723460944793!3d37.2
4861564544385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b4559f35f82ef%3A0xcf45ec35db296972!2z7JiB7Ya
17JeQ7J207Iqk7ZWY7J207JeU65Oc7YOA7JuM!5e0!3m2!1sko!2skr!4v1612774230431!5m2!1sko!2skr" width="85%" height="600" 
frameborder="0" style="border:0; padding:0 0 0 15%;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    <div style="margin: 3 0%"></div>
</div> </div>
</template>

<script>
import txtimg from '@/components/txtimg'
export default {
  components: {
    txtimg
  },
  mounted() {
        this.expand=true
    },
  data: () => ({
      model: 0,
      rounded: [
        '2019',
        '2018',
        '2017',
        '2016',
      ], years: [
        {
          color: 'cyan',
          year: '2016',
        },
        {
          color: 'green',
          year: '2017',
        },
        {
          color: 'pink',
          year: '2018',
        },
        {
          color: 'amber',
          year: '2019',
        },
      ],
  }),
}
</script>

<style>
#card_border {
  border: 1px solid grey !important;
}
#margin {
  margin-left: 43%;
  font-size: 16px;
}
#com_card {
  margin-left: 10px
}
#timeline_margin {
  width: 500px;
  padding: 10px
}
#timeline_spot {
  width: 500px;
  padding: 10px
}
.v-slider--vertical{
  min-height: 500px !important;
}
</style>