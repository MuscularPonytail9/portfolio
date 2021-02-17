<template>
  <div>
    <Carousel/>
    <br>
    <br>
    <Homecontent/>
    <br>
    <br>
    <br>
    <br>
    <HomecontentRight id="row" source="hc2-1.jpg" title="업무 지연 감소" txt="복잡한 업무들이 유기적으로 연결되어 업무가 보다 빠르게 착수됩니다."/>
    <HomecontentLeft id="row2" source="hc2-2.jpg" title="생산 시간 단축" txt="스마트 팩토리 도입시 기존보다 시간을 45% 절약할 수 있습니다."/>
    <HomecontentRight id="row3" source="hc2-1.jpg" title="재공품 감소" txt="333333"/>
    <HomecontentLeft id="row4" source="hc2-2.jpg" title="제품 품질 향상" txt="한층 더 균일한 품질과 더불어 불량률이 감소합니다."/>
    <HomecontentRight id="row5" source="hc2-1.jpg" title="리드 타임 향상" txt="55555"/>
    <HomecontentLeft id="row6" source="hc2-2.jpg" title="문서 작업 시간 단축" txt="문서 작업에 도움이 되는 기능들을 다수 포함하며 작업 시간을 비약적으로 감소시킵니다."/>
    <br>
    <br>
    <Homecards/>

  </div>
</template>

<script>
import Carousel from '@/components/carousel'
import Homecards from '@/components/homecards'
import Homecontent from '@/components/homecontent'
import HomecontentRight from '@/components/homecontentRight'
import HomecontentLeft from '@/components/homecontentLeft'

export default {
  components: {
    Carousel,
    Homecards,
    Homecontent,
    HomecontentRight,
    HomecontentLeft,
  }
}
</script>

<style>

</style>