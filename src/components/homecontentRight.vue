<template>
  <div v-scroll="onScroll">
      <v-card flat tile width="100%" height="300" :id="id">
        <v-expand-transition>
          <v-card v-show="expand" flat tile height="100%" width="100%">
          <v-row no-gutters>          
            <v-col cols="6">
                asdf
            </v-col>
            <v-col cols="6">
                <v-img :src="require(`@/assets/images/${source}`)" width="635" height="300"></v-img>
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
        source: String
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
    }
}
</script>

<style>

</style>