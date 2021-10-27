<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-subtitle>Pflanzenpflege</ion-subtitle>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>
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
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon } from '@ionic/vue';

export default  {
  name: 'Tab1',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonIcon  }
}
</script>