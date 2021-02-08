<template>
  <div>
    <v-carousel hide-delimiters cycle interval=5000 height="600px" >
      <v-carousel-item 
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
      >
        <v-row
        >
          <v-card color="transparent" tile flat height="150"></v-card>        
        </v-row>
        <v-row>
          <v-col offset="3">
            <h1>{{ item.txt }}</h1>
          </v-col>
        </v-row>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  data () {
      return {
        items: [
          {
            src: require('@/assets/images/time.jpg'),
            txt: 'Jola Expensive Watch'
          },
          {
            src: require('@/assets/images/aurora.jpg'),
            txt: 'Gae Beautiful Sky'
          },
          {
            src: require('@/assets/images/building.jpg'),
            txt: 'Geonmooljoo, I envy you'
          }
        ]
      }
    }
}
</script>

<style>

</style>