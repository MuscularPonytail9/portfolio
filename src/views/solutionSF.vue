<template>
    <div>
        <txtimg name="Smart Factory" source="laser.jpg" ></txtimg>
        <div class="nav" v-scroll="onScroll">
        <v-navigation-drawer
      color="transparent"
      v-model="drawer"
      width="110"
      height="100%"
      floating
      class="hidden-md-and-down"
      >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          
          active-class="grey--text text--accent-4"
        >

          <v-list-item @click="$vuetify.goTo('#offset0')">
            <v-list-item-title>Outline</v-list-item-title>
          </v-list-item>

          <v-list-item @click="$vuetify.goTo('#offset1')">
            <v-list-item-title>MES</v-list-item-title>
          </v-list-item>

          <v-list-item @click="$vuetify.goTo('#offset2')">
            <v-list-item-title>ERP</v-list-item-title>
          </v-list-item>

          <v-list-item @click="$vuetify.goTo('#offset3')">
            <v-list-item-title>PDM</v-list-item-title>
          </v-list-item>

          <v-list-item @click="$vuetify.goTo('#offset4')">
            <v-list-item-title>HMI</v-list-item-title>
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
                        스마트 팩토리 구축으로 손쉬운 제어와 다양한 이점을 얻으세요<br>
                      </div>
                      <v-card tile flat height="60" color="transparent"></v-card>
                      <v-img src="@/assets/images/s1.jpg" aspect-ratio="3"></v-img>
                  </v-card>
              </v-col>
            </v-row>
            <div v-if="$vuetify.breakpoint.mdAndUp==true">
            <v-row>
              <v-col offset="4" cols="3">
                <v-card flat tile color="transparent" height="100%" width="100%">
                  <div style="font-size: 24px">빠르고 최적화된 생산<br></div>
                  <div style="font-size: 17px">설비 및 데이터, 관리시스템의 자동화 및 체계화로 생산성과 업무 능률 향상에 도움을 주며 빅데이터 분석을 통해 보다 최적화된 생산 계획 수립이 가능합니다.</div>
                </v-card>               
              </v-col>
              <v-col cols="3">
                <v-card flat tile color="transparent" height="100%" width="100%">
                  <div style="font-size: 24px">비약적 품질 상승<br></div>
                  <div style="font-size: 17px">불량 예방 설계를 통해 불량률을 크게 감소시키며 품질보증 시스템 확립으로 저비용 고효율 구조를 장착합니다.</div>
                </v-card>                
              </v-col>
            </v-row>
            <v-row>
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
            </v-row>
            </div>
            <div v-if="$vuetify.breakpoint.mdAndUp==false">
              <v-col offset="2" cols="8">
                <v-card flat tile color="transparent">
                <div style="font-size: 24px">빠르고 최적화된 생산<br></div>
                  <div style="font-size: 17px">설비 및 데이터, 관리시스템의 자동화 및 체계화로 생산성과 업무 능률 향상에 도움을 주며 빅데이터 분석을 통해 보다 최적화된 생산 계획 수립이 가능합니다.</div>
              </v-card>
              </v-col>
              <v-col offset="2" cols="8">
                <v-card flat tile color="transparent">
                <div style="font-size: 24px">비약적 품질 상승<br></div>
                  <div style="font-size: 17px">불량 예방 설계를 통해 불량률을 크게 감소시키며 품질보증 시스템 확립으로 저비용 고효율 구조를 장착합니다.</div>
              </v-card>
              </v-col>
              <v-col offset="2" cols="8">
                <v-card flat tile color="transparent">
                <div style="font-size: 24px">효율적 원가 절감<br></div>
                  <div style="font-size: 17px">원가 집계 및 분석으로 원가를 최적화할 수 있습니다. 또한 공정 소요시간과 불량 개선을 통해서 제조원가 경쟁력을 확보합니다.</div>
              </v-card>
              </v-col>
              <v-col offset="2" cols="8">
                <v-card flat tile color="transparent">
                <div style="font-size: 24px">신뢰성 있는 성과<br></div>
                  <div style="font-size: 17px">고객 만족도(품질, 납기) 및 신뢰도 향상에 도움을 주며 공장을 실시간으로 분석하여 맞춤 계획을 수립할 수 있습니다.</div>
              </v-card>
              </v-col>
            </div>
        </v-card>
        <br><br><br><br><br><br>
        
        <div v-if="$vuetify.breakpoint.mdAndUp==true">
          <v-col offset="1" cols="10">
            <v-img src="@/assets/images/s2.jpg" position='bottom 50px right 230px' width="1100" height="600" id="offset1">
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
                    <div style="font-size: 24px" class="ml-12">MES<br></div>
                    <div style="font-size: 17px" class="ml-12">MES는 제품 생산 과정을 최적화할 수 있도록 정보를 제공하며, 실시간 데이터로 공장활동을 지시 및 보고하여 의사결정에 도움을 주는 시스템입니다.</div>
                  </v-card>
                </v-col>
              </v-row>
            </v-img>
          </v-col>

          <v-col offset="3" cols="6">
            <v-img src="@/assets/images/mes.png"></v-img>
          </v-col>

          <br><br><br>
    
            <v-col offset="2">
              <v-card flat tile height="160px" class="ml-16">
                  <div class="grey--text mr-4" style="font-size: 110px;">02</div>
                </v-card>
              <v-img src="@/assets/images/s3.jpg" eager position='bottom 50px right 180px' width="1100" height="600" id="offset2">
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
                      <div style="font-size: 24px" class="ml-12">ERP<br></div>
                      <div style="font-size: 17px" class="ml-12">조직들이 회계, 조달, 프로젝트 관리 및 제조등 일상 업무 활동을 관리하기 위해 사용하는 시스템 및 소프트웨어 패키지를 의미합니다.</div>
                    </v-card>
                  </v-col>
                </v-row>
              </v-img>
            </v-col>
          
          <v-col offset="4" cols="4">
            <v-img src="@/assets/images/erp.png"></v-img>
          </v-col>

          <br><br><br>

          <v-col offset="3">
            <v-img src="@/assets/images/s4.jpg" position='bottom 50px left 180px' width="1100" height="600" id="offset3">
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
                    <div style="font-size: 24px" class="mr-12">PDM<br></div>
                    <div style="font-size: 17px" class="mr-12">소프트웨어를 사용하여 제품 데이터 및 프로세스 관련 정보를 단일한 중앙 시스템에서 관리하는 것입니다.</div>
                  </v-card>
                </v-col>               
              </v-row>
            </v-img>
          </v-col>

          <v-col offset="4" cols="4">
            <v-img src="@/assets/images/pdm.png"></v-img>
          </v-col>

          <br><br><br>

          <v-col offset="2">
              <v-card flat tile height="160px" class="ml-16">
                  <div class="grey--text mr-4" style="font-size: 110px;">04</div>
                </v-card>
              <v-img src="@/assets/images/s5.jpg" eager position='bottom 50px right 180px' width="1100" height="600" id="offset4">
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
                      <div style="font-size: 24px" class="ml-12">HMI<br></div>
                      <div style="font-size: 17px" class="ml-12">작업자와 설비 간의 인터페이스를 직관적으로 인지하기 쉽게 제공하며, 다양한 설비로부터의 데이터를 수집/형식화/결합 하여 전체 및 세부 설비의 상태 모니터링 및 이력 관리가 가능합니다.</div>
                    </v-card>
                  </v-col>
                </v-row>
              </v-img>
            </v-col>

            <v-col offset="2" cols="8">
            <v-img src="@/assets/images/hmi.png"></v-img>
          </v-col>

            <br><br><br><br><br>
        </div>
        <div v-if="$vuetify.breakpoint.mdAndUp==false">
          <v-img src="@/assets/images/s2.jpg" aspect-ratio="1.7778">
              <v-card flat tile width="100%" height="85%" color="transparent"></v-card>
              <v-card flat tile width="93%" height="16%" class="ml-11"></v-card>                              
          </v-img>
          <v-col offset="1">
            <v-card flat tile class="mr-16">
              <div style="font-size: 24px" class="ml-4">MES<br></div>
              <div style="font-size: 17px" class="ml-4">MES는 제품 생산 과정을 최적화할 수 있도록 정보를 제공하며, 실시간 데이터로 공장활동을 지시 및 보고하여 의사결정에 도움을 주는 시스템입니다.</div>
            </v-card>
          </v-col>
          <v-img src="@/assets/images/s3.jpg" aspect-ratio="1.7778">
              <v-card flat tile width="100%" height="85%" color="transparent"></v-card>
              <v-card flat tile width="93%" height="16%" class="ml-11"></v-card>                              
          </v-img>
          <v-col offset="1">
            <v-card flat tile class="mr-16">
              <div style="font-size: 24px" class="ml-4">ERP<br></div>
              <div style="font-size: 17px" class="ml-4">조직들이 회계, 조달, 프로젝트 관리 및 제조등 일상 업무 활동을 관리하기 위해 사용하는 시스템 및 소프트웨어 패키지를 의미합니다.</div>
            </v-card>
          </v-col>
          <v-img src="@/assets/images/s4.jpg" aspect-ratio="1.7778">
              <v-card flat tile width="100%" height="85%" color="transparent"></v-card>
              <v-card flat tile width="93%" height="16%" class="ml-11"></v-card>                              
          </v-img>
          <v-col offset="1">
            <v-card flat tile class="mr-16">
              <div style="font-size: 24px" class="ml-4">PDM<br></div>
              <div style="font-size: 17px" class="ml-4">소프트웨어를 사용하여 제품 데이터 및 프로세스 관련 정보를 단일한 중앙 시스템에서 관리하는 것입니다.</div>
            </v-card>
          </v-col>
          <v-img src="@/assets/images/s5.jpg" aspect-ratio="1.7778">
              <v-card flat tile width="100%" height="85%" color="transparent"></v-card>
              <v-card flat tile width="93%" height="16%" class="ml-11"></v-card>                              
          </v-img>
          <v-col offset="1">
            <v-card flat tile class="mr-16">
              <div style="font-size: 24px" class="ml-4">HMI<br></div>
              <div style="font-size: 17px" class="ml-4">작업자와 설비 간의 인터페이스를 직관적으로 인지하기 쉽게 제공하며, 다양한 설비로부터의 데이터를 수집/형식화/결합 하여 전체 및 세부 설비의 상태 모니터링 및 이력 관리가 가능합니다.</div>
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
    }
  },
  methods: {
    onScroll () {
            if(window.scrollY>400 && this.$vuetify.breakpoint.lgAndUp==true) {
                this.drawer=true
            } else {
              this.drawer=false
            }
            
    },
  },
}
</script>

<style>
.nav {
  position: sticky;
  top: 170px;
  z-index: 99999;
}
.cardpos {
  margin-bottom: 0;
}

</style>