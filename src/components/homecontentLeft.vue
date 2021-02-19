<template>
  <div v-scroll="onScroll">
      <v-card flat tile width="100%" height="600" :id="id" v-if="$vuetify.breakpoint.lgAndUp==true">
        <v-expand-transition>
          <v-card v-show="expand" flat tile height="100%" width="100%">
          <v-row no-gutters class="d-flex align-center">                      
            <v-col cols="6">
                <v-img :src="require(`@/assets/images/${source}`)" width="100%" height="600"></v-img>
            </v-col>
            <v-col offset="1" cols="4">
                <v-card flat tile width="auto" height="auto">
                        <v-img :src="require(`@/assets/images/${txtsource}`)"></v-img>
                </v-card>
            </v-col>
          </v-row>
          </v-card>
        </v-expand-transition>           
      </v-card>
      <v-card flat tile width="100%" height="100%" v-if="$vuetify.breakpoint.lgAndUp==false">
            <v-card flat tile height="100%" width="100%">
                <v-img :src="require(`@/assets/images/${source}`)" width="100%" height="300"></v-img>
                <v-row>
                    <v-col cols="12">
                        <v-img :src="require(`@/assets/images/${txtsource}`)"></v-img>
                    </v-col>
                </v-row>
            </v-card>
      </v-card>
  </div>
</template>

<script>
export default {
    props: {
        id: String,
        source: String,
        txtsource: String
    },
    data() {
        return {
            expand: false,
            offset: 0
        }
    },
    methods: {
        onScroll () {
            if(window.scrollY>this.offset-520) {
                this.expand=true
            } if(window.scrollY<this.offset-600) {
              this.expand=false
            }
        },
        rowYpos () {
            var target = document.getElementById(this.id);
            var abTop = window.pageYOffset + target.getBoundingClientRect().top;
            return abTop
        }
    },
    mounted() {
          this.offset = this.rowYpos()
    },
}
</script>

<style>
#titleSt {
    font-size: 45px;
    font-weight: bold;
    color: black;
}
</style>