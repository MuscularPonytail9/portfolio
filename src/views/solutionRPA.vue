<template>
    <div>
        <txtimg name="RPA" source="rpa.jpg" ></txtimg>
        <div class="nav" v-scroll="onScroll">
        <v-navigation-drawer
      color="transparent"
      v-model="drawer"
      width="110"
      height="100%"
      floating
      >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          
          active-class="grey--text text--accent-4"
        >

          <v-list-item>
            <v-list-item-title @click="$vuetify.goTo('#offset0')">Outline</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title @click="$vuetify.goTo('#offset1')">JRS</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title @click="$vuetify.goTo('#offset2')">AGS</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title @click="$vuetify.goTo('#offset3')">TJS</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title @click="$vuetify.goTo('#offset4')">HGS</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title @click="$vuetify.goTo('#offset5')">SMR</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    </div>
        <v-card color="grey lighten-4" flat tile height="270" id="offset0">
            <v-row>
              <v-card color="transparent" tile flat height="50"></v-card>
            </v-row>
            <v-row>
              <v-col offset="2">
                <v-expand-transition>
                  <v-card v-show="cardexpand" tile flat width="100%" height="100%" color="grey lighten-4">
                      <div style="font-size: 26px">
                        We make Ganzi factory <br>
                      </div>
                      <div style="font-size: 16px">
                        Give me money, then I'll give you some Ganzi Smart Factory Softwares. <br>
                        I'm so sorry but I love you. I all lied.
                      </div>
                  </v-card>
                </v-expand-transition>
              </v-col>
            </v-row>
        </v-card>
        <br><br><br>
        <v-container>
          <v-col offset="1">
            <v-img src="@/assets/images/hc1.jpg" position='bottom 50px right 180px' width="700" height="370">
              <v-row>
                <v-card color="transparent" flat tile height="100px"></v-card>
              </v-row>
              <v-row>
                <v-col offset="6" cols="3"></v-col>  
                <v-col>
                  <v-card flat tile height="100px">
                    01
                  </v-card>
                </v-col>         
              </v-row>
              <v-row>
                <v-col offset="6">
                  <v-card flat tile height="100px">
                    asdfasdf
                  </v-card>
                </v-col>
              </v-row>
            </v-img>
          </v-col>          
        </v-container>
        <v-container>
          <v-row>
            <v-col cols="2"></v-col>
              <v-col cols="1">
                <v-card flat tile height="100px">
                    02
                </v-card>
              </v-col>
            <v-col>
              <v-img src="@/assets/images/hc1.jpg" position='bottom 50px right 180px' width="700" height="370">
                <v-row>
                  <v-card color="transparent" flat tile height="100px"></v-card>
                </v-row>
                <v-row>
                  <v-col offset="6" cols="3"></v-col>  
                  <v-col>
                    <v-card color="transparent" flat tile height="130px">
                    </v-card>
                  </v-col>         
                </v-row>
                <v-row>
                  <v-col offset="4">
                    <v-card flat tile height="100px">
                      asdfasdf
                    </v-card>
                  </v-col>
                </v-row>
              </v-img>
            </v-col>
          </v-row>      
        </v-container>
        <v-container>
          <v-col offset="3">
            <v-img src="@/assets/images/hc1.jpg" position='bottom 50px left 180px' width="700" height="370">
              <v-row>
                <v-card color="transparent" flat tile height="70px"></v-card>
              </v-row>
              <v-row>
                <v-col>
                  <v-card flat tile height="80px" width="100px">
                    03
                  </v-card>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-card flat tile width="260px" height="300px">
                    asdfasdf
                  </v-card>
                </v-col>               
              </v-row>
            </v-img>
          </v-col>
        </v-container>
        <v-container>
          <v-row>
            <v-col cols="2"></v-col>
              <v-col cols="1">
                <v-card flat tile height="100px">
                    04
                </v-card>
              </v-col>
            <v-col>
              <v-img src="@/assets/images/hc1.jpg" position='bottom 50px right 180px' width="700" height="370">
                <v-row>
                  <v-card color="transparent" flat tile height="100px"></v-card>
                </v-row>
                <v-row>
                  <v-col offset="6" cols="3"></v-col>  
                  <v-col>
                    <v-card color="transparent" flat tile height="130px">
                    </v-card>
                  </v-col>         
                </v-row>
                <v-row>
                  <v-col offset="4">
                    <v-card flat tile height="100px">
                      asdfasdf
                    </v-card>
                  </v-col>
                </v-row>
              </v-img>
            </v-col>
          </v-row>      
        </v-container>
        <v-container>
          <v-col offset="1">
            <v-img src="@/assets/images/hc1.jpg" position='bottom 50px right 180px' width="700" height="370">
              <v-row>
                <v-card color="transparent" flat tile height="100px"></v-card>
              </v-row>
              <v-row>
                <v-col offset="6" cols="3"></v-col>  
                <v-col>
                  <v-card flat tile height="100px">
                    05
                  </v-card>
                </v-col>         
              </v-row>
              <v-row>
                <v-col offset="6">
                  <v-card flat tile height="100px">
                    asdfasdf
                  </v-card>
                </v-col>
              </v-row>
            </v-img>
          </v-col>          
        </v-container>
        <v-card color="grey lighten-4" flat tile height="100%">
            <v-row>
              <v-col offset="2" cols="8">
                  <v-card tile flat width="100%" height="100%" color="transparent">
                      <div style="font-size: 26px">
                        We make Ganzi factory <br>
                      </div>
                      <div style="font-size: 16px">
                        Give me money, then I'll give you some Ganzi Smart Factory Softwares. <br>
                        I'm so sorry but I love you. I all lied.
                      </div>
                      <v-card tile flat height="20" color="transparent"></v-card>
                      <v-img src="@/assets/images/hc1.jpg" height="250"></v-img>
                  </v-card>
              </v-col>
            </v-row>
            <v-row>
              <v-col offset="4" cols="3">
                asdf
              </v-col>
              <v-col cols="3">
                asdf
              </v-col>
            </v-row>
            <v-row>
              <v-col offset="4" cols="3">
                asdf
              </v-col>
              <v-col cols="3">
                asdf
              </v-col>
            </v-row>
            <v-row>
              <v-col offset="4" cols="3">
                asdf
              </v-col>
            </v-row>
        </v-card>
        <v-card id="offset1" tile flat width="100%" height="800"></v-card>
        <v-card id="offset2" tile flat width="100%" height="800" color="grey lighten-4"></v-card>
        <v-card id="offset3" tile flat width="100%" height="800"></v-card>
        <v-card id="offset4" tile flat width="100%" height="800" color="grey lighten-4"></v-card>
        <v-card id="offset5" tile flat width="100%" height="800"></v-card>
    </div>
</template>

<script>
import txtimg from '@/components/txtimg'
export default {
  components: {
    txtimg,
  },
  data() {
    return {
      drawer: false,
      cardexpand: false,
      offsets: {
        offset1: 0,
        offset2: 0,
        offset3: 0,
        offset4: 0,
      },
      expands: {
        expand1: true,
        expand2: false,
        expand3: false,
        expand4: false
      }
    }
  },
  methods: {
    onScroll () {
            if(window.scrollY>400) {
                this.drawer=true
            } else {
              this.drawer=false
            }
            
    },
    rowYpos () {
      console.log(1)
      for(var i = 0; i < 4; i++) {
            var target = document.getElementById(`offset${i}`)
            var abTop = window.pageYOffset + target.getBoundingClientRect().top
            this.offsets[i] = abTop
            console.log(this.offsets[i])
      }      
    },
    setExpand() {
      this.cardexpand=true
    }
  },
  mounted() {
        setTimeout(this.setExpand, 400)
        this.rowYpos()
    }
}
</script>

<style>

</style>