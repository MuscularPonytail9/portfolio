<template>
    <div>
      <txtimg name="Clients" source="laser.jpg"></txtimg><br/>
      <div v-if="$vuetify.breakpoint.mdAndUp==true">
<h1 style="font-weight: bold; font-size: 30px; padding: 10% 0 3% 20%;">주요 거래처</h1><br/>

          <v-card height="100px" elevation="0">
            <v-layout row wrap>
              <v-card width="12%" elevation="0" style="margin-left:20%"  id="clients_border">
                <a href="https://www.hanwhaprecisionmachinery.co.kr/" target="_blank">
                <v-card id="cli_card_border" elevation="0">
                <v-img :src="require('@/assets/images/hanwha_machinery_logo.gif')"></v-img></v-card></a>
                </v-card>
              <v-card width="13%" elevation="0" style="margin-left:3%" id="clients_border">
              <a href="https://www.hanwha-security.com/ko/index.do" target="_blank">
                <v-card id="cli_card_border" elevation="0">
              <v-img :src="require(`@/assets/images/hanwha_techwin_logo.gif`)" style="margin-top: 2%"></v-img>
              </v-card></a></v-card>
            </v-layout>
          </v-card>
<h1 style="font-weight: bold; font-size: 30px; padding: 5% 0 2% 20%">구축 사례</h1>
<p style="font-weight: bold; font-size: 25px; padding: 0 0 3% 20%">전기·전자 제조</p>

          <v-card height="221px" style="margin-bottom: 8%" elevation="0">
            <v-layout row wrap>
              <v-card width="7%" elevation="0" style="margin-left:20%;" id="clients_border">
                <a href="http://www.wot.co.kr/index.html" target="_blank">
                <v-card id="cli_card_border" elevation="0">
                <v-img :src="require('@/assets/images/wot_logo.png')"></v-img></v-card></a>
              </v-card>
              <v-card width="9%" elevation="0" style="margin-left:3%" id="clients_border">
                <a href="http://www.semics.com/home/" target="_blank">
                <v-card id="cli_card_border" elevation="0">
                <v-img :src="require('@/assets/images/semics_logo.gif')"></v-img></v-card></a>
              </v-card>
              <v-card width="10%" elevation="0" style="margin-left:3%" id="clients_border"> 
                <a href="http://www.daihan-sci.com/" target="_blank">
                <v-card id="cli_card_border" elevation="0">
                <v-img :src="require('@/assets/images/daihansci_logo.png')" style="margin-top: 4%"></v-img></v-card></a>
              </v-card>
              <v-card width="10%" elevation="0" style="margin-left:3%; margin_bottom:3%" id="clients_border">
                <v-card id="cli_card_border" elevation="0">
                <v-img :src="require('@/assets/images/ke_logo.png')" width="90%"  style="margin-left: 4%"></v-img></v-card>
              </v-card>
              <v-card width="10%" elevation="0" style="margin-left:3%;" id="clients_border">
                <a href="http://www.rse-e.co.kr/" target="_blank">
                <v-card id="cli_card_border" elevation="0">
                <v-img :src="require('@/assets/images/rse_logo.png')" width="90%"  style="margin-left: 4%"></v-img></v-card></a>
              </v-card>
            </v-layout>
            <v-layout row wrap>
              <v-card width="12%" elevation="0" style="margin-left:20%;" id="clients_border">
                <v-card id="cli_card_border" elevation="0">
                <v-img :src="require('@/assets/images/cni_logo.png')" style="margin-top: 2%"></v-img></v-card>
              </v-card>
              <v-card width="12%" elevation="0" style="margin-left:3.34%" id="clients_border">
                <a href="https://www.m3sys.com/" target="_blank">
                <v-card id="cli_card_border" elevation="0">
                <v-img :src="require('@/assets/images/m3sys_logo.png')" style="margin-top: 2%"></v-img></v-card></a>
              </v-card>
              <v-card width="10%" elevation="0" style="margin-left: 3.34%" id="clients_border">
                <v-card id="cli_card_border" elevation="0">
                <v-img :src="require('@/assets/images/dalma_log.png')"></v-img></v-card>
              </v-card>
              <v-card width="14%" elevation="0" style="margin-left:3.34%" id="clients_border">
                <a href="http://www.dongilcap.com/" target="_blank">
                <v-card id="cli_card_border" elevation="0">
                <v-img :src="require('@/assets/images/dongil_logo.png')" style="margin-top: 3%"></v-img></v-card></a>
              </v-card>
              </v-layout></v-card>
