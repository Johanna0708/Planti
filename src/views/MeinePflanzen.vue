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

        <ion-router-link href="/tabs/addPlant">
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

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonFab, IonFabButton } from '@ionic/vue';
import { defineComponent,  } from 'vue';
import { add } from 'ionicons/icons';
// import LanguageSwitcher from "@/components/LanguageSwitcher.vue";

export default defineComponent({
  name: 'MeinePflanzen',
  components: {IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonIcon, IonFab, IonFabButton},

  setup(){
    return{
      add
    }
  }
})
</script>
