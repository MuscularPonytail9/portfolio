<template>
<div>
      <v-app-bar dense app flat hide-on-scroll height="50" id="navbar" v-if="$vuetify.breakpoint.mdAndUp==true">
        <v-spacer></v-spacer>
          <v-toolbar-title>
              <v-btn elevation="0" to='/'>
                  <v-img src="@/assets/images/bnx1.png" width="25px" height="34px"></v-img>
                  <div style="color: darkgrey;">
                    broanex
                  </div>                
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
      <v-app-bar dense app flat hide-on-scroll height="50" id="navbar" v-if="$vuetify.breakpoint.mdAndUp==false">
          <v-toolbar-title class="ml-16">
              <v-btn elevation="0" to='/'>
                  <v-img src="@/assets/images/bnx1.png" width="25px" height="34px"></v-img>
                  <div style="color: darkgrey;">
                    broanex
                  </div>                
              </v-btn>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-app-bar-nav-icon @click.stop="draw = !draw" class="mr-2"></v-app-bar-nav-icon>
      </v-app-bar>
      <v-navigation-drawer
      v-model="draw"
      absolute
      temporary
      right
      fixed
      id="rightNav"
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="text--accent-4"
        >
          <v-list-item to='/'>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item to='/solutionSF'>
            <v-list-item-title>Smart Factory</v-list-item-title>
          </v-list-item>

          <v-list-item to='/solutionRPA'>
            <v-list-item-title>RPA</v-list-item-title>
          </v-list-item>

          <v-list-item to='/clients'>
            <v-list-item-title>Clients</v-list-item-title>
          </v-list-item>

          <v-list-item to='/contact'>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item>

          <v-list-item to='/company'>
            <v-list-item-title>Company</v-list-item-title>
          </v-list-item>

          <v-list-item to='/recruitment'>
            <v-list-item-title>Recruitment</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
</div>     
</template>

<script>
 export default {
    data: () => ({
      draw: false,
      group: null,
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>

<style scoped>
#navbar {
    font-family: 'Montserrat', sans-serif;
}
#rightNav {
    position: fixed;
}
</style>