<p style="font-weight: bold; font-size: 25px; padding: 0 0 3% 20%">자동차 부품 제조</p>

  <v-card height="492px" style="margin-bottom: 8%" elevation="0"> 
            <v-layout row wrap>
              <v-card width="4%" elevation="0" style="margin-left: 20%;" id="clients_border">
                <v-card id="cli_card_border" elevation="0">
                <v-img :src="require('@/assets/images/hyc_logo.png')" style="margin-top: 10%"></v-img></v-card>
              </v-card>
              <v-card width="4%" elevation="0" style="margin-left: 3.5%;" id="clients_border">
                <v-card id="cli_card_border" elevation="0">
                <v-img :src="require('@/assets/images/jsi_logo.png')" style="margin-top: 16%"></v-img></v-card>
              </v-card>
              <v-card width="6%" elevation="0" style="margin-left: 3.5%" id="clients_border">
                <a href="http://www.imsf.co.kr/" target="_blank">
                <v-card id="cli_card_border" elevation="0">
                <v-img :src="require('@/assets/images/msf_logo.gif')"></v-img></v-card></a>
              </v-card>
              <v-card width="6%" elevation="0" style="margin-left: 3.5%" id="clients_border">
                <v-card id="cli_card_border" elevation="0">
                <v-img :src="require('@/assets/images/ms_logo.png')"></v-img></v-card>
              </v-card>
              <v-card width="7%" elevation="0" style="margin-left: 3.5%;" id="clients_border">
                <v-card id="cli_card_border" elevation="0">
                <v-img :src="require('@/assets/images/woori_logo.png')"></v-img></v-card>
              </v-card>
              <v-card width="12%" elevation="0" style="margin-left:3%;" id="clients_border">
                <a href="http://hyolimindustrial.com/ko/index.php" target="_blank">
                <v-card id="cli_card_border" elevation="0">
                <v-img :src="require('@/assets/images/hyolim_logo.png')"></v-img></v-card></a>
              </v-card>
              </v-layout>
            <v-layout row wrap>
              <v-card width="11%" elevation="0" style="margin-left:20%" id="clients_border">
                <v-card id="cli_card_border" elevation="0">
                <v-img :src="require('@/assets/images/kw_logo.png')"></v-img></v-card>
              </v-card>
              <v-card width="12%" elevation="0" style="margin-left: 3%;" id="clients_border">
                <v-card id="cli_card_border" elevation="0">
                <v-img :src="require('@/assets/images/hkfi_logo.jpg')" style="margin-top: 9%"></v-img></v-card>
              </v-card>
              <v-card width="12%" elevation="0" style="margin-left:3%" id="clients_border">
                <v-card id="cli_card_border" elevation="0">
                <v-img :src="require('@/assets/images/taeh_logo.png')"></v-img></v-card>
              </v-card>
              <v-card width="12%" elevation="0" style="margin-left: 3%;" id="clients_border">
                <a href="http://yieng.kr/main/main.html" target="_blank">
                <v-card id="cli_card_border" elevation="0">
                <v-img :src="require('@/assets/images/yieng_logo.jpg')" style="margin-top: 8%"></v-img></v-card></a>
              </v-card>
              </v-layout>
            <v-layout row wrap>
              <v-card width="11%" elevation="0" style="margin-left:20%" id="clients_border">
                <v-card id="cli_card_border" elevation="0">
                <v-img :src="require('@/assets/images/hkfm_logo.jpg')" style="margin-top: 4%; margin-left: 1%"></v-img></v-card>
              </v-card>
              <v-card width="12%" elevation="0" style="margin-left: 3%;" id="clients_border">
                <a href="http://mpico.kr/" target="_blank">
                <v-card id="cli_card_border" elevation="0">
                <v-img :src="require('@/assets/images/mpico_logo.png')" style="margin-top: 6%"></v-img></v-card></a>
              </v-card>
              <v-card width="12%" elevation="0" style="margin-left: 3%" id="clients_border">
                <v-card id="cli_card_border" elevation="0">
                <v-img :src="require('@/assets/images/kbvht_logo.png')" style="margin-top: 6%"></v-img></v-card>
              </v-card>
              <v-card width="12%" elevation="0" style="margin-left: 3%;" id="clients_border">
                <v-card id="cli_card_border" elevation="0" class="black">
                <v-img :src="require('@/assets/images/sunjin_logo.png')"></v-img></v-card>
              </v-card>
              </v-layout>
              <v-layout row wrap>
              <v-card width="14%" elevation="0" style="margin-left: 20%;" id="clients_border">
                <v-card id="cli_card_border" elevation="0">
                <v-img :src="require('@/assets/images/rb_logo.png')"></v-img></v-card>
              </v-card>
              <v-card width="16%" elevation="0" style="margin-left:5%" id="clients_border">
                <v-card id="cli_card_border" elevation="0">
                <v-img :src="require('@/assets/images/youngwoo_logo.png')"></v-img></v-card>
              </v-card>
              </v-layout>
              </v-card>
