<template>
  <div class="main-container">
    <div class="priser-container">
      <h1>Priser og Tjenester</h1>
        <div class="tjenester-container">
          <table class="pris-tabel"
           v-for="hej in tjenesterPriser.Kategori" v-bind:key="hej.Navn"
           >
            <tr>
              <th><h2 > {{hej.Navn}} </h2></th>
            </tr>
            <tr v-for="hej2 in hej.Tjenester" v-bind:key="hej2.pris">
              <td class="table-cell" >{{hej2.tjeneste}}</td>
              <td>{{hej2.pris}}</td>
            </tr>
          </table>
          <!-- <table class="pris-tabel">
            <tr>
              <th><h2>Klipning</h2></th>
            </tr>
            <tr>
              <td class="table-cell">Dameklip med let føn</td>
              <td>260 kr.</td>
            </tr>
            <tr>
              <td>Dameklip med hårvask og føn</td>
              <td>280 kr.</td>
            </tr>
            <tr>
              <td>Herreklip med let føn</td>
              <td>235 kr.</td>
            </tr>
            <tr>
              <td>Herreklip med hårvask og føn</td>
              <td>250 kr.</td>
            </tr>
            <tr>
              <td>Børneklip ( 0-6 år )</td>
              <td>175 kr.</td>
            </tr>
            <tr>
              <td>Børneklip ( 7-13 år )</td>
              <td>195 kr.</td>
            </tr>
            <br>
            <tr>
              <th> <h2>Opsætning</h2> </th>
            </tr>
            <tr>
              <td>Kort hår - Vask og opsætning</td>
              <td>215 kr.</td>
            </tr>
            <tr>
              <td>Langt hår - Opsætning</td>
              <td>400 kr.</td>
            </tr>
              <td>Langt hår - Opsætning og makeup</td>
              <td>650 kr.</td>
            <tr>
            <br>
            <tr>
              <th><h2>Hel farvning - Inklusiv hårvask og føn</h2></th>
            </tr>
            <tr>
              <td>Kort hår</td>
              <td>395 kr.</td>
            </tr>
            <tr>
              <td>Mellemlangt hår</td>
              <td>530 kr.</td>
            </tr>
            <tr>
              <td>langt hår</td>
              <td>640 kr.</td>
            </tr>
          </table> -->
          <!-- <table class="pris-tabel">
            <tr>
              <th><h2> Refleks/Foliestriber - Inklusiv hårvask og føn</h2></th>
            </tr>
            <tr>
              <td class="table-cell">kort hår</td>
              <td>395 kr.</td>
            </tr>
            <tr>
              <td>Mellemlangt hår</td>
              <td>530 kr.</td>
            </tr>
            <tr>
              <td>langt hår</td>
              <td>640 kr.</td>
            </tr>
            <br>
            <tr>
              <th> <h2>Permanent - Inklusiv hårvask og føn</h2></th>
            </tr>
            <tr>
              <td>kort hår</td>
              <td>480 kr.</td>
            </tr>
            <tr>
              <td>Mellemlangt hår</td>
              <td>580 kr.</td>
            </tr>
            <tr>
              <td>langt hår</td>
              <td>690 kr.</td>
            </tr>
            <tr>
              <td>Vand donation</td>
              <td>213 kr.</td>
            </tr>
            <br>
             <tr>
              <th> <h2>Farvning - Vipper og Bryn</h2></th>
            </tr>
            <tr>
              <td>Vipper</td>
              <td>95 kr.</td>
            </tr>
            <tr>
              <td>Bryn</td>
              <td>85 kr.</td>
            </tr>
            <tr>
              <td>Retning af bryn</td>
              <td>50 kr.</td>
            </tr>
            <tr>
              <td>Vipper, bryn og ret</td>
              <td>200 kr.</td>
            </tr>
          </table> -->
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
