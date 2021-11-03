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

    <ion-content :fullscreen="true">

      <ion-searchbar placeholder="Pflanzenname"
      :value="searchInput"
      @ionInput="searchInput = $event.target.value; onInput$.next($event.target.value)"
      @ionClear="searchCleared($event)">
      </ion-searchbar>

      <ion-list>
        <ion-item v-for="item in items" :key="item.src">
          <ion-thumbnail slot="start">
            <img src="../img/monstera.png"/>
          </ion-thumbnail>
          <ion-label>{{item.text}}</ion-label>
        </ion-item>
      </ion-list>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonContent,IonList, IonSearchbar, IonThumbnail } from '@ionic/vue';
import { leaf, search } from 'ionicons/icons';
import {defineComponent, ref} from 'vue';


export default defineComponent ({
  name: 'Tab2',
  components: { IonHeader, IonToolbar, IonContent, IonPage, IonList, IonSearchbar, IonThumbnail  },

  setup() {
    const items = [{
      'text': 'Pflanze 1',
      'src': '../img/monstera.png'
    },
      { 'text': 'Pflanze 2',
        'src': '../img/monstera.png'
      },
      {
        'text': 'Pflanze 3',
        'src': '../img/planze2.png'
      },
      {
        'text': 'Pflanze 4',
        'src': '../img/monstera.png'
      }];



    return {
      leaf,
      search,
      items,
    }
  }
})


</script>