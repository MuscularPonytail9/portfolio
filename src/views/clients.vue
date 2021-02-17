<template>
    <div>
      <txtimg name="Clients" source="laser.jpg"></txtimg><br>
<h1 style="font-weight: bold; font-size: 25px; padding: 10% 0 3% 10%">주요 거래처</h1><br>
<v-card elevation="0"> 
  <v-layout row wrap>
    <div>
    <div style="width:100%; display:flex;">
<a href="https://www.hanwhaprecisionmachinery.co.kr/" target="_blank">
  <v-img :src="require(`@/assets/images/hanwha_machinery_logo.gif`)" id="clients_first" width="160%" height="60"></v-img></a>
<a href="https://www.hanwha-security.com/ko/index.do" target="_blank">
  <v-img :src="require(`@/assets/images/hanwha_techwin_logo.gif`)" id="clients" width="160%" height="60"></v-img></a>
  </div>
  </div>
  </v-layout>
    </v-card>
<h1 style="font-weight: bold; font-size: 25px; padding: 10% 0 2% 10%">구축 사례</h1><br>
<div style="font-weight: bold; font-size: 20px; padding: 0 0 3% 10%">전기·전자 제조</div>
<div style="width:100%; display:flex;">
<a href="http://www.daihan-sci.com/" target="_blank">
  <v-img :src="require(`@/assets/images/daihansci_logo.png`)" id="clients_first" width="160%" height="60"></v-img></a>
</div>
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
#clients_first {
margin-left: 100%;
border: 1px solid;
max-width: 1000000px;
}
#clients {
margin-left: 150%;
border: 1px solid;
max-width: 1000000px;
}
</style>