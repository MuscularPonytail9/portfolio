<template>
  <div v-scroll="onScroll">
      <v-card flat tile width="100%" height="400" :id="id">
        <v-expand-transition>
          <v-card v-show="expand" flat tile height="100%" width="100%">
          <v-row no-gutters>                      
            <v-col cols="6">
                <v-img :src="require(`@/assets/images/${source}`)" width="100%" height="400"></v-img>
            </v-col>
            <v-col offset="1" class="mt-12">
                <v-card flat tile width="400" class="mt-12">
                    <v-card-text class="mt-12">
                        <div style="font-size: 40px">{{ title }}</div> <br><br>
                        <div style="font-size: 20px">{{ txt }}</div>
                    </v-card-text>
                </v-card>
            </v-col>
          </v-row>
          </v-card>
        </v-expand-transition>           
      </v-card>
  </div>
</template>

<script>
export default {
    props: {
        id: String,
        source: String,
        title: String,
        txt: String,
    },
    data() {
        return {
            expand: false,
            offset: 0
        }
    },
    methods: {
        onScroll () {
            if(window.scrollY>this.offset-300) {
                this.expand=true
            } if(window.scrollY<this.offset-600) {
              this.expand=false
            }
        },
        rowYpos () {
            var target = document.getElementById(this.id);
            var abTop = window.pageYOffset + target.getBoundingClientRect().top;
            return abTop
        }
    },
    mounted() {
          this.offset = this.rowYpos()
    },
}
</script>

<style>

</style>