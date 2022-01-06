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
      <ion-title color="primary"><h2>{{ $t('page3.title1') }}</h2></ion-title>

      <ion-card>
        <ion-card-header>
          <ion-card-title>{{ $t('page3.subtitle1') }}</ion-card-title>
          <ion-card-subtitle>Planti GmbH</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          {{ $t('page3.street') }} <br/>
          {{ $t('page3.place') }}
        </ion-card-content>

        <ion-card-header>
          <ion-card-title>{{ $t('page3.subtitle2') }}</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <g-map
              :disableUI="false"
              :zoom="12"
              mapType="roadmap"
              :center="{ lat: 52.41163319339472, lng: 12.539792573722497 }"
              :markers="markers">
          </g-map>
        </ion-card-content>
        <ion-card-header>
          <ion-card-title>{{ $t('page3.subtitle3') }}</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          Tel.: +49 3381 355-0 <br/>
          Fax: +49 3381 355-199 <br/>
          E-Mail: info(at)th-brandenburg.de
        </ion-card-content>


      </ion-card>



      <ion-button expand="block" fill="outline">{{ $t('page3.button') }}</ion-button>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';
import GMap from './GMap.vue';


export default defineComponent ({
  name: 'Tab3',
  components: {IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButton, GMap},

  setup() {

    const markers = [{
      lat: 52.41163319339472,
      lng: 12.539792573722497,
      title: "Unser Büro"
    },
    ]

    return { markers};
  },
})

</script>

<style scoped>
GMapMap{
  height: 100px;
}


</style>
