<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="ion-padding-top ion-padding-end">

        <ion-card slot="start" v-if="$t('plants') == 1">
          <ion-segment value="Deutsch">
            <ion-segment-button value="Deutsch">
              <img height="20" src="../img/flag_de.png"/>
              <font size="0">Deutsch</font>
            </ion-segment-button>
            <ion-segment-button value="Englisch">
              <img height="20" src="../img/flag_en.png"/>
              <font size="0">English</font>
            </ion-segment-button>
          </ion-segment>
        </ion-card>

        <ion-card slot="start" v-if="$t('plants') == 2">
          <ion-segment value="Englisch">
            <ion-segment-button value="Deutsch">
              <img height="20" src="../img/flag_de.png"/>
              <font size="0">Deutsch</font>
            </ion-segment-button>
            <ion-segment-button value="Englisch">
              <img height="20" src="../img/flag_en.png"/>
              <font size="0">English</font>
            </ion-segment-button>
          </ion-segment>
        </ion-card>


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

      <ion-router-link v-if="username==null" href="/:link/tabs/login">
        <ion-button expand="block" fill="outline">{{ $t('page3.button') }}</ion-button>
      </ion-router-link>
      <ion-button v-else v-on:click="abmelden" expand="block" fill="outline">{{ $t('page3.button2') }}</ion-button>


    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonButton, IonCard, IonCardHeader, IonCardContent,
  IonCardSubtitle, IonCardTitle } from '@ionic/vue';
import { defineComponent } from 'vue';
import GMap from './GMap.vue';




export default defineComponent ({
  name: 'Tab3',
  components: {IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButton, IonCard, IonCardHeader, IonCardContent,
    IonCardSubtitle, IonCardTitle, IonItem, GMap},

  data(){
    return{
      username: null as any
    }
  },
  setup() {
    const markers = [{
      lat: 52.41163319339472,
      lng: 12.539792573722497,
      title: "Unser Büro"
    }]
    return { markers};
  },
  methods: {
    abmelden() {
      this.username = null as any;
      window.localStorage.removeItem("username")
      window.location.reload()
    }
  },
  created(){
    this.username=window.localStorage.getItem("username")
  }
})

</script>

<style scoped>
GMapMap{
  height: 100px;
}


</style>