<p style="font-weight: bold; font-size: 25px; padding: 0 0 3% 20%">식품/제약/바이오 제조</p>
  <v-card height="80px" style="margin-bottom: 8%" elevation="0"> 
            <v-layout row wrap>
              <v-card width="4.5%" elevation="0" style="margin-left: 20%" id="clients_border">
                <a href="http://www.ottogi.co.kr/main/main.asp" target="_blank">
                <v-card id="cli_card_border" elevation="0">
                <v-img :src="require('@/assets/images/ottogi_logo.jpg')"></v-img></v-card></a>
              </v-card>
              <v-card width="6%" elevation="0" style="margin-left: 3%" id="clients_border">
                <a href="http://www.hanelfood.kr/main/main.php" target="_blank">
                <v-card id="cli_card_border" elevation="0">
                <v-img :src="require('@/assets/images/skyf_logo.jpg')"></v-img></v-card></a>
              </v-card>
              <v-card width="11%" elevation="0" style="margin-left: 3%;" id="clients_border">
                <v-card id="cli_card_border" elevation="0">
                <v-img :src="require('@/assets/images/firsf_logo.png')"></v-img></v-card>
              </v-card>
              <v-card width="11%" elevation="0" style="margin-left: 3%;" id="clients_border">
                <a href="http://www.hskimchi.co.kr/" target="_blank">
                <v-card id="cli_card_border" elevation="0">
                <v-img :src="require('@/assets/images/hansung_logo.png')" style="margin-top: 4%"></v-img></v-card></a>
              </v-card>
              <v-card width="11%" elevation="0" style="margin-left: 3%;" id="clients_border">
                <a href="http://www.itsolle.com/index.php" target="_blank">
                <v-card id="cli_card_border" elevation="0">
                <v-img :src="require('@/assets/images/songsan_logo.png')" style="margin-top: 4%"></v-img></v-card></a>
              </v-card>
            </v-layout>
              </v-card>
<p style="font-weight: bold; font-size: 25px; padding: 0 0 3% 20%">식품/제약/바이오 제조</p>
  <v-card height="80px" style="margin-bottom: 8%" elevation="0">
    <v-layout row wrap>
              <v-card width="10%" elevation="0" style="margin-left: 20%;" id="clients_border">
                <a href="http://doadream.com/" target="_blank">
                <v-card id="cli_card_border" elevation="0">
                <v-img :src="require('@/assets/images/doad_logo.png')" style="margin-top: 4%"></v-img></v-card></a>
              </v-card>
              <v-card width="13%" elevation="0" style="margin-left: 3.3%;" id="clients_border">
                <v-card id="cli_card_border" elevation="0">
                <v-img :src="require('@/assets/images/cd_logo.png')" style="margin-top: 4%"></v-img></v-card>
              </v-card>
              <v-card width="12%" elevation="0" style="margin-left: 3.3%" id="clients_border" class="black">
                <v-card id="cli_card_border" elevation="0" class="black">
                <v-img :src="require('@/assets/images/samwon_logo_samwon.png')" style="margin-top: 6%"></v-img></v-card>
              </v-card>
              </v-layout>
              </v-card>
    <div style="margin: 10%"></div></div>

