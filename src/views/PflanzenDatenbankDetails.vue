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
      <ion-list v-if="plant">
        <ion-item slot="start">
          <ion-img style="height: 200px" :src='plant.picture'/>
        </ion-item>
        <ion-item>
          <ion-label>Pflanzenname: {{plant.name}}</ion-label>
        </ion-item>
        <ion-item >
          <ion-label>wissenschaftlicher Name: {{plant.wissName}}</ion-label>
        </ion-item>
        <ion-item v-if="plant.schwierigkeit==0">
          <ion-label>Schwierigkeitslevel: einfach</ion-label>
        </ion-item>
        <ion-item v-if="plant.schwierigkeit==1">
          <ion-label>Schwierigkeitslevel: mittel</ion-label>
        </ion-item>
        <ion-item v-if="plant.schwierigkeit==2">
          <ion-label>Schwierigkeitslevel: schwer</ion-label>
        </ion-item>
        <ion-item v-if="plant.standort==0">
          <ion-label>Standort: Schatten</ion-label>
        </ion-item>
        <ion-item v-if="plant.standort==1">
          <ion-label>Standort: Halbschatten</ion-label>
        </ion-item>
        <ion-item v-if="plant.standort==2">
          <ion-label>Standort: Sonne</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Merkmale: {{plant.merkmale}}</ion-label>
        </ion-item>
      </ion-list>


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
import axios from "axios";
import {Pflanze} from "@/types/pflanze";
import{Sensor} from "@/types/sensor";


export default defineComponent ({
  name: 'PflanzenDatenbankDetails',
  components: { IonHeader, IonToolbar, IonContent, IonPage,},

  data: function () {
    return {
     plant: null as unknown as Pflanze,
    }
  },


  created() {
    const urlID = this.$route.params.pid
    axios.get('http://localhost:8080/planti/show?id='+urlID)
        .then(response => {
          this.plant = response.data
          console.log(this.plant)
        })
  },
  setup() {
    return {
      leaf,
      search,
    }
  }
})


</script>
