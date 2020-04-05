<template>
  <div class="topNav_footer-container">
    <div class="top-nav" >
    <!-- :class="{ 'hidden-navbar': !showNavbar }" -->
      <!-- <h1 class="title1">Salon Sund & Smuk</h1> -->
      <div class="knap" >
        <router-link to="/" class="knap-sti">Forside</router-link>
        <router-link to="/priser" class="knap-sti">Priser</router-link>
        <router-link to="/åbningstider" class="knap-sti">Åbningstider</router-link>
        <router-link to="/findvej" class="knap-sti">Find Vej</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>
