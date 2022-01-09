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






        <ion-label>Pflanzenart</ion-label>
        <ion-select placeholder="Select One">
          <ion-select-option v-for="item in plants"
                             v-bind:key="item.pid">{{ item.name }}</ion-select-option>
        </ion-select>


        <ion-item>
        <ion-label>Sensor</ion-label>
        <ion-input v-model="senlink" placeholder="Enter Input"></ion-input>

        <!-- <ion-router-link href="/:link/tabs/meinePflanzen"> -->
          <ion-button @click="sendData()">
            Speichern
          </ion-button>
        <!-- </ion-router-link> -->
      </ion-item>






        <ion-router-link href="/:link/tabs/meinePflanzen">
          <ion-button>Abbrechen</ion-button>
        </ion-router-link>



    </ion-content>
  </ion-page>
</template>



<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonContent } from '@ionic/vue';
import {defineComponent} from 'vue';
import axios from "axios";
import {Pflanze} from "@/types/pflanze";


export default defineComponent ({
  name: 'AddPlant',
  components: { IonHeader, IonToolbar, IonContent, IonPage},

  data(){
    return{
      plants: null as unknown as Pflanze[],
      senlink: null as any,

    }
  },

  created() {
    axios.get('http://localhost:8080/planti/showall')
        .then(response => {
          this.plants = response.data
        })
  },
  methods: {
    sendData(){
      axios.get('http://localhost:8080/planti/addsensor', {params: {pid:10, link: this.senlink}})
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
  },
})

</script>
