<template>
  <div class="topNav_footer-container">
    <div class="footer-container">
      <div class="main-footer">
        <div class="footer-logo">
          <router-link to="/" class="footer-logo">
            <h1> Salon Sund & Smuk </h1>
          </router-link>
        </div>
        <div class="footer-kontakt">
          <h1>Kontakt</h1>
          <p>Ullemoseparken 30</p>
          <p>5856 Ryslinge</p>
          <p>Tlf: 23247077</p>
          <p>Mail: phuong@.......com</p>
      </div>
    </div>
    <div class="copyright">
      <p>{{ dateÅrstal }}&copy; Copyright  Salon Sund Og Smuk </p>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store/index'

export default {
  computed: {
    dateÅrstal () {
      return store.state.dateÅrstal
    }
  }
}
</script>
