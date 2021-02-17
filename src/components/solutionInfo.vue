<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="3">
          <v-card
            class="mx-auto"
            max-width="300"
            flat
          >
            <v-list dense>
            <v-subheader>기능</v-subheader>
            <v-list-item-group>
                <v-list-item @click="setSrc1">
                <v-list-item-content>
                    <v-list-item-title>기준관리</v-list-item-title>
                </v-list-item-content>
                </v-list-item>
                <v-list-item @click="setSrc2">
                <v-list-item-content>
                    <v-list-item-title>영업관리</v-list-item-title>
                </v-list-item-content>
                </v-list-item>
                <v-list-item @click="setSrc3">
                <v-list-item-content>
                    <v-list-item-title>구매관리</v-list-item-title>
                </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
            </v-list>
          </v-card>
        </v-col>
        <v-col cols="6">
            <v-img :src="require(`@/assets/images/${source}`)">

            </v-img>
        </v-col>
        <v-col cols="3">
            <v-card>
              {{ txt }}
            </v-card>
        </v-col>     
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    data: () => ({
      source: 'aurora.jpg',
      txt: "기준관리",
      Info: [
        {
          id: 1,
          text: "기준관리"
        },
        {
          id: 2,
          text: "영업관리"
        },
        {
          id: 3,
          text: "구매관리"
        }
      ]
    }),
    methods: {
        setSrc1() {
            this.source="aurora.jpg"
            this.txt = this.Info[0].text
        },
        setSrc2() {
            this.source="building.jpg"
            this.txt = this.Info[1].text
        },
        setSrc3() {
            this.source="company.jpg"
            this.txt = this.Info[2].text
        },
    }
  }
</script>

<style>

</style>