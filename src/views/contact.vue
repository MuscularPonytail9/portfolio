<template>
    <div>
        <txtimg name="Contact" source="contact.jpg" ></txtimg><br>
        <div v-if="$vuetify.breakpoint.mdAndUp==true">
        <h1 style="font-weight: bold; font-size: 30px; padding:10% 0 0 12.5%">서비스 문의하기</h1><br>
        <h3 style="padding:5% 0 0 12.5%">궁금하신 사항은 언제든 문의해 주세요.</h3>
        <div style="font-size: 20px; padding:0 0 0 12.5%">
        <p>브로넥스에서 제공하는 서비스에 대한 문의를 아래 양식에 맞게 작성하여 문의 하시면 24시간 이내에 친절하게 답변드리겠습니다.</p>
        <p>문의전화: 031) 306-0426/ 운영시간 오전 9시 ~ 오후 6시 (주말 및 공휴일 제외)</p>
        <li>문의에 대한 답변은 24시간 이내에 남겨주신 연락처로 안내 전화 및 메일을 보내드립니다.</li>
        <li>고객님의 소중한 정보에 대해 비공개에 의한 신분 보장을 약속합니다.</li></div><br>
        <h1  style="padding:8% 0 5% 12.5%">문의하기</h1>
        <v-row no-gutters  style="padding:0 0 5% 12.5%">
          <template v-for="n in 14">
            <v-col :key="n" :cols="n%2 === 0 ? 7 : 2" >
              <v-card
                class="text-center"
                tile
                elevation="0"
                style="font-size:20px"
              >
                <div v-if="n === 1" id="grid_left_first">
                  서비스
                </div>
                <div v-if="n === 2" id="grid_right_first">
                  <v-col class="d-flex" cols="12" id="card_margin">
                    <v-select
            label="서비스"
                    :items="items"
                    dense
                    outlined
                    ></v-select>
                  </v-col>

                </div>
                <div v-if="n === 3" id="grid_left">
                  회사명
                </div>
                <div v-if="n === 4" id="grid_right">
                  <v-col cols="12">
                    <v-text-field
                      label="회사명"
                      persistent-hint
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                </div>
                <div v-if="n === 5" id="grid_left">
                  담당자명
                </div>
                <div v-if="n === 6" id="grid_right">
                  <v-col cols="12">
                    <v-text-field
                      label="담당자명"
                      persistent-hint
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                </div>
                <div v-if="n === 7" id="grid_left">
                  연락처
                </div>
                <div v-if="n === 8" id="grid_right">
                  <v-col cols="12">
                    <v-text-field
                      label="연락처"
                      persistent-hint
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                </div>
                <div v-if="n === 9" id="grid_left">
                  이메일
                </div>
                <div v-if="n === 10" id="grid_right">
                  <v-col cols="12">
                    <v-text-field
                      label="이메일"
                      persistent-hint
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                </div>
                <div v-if="n === 11" id="grid_left">
                  제목
                </div>
                <div v-if="n === 12" id="grid_right">
                  <v-col cols="12">
                    <v-text-field
                      label="제목"
                      persistent-hint
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                </div>
                <div v-if="n === 13" id="grid_left_end">
                  내용
                </div>
                <div v-if="n === 14" id="grid_right_end">
                  <v-col cols="12">
                    <v-text-field
                      label="내용"
                      persistent-hint
                      outlined
                      height="138"
                    ></v-text-field>
                  </v-col>
                </div>
               </v-card>
            </v-col>
            <v-responsive
          v-if="n%2===0"
          :key="`width-${n}`"
          width="100%"
        ></v-responsive>
          </template>
        </v-row><br>
        <v-btn
          outlined
          style="margin-left: 40%;"
        >
        문의하기
        </v-btn>
    <div style="margin: 10%"></div>
    </div>
    
    <div v-if="$vuetify.breakpoint.mdAndUp==false">
        <h1 style="font-weight: bold; font-size: 30px; padding:10% 0 0 10%">서비스 문의하기</h1><br>
        <h3 style="padding:5% 0 0 10%">궁금하신 사항은 언제든 문의해 주세요.</h3>
        <div style="font-size: 20px; padding:0 0 0 10%">
        <p>브로넥스에서 제공하는 서비스에 대한 문의를 아래 양식에 맞게 작성하여 문의 하시면 24시간 이내에 친절하게 답변드리겠습니다.</p>
        <p>문의전화: 031) 306-0426/ 운영시간 오전 9시 ~ 오후 6시 (주말 및 공휴일 제외)</p>
        <li>문의에 대한 답변은 24시간 이내에 남겨주신 연락처로 안내 전화 및 메일을 보내드립니다.</li>
        <li>고객님의 소중한 정보에 대해 비공개에 의한 신분 보장을 약속합니다.</li></div><br>
        <h1  style="padding:8% 0 5% 10%">문의하기</h1>
        <v-row no-gutters  style="padding:0 0 5% 10%">
          <template v-for="n in 14">
            <v-col :key="n" :cols="n%2 === 0 ? 8 : 3" >
              <v-card
                class="text-center"
                tile
                elevation="0"
                style="font-size:20px"
              >
                <div v-if="n === 1" id="grid_left_first">
                  서비스
                </div>
                <div v-if="n === 2" id="grid_right_first">
                  <v-col class="d-flex" cols="12" id="card_margin">
                    <v-select
            label="서비스"
                    :items="items"
                    dense
                    outlined
                    ></v-select>
                  </v-col>

                </div>
                <div v-if="n === 3" id="grid_left">
                  회사명
                </div>
                <div v-if="n === 4" id="grid_right">
                  <v-col cols="12">
                    <v-text-field
                      label="회사명"
                      persistent-hint
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                </div>
                <div v-if="n === 5" id="grid_left">
                  담당자명
                </div>
                <div v-if="n === 6" id="grid_right">
                  <v-col cols="12">
                    <v-text-field
                      label="담당자명"
                      persistent-hint
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                </div>
                <div v-if="n === 7" id="grid_left">
                  연락처
                </div>
                <div v-if="n === 8" id="grid_right">
                  <v-col cols="12">
                    <v-text-field
                      label="연락처"
                      persistent-hint
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                </div>
                <div v-if="n === 9" id="grid_left">
                  이메일
                </div>
                <div v-if="n === 10" id="grid_right">
                  <v-col cols="12">
                    <v-text-field
                      label="이메일"
                      persistent-hint
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                </div>
                <div v-if="n === 11" id="grid_left">
                  제목
                </div>
                <div v-if="n === 12" id="grid_right">
                  <v-col cols="12">
                    <v-text-field
                      label="제목"
                      persistent-hint
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                </div>
                <div v-if="n === 13" id="grid_left_end">
                  내용
                </div>
                <div v-if="n === 14" id="grid_right_end">
                  <v-col cols="12">
                    <v-text-field
                      label="내용"
                      persistent-hint
                      outlined
                      height="138"
                    ></v-text-field>
                  </v-col>
                </div>
               </v-card>
            </v-col>
            <v-responsive
          v-if="n%2===0"
          :key="`width-${n}`"
          width="100%"
        ></v-responsive>
          </template>
        </v-row><br>
        <v-btn
          outlined
          style="margin-left: 37%;"
        >
        문의하기
        </v-btn>
    <div style="margin: 10%"></div>
    </div>
    
    </div>
</template>

<script>
import txtimg from '@/components/txtimg'
export default {
  components: {
    txtimg
  }, 
  data: () => ({
      items: ['MES', 'ERP', 'PDM', 'HMI','지능형 RPA', 'AI 검사', '테스트 자동화','환경 구축', '서비스 모니터링', '기타'],
    }),
}
</script>

<style>
#card_margin {
  margin-bottom: 100px
}
#grid_left_first {
  height: 60px;
  line-height: 60px;
  border-top: 1px solid black;
  border-bottom: 1px solid #BDBDBD;
  background-color: #EEEEEE;
}
#grid_left {
  height: 60px;
  line-height: 60px;
  background-color: #EEEEEE;
  border-bottom: 1px solid #BDBDBD;
}
#grid_left_end {
  height: 160px;
  line-height: 60px;
  background-color: #EEEEEE;
  border-bottom: 1px solid black;
}
#grid_right_first {
  height: 60px;
  border-top: 1px solid black;
  border-bottom: 1px solid #BDBDBD;
}
#grid_right {
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid #BDBDBD;
}
#grid_right_end {
  height: 160px;
  line-height: 60px;
  border-bottom: 1px solid black;
}
</style>