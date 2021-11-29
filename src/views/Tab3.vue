<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="ion-padding-top ion-padding-end">
        <ion-item slot="end">
          <div>
            <img width="130" src="../img/Logo.png"/>
          </div>
        </ion-item>
      </ion-toolbar>
    </ion-header>

    <ion-content fullscreen class="ion-padding">
      <ion-title color="primary"><h2>Einstellungen</h2></ion-title>

      <ion-card>
        <ion-card-header>
          <ion-card-title>Geolocation</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <p>Ihr Standort ist folgender:</p>
          <p>Breitengrad: {{ loc.lat }}</p>
          <p>Längengrad: {{ loc.long }}</p>

          <ion-button @click="getCurrentPosition">
            Aktuellen Standort abrufen
          </ion-button>
        </ion-card-content>
      </ion-card>


      <ion-card>
        <ion-card-header>
          <ion-card-title>Karte</ion-card-title>
        </ion-card-header>
        <ion-card-content style="position: relative; height: 300px">

            <GMapMap :center="center"
                     :options="options"
                     :zoom="10" map-type-id="terrain" style="width: 50px; height: 50px">
              <GMapCluster :zoomOnClick="true">
                <GMapMarker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" :draggable="true"
                            @click="center = m.position" />
              </GMapCluster>
            </GMapMap>


        </ion-card-content>
      </ion-card>

      <ion-button expand="block" fill="outline">Abmelden</ion-button>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/vue';
import { defineComponent, ref } from 'vue';
import { Geolocation } from '@capacitor/geolocation';
import {GMapMap} from '@fawmi/vue-google-maps';

export default defineComponent ({
  name: 'Tab3',
  components: {IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButton, GMapMap},

  data() {
    return {
      center: {lat: 52.408283, lng: 12.541222},
      markers: [
        {
          position: {
            lat: 52.408283, lng: 12.541222},
        }
      ]
    }
  },

  setup() {
    const loc = ref<{
      lat: null | number;
      long: null | number;
    }>({
      lat: null,
      long: null,
    });

    const getCurrentPosition = async () => {
      const pos = await Geolocation.getCurrentPosition();
      loc.value = {
        lat: pos.coords.latitude,
        long: pos.coords.longitude,
      };
    };

    return { getCurrentPosition,
      loc};
  },
})

</script>

<style scoped>
GMapMap{
  height: 100px;
}


</style>
