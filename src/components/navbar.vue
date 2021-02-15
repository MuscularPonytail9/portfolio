<template>
      <v-app-bar dense app flat hide-on-scroll height="50">
        <v-spacer></v-spacer>
          <v-toolbar-title>
              <v-btn to='/'>
                  Broanex
              </v-btn>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-toolbar-items>
              <v-btn width="145" elevation="0" to='/solutionSF'>Smart Factory</v-btn>
              <v-btn width="145" elevation="0" to='/solutionRPA'>Rpa</v-btn>
              <v-btn width="145" elevation="0" to='/clients'>Clients</v-btn> 
              <v-btn width="145" elevation="0" to='/contact'>Contact</v-btn>
              <v-btn width="145" elevation="0" to='/company'>Company</v-btn>              
              <v-btn width="145" elevation="0" to='/recruitment'>Recruitment</v-btn>
              
          </v-toolbar-items>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
      </v-app-bar>
</template>

<script>
export default {

}
</script>

<style>

</style>