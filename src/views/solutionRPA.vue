<template>
    <div>
        <txtimg name="RPA" source="rpa.jpg" ></txtimg>
        <div class="nav" v-scroll="onScroll">
        <v-navigation-drawer
      color="transparent"
      v-model="drawer"
      width="130"
      height="100%"
      floating
      class="hidden-md-and-down"
      >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          
          active-class="text--accent-4"
        >

          <v-list-item @click="$vuetify.goTo('#offset0')">
            <v-list-item-title>Outline</v-list-item-title>
          </v-list-item>

          <v-list-item @click="$vuetify.goTo('#offset1')">
            <v-list-item-title>지능형 RPA</v-list-item-title>
          </v-list-item>

          <v-list-item @click="$vuetify.goTo('#offset2')">
            <v-list-item-title>AI 검사</v-list-item-title>
          </v-list-item>

          <v-list-item @click="$vuetify.goTo('#offset3')">
            <v-list-item-title>테스트 자동화</v-list-item-title>
          </v-list-item>

          <v-list-item @click="$vuetify.goTo('#offset4')">
            <v-list-item-title>환경 구축</v-list-item-title>
          </v-list-item>

          <v-list-item @click="$vuetify.goTo('#offset5')">
            <v-list-item-title>서비스 모니터링</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      </v-navigation-drawer>
      </div>
      <v-card color="grey lighten-4" flat tile height="100%" id="offset0">
            <v-row>
              <v-col offset="2" cols="8" class="mt-12">
                  <v-card tile flat width="100%" height="100%" color="transparent" class="mt-12">
                      <div style="font-size: 40px">
                        RPA도입으로 다양한 업무를 자동화하여 효율성과 생산성을 높이세요<br>
                      </div>
                      <v-card tile flat height="60" color="transparent"></v-card>
                      <v-img src="@/assets/images/r1.jpg" aspect-ratio="3"></v-img>
                  </v-card>
              </v-col>
            </v-row>
            <div v-if="$vuetify.breakpoint.mdAndUp==true">
              <v-row>
              <v-col offset="4" cols="3">
                <v-card flat tile color="transparent" height="100%" width="100%">
                  <div style="font-size: 24px">번거로운 프로세스 생략<br></div>
                  <div style="font-size: 17px">업무들을 알고리즘화 및 자동화함으로써 업무 시간을 단축합니다.</div>
                </v-card>               
              </v-col>
              <v-col cols="3">
                <v-card flat tile color="transparent" height="100%" width="100%">
                  <div style="font-size: 24px">오류 제로화<br></div>
                  <div style="font-size: 17px">사람이 하던 기존 업무를 오류 없이 훨씬 빠른 속도로 수행하여 생산성을 높입니다.</div>
                </v-card>                
              </v-col>
            </v-row>
            </div>            
            <div v-if="$vuetify.breakpoint.mdAndUp==false">
              <v-col offset="2" cols="8">
                <v-card flat tile color="transparent">
                <div style="font-size: 24px">번거로운 프로세스 생략<br></div>
                  <div style="font-size: 17px">업무들을 알고리즘화 및 자동화함으로써 업무 시간을 단축합니다.</div>
              </v-card>
              </v-col>
              <v-col offset="2" cols="8">
                <v-card flat tile color="transparent">
                <div style="font-size: 24px">오류 제로화<br></div>
                  <div style="font-size: 17px">사람이 하던 기존 업무를 오류 없이 훨씬 빠른 속도로 수행하여 생산성을 높입니다.</div>
              </v-card>
              </v-col>
            </div>
        </v-card>
          <div style="margin-bottom: 15%"></div>
        
        <div v-if="$vuetify.breakpoint.mdAndUp==true">
          <v-col offset="1" cols="10">
            <v-img src="@/assets/images/r2.jpg" position='bottom 50px right 230px' width="1100" height="600" id="offset1">
              <v-row>
                <v-card color="transparent" flat tile height="220px"></v-card>
              </v-row>
              <v-row no-gutters>
                <v-col offset="7" cols="3"></v-col>  
                <v-col>
                  <v-card flat tile height="160px">
                    <div class="grey--text" style="font-size: 110px;">01</div>
                  </v-card>
                </v-col>         
              </v-row>
              <v-row>
                <v-col offset="6">
                  <v-card flat tile height="160px"><v-card flat tile height="20px"></v-card>
                    <div style="font-size: 24px" class="ml-12">지능형 RPA 솔루션<br></div>
                    <div style="font-size: 17px" class="ml-12">지능형 RPA 솔루션은 기존 RPA기술에 인공지능을 접목하여 보다 복잡한 업무도 자동화할 수 있는 솔루션입니다.</div>
                  </v-card>
                </v-col>
              </v-row>
            </v-img>
          </v-col>
          <v-col offset="2" cols="8">
            <v-img src="@/assets/images/jnhrpa.png"></v-img>
          </v-col>

          <div style="margin-bottom: 15%"></div>
    
            <v-col offset="2">
              <v-card flat tile height="160px" class="ml-16">
                  <div class="grey--text mr-4" style="font-size: 110px;" id="offset2">02</div>
                </v-card>
              <v-img src="@/assets/images/r3.jpg" eager position='bottom 50px right 180px' width="1100" height="600">
                <v-row>
                  <v-card color="transparent" flat tile height="100px"></v-card>
                </v-row>
                <v-row>
                  <v-col offset="6" cols="3"></v-col>  
                  <v-col>
                    <v-card color="transparent" flat tile height="280px">
                    </v-card>
                  </v-col>         
                </v-row>
                <v-row>
                  <v-col offset="4">
                    <v-card flat tile width="76%" height="150px"><v-card flat tile width="100%" height="20px"></v-card>
                      <div style="font-size: 24px" class="ml-12">AI 검사 솔루션<br></div>
                      <div style="font-size: 17px" class="ml-12">AI 검사 솔루션은 사람이 수행하던 종이 문서 기반의 검증/정보추출 등의 작업을 인공지능으로 대체하여 많은 건수의 업무를 자동으로 처리할 수 있도록 지원하는 머신러닝 프레임워크입니다.</div>
                    </v-card>
                  </v-col>
                </v-row>
              </v-img>
            </v-col>

            <v-col offset="3" cols="6">
            <v-img src="@/assets/images/aigs.png"></v-img>
          </v-col>

          <div style="margin-bottom: 15%"></div>
                
          <v-col offset="3" id="offset3">
            <v-img src="@/assets/images/r4.jpg" position='bottom 50px left 180px' width="1100" height="600">
              <v-row>
                <v-card color="transparent" flat tile height="140px"></v-card>
              </v-row>
              <v-row>
                <v-col>
                  <v-card flat tile height="90px" width="170" class="mb-10">
                    <div class="grey--text ml-4" style="font-size: 110px;">03</div>
                  </v-card>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-card flat tile width="290px" height="300px" class="ml-5"><v-card flat tile height="20px"></v-card>
                    <div style="font-size: 24px" class="mr-12">테스트 자동화 솔루션<br></div>
                    <div style="font-size: 17px" class="mr-12">테스트 자동화 솔루션은 다양한 종류의 장치에서 동작하는 서비스 어플리케이션에 대한 자동 테스트 실행 환경을 제공하는 테스트 자동화 솔루션입니다.</div>
                  </v-card>
                </v-col>               
              </v-row>
            </v-img>
          </v-col>

          <v-col offset="3" cols="6">
            <v-img src="@/assets/images/tstjdh.png"></v-img>
          </v-col>

          <div style="margin-bottom: 15%"></div>

          <v-col offset="2" id="offset4">
              <v-card flat tile height="160px" class="ml-16">
                  <div class="grey--text mr-4" style="font-size: 110px;">04</div>
                </v-card>
              <v-img src="@/assets/images/r5.jpg" eager position='bottom 50px right 180px' width="1100" height="600" id="offset4">
                <v-row>
                  <v-card color="transparent" flat tile height="100px"></v-card>
                </v-row>
                <v-row>
                  <v-col offset="6" cols="3"></v-col>  
                  <v-col>
                    <v-card color="transparent" flat tile height="280px">
                    </v-card>
                  </v-col>         
                </v-row>
                <v-row>
                  <v-col offset="4">
                    <v-card flat tile width="76%" height="150px"><v-card flat tile width="100%" height="20px"></v-card>
                      <div style="font-size: 24px" class="ml-12">환경 구축 솔루션<br></div>
                      <div style="font-size: 17px" class="ml-12">환경 구축 솔루션은 실제 사용자 환경과 유사한 테스트 환경을 구축해 시스템 성능을 진단하고, 검증하는 솔루션 입니다.</div>
                    </v-card>
                  </v-col>
                </v-row>
              </v-img>
            </v-col>

            <v-col offset="3" cols="6">
            <v-img src="@/assets/images/hggc.png"></v-img>
          </v-col>

          <div style="margin-bottom: 15%"></div>


            <v-col offset="1" cols="10">
            <v-img src="@/assets/images/r6.jpg" position='bottom 50px right 230px' width="1100" height="600" id="offset5">
              <v-row>
                <v-card color="transparent" flat tile height="220px"></v-card>
              </v-row>
              <v-row no-gutters>
                <v-col offset="7" cols="3"></v-col>  
                <v-col>
                  <v-card flat tile height="160px">
                    <div class="grey--text" style="font-size: 110px;">05</div>
                  </v-card>
                </v-col>         
              </v-row>
              <v-row>
                <v-col offset="6">
                  <v-card flat tile height="160px"><v-card flat tile height="20px"></v-card>
                    <div style="font-size: 24px" class="ml-12">서비스 모니터링 솔루션<br></div>
                    <div style="font-size: 17px" class="ml-12">서비스 모니터링 솔루션은 현재 제공되고 있는 서비스를 실시간으로 모니터링하고, 품질을 분석하여 서비스 품질 향상을 도와주는 서비스 모니터링 솔루션입니다.</div>
                  </v-card>
                </v-col>
              </v-row>
            </v-img>
          </v-col>

          <v-col offset="3" cols="6">
            <v-img src="@/assets/images/sbsmntr.png"></v-img>
          </v-col>

          <div style="margin-bottom: 15%"></div>
        </div>
        <div v-if="$vuetify.breakpoint.mdAndUp==false">
          <v-img src="@/assets/images/r2.jpg" aspect-ratio="1.7778">
              <v-card flat tile width="100%" height="85%" color="transparent"></v-card>
              <v-card flat tile width="93%" height="16%" class="ml-11"></v-card>                              
          </v-img>
          <v-col offset="1">
            <v-card flat tile class="mr-16">
              <div style="font-size: 24px" class="ml-4">지능형 RPA 솔루션<br></div>
              <div style="font-size: 17px" class="ml-4">지능형 RPA 솔루션은 기존 RPA기술에 인공지능을 접목하여 보다 복잡한 업무도 자동화할 수 있는 솔루션입니다.</div>
            </v-card>
          </v-col>
          <v-img src="@/assets/images/r3.jpg" aspect-ratio="1.7778">
              <v-card flat tile width="100%" height="85%" color="transparent"></v-card>
              <v-card flat tile width="93%" height="16%" class="ml-11"></v-card>                              
          </v-img>
          <v-col offset="1">
            <v-card flat tile class="mr-16">
              <div style="font-size: 24px" class="ml-4">AI 검사 솔루션<br></div>
              <div style="font-size: 17px" class="ml-4">AI 검사 솔루션은 사람이 수행하던 종이 문서 기반의 검증/정보추출 등의 작업을 인공지능으로 대체하여 많은 건수의 업무를 자동으로 처리할 수 있도록 지원하는 머신러닝 프레임워크입니다.</div>
            </v-card>
          </v-col>
          <v-img src="@/assets/images/r4.jpg" aspect-ratio="1.7778">
              <v-card flat tile width="100%" height="85%" color="transparent"></v-card>
              <v-card flat tile width="93%" height="16%" class="ml-11"></v-card>                              
          </v-img>
          <v-col offset="1">
            <v-card flat tile class="mr-16">
              <div style="font-size: 24px" class="ml-4">테스트 자동화 솔루션<br></div>
              <div style="font-size: 17px" class="ml-4">테스트 자동화 솔루션은 다양한 종류의 장치에서 동작하는 서비스 어플리케이션에 대한 자동 테스트 실행 환경을 제공하는 테스트 자동화 솔루션입니다.</div>
            </v-card>
          </v-col>
          <v-img src="@/assets/images/r5.jpg" aspect-ratio="1.7778">
              <v-card flat tile width="100%" height="85%" color="transparent"></v-card>
              <v-card flat tile width="93%" height="16%" class="ml-11"></v-card>                              
          </v-img>
          <v-col offset="1">
            <v-card flat tile class="mr-16">
              <div style="font-size: 24px" class="ml-4">환경 구축 솔루션<br></div>
              <div style="font-size: 17px" class="ml-4">환경 구축 솔루션은 실제 사용자 환경과 유사한 테스트 환경을 구축해 시스템 성능을 진단하고, 검증하는 솔루션 입니다.</div>
            </v-card>
          </v-col>
          <v-img src="@/assets/images/r6.jpg" aspect-ratio="1.7778">
              <v-card flat tile width="100%" height="85%" color="transparent"></v-card>
              <v-card flat tile width="93%" height="16%" class="ml-11"></v-card>                              
          </v-img>
          <v-col offset="1">
            <v-card flat tile class="mr-16">
              <div style="font-size: 24px" class="ml-4">서비스 모니터링 솔루션<br></div>
              <div style="font-size: 17px" class="ml-4">서비스 모니터링 솔루션은 현재 제공되고 있는 서비스를 실시간으로 모니터링하고, 품질을 분석하여 서비스 품질 향상을 도와주는 서비스 모니터링 솔루션입니다.</div>
            </v-card>
          </v-col>
        </div>
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
    }
  },
  methods: {
    onScroll () {
            if(window.scrollY>400 && ((this.$vuetify.breakpoint.name == "xl") || (this.$vuetify.breakpoint.name == "lg"))) {
                this.drawer=true
            } else {
              this.drawer=false
            }
            
    },
    setExpand() {
      this.cardexpand=true
    }
  },
  mounted() {
        setTimeout(this.setExpand, 400)
    }
}
</script>

<style>
.nav {
  position: sticky;
  top: 170px;
  z-index: 99999;
}
.cardpos {
  margin-bottom: 0px;
  margin-right: 0px;
}
</style>