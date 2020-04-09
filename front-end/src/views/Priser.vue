<template>
  <div class="main-container">
    <div class="priser-container">
      <h1>Priser og Tjenester</h1>
        <div class="tjenester-container">
          <table class="pris-tabel"
           v-for="kategori in tjenesterPriser.Kategori" v-bind:key="kategori.Navn">
            <tr>
              <th><h2 > {{kategori.Navn}} </h2></th>
            </tr>
            <tr v-for="prisliste in kategori.Tjenester" v-bind:key="prisliste.pris">
              <td class="table-cell" >{{prisliste.tjeneste}}</td>
              <td>{{prisliste.pris}}</td>
            </tr>
          </table>
        </div>
    </div>
    <div class="kontakt">
      <div>
        <img src="../../public/billeder/mor.jpg" alt="img" height="300" width="300" >
      </div>
      <div>
        <p class="kontakt-text">
          Hvis du har nogen spørgsmål eller henvendelser er du altid velkommen til at kontakte mig på telefon nr. 23 24 70 77.
          <br>
          Du har mulighed for at betale med dankort eller mobilpay på nr. 23247077
        </p>
      </div>
      <!-- <span>betaling kan ske over mobilpay på nummeret 23 24 70 77</span> -->
    </div>
  </div>
</template>

<script>
import tjenesterPriser from '../data/tjenestePriser.js'

export default {
  name: 'home',
  data () {
    return {
      display: false,
      tjenesterPriser
    }
  }
}
</script>
