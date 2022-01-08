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
              <h1>{{plant.name}}</h1>
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
                <ion-label>Schwierigkeit:
                  <ion-icon :icon="starOutline" />
                </ion-label>

              </ion-item>
              <ion-item v-if="plant.schwierigkeit==1">
                <ion-label>Schwierigkeit:
                  <ion-icon :icon="starOutline" />
                  <ion-icon :icon="starOutline" />
                </ion-label>
              </ion-item>

              <ion-item v-if="plant.schwierigkeit==2">
                <ion-label>Schwierigkeit:
                  <ion-icon :icon="starOutline" />
                  <ion-icon :icon="starOutline" />
                  <ion-icon :icon="starOutline" />
                </ion-label>
              </ion-item>

              <ion-item v-if="plant.standort==0">
                <ion-label>Standort:
                  <ion-icon :icon="cloudOutline" />
                </ion-label>

              </ion-item>
              <ion-item v-if="plant.standort==1">
                <ion-label>Standort:
                  <ion-icon :icon="partlySunnyOutline" />
                </ion-label>
              </ion-item>

              <ion-item v-if="plant.standort==2">
                <ion-label>Standort:
                  <ion-icon :icon="sunnyOutline" />
                </ion-label>
              </ion-item>

              <ion-item v-if="plant.merkmale=='giftig'">
                <ion-label>Giftig
                <ion-icon :icon="skullOutline" />
                </ion-label>
              </ion-item>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-card>

      <ion-router-link href="/:lang/tabs/datenbank">
        <ion-button>Zurück</ion-button>
      </ion-router-link>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonContent, IonIcon} from '@ionic/vue';
import { skullOutline, starOutline, sunnyOutline, partlySunnyOutline, cloudOutline } from 'ionicons/icons';
import {defineComponent} from 'vue';
import axios from "axios";
import {Pflanze} from "@/types/pflanze";


export default defineComponent ({
  name: 'PflanzenDatenbankDetails',
  components: { IonHeader, IonToolbar, IonContent, IonPage, IonIcon},

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
      skullOutline,
      starOutline,
      sunnyOutline,
      partlySunnyOutline,
      cloudOutline,
    }
  }
})


</script>
