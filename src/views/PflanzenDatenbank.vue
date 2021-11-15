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

      <ion-list>
        <ion-router-link href="/tabs/detailsPlant/">
        <ion-item v-for="item in items" :key="item.src">
          <ion-thumbnail slot="start">
            <img src="../img/monstera.png"/>
          </ion-thumbnail>

          <ion-label>
            {{item.text}}
          </ion-label>

        </ion-item>
        </ion-router-link>
      </ion-list>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonContent,IonList, IonThumbnail } from '@ionic/vue';
import { leaf, search } from 'ionicons/icons';
import {defineComponent, ref} from 'vue';
import {Pflanzen} from "@/types/pflanzen";
import{Sensor} from "@/types/sensor";


export default defineComponent ({
  name: 'PflanzenDatenbank',
  components: { IonHeader, IonToolbar, IonContent, IonPage, IonList, IonThumbnail  },

  data(){
    return{
      // pflanzen: null as Pflanzen
    }
  },

  setup() {
    const items = [{
      'text': 'Pflanze 1',
      'src': '../img/monstera.png',
      'id' : '1'
    },
      { 'text': 'Pflanze 2',
        'src': '../img/monstera.png',
        'id' : '2'
      },
      {
        'text': 'Pflanze 3',
        'src': '../img/planze2.png',
        'id' : '3'
      },
      {
        'text': 'Pflanze 4',
        'src': '../img/monstera.png',
        'id' : '4'
      }];



    return {
      leaf,
      search,
      items,
    }
  }
})


</script>
