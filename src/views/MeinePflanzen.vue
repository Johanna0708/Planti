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

            Efeutute muss gegossen werden!

          </ion-card-content>
        </ion-card>
        <ion-card  color="success" v-else>
          <ion-card-content>

            Efeutute hat genügend Wasser!

          </ion-card-content>
        </ion-card>
      </ion-card>


      <ion-title color="primary" class="ion-padding-top"><h2>{{ $t('page1.title2') }}</h2></ion-title>

      <ion-grid>
        <ion-row>
          <ion-col>
            <ion-card>
              <ion-card-content>
                <img height="150" src="../img/Gruenlilie.jpg"/>
              </ion-card-content>
              <ion-card-content>
                <ion-label>
                  <h2>Grünlilie</h2>
                </ion-label>
              </ion-card-content>

            </ion-card>
          </ion-col>
          <ion-col>
            <ion-card>
              <ion-card-content>
                <img height="150" src="../img/Bergpalme.jpg"/>
              </ion-card-content>
              <ion-card-content>
                <ion-label>
                  <h2>Bergpalme</h2>
                </ion-label>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <ion-card>
              <ion-card-content>
                <img height="150" src="../img/GefEfeutute.jpg"/>
              </ion-card-content>
              <ion-card-content>
                <ion-label>
                  <h2>Gefleckte Efeutute</h2>
                </ion-label>
              </ion-card-content>
            </ion-card>
          </ion-col>
          <ion-col>

          </ion-col>
        </ion-row>
      </ion-grid>

      <ion-title color="primary" class="ion-padding-top"><h2>{{ $t('page1.diagram') }}</h2></ion-title>
      <ion-card v-if="moisture">
        <ion-card-content>
          <vue-highcharts
              type="stockChart"
              :options=chartOptions1
              :redrawOnUpdate="true"
              :oneToOneUpdate="false"
              :animateOnUpdate="true"
              @updated="onUpdated"/>
        </ion-card-content>
      </ion-card>
      <!--{{SenData}}-->
      {{chartData}}
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonFab, IonFabButton, IonGrid, IonCol, IonRow,
  IonCard, IonCardContent, IonItem} from '@ionic/vue';
import { defineComponent,  } from 'vue';
import { add } from 'ionicons/icons';
import VueHighcharts from 'vue3-highcharts';
import HighCharts from 'highcharts';
import StockCharts from 'highcharts/modules/stock';
import axios from "axios";
import {SData} from "@/types/sData";
//import LanguageSwitcher from "@/components/LanguageSwitcher.vue";

StockCharts(HighCharts);


export default defineComponent({
  name: 'MeinePflanzen',
  components: {IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonIcon, IonFab, IonFabButton, IonGrid, IonCol, IonRow,
    IonCard, IonCardContent, IonItem, VueHighcharts},


  data(){
    return{
      username: null as any,
      moisture: null as any as number,
      chartOptions1:null as any
    }
  },
  setup(){
    return{
      add
    }
  },
  created() {
    this.username = window.localStorage.getItem("username")
    const TestData: number[][] = [[]];
    axios.get('http://localhost:8080/planti/getData?SID=1')
        .then(response => {
          TestData[0][0] = response.data[0].time
          TestData[0][1] = response.data[0].moisture
          for (let i = 1; i < response.data.length; i++) {
            const t = response.data[i].time
            const m = response.data[i].moisture
            TestData.push([t, m])
          }
          this.moisture = response.data[response.data.length - 1].moisture
          this.chartOptions1 = {
            rangeSelector: {
              selected: 1,
            },
            title: {
              text: 'Bergpalme',
            },
            series: [
              {
                name: 'Linie 1',
                data: TestData,
                color: '#009921',
              },
            ],
          };
        })
  }
})
</script>
