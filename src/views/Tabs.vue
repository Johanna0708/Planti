<template>
  <ion-page>

    <!--<ion-header color="primary">
     <ion-item>
        <div style="position: fixed; top:20px; right: 50px">
        <img width="130" src="../img/Logo.png"/>
      </div>
      </ion-item>
    </ion-header>-->

    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon :icon="water" />
          <ion-label>Pflanzenpflege</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon :icon="leaf" />
          <ion-label>Meine Pflanzen</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon :icon="search" />
          <ion-label>Pflanzen suchen</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab4" href="/tabs/tab4">
          <ion-icon :icon="settings" />
          <ion-label>Einstellungen</ion-label>
        </ion-tab-button>
        

      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet,  } from '@ionic/vue';
import { leaf, folderOutline, image, settings, search,water } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet,   },
  setup() {
    return {
      leaf,
      folderOutline,
      image,
      settings,
      search,
      water,
       }
  }
});


</script>
