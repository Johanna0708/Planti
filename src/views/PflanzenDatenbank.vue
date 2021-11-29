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
          <ion-item v-for="plant in plants" v-bind:key="plant.pid">
            <ion-thumbnail slot="start">
              <img src='{{plants.picture}}'>
            </ion-thumbnail>
            <ion-thumbnail>
              <img src='https://media.dehner.de/new_ads_main/gefleckte-efeutute-pictus/8689127_PR_FS_001_ScindapsusPictusT12DehnerExpressHerzig.jpg'>
            </ion-thumbnail>
            <ion-label>
              {{plant.name}}
            </ion-label>
          </ion-item>
        </ion-router-link>
      </ion-list>
{{plants}}
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonContent,IonList, IonThumbnail } from '@ionic/vue';
import { leaf, search } from 'ionicons/icons';
import {defineComponent} from 'vue';
import axios from "axios";
import {Pflanze} from "@/types/pflanze";
import{Sensor} from "@/types/sensor";


export default defineComponent ({
  name: 'PflanzenDatenbank',
  components: { IonHeader, IonToolbar, IonContent, IonPage, IonList, IonThumbnail  },

  data(){
    return{
      //plant: null as Pflanze,
      plants: null as any,
    }
  },
  created() {
    axios.get('http://localhost:8080/planti/show')
        .then(response => {
          this.plants = response.data
        })
  },


  setup() {
    return {
      leaf,
      search,
    }
  },

})


</script>