<div v-if="$vuetify.breakpoint.mdAndUp==false">
<h1 style="font-weight: bold; font-size: 30px; padding: 10% 0 3% 15%;">주요 거래처</h1><br/>

          <v-card height="100px" elevation="0">
            <v-layout row wrap>
              <v-card width="24%" elevation="0" style="margin-left:15%"  id="clients_border">
                <a href="https://www.hanwhaprecisionmachinery.co.kr/" target="_blank">
                <v-card id="cli_card_border" elevation="0">
                <v-img :src="require('@/assets/images/hanwha_machinery_logo.gif')"></v-img></v-card></a>
                </v-card>
              <v-card width="26%" elevation="0" style="margin-left:3%" id="clients_border">
              <a href="https://www.hanwha-security.com/ko/index.do" target="_blank">
                <v-card id="cli_card_border" elevation="0">
              <v-img :src="require(`@/assets/images/hanwha_techwin_logo.gif`)" style="margin-top: 2%"></v-img>
              </v-card></a></v-card>
            </v-layout>
          </v-card>
<h1 style="font-weight: bold; font-size: 30px; padding: 5% 0 2% 15%">구축 사례</h1>
<p style="font-weight: bold; font-size: 25px; padding: 0 0 3% 15%">전기·전자 제조</p>

          <v-card height="221px" style="margin-bottom: 8%" elevation="0">
            <v-layout row wrap>
              <v-card width="16%" elevation="0" style="margin-left:15%;" id="clients_border">
                <a href="http://www.wot.co.kr/index.html" target="_blank">
                <v-card id="cli_card_border" elevation="0">
                <v-img :src="require('@/assets/images/wot_logo.png')"></v-img></v-card></a>
              </v-card>
              <v-card width="20%" elevation="0" style="margin-left:3%" id="clients_border">
                <a href="http://www.semics.com/home/" target="_blank">
                <v-card id="cli_card_border" elevation="0">
                <v-img :src="require('@/assets/images/semics_logo.gif')"></v-img></v-card></a>
              </v-card>
              <v-card width="28%" elevation="0" style="margin-left:3%" id="clients_border">
                <a href="http://www.dongilcap.com/" target="_blank">
                <v-card id="cli_card_border" elevation="0">
                <v-img :src="require('@/assets/images/dongil_logo.png')" style="margin-top: 3%"></v-img></v-card></a>
              </v-card>
            </v-layout>
            <v-layout row wrap>
              <v-card width="20%" elevation="0" style="margin-left:15%" id="clients_border"> 
                <a href="http://www.daihan-sci.com/" target="_blank">
                <v-card id="cli_card_border" elevation="0">
                <v-img :src="require('@/assets/images/daihansci_logo.png')" style="margin-top: 4%"></v-img></v-card></a>
              </v-card>
              <v-card width="20%" elevation="0" style="margin-left:3%; margin_bottom:3%" id="clients_border">
                <v-card id="cli_card_border" elevation="0">
                <v-img :src="require('@/assets/images/ke_logo.png')" width="90%"  style="margin-left: 4%"></v-img></v-card>
              </v-card>
                <v-card width="24%" elevation="0" style="margin-left:3%;" id="clients_border">
                <v-card id="cli_card_border" elevation="0">
                <v-img :src="require('@/assets/images/cni_logo.png')" style="margin-top: 2%"></v-img></v-card>
              </v-card>
            </v-layout>
            <v-layout row wrap>
              <v-card width="20%" elevation="0" style="margin-left:15%;" id="clients_border">
                <a href="http://www.rse-e.co.kr/" target="_blank">
                <v-card id="cli_card_border" elevation="0">
                <v-img :src="require('@/assets/images/rse_logo.png')" width="90%"  style="margin-left: 4%"></v-img></v-card></a>
              </v-card>
              <v-card width="20%" elevation="0" style="margin-left: 3%" id="clients_border">
                <v-card id="cli_card_border" elevation="0">
                <v-img :src="require('@/assets/images/dalma_log.png')"></v-img></v-card>
              </v-card>
              <v-card width="24%" elevation="0" style="margin-left:3%" id="clients_border">
                <a href="https://www.m3sys.com/" target="_blank">
                <v-card id="cli_card_border" elevation="0">
                <v-img :src="require('@/assets/images/m3sys_logo.png')" style="margin-top: 2%"></v-img></v-card></a>
              </v-card>
              </v-layout></v-card>
