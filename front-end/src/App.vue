<template>
  <v-app>
    <TopNav />
    <router-view />
    <v-content class="hej">
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import TopNav from './components/TopNav'
import Footer from './components/BottomNav'

export default {
  name: 'App',

  components: {
    TopNav,
    Footer
  },

  data: () => ({
    //
  })
}
</script>
