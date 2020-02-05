<template>
  <v-app>
    <TopNav />
    <router-view />
    <v-content class="hej">
    </v-content>
  </v-app>
</template>

<script>
import TopNav from './components/TopNav'

export default {
  name: 'App',

  components: {
    TopNav
  },

  data: () => ({
    //
  })
}
</script>
