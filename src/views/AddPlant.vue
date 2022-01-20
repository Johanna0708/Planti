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

      <ion-title color="primary"><h2>{{ $t('addplant.title') }}</h2></ion-title>

      <ion-item>
        <ion-label>{{ $t('addplant.plant') }}</ion-label>
        <ion-select v-model="plantid" placeholder="Select One">
          <ion-select-option value="1" > {{ $t('addplant.plant1') }}</ion-select-option>
          <ion-select-option value="2" > {{ $t('addplant.plant2') }} </ion-select-option>
          <ion-select-option value="3" > {{ $t('addplant.plant3') }} </ion-select-option>
          <ion-select-option value="4" > {{ $t('addplant.plant4') }} </ion-select-option>
          <ion-select-option value="5" > {{ $t('addplant.plant5') }} </ion-select-option>
          <ion-select-option value="6" > {{ $t('addplant.plant6') }} </ion-select-option>
        </ion-select>
      </ion-item>


      <ion-item>
        <ion-label>Sensor</ion-label>
        <ion-input v-model="senlink" placeholder="Enter Input"></ion-input>
      </ion-item>

      <ion-item>
        <ion-router-link >
          <ion-button @click="sendData()">
            {{ $t('addplant.button1') }}
          </ion-button>
        </ion-router-link>

        <ion-router-link href="/:link/tabs/meinePflanzen">
          <ion-button>{{ $t('addplant.button2') }}</ion-button>
        </ion-router-link>
      </ion-item>

    </ion-content>
  </ion-page>
</template>


<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonContent, IonItem, IonLabel, IonInput, IonSelect, IonSelectOption, IonTitle, IonButton } from '@ionic/vue';
import {defineComponent} from 'vue';
import axios from "axios";
import {Pflanze} from "@/types/pflanze";
import router from "@/router";


export default defineComponent ({
  name: 'AddPlant',
  components: { IonPage, IonHeader, IonToolbar, IonContent, IonItem, IonLabel, IonInput, IonSelect, IonSelectOption, IonTitle, IonButton},

  data(){
    return{
      plants: null as unknown as Pflanze[],
      senlink: null as any,
      plantid: 2,
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
      console.log(this.plantid)
      axios.get('http://localhost:8080/planti/addsensor', {params: {pid:this.plantid, link:this.senlink}})
          .then(function (response) {
            console.log(response);
            router.push("/:link/tabs/meinePflanzen")
          })
          .catch(function (error) {
            console.log(error);
          });
    }
  },
})

</script>
