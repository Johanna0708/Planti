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
    <ion-content :fullscreen="true">

      <ion-title color="primary"><h2>Pflanze hinzufügen</h2></ion-title>

      <ion-item>
        <ion-label>Pflanzenart</ion-label>
        <ion-select placeholder="Select One">
          <ion-select-option value="1">Grünlilie</ion-select-option>
          <ion-select-option value="2">Bergpalme</ion-select-option>
          <ion-select-option value="3">Gefleckte Efeutute</ion-select-option>
        </ion-select>
      </ion-item>

      <ion-item>
        <ion-label>Sensor</ion-label>
        <ion-input placeholder="Enter Input"></ion-input>
      </ion-item>

      <ion-router-link href="/tabs/tab1">
      <ion-button>Speichern</ion-button>
      </ion-router-link>

      <ion-router-link href="/tabs/tab1">
      <ion-button>Abbrechen</ion-button>
      </ion-router-link>


    </ion-content>
  </ion-page>
</template>



<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonContent } from '@ionic/vue';
import {defineComponent} from 'vue';


export default defineComponent ({
  name: 'AddPlant',
  components: { IonHeader, IonToolbar, IonContent, IonPage},
})

</script>
