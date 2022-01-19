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
      <ion-title color="primary"><h2>{{ $t('login.title') }}</h2></ion-title>

      <ion-item>
        <ion-label>{{ $t('login.name') }}: </ion-label>
        <ion-input  v-model="username" placeholder="Enter Input"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label>{{ $t('login.password') }}: </ion-label>
        <ion-input v-model="pw" type="password" placeholder="Enter Input"></ion-input>
      </ion-item>



      <ion-button v-on:click="anmelden">{{ $t('login.button1') }}</ion-button>

      <ion-router-link href="/:link/tabs/tab3">
        <ion-button>{{ $t('login.button2') }}</ion-button>
      </ion-router-link>


      <ion-router-link href="/:link/tabs/reg">
        <ion-item class="ion-padding-top">
          {{ $t('login.newAcc') }}
          <button> {{ $t('login.button3') }}</button>
        </ion-item>
      </ion-router-link>
    </ion-content>
  </ion-page>
</template>


<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonItem, IonLabel, IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';
import axios from "axios";
import router from "@/router";



export default defineComponent ({
  name: 'Login',
  components: {IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonInput, IonItem, IonLabel, IonButton},

  data(){
    return{
      username:"",
      pw:""
    }
  },


  methods: {
    anmelden() {
      //console.log(this.username, this.pw)
      axios.get("http://localhost:8080/planti/getPW", {params:{name: this.username}})
          .then(response => {
            if (response.data==this.pw){
              window.localStorage.setItem("username", this.username)
              //location.reload()
              router.push("/:link/tabs/meinePflanzen")
            }
            else {
              alert("Passwort oder Nutzername ist falsch.")
            }
          })
      console.log(window.localStorage.getItem("username"))
    }
  },
  created(){

    console.log(window.localStorage.getItem("username"))
  }
})

</script>

