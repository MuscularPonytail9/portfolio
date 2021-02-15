<template>
  <div>
    <v-container>
        <h2 class="text-center">Solutions</h2>
    <v-row>
        <v-col cols='6' v-for="item in items" :key="item.id">
    <v-hover v-slot:default="{ hover }">
    <v-card
    class="mx-auto my-12"
    max-width="430"
    flat
    >
    <router-link :to="item.link">
      <v-img
        height="300"
        :src= "item.src"
      >
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out grey darken-2 v-card--reveal display-3 white--text"
            style="height: 100%;"
          >
          </div>
        </v-expand-transition>
      </v-img>
      
    </router-link>
    <v-card-title>
          {{ item.title }}     
      </v-card-title>

    

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
      </v-row>

      <div class="my-4 subtitle-1"> </div>

      <div>{{ item.txt }}</div>
    </v-card-text>
    </v-card>
    </v-hover>
    
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
                title: "Smart Factory",
                txt: "Kimchi, Bossam - Stunning Combination",
                src: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
                link: "/solutionSF"
            },
            {
                id: 2,
                title: "RPA",
                txt: "Kimchi, Bossam - Stunning Combination",
                src: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
                link: "solutionRPA"
            },
            // {
            //     id: 3,
            //     title: "Delicious Jjam-bab",
            //     txt: "Kimchi, Bossam - Stunning Combination",
            //     src: "https://cdn.vuetifyjs.com/images/cards/cooking.png"
            // },
            // {
            //     id: 4,
            //     title: "Delicious Jjam-bab",
            //     txt: "Kimchi, Bossam - Stunning Combination",
            //     src: "https://cdn.vuetifyjs.com/images/cards/cooking.png"
            // },
        ]
        }
    }
}
</script>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
</style>