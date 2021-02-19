<template>
  <div>
      <v-card color="grey lighten-4"  absolute>
      <v-row>
        <v-card flat tile color="transparent" class="text-center" width="100%">
        <v-card-text>
          <v-btn
            v-for="link in links"
            :key="link"
            :to="link.goto"
            color="black"
            text
            rounded
            class="my-2"
          >
            {{ link.txt }}
          </v-btn>
        </v-card-text>
        </v-card>
      </v-row>
      <v-row no-gutters v-if="$vuetify.breakpoint.lgAndUp==true">
        <v-col offset="3" cols="2">
          <v-btn elevation="0" to='/' class="mt-4">
              <v-img src="@/assets/images/bnx.png" width="100%" height="100%"></v-img>
          </v-btn>
        </v-col>
        <v-col cols="7">
          <v-card height="auto" flat tile color="transparent">
            <v-row no-gutters>
              <v-col cols="5">
                <v-card flat tile color="transparent">
                  대표번호 : 031)306-0426
                </v-card>
              </v-col>
              <v-col cols="6">
                <v-card flat tile color="transparent">
                  주소 : 경기도 수원시 영통구 영통로 237 에이스하이엔드타워 영통 제 5층 510호,511호
                </v-card>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-card flat tile color="transparent" height="50px">
                © Copyright(c) 2019 BroaNex All rights reserved. Since 2016
              </v-card>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <v-row no-gutters v-if="$vuetify.breakpoint.md==true || $vuetify.breakpoint.sm==true">
        <v-col offset="2" cols="3">
          <v-btn elevation="0" to='/' class="mt-4">
              <v-img src="@/assets/images/bnx.png" width="100%" height="100%"></v-img>
          </v-btn>
        </v-col>
        <v-col cols="7">
          <v-card height="auto" flat tile color="transparent">
            <v-row no-gutters>
              <v-col cols="5">
                <v-card flat tile color="transparent">
                  대표번호 : 031)306-0426
                </v-card>
              </v-col>
              <v-col cols="6">
                <v-card flat tile color="transparent">
                  주소 : 경기도 수원시 영통구 영통로 237 에이스하이엔드타워 영통 제 5층 510호,511호
                </v-card>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-card flat tile color="transparent" height="50px">
                © Copyright(c) 2019 BroaNex All rights reserved. Since 2016
              </v-card>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <v-row no-gutters v-if="$vuetify.breakpoint.xs==true">
        <v-col cols="3">
          <v-btn elevation="0" to='/' class="mt-4">
              <v-img src="@/assets/images/bnx.png" width="100%" height="100%"></v-img>
          </v-btn>
        </v-col>
        <v-col offset="2" cols="7">
          <v-card height="auto" flat tile color="transparent">
            <v-row no-gutters>
              <v-col cols="5">
                <v-card flat tile color="transparent">
                  대표번호 : 031)306-0426
                </v-card>
              </v-col>
              <v-col cols="6">
                <v-card flat tile color="transparent">
                  주소 : 경기도 수원시 영통구 영통로 237 에이스하이엔드타워 영통 제 5층 510호,511호
                </v-card>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-card flat tile color="transparent" height="50px">
                © Copyright(c) 2019 BroaNex All rights reserved. Since 2016
              </v-card>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
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
}
</script>

<style>

</style>