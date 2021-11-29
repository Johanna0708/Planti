<template>
  <ion-page>

    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="meinePflanzen" href="/tabs/meinePflanzen">
          <ion-icon :icon="leaf" />
          <ion-label>Meine Pflanze</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="datenbank" href="/tabs/datenbank">
          <ion-icon :icon="search" />
          <ion-label>Pflanze suchen</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/tab3">
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
