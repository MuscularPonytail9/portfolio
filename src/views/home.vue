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
    <HomecontentRight id="row" source="h2.jpg" title="업무 지연 감소" txt="복잡한 업무들이 유기적으로 연결되어 27% 빠르게 착수됩니다." txtsource="ujg.png"/>
    <HomecontentLeft id="row2" source="h3.jpg" title="생산 시간 단축" txt="스마트 팩토리 도입시 기존보다 시간을 45% 절약할 수 있습니다." txtsource="ssd.png"/>
    <HomecontentRight id="row3" source="h4.jpg" title="재공품 감소" txt="다양한 공정들을 한 번에 파악하여 불필요한 재공품을 17% 줄입니다." txtsource="jg.png"/>
    <HomecontentLeft id="row4" source="h5.jpg" title="제품 품질 향상" txt="한층 더 균일한 품질과 더불어 불량률이 46% 감소합니다." txtsource="jph.png"/>
    <HomecontentRight id="row5" source="h6.jpg" title="리드 타임 향상" txt="주문부터 납품까지 전 과정을 매끄럽게 연결하여 32% 빠르게 수행합니다." txtsource="lth.png"/>
    <HomecontentLeft id="row6" source="h7.jpg" title="문서 작업 시간 단축" txt="문서 작업에 도움이 되는 기능들을 다수 포함하여 문서 작업 시간을 60% 감소시킵니다." txtsource="mjsd.png"/>
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