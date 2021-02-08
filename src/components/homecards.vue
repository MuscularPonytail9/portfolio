<template>
  <div>
    <v-container>
        <h2 class="text-center">Information</h2>
    <v-row>
        <v-col cols='3' v-for="item in items" :key="item.id">
    <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
    >
    <template slot="progress">
      <v-progress-linear
        
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="300"
      :src= "item.src"
    ></v-img>

    <v-card-title>{{ item.title }}</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
      </v-row>

      <div class="my-4 subtitle-1"> </div>

      <div>{{ item.txt }}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

        <v-card-actions>
            <v-btn
                color="grey"
                text
             >
                More
            </v-btn>
        </v-card-actions>
    </v-card>
        </v-col>
    </v-row>
  </v-container>
  
  </div>
</template>

<script>
export default {
    data() {
        return {
        items: [
            {
                id: 1,
                title: "Delicious Jjam-bab",
                txt: "Kimchi, Bossam - Stunning Combination",
                src: "https://cdn.vuetifyjs.com/images/cards/cooking.png"
            },
            {
                id: 2,
                title: "Delicious Jjam-bab",
                txt: "Kimchi, Bossam - Stunning Combination",
                src: "https://cdn.vuetifyjs.com/images/cards/cooking.png"
            },
            {
                id: 3,
                title: "Delicious Jjam-bab",
                txt: "Kimchi, Bossam - Stunning Combination",
                src: "https://cdn.vuetifyjs.com/images/cards/cooking.png"
            },
            {
                id: 4,
                title: "Delicious Jjam-bab",
                txt: "Kimchi, Bossam - Stunning Combination",
                src: "https://cdn.vuetifyjs.com/images/cards/cooking.png"
            },
        ]
        }
    }
}
</script>

<style>

</style>