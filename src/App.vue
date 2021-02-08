<template>
  <v-app>
    <navbar />
    <v-content>
      <router-view/>
    </v-content>
    <v-footer app color="grey lighten-4" absolute>
      <v-spacer></v-spacer>
      <div>&copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>

<script>
import navbar from '@/components/navbar'
export default {
  name: 'App',
  components: {
    navbar
  }
};
</script>
