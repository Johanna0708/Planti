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
      <ion-title color="primary"><h2>Einstellungen</h2></ion-title>

      <ion-button expand="block" fill="outline">Abmelden</ion-button>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent ({
  name: 'Tab4',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
})

</script>