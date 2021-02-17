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
      <v-card color="grey lighten-4" flat tile height="850" id="offset0">
            <v-row>
              <v-col offset="2" cols="8" class="mt-12">
                  <v-card tile flat width="100%" height="100%" color="transparent" class="mt-12">
                      <div style="font-size: 40px">
                        RPA도입으로 다양한 업무를 자동화하여 효율성과 생산성을 높이세요<br>
                      </div>
                      <v-card tile flat height="60" color="transparent"></v-card>
                      <v-img src="@/assets/images/hc1.jpg" height="400"></v-img>
                  </v-card>
              </v-col>
            </v-row>
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
            <!-- <v-row>
              <v-col offset="4" cols="3">
                <v-card flat tile color="transparent" height="100%" width="100%">
                  <div style="font-size: 24px">효율적 원가 절감<br></div>
                  <div style="font-size: 17px">원가 집계 및 분석으로 원가를 최적화할 수 있습니다. 또한 공정 소요시간과 불량 개선을 통해서 제조원가 경쟁력을 확보합니다.</div>
                </v-card>
              </v-col>
              <v-col cols="3">
                <v-card flat tile color="transparent" height="100%" width="100%">
                  <div style="font-size: 24px">신뢰성 있는 성과<br></div>
                  <div style="font-size: 17px">고객 만족도(품질, 납기) 및 신뢰도 향상에 도움을 주며 공장을 실시간으로 분석하여 맞춤 계획을 수립할 수 있습니다.</div>
                </v-card> 
              </v-col>
            </v-row> -->
        </v-card>
        <br><br><br><br><br><br>
        
          <v-col offset="2">
            <v-img src="@/assets/images/hc1.jpg" position='bottom 50px right 230px' width="900" height="450" id="offset1">
              <v-row>
                <v-card color="transparent" flat tile height="120px"></v-card>
              </v-row>
              <v-row>
                <v-col offset="6" cols="3"></v-col>  
                <v-col>
                  <v-card flat tile height="100px">
                    <div class="grey--text" style="font-size: 90px;">01</div>
                  </v-card>
                </v-col>         
              </v-row>
              <v-row>
                <v-col offset="6">
                  <v-card flat tile height="160px">
                    <div style="font-size: 24px">지능형 RPA 솔루션<br></div>
                    <div style="font-size: 17px">지능형 RPA 솔루션은 기존 RPA기술에 인공지능을 접목하여 보다 복잡한 업무도 자동화할 수 있는 솔루션입니다.</div>
                  </v-card>
                </v-col>
              </v-row>
            </v-img>
          </v-col>


          <br><br><br>


          <v-row>
            <v-col cols="2"></v-col>
              <v-col cols="1">
                <v-card flat tile height="100px">
                  <div class="grey--text ml-4" style="font-size: 90px;">02</div>
                </v-card>
              </v-col>
            <v-col>
              <v-img src="@/assets/images/hc1.jpg" position='bottom 50px right 180px' width="900" height="450" id="offset2">
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
                    <v-card flat tile height="150px">
                      <div style="font-size: 24px">AI 검사 솔루션<br></div>
                      <div style="font-size: 17px">AI 검사 솔루션은 사람이 수행하던 종이 문서 기반의 검증/정보추출 등의 작업을 인공지능으로 대체하여 많은 건수의 업무를 자동으로 처리할 수 있도록 지원하는 머신러닝 프레임워크입니다.</div>
                    </v-card>
                  </v-col>
                </v-row>
              </v-img>
            </v-col>
          </v-row>      
          <v-col offset="3">
            <v-img src="@/assets/images/hc1.jpg" position='bottom 50px left 180px' width="900" height="450" id="offset3">
              <v-row>
                <v-card color="transparent" flat tile height="70px"></v-card>
              </v-row>
              <v-row>
                <v-col>
                  <v-card flat tile height="70px" width="170" class="mb-10">
                    <div class="grey--text ml-4" style="font-size: 90px;">03</div>
                  </v-card>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-card flat tile width="260px" height="300px" class="ml-5">
                    <div style="font-size: 24px">테스트 자동화 솔루션<br></div>
                    <div style="font-size: 17px">테스트 자동화 솔루션은 다양한 종류의 장치에서 동작하는 서비스 어플리케이션에 대한 자동 테스트 실행 환경을 제공하는 테스트 자동화 솔루션입니다.</div>
                  </v-card>
                </v-col>               
              </v-row>
            </v-img>
          </v-col>
        <v-row>
            <v-col cols="2"></v-col>
              <v-col cols="1">
                <v-card flat tile height="100px">
                  <div class="grey--text ml-4" style="font-size: 90px;">04</div>
                </v-card>
              </v-col>
            <v-col>
              <v-img src="@/assets/images/hc1.jpg" position='bottom 50px right 180px' width="900" height="450" id="offset4">
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
                    <v-card flat tile height="150px">
                      <div style="font-size: 24px">환경 구축 솔루션<br></div>
                      <div style="font-size: 17px">환경 구축 솔루션은 실제 사용자 환경과 유사한 테스트 환경을 구축해 시스템 성능을 진단하고, 검증하는 솔루션 입니다.</div>
                    </v-card>
                  </v-col>
                </v-row>
              </v-img>
            </v-col>
          </v-row>
          <v-col offset="2">
            <v-img src="@/assets/images/hc1.jpg" position='bottom 50px right 230px' width="900" height="450" id="offset5">
              <v-row>
                <v-card color="transparent" flat tile height="120px"></v-card>
              </v-row>
              <v-row>
                <v-col offset="6" cols="3"></v-col>  
                <v-col>
                  <v-card flat tile height="100px">
                    <div class="grey--text" style="font-size: 90px;">05</div>
                  </v-card>
                </v-col>         
              </v-row>
              <v-row>
                <v-col offset="6">
                  <v-card flat tile height="160px">
                    <div style="font-size: 24px">서비스 모니터링 솔루션<br></div>
                    <div style="font-size: 17px">서비스 모니터링 솔루션은 현재 제공되고 있는 서비스를 실시간으로 모니터링하고, 품질을 분석하여 서비스 품질 향상을 도와주는 서비스 모니터링 솔루션입니다.</div>
                  </v-card>
                </v-col>
              </v-row>
            </v-img>
          </v-col>      
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