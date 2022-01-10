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
      <ion-title color="primary"><h2>{{ $t('reg.title') }}</h2></ion-title>

      <ion-item>
        <ion-label>{{ $t('reg.name') }} </ion-label>
        <ion-input placeholder="Enter Input"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label>{{ $t('reg.password') }} </ion-label>
        <ion-input placeholder="Enter Input"></ion-input>
      </ion-item>

      <ion-button>{{ $t('reg.button1') }} </ion-button>
      <ion-router-link href="/:link/tabs/tab3">
        <ion-button>{{ $t('reg.button2') }} </ion-button>
      </ion-router-link>

    </ion-content>
  </ion-page>
</template>


<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';



export default defineComponent ({
  name: 'Registration',
  components: {IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonItem, IonLabel, IonInput, IonButton},


})

</script>

