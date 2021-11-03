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

      <ion-title color="primary"><h2>Pflanzenpflege</h2></ion-title>

      <ion-card>
        <ion-card-header>
          <ion-card-title>Aufgaben</ion-card-title>
          <ion-card-subtitle>in 5 Tagen</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
          Grünlilie muss gegossen werden!
        </ion-card-content>
      </ion-card>
      <ion-card>
        <ion-card-header>
          <ion-card-subtitle>in 10 Tagen</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          Grünlilie muss gegossen werden!
        </ion-card-content>
      </ion-card>
      <ion-card>
        <ion-card-header>
          <ion-card-subtitle>in 15 Tagen</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          Grünlilie muss gegossen werden!
        </ion-card-content>
      </ion-card>

      <ion-icon :icon="leaf-outline"></ion-icon>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonGrid, } from '@ionic/vue';

export default {
  name: 'Tab1',
  components: {IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonIcon}
}
</script>