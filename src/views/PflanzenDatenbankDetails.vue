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


      <ion-router-link href="/tabs/datenbank">
        <ion-button>Zurück</ion-button>
      </ion-router-link>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonContent,} from '@ionic/vue';
import { leaf, search } from 'ionicons/icons';
import {defineComponent, ref} from 'vue';
import {Pflanzen} from "@/types/pflanzen";
import{Sensor} from "@/types/sensor";


export default defineComponent ({
  name: 'PflanzenDatenbankDetails',
  components: { IonHeader, IonToolbar, IonContent, IonPage,},

  setup() {

    return {
      leaf,
      search,
    }
  }
})


</script>