<p style="font-weight: bold; font-size: 25px; padding: 0 0 3% 15%">자동차 부품 제조</p>

  <v-card height="492px" style="margin-bottom: 8%" elevation="0"> 
            <v-layout row wrap>
              <v-card width="10%" elevation="0" style="margin-left: 15%;" id="clients_border">
                <v-card id="cli_card_border" elevation="0">
                <v-img :src="require('@/assets/images/hyc_logo.png')" style="margin-top: 10%"></v-img></v-card>
              </v-card>
              <v-card width="24%" elevation="0" style="margin-left:3%" id="clients_border">
                <v-card id="cli_card_border" elevation="0">
                <v-img :src="require('@/assets/images/taeh_logo.png')"></v-img></v-card>
              </v-card>
              <v-card width="32%" elevation="0" style="margin-left:3%" id="clients_border">
                <v-card id="cli_card_border" elevation="0">
                <v-img :src="require('@/assets/images/youngwoo_logo.png')"></v-img></v-card>
              </v-card>
              </v-layout>
            <v-layout row wrap>
              <v-card width="10%" elevation="0" style="margin-left: 15%;" id="clients_border">
                <v-card id="cli_card_border" elevation="0">
                <v-img :src="require('@/assets/images/jsi_logo.png')" style="margin-top: 16%"></v-img></v-card>
              </v-card>
              <v-card width="26%" elevation="0" style="margin-left: 3%" id="clients_border">
                <v-card id="cli_card_border" elevation="0">
                <v-img :src="require('@/assets/images/kbvht_logo.png')" style="margin-top: 6%"></v-img></v-card>
              </v-card>
              <v-card width="30%" elevation="0" style="margin-left: 3%;" id="clients_border">
                <v-card id="cli_card_border" elevation="0">
                <v-img :src="require('@/assets/images/rb_logo.png')"></v-img></v-card>
              </v-card>
              </v-layout>
            <v-layout row wrap>
              <v-card width="14%" elevation="0" style="margin-left: 15%" id="clients_border">
                <a href="http://www.imsf.co.kr/" target="_blank">
                <v-card id="cli_card_border" elevation="0">
                <v-img :src="require('@/assets/images/msf_logo.gif')"></v-img></v-card></a>
              </v-card>
              <v-card width="24%" elevation="0" style="margin-left:3%" id="clients_border">
                <v-card id="cli_card_border" elevation="0">
                <v-img :src="require('@/assets/images/hkfm_logo.jpg')" style="margin-top: 4%; margin-left: 1%"></v-img></v-card>
              </v-card>
              <v-card width="28%" elevation="0" style="margin-left: 3%;" id="clients_border">
                <a href="http://mpico.kr/" target="_blank">
                <v-card id="cli_card_border" elevation="0">
                <v-img :src="require('@/assets/images/mpico_logo.png')" style="margin-top: 6%"></v-img></v-card></a>
              </v-card>
              </v-layout>
              <v-layout row wrap>
              <v-card width="14%" elevation="0" style="margin-left: 15%" id="clients_border">
                <v-card id="cli_card_border" elevation="0">
                <v-img :src="require('@/assets/images/ms_logo.png')"></v-img></v-card>
              </v-card>
              <v-card width="24%" elevation="0" style="margin-left: 3%;" id="clients_border" class="black">
                <v-card id="cli_card_border" elevation="0" class="black">
                <v-img :src="require('@/assets/images/sunjin_logo.png')" style="margin-top: 3%"></v-img></v-card>
              </v-card>
              <v-card width="28%" elevation="0" style="margin-left:3%;" id="clients_border">
                <a href="http://hyolimindustrial.com/ko/index.php" target="_blank">
                <v-card id="cli_card_border" elevation="0">
                <v-img :src="require('@/assets/images/hyolim_logo.png')"></v-img></v-card></a>
              </v-card>
              <v-card width="16%" elevation="0" style="margin-left: 15%;" id="clients_border">
                <v-card id="cli_card_border" elevation="0">
                <v-img :src="require('@/assets/images/woori_logo.png')"></v-img></v-card>
              </v-card>
              <v-card width="22%" elevation="0" style="margin-left:3%" id="clients_border">
                <v-card id="cli_card_border" elevation="0">
                <v-img :src="require('@/assets/images/kw_logo.png')"></v-img></v-card>
              </v-card>
              <v-card width="28%" elevation="0" style="margin-left: 3%;" id="clients_border">
                <a href="http://yieng.kr/main/main.html" target="_blank">
                <v-card id="cli_card_border" elevation="0">
                <v-img :src="require('@/assets/images/yieng_logo.jpg')" style="margin-top: 7%"></v-img></v-card></a>
              </v-card>
              </v-layout>
              <v-layout row wrap>
              <v-card width="28%" elevation="0" style="margin-left: 15%;" id="clients_border">
                <v-card id="cli_card_border" elevation="0">
                <v-img :src="require('@/assets/images/hkfi_logo.jpg')" style="margin-top: 3%"></v-img></v-card>
              </v-card>
              </v-layout>
              </v-card>
