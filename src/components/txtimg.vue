<template>
    <div id="txtimg">
        <v-img :src="require(`@/assets/images/${source}`)" height="300">
          <v-row>
            <v-card color="transparent" tile flat width="600" height="240"></v-card>                
          </v-row>
          <v-row
          >
                <v-card tile flat width="800" height="200">
                    <v-row>
                      <v-card color="transparent" tile flat width="800" height="15"></v-card>
                    </v-row>
                    <v-row>
                      <v-col>
                        <v-expand-x-transition>
                          <v-card v-show="expand" tile flat width="800">
                            <div class="text-center" style="font-size: 30px;">
                            {{ name }}
                            </div>
                          </v-card>
                        </v-expand-x-transition>
                      </v-col>
                    </v-row>                       
                </v-card>
          </v-row>
        </v-img>               
    </div>
</template>

<script>
export default {
    props: {
        name: String,
        source: String
    },
    data() {
        return {
        expand: false
        }
    },
    mounted() {
        this.expand=true
    }
}
</script>

<style scoped>
#txtimg {
  font-family: 'Montserrat', sans-serif;
}
</style>