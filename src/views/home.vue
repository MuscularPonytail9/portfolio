<template>
  <div>
    <Carousel/>
    <br>
    <br>
    <Homecontent/>
    <HomecontentRight id="row" source="hc2-1.jpg"/>
    <HomecontentLeft id="row2" source="hc2-2.jpg"/>
    <HomecontentRight id="row3" source="hc2-1.jpg"/>
    <HomecontentLeft id="row4" source="hc2-2.jpg"/>
    <HomecontentRight id="row5" source="hc2-1.jpg"/>
    <HomecontentLeft id="row6" source="hc2-2.jpg"/>
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
    HomecontentLeft
  }
}
</script>

<style>

</style>