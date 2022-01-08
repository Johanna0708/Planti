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



      <ion-title color="primary"><h2>{{ $t('page1.title1') }} </h2></ion-title>

      <ion-fab vertical="bottom" horizontal="end" slot="fixed" class="ion-padding-bottom">

        <ion-router-link href="/:link/tabs/addPlant">
          <ion-fab-button >
            <ion-icon :icon="add"></ion-icon>
          </ion-fab-button>
        </ion-router-link>
      </ion-fab>


      <ion-card>
        <ion-card-content>

          Grünlilie muss gegossen werden!
          <ion-checkbox
              slot="end">
          </ion-checkbox>
        </ion-card-content>
      </ion-card>

      <ion-card>

        <ion-card-content>
          Bergpalme muss gegossen werden!
          <ion-checkbox
              slot="end">
          </ion-checkbox>
        </ion-card-content>

      </ion-card>

      <ion-card>
        <ion-card-content>
          Gefleckte Efeutute muss gegossen werden!
          <ion-checkbox
              slot="end">
          </ion-checkbox>
        </ion-card-content>
      </ion-card>

       <ion-title color="primary"><h2>{{ $t('page1.title2') }}</h2></ion-title>

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

      <vue-highcharts
          type="stockChart"
          :options="chartOptions"
          :redrawOnUpdate="true"
          :oneToOneUpdate="false"
          :animateOnUpdate="true"
          @updated="onUpdated"/>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonFab, IonFabButton } from '@ionic/vue';
import { defineComponent,  } from 'vue';
import { add } from 'ionicons/icons';
import VueHighcharts from 'vue3-highcharts';
import HighCharts from 'highcharts';
import StockCharts from 'highcharts/modules/stock';
//import LanguageSwitcher from "@/components/LanguageSwitcher.vue";

StockCharts(HighCharts);


export default defineComponent({
  name: 'MeinePflanzen',
  components: {IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonIcon, IonFab, IonFabButton, VueHighcharts},

  setup(){
    const chartOptions = {
      rangeSelector: {
        selected: 1,
      },

      title: {
        text: 'Bewässerungsverlauf',
      },
      series: [
        {
          name: 'Linie 1',
          data: [
            [1635161400000, 55.2],
            [1635247800000, 55.55],
            [1635420600000, 55.1],
            [1635593400000, 56.24],
            [1635769800000, 56.44],
            [1635856200000, 56.81],
            [1635942600000, 57.32],
            [1636029000000, 58.02],
            [1636201800000, 57]],
        },
      ],
    };
    return{
      add, chartOptions
    }
  }
})
</script>
