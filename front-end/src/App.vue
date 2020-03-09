<template>
  <v-app>
    <v-content>
      <Cover />
      <TopNav />
      <router-view />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import TopNav from './components/TopNav'
import Footer from './components/Footer'
import Cover from './components/Cover'

export default {
  name: 'App',

  components: {
    Cover,
    TopNav,
    Footer
  },

  data: () => ({
    //
  })
}
</script>
