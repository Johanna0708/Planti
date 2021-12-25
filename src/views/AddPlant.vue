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

      <ion-list>
        <ion-item>
          <ion-label>Pflanzenart</ion-label>
          <ion-select placeholder="Select One">
            <ion-select-option v-for="item in plants"
                               v-bind:key="item.pid">{{ item.name }}</ion-select-option>
          </ion-select>
        </ion-item>
      </ion-list>

      <ion-item>
        <ion-label>Sensor</ion-label>
        <ion-input placeholder="Enter Input"></ion-input>
      </ion-item>

      <ion-router-link href="/tabs/meinePflanzen">
        <ion-button>Speichern</ion-button>
      </ion-router-link>

      <ion-router-link href="/tabs/meinePflanzen">
        <ion-button>Abbrechen</ion-button>
      </ion-router-link>


    </ion-content>
  </ion-page>
</template>



<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonContent, IonList } from '@ionic/vue';
import {defineComponent} from 'vue';
import axios from "axios";
import {Pflanze} from "@/types/pflanze";


export default defineComponent ({
  name: 'AddPlant',
  components: { IonHeader, IonToolbar, IonContent, IonPage, IonList},

  data(){
    return{
      plants: null as unknown as Pflanze[],

    }
  },
  created() {
    axios.get('http://localhost:8080/planti/showall')
        .then(response => {
          this.plants = response.data
        })
  },


})

</script>
