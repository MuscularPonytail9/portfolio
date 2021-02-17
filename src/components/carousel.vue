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
          <v-card color="transparent" tile flat height="300"></v-card>        
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-card flat tile color="transparent" class="text-center">
              <v-card-text>
                <div style="font-size: 50px;">{{ item.title }}</div><br>
                <div style="font-size: 18px;">{{ item.txt }}</div>
              </v-card-text>
            </v-card>
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
            title: 'Magic & Smart Factory',
            txt: '기술의 한계를 넘어, 고객의 비전을 현실로',
          },
          {
            src: require('@/assets/images/aurora.jpg'),
            title: 'Technology',
            txt: '고객의 가치를 최우선으로 하는 회사'
          },
          // {
          //   src: require('@/assets/images/building.jpg'),
          //   txt: 'Geonmooljoo, I envy you'
          // }
        ]
      }
    }
}
</script>

<style>

</style>