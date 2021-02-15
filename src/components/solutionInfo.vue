<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="3">
        <v-card
            class="mx-auto"
            max-width="300"
            tile
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
            <!-- <v-img :src=source>

            </v-img> -->
        <v-col>
        </v-col>     
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    data: () => ({
      source: "@/assets/images/aurora.jpg",
      items: [
        { text: 'Real-Time', icon: 'mdi-clock' },
        { text: 'Audience', icon: 'mdi-account' },
        { text: 'Conversions', icon: 'mdi-flag' },
      ],
    }),
    methods: {
        setSrc1() {
            this.source="@/assets/images/aurora.jpg"
        },
        setSrc2() {
            this.source="@/assets/images/building.jpg"
        },
        setSrc3() {
            this.source="@/assets/images/company.jpg"
        },
    }
  }
</script>

<style>

</style>