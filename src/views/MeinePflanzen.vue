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


      <!--<language-switcher/>-->


      <ion-title color="primary"><h2>{{ $t('page1.message') }} {{username}}! </h2></ion-title>
      <ion-title color="primary"><h2>{{ $t('page1.title1') }} </h2></ion-title>

      <ion-fab vertical="bottom" horizontal="end" slot="fixed" class="ion-padding-bottom">

        <ion-router-link href="/:link/tabs/addPlant">
          <ion-fab-button >
            <ion-icon :icon="add"></ion-icon>
          </ion-fab-button>
        </ion-router-link>
      </ion-fab>


      <ion-card v-if="moisture">
        <ion-card  color="danger" v-if="moisture<35">
          <ion-card-content>
            {{ $t('page1.case1') }}
          </ion-card-content>
        </ion-card>
        <ion-card  color="success" v-else>
          <ion-card-content>
            {{ $t('page1.case2') }}
          </ion-card-content>
        </ion-card>
      </ion-card>


      <ion-title color="primary" class="ion-padding-top"><h2>{{ $t('page1.title2') }}</h2></ion-title>
      <ion-grid >
        <ion-col >
          <ion-row >
            <ion-card v-for="item in myplants"
                      :router-link="`/:lang/tabs/meinePflanzen/${item.pid}`"
                      v-bind:key="item.pid">
              <ion-card-content>
                <ion-img slot="start" style="height: 100px" :src='item.picture'/>

                <ion-label v-if="$t('plants') == 1">
                  <h2 text-align="center" >{{ item.name }}</h2>
                </ion-label>
                <ion-label v-if="$t('plants') == 2">
                  <h2>{{ item.enName }}</h2>
                </ion-label>

              </ion-card-content>
            </ion-card>
          </ion-row>
        </ion-col>
      </ion-grid>


    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonFab, IonFabButton, IonGrid, IonCol, IonRow,
  IonCard, IonCardContent, IonItem} from '@ionic/vue';
import { defineComponent,  } from 'vue';
import { add } from 'ionicons/icons';
import axios from "axios";
import {SData} from "@/types/sData";
//import LanguageSwitcher from "@/components/LanguageSwitcher.vue";


export default defineComponent({
  name: 'MeinePflanzen',
  components: {IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonIcon, IonFab, IonFabButton,IonGrid, IonCol, IonRow,
    IonCard, IonCardContent, IonItem},


  data(){
    return{
      username: null as any,
      moisture: null as any as number,
      myplants: null as any,
    }
  },

  setup(){
    return{
      add
    }
  },
  created() {
    axios.get('http://localhost:8080/planti/meinePflanzen')
        .then(response => {
          this.myplants = response.data
        })

    this.username = window.localStorage.getItem("username")
    const TestData: number[][] = [[]];
    axios.get('http://localhost:8080/planti/getData?SID=1')
        .then(response => {
          this.moisture = response.data[response.data.length - 1].moisture

        })
  }
})
</script>
