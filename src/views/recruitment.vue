<template>
<div>
        <txtimg name="Recruitment" source="recruitment.jpg" ></txtimg><br>
    <div style="padding:10% 0 0 10%">
          <h1 style="font-weight: bold; font-size: 30px">인재상</h1><br>
          <v-card width="80%" elevation="0" style="margin-top:3%; margin-bottom: 5%;">
            <v-layout row wrap>
            <v-card class=" text-center" height="100%"  style="padding:0 2% 0 2%">
              <v-img :src="require(`@/assets/images/passion.png`)" width="80%" height="75%" style="margin-left:10%" ></v-img>
              <div style="font-weight: bold; font-size: 200%;">Passion</div>
              <div style="font-size: 150%;">고객을 최우선으로 생각하고 끊임없는<br>
              열정으로 최고에 도전하는 사람</div>
              </v-card>
              <div style="margin-left: 4%"></div>
            <v-card class=" text-center" height="100%"  style="padding:0 2% 0 2%">
            <v-img :src="require(`@/assets/images/professionalism.png`)" width="120%" height="105%" style="padding: 4% 0% 4% 0"></v-img>
              <div style="font-weight: bold; font-size: 200%;">Professionalism</div>
              <div style="font-size: 150%; margin-bottom:1%">끊임없는 혁신과 창의적인 아이디어를<br>
              바탕으로 세상을 변화시켜 고객에게<br>
              최고의 가치를 제공하는 사람</div>
              </v-card>
              <div style="margin-left: 4%"></div>
            <v-card class=" text-center" height="100%" style="padding:0 2% 0 2%">
            <v-img :src="require(`@/assets/images/Teamwork.png`)" width="70%" height="65%" style="margin-left:15%"></v-img>
              <div style="font-weight: bold; font-size: 200%;">Teamwork</div>
              <div style="font-size: 150%; padding: 0 0 1.7% 0%">상호존중과 신뢰를 기반으로 서로의 힘을<br>
              합해 새로운 것을 창조해 나가는 사람</div>
              </v-card>
            </v-layout>
          </v-card>

          <h1 style="font-weight: bold; font-size: 30px; padding: 10% 0 3% 0">채용공고</h1><br>
        <li style="font-size: 20px; font-weight: bold;">지원자격(대한민국 국민)</li>
        <p style="font-size: 16px; margin-top: 1%;">고등학교 졸업 이상의 신체 건강한 남, 여<br>
        지원 분야에 대한 전문적 지식 보유자 (전공 상관 없음)<br>
        원활한 커뮤니케이션이 가능한 오픈마인드의 소유자</p><br>
        <li style="font-size: 20px; font-weight: bold; margin-top: 2%;">지원자격(외국인)</li>
        <p  style="font-size: 16px; margin-top: 1%; margin-bottom: 5%">전문대 졸업 이상의 신체 건강한 남, 여<br>
        지원 분야에 대한 전문적 지식 보유자 (전산 관련 학과 전공)<br>
        국가 관계없이 한국어 커뮤니케이션이 가능한 자</p><br>
    </div>
  <div style="margin-left: 9%; margin-bottom:10%">
<v-img :src="require(`@/assets/images/recruitment_number.png`)" max-width="80%"></v-img></div>

<br><br>
  <h1 style="font-weight: bold; font-size: 30px; padding:0 0 3% 10%">채용절차</h1>
  <div style="margin-left: 23%;">
<v-img :src="require(`@/assets/images/recruitment_step.png`)" width="65%"></v-img></div>

      <br><br>

        <h1 style="font-weight: bold; font-size: 30px; padding:10% 0 5% 10%">복리후생</h1><br>
        
  <div style="margin-left: 19%;">
<v-img :src="require(`@/assets/images/welfare_benefits.png`)" max-width="68%"></v-img></div>
    <div style="margin: 10%"></div>
    </div>
</template>

<script>
import txtimg from '@/components/txtimg'
export default {
  components: {
    txtimg
  },
}
</script>
<style>
#recruit {
  margin-left: 100px
}
#card {
  margin-left: 13%
}
#banner_left {
  margin-left: 4%;
  margin-top:2%;
  margin-bottom: 2%;
}
#banner_left2 {
  margin-left: 4%;
  margin-top:2%;
  margin-bottom: 4%;
}
#banner_right {
  margin-left: 4%;
  margin-top: 4%;
}
#banner_right2 {
  margin-left: 4%;
  margin-top: 4%;
  margin-bottom:2%;
}
#banner_in {
  margin-left: 17%;
  margin-top: -1%;
  font-size: 110%
}
#order_first {
  margin-left: 230px;
  margin-top: 50px
}
#order {
  margin-left: 10px;
  margin-top: 50px
}
#order_icon {
  margin-left: 1%;
  margin-top: 1.5%;
  font-weight: bold;
  font-size: 350%
}
#order_margin {
  margin-left: 2%;
  margin-top: 1%;
  margin-bottom: 2%;
  font-size: 100%;
}
</style>