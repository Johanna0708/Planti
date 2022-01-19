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

      <ion-card v-if="plant">

        <ion-item lines="none">
          <ion-label class="ion-text-wrap">
            <ion-text color="primary">


              <ion-label v-if="$t('plants') == 1">
                <h1>{{plant.name}}</h1>
              </ion-label>
              <ion-label v-if="$t('plants') == 2">
                <h1>{{plant.enName}}</h1>
              </ion-label>


            </ion-text>
            <p>{{plant.wissName}}</p>
          </ion-label>
        </ion-item>

        <ion-grid>
          <ion-row >
            <ion-col>
              <ion-item v-if="plant">
                <ion-img style="height: 300px" :src='plant.picture'/>
              </ion-item>
            </ion-col>

            <ion-col>
              <ion-item v-if="plant.schwierigkeit==0">
                <ion-label>{{ $t('databaseDetails.difficulty') }}:
                  <ion-icon :icon="starOutline" />
                </ion-label>

              </ion-item>
              <ion-item v-if="plant.schwierigkeit==1">
                <ion-label>{{ $t('databaseDetails.difficulty') }}:
                  <ion-icon :icon="starOutline" />
                  <ion-icon :icon="starOutline" />
                </ion-label>
              </ion-item>

              <ion-item v-if="plant.schwierigkeit==2">
                <ion-label>{{ $t('databaseDetails.difficulty') }}:
                  <ion-icon :icon="starOutline" />
                  <ion-icon :icon="starOutline" />
                  <ion-icon :icon="starOutline" />
                </ion-label>
              </ion-item>

              <ion-item v-if="plant.standort==0">
                <ion-label>{{ $t('databaseDetails.location') }}:
                  <ion-icon :icon="cloudOutline" />
                </ion-label>

              </ion-item>
              <ion-item v-if="plant.standort==1">
                <ion-label>{{ $t('databaseDetails.location') }}:
                  <ion-icon :icon="partlySunnyOutline" />
                </ion-label>
              </ion-item>

              <ion-item v-if="plant.standort==2">
                <ion-label>{{ $t('databaseDetails.location') }}:
                  <ion-icon :icon="sunnyOutline" />
                </ion-label>
              </ion-item>

              <ion-item v-if="plant.merkmale=='giftig'">
                <ion-label>{{ $t('databaseDetails.poisonous') }}:
                  <ion-icon :icon="skullOutline" />
                </ion-label>
              </ion-item>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-card>

      <ion-title color="primary" class="ion-padding-top"><h2>{{ $t('page1.diagram') }}</h2></ion-title>
      <ion-card v-if="chartOptions1">
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

      <ion-router-link href="/:lang/tabs/meinePflanzen">
        <ion-button>{{ $t('databaseDetails.button') }}</ion-button>
      </ion-router-link>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonContent, IonIcon, IonItem, IonCard, IonButton, IonLabel, IonText, IonGrid,
  IonCol, IonRow, IonImg} from '@ionic/vue';
import { skullOutline, starOutline, sunnyOutline, partlySunnyOutline, cloudOutline } from 'ionicons/icons';
import {defineComponent} from 'vue';
import axios from "axios";
import {Pflanze} from "@/types/pflanze";
import VueHighcharts from 'vue3-highcharts';
import HighCharts from 'highcharts';
import StockCharts from 'highcharts/modules/stock';

StockCharts(HighCharts);

export default defineComponent ({
  name: 'PflanzenDatenbankDetails',
  components: { IonHeader, IonToolbar, IonContent, IonPage, IonIcon, IonItem, IonCard, IonButton, IonLabel, IonText, IonGrid,
    IonCol, IonRow, IonImg, VueHighcharts},

  data: function () {
    return {
      plant: null as unknown as Pflanze,
      chartOptions1:null as any,
    }
  },


  created() {
    const urlID = this.$route.params.pid
    axios.get('http://localhost:8080/planti/show?id='+urlID)
        .then(response => {
          this.plant = response.data
          console.log(this.plant)
        })

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
          this.chartOptions1 = {
            rangeSelector: {
              selected: 1,
            },
            series: [
              {
                name: this.plant.name,
                data: TestData,
                color: '#009921',
              },
            ],
          };
        })

  },
  setup() {
    return {
      skullOutline,
      starOutline,
      sunnyOutline,
      partlySunnyOutline,
      cloudOutline,
    }
  }
})


</script>
