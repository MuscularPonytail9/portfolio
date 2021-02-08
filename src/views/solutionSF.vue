<template>
    <div>
        <txtimg name="Smart Factory" source="laser.jpg" ></txtimg>
        <br><br><br>
        <v-card color="grey lighten-4" flat tile height="270">
            <v-row>
              <v-card color="transparent" tile flat height="50"></v-card>
            </v-row>
            <v-row>
              <v-col offset="3">
                <v-expand-transition css="true" class="expand-transition-enter-active expand-transition-leave-active">
                  <v-card v-show="expand" tile flat width="100%" height="100%" color="grey lighten-4">
                      <div style="font-size: 26px">
                        We make Ganzi factory <br>
                      </div>
                      <div style="font-size: 16px">
                        Give me money, then I'll give you some Ganzi Smart Factory Softwares. <br>
                        I'm so sorry but I love you. I all lied.
                      </div>
                  </v-card>
                </v-expand-transition>
              </v-col>
            </v-row>
        </v-card>
        <v-card flat tile height="270">
        </v-card>
    </div>
</template>

<script>
import txtimg from '@/components/txtimg'
export default {
  components: {
    txtimg
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

<style>
.expand-transition-enter-active {
  transition: all .2s ease;
}
.expand-transition-leave-active {
  transition: all .2s ease;
}
</style>