<template>
  <div>
      <v-row>
          <v-card flat color="transparent" height="40"></v-card>
      </v-row>
      <v-row>
            <v-col offset="2">
                <div style="font-size: 40px">
                  솔루션 소개<br>
                </div>
                <v-card flat color="transparent" height="40"></v-card>
            </v-col>
      </v-row>
        <v-img src="@/assets/images/h1.jpg" width="91%" height="450">
          <v-row>
            <v-col offset="2">
              <v-card color="transparent" flat tile height="350" width="800%"></v-card>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col offset="2">   
              <v-card tile flat height="260" width="100%">
                  <v-col offset="1">
                      <v-card tile flat class="ml-13 mt-4">
                        <div style="font-size: 30px" v-if="$vuetify.breakpoint.mdAndUp==true">
                            브로넥스의 솔루션을 도입하고 공장을 최적화하세요
                        </div>

                      </v-card>
                  </v-col>                
              </v-card>
            </v-col>
          </v-row>
        </v-img>
      <v-row no-gutters>
          <v-col offset="3">
            <div v-if="$vuetify.breakpoint.mdAndUp==true">
              브로넥스가 스마트 팩토리 시장을 이끕니다.
            </div>
            <div v-if="$vuetify.breakpoint.mdAndUp==false">
              브로넥스의 솔루션을 도입하고 공장을 최적화하세요
            </div>
          </v-col>
      </v-row>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>