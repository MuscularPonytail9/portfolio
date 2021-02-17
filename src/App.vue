<template>
  <v-app>
    <navbar />
    <v-content>
      <router-view/>
    </v-content>
    <mfooter/>
  </v-app>
</template>

<script>
import navbar from '@/components/navbar'
import mfooter from '@/components/footer'
export default {
  name: 'App',
  components: {
    navbar,
    mfooter
  },
  data() {
    return {
      links: [
        {
          txt: "SMART FACTORY",
          goto: '/solutionSF'
        },
        {
          txt: "RPA",
          goto: '/solutionRPA'
        },
        {
          txt: "CLIENTS",
          goto: '/clients'
        },
        {
          txt: "CONTACT",
          goto: '/contact'
        },
        {
          txt: "COMPANY",
          goto: '/company'
        },
        {
          txt: "RECRUITMENT",
          goto: '/recruitment'
        },
      ]
    }
  }
};
</script>
<style scoped>
#app {
  font-family: 'Noto Sans KR';
}
</style>
