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
        <ion-input  v-model="username" placeholder="Enter Input"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label>{{ $t('reg.password') }} </ion-label>
        <ion-input v-model="pw" type="password" placeholder="Enter Input"></ion-input>
      </ion-item>

      <ion-button v-on:click="registrieren">{{ $t('reg.button1') }} </ion-button>
      <ion-router-link href="/:link/tabs/tab3">
        <ion-button>{{ $t('reg.button2') }} </ion-button>
      </ion-router-link>

    </ion-content>
  </ion-page>
</template>


<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';
import axios from "axios";
import router from "@/router";



export default defineComponent ({
  name: 'Registration',
  components: {IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonItem, IonLabel, IonInput, IonButton},
  data(){
    return{
      username:"",
      pw:""
    }
  },
  methods: {
      async registrieren() {
          await axios.get("http://localhost:8080/planti/adduser", {params: {username: this.username, pw: this.pw}})
                    .then(() => {
                      window.localStorage.setItem("username", this.username)
                      //location.reload()
                      router.push("/:link/tabs/meinePflanzen")
                    })
                    .catch(function (error) {
                      if (error.response) {
                        alert("Dieser Benutzername ist bereits vergeben!")
                      } else {
                        alert("Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.")
                      }
                    })
    }
  }
})

</script>

