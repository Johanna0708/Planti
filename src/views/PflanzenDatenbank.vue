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

      <ion-list v-for="item in plants"
                :router-link="`/tabs/datenbank/${item.pid}`"
                v-bind:key="item.pid">
        <ion-item>
          <ion-thumbnail slot="start">
            <ion-img :src='item.picture'/>
          </ion-thumbnail>
          <ion-label>
            {{item.name}}
          </ion-label>
        </ion-item>
      </ion-list>



    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonContent,IonList, IonThumbnail, IonImg } from '@ionic/vue';
import { leaf, search } from 'ionicons/icons';
import {defineComponent} from 'vue';
import axios from "axios";
import {Pflanze} from "@/types/pflanze";
import{Sensor} from "@/types/sensor";


export default defineComponent ({
  name: 'PflanzenDatenbank',
  components: { IonHeader, IonToolbar, IonContent, IonPage, IonList, IonThumbnail, IonImg },

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


  setup() {
    return {
      leaf,
      search,
    }
  },

})


</script>
