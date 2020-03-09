<template>
  <div class="main-container">
    <div class="forside-container">
      <!-- <div class="hej" src="../../public/landscape.png"></div> -->
        <div class="hej" :style="{ backgroundImage: `url(${backgroundUrl})` }"></div>
        <!-- <v-carousel>
          <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
            reverse-transition="fade-transition"
            transition="fade-transition"
          >
          </v-carousel-item>
        </v-carousel> -->
        <h1>hej2</h1>
    </div>
  </div>
</template>

<script>
import backgroundUrl from '../../public/billeder/landscape.png'
export default {
  data () {
    return {
      backgroundUrl
    }
  }
}
</script>