<p style="font-weight: bold; font-size: 25px; padding: 0 0 3% 15%">식품/제약/바이오 제조</p>
  <v-card height="160px" style="margin-bottom: 8%" elevation="0"> 
            <v-layout row wrap>
              <v-card width="10%" elevation="0" style="margin-left: 15%" id="clients_border">
                <a href="http://www.ottogi.co.kr/main/main.asp" target="_blank">
                <v-card id="cli_card_border" elevation="0">
                <v-img :src="require('@/assets/images/ottogi_logo.jpg')"></v-img></v-card></a>
              </v-card>
              <v-card width="14%" elevation="0" style="margin-left: 3%" id="clients_border">
                <a href="http://www.hanelfood.kr/main/main.php" target="_blank">
                <v-card id="cli_card_border" elevation="0">
                <v-img :src="require('@/assets/images/skyf_logo.jpg')"></v-img></v-card></a>
              </v-card>
              <v-card width="26%" elevation="0" style="margin-left: 3%;" id="clients_border">
                <v-card id="cli_card_border" elevation="0">
                <v-img :src="require('@/assets/images/firsf_logo.png')"></v-img></v-card>
              </v-card>
              </v-layout>
              <v-layout row wrap>
              <v-card width="26%" elevation="0" style="margin-left: 15%;" id="clients_border">
                <a href="http://www.hskimchi.co.kr/" target="_blank">
                <v-card id="cli_card_border" elevation="0">
                <v-img :src="require('@/assets/images/hansung_logo.png')" style="margin-top: 4%"></v-img></v-card></a>
              </v-card>
              <v-card width="26%" elevation="0" style="margin-left: 4%;" id="clients_border">
                <a href="http://www.itsolle.com/index.php" target="_blank">
                <v-card id="cli_card_border" elevation="0">
                <v-img :src="require('@/assets/images/songsan_logo.png')" style="margin-top: 4%"></v-img></v-card></a>
              </v-card>
            </v-layout>
              </v-card>
<p style="font-weight: bold; font-size: 25px; padding: 0 0 3% 15%">식품/제약/바이오 제조</p>
  <v-card height="80px" style="margin-bottom: 8%" elevation="0">
    <v-layout row wrap>
              <v-card width="20%" elevation="0" style="margin-left: 15%;" id="clients_border">
                <a href="http://doadream.com/" target="_blank">
                <v-card id="cli_card_border" elevation="0">
                <v-img :src="require('@/assets/images/doad_logo.png')" style="margin-top: 4%"></v-img></v-card></a>
              </v-card>
              <v-card width="26%" elevation="0" style="margin-left: 3.3%;" id="clients_border">
                <v-card id="cli_card_border" elevation="0">
                <v-img :src="require('@/assets/images/cd_logo.png')" style="margin-top: 4%"></v-img></v-card>
              </v-card>
              </v-layout>
    <v-layout row wrap>
              <v-card width="26%" elevation="0" style="margin-left: 15%" id="clients_border" class="black">
                <v-card id="cli_card_border" elevation="0" class="black">
                <v-img :src="require('@/assets/images/samwon_logo_samwon.png')" style="margin-top: 6%"></v-img></v-card>
              </v-card>
              </v-layout>
              </v-card>
    <div style="margin: 30%"></div></div>

    </div>
</template>

<script>
import txtimg from '@/components/txtimg'


export default {
  components: {
    txtimg,
  },
  data: () => ({
      drawer: true,
      group: null,
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
}
    
</script>

<style>
#clients_border {
  border: 1px solid;
  margin-bottom: 3%;
}
#cli_card_border {
  padding: 2.3%;
}
</style>