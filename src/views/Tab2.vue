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
      <ion-title color="primary"><h2>Meine Pflanzen</h2></ion-title>

      <ion-grid>
        <ion-row>
          <ion-col size="4" :key="photo" v-for="photo in photos">
            <ion-img :src="photo.webviewPath"></ion-img>
          </ion-col>
        </ion-row>
      </ion-grid>

      <ion-fab vertical="bottom" horizontal="center" slot="fixed">
        <ion-fab-button @click="takePhoto()">
          <ion-icon :icon="camera"></ion-icon>
        </ion-fab-button>
      </ion-fab>

    </ion-content>

  </ion-page>
</template>

<script lang="ts">
import {  IonPage, IonHeader, IonFab, IonFabButton, IonIcon, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonImg } from '@ionic/vue';
import { camera, trash, close } from 'ionicons/icons';
import { defineComponent } from 'vue';
import { usePhotoGallery,UserPhoto } from '@/composables/usePhotoGallery';

export default defineComponent ({
  name: 'Tab3',
  components: { IonPage, IonHeader, IonFab, IonFabButton, IonIcon, IonToolbar, IonTitle, IonContent },

  setup() {
    const { photos, takePhoto } = usePhotoGallery();

    return {
      photos,
      takePhoto,
      camera, trash, close
    }
  }

})
</script>