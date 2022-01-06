<template>
  <ion-page>

    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="meinePflanzen" href="/:lang/tabs/meinePflanzen">
          <ion-icon :icon="leaf" />
          <ion-label>{{$t('tabs.one')}}</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="datenbank" href="/:lang/tabs/datenbank">
         <!-- <ion-tab-button tab="datenbank" href="/${$i18n.locale}/tabs/datenbank"> -->
          <ion-icon :icon="search" />
          <ion-label>{{$t('tabs.two')}}</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/:lang/tabs/tab3">
          <ion-icon :icon="settings" />
          <ion-label>{{$t('tabs.three')}}</ion-label>
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
