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
      <ion-title color="primary"><h2>Anmeldung</h2></ion-title>

      <ion-item>
        <ion-label>Benutzername: </ion-label>
        <ion-input placeholder="Enter Input"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label>Passwort: </ion-label>
        <ion-input placeholder="Enter Input"></ion-input>
      </ion-item>
      <ion-button>Anmelden</ion-button>
      <ion-router-link href="/:link/tabs/tab3">
        <ion-button>Abbrechen</ion-button>
      </ion-router-link>


      <ion-router-link href="/:link/tabs/reg">
      <ion-item class="ion-padding-top">
        Neu bei Planti?
        <button> Neuen Account anlegen</button>
      </ion-item>
      </ion-router-link>
    </ion-content>
  </ion-page>
</template>


<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { defineComponent } from 'vue';



export default defineComponent ({
  name: 'Login',
  components: {IonHeader, IonToolbar, IonTitle, IonContent, IonPage},


})

</script>

