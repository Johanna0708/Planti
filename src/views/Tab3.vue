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
        <ion-card-content>
          <GMapMap
              :center="center"
              :zoom="7"
              map-type-id="terrain"
              style="height: 800px; width: 100%;">
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

export default defineComponent ({
  name: 'Tab3',
  components: {IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButton},

  data() {
    return {
      center: {lat: 51.093048, lng: 6.842120},
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

    const printCurrentPosition = async () => {
      const pos = await Geolocation.getCurrentPosition();
      console.log('Current position:', pos);
    };

    return { getCurrentPosition,
      loc,
      printCurrentPosition};
  },
})

</script>
