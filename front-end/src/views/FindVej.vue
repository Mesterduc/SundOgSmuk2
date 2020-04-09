<template>
  <div class="main-container">
    <div class="vue-map-container">
    <h1>Find vej</h1>

    <GmapMap :center="center" :map-type-id="mapTypeId" :zoom="16">
      <GmapMarker
        v-for="(item, index) in markers"
        :key="index"
        :position="item.position"
        @click="center = item.position"
      />
    </GmapMap>

    <h2>Addresse</h2>
    <p>5856 Ryslinge</p>
    <p>Ullemoseparken 30</p>
  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      center: { lat: 55.242032, lng: 10.532155 },
      mapTypeId: 'terrain',
      markers: [
        { position: { lat: 55.242032, lng: 10.531046 } }
      ]
    }
  }
}
</script>
