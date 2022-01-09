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
      <ion-title color="primary"><h2>Anmeldung</h2></ion-title>

      <ion-item>
        <ion-label>Benutzername: </ion-label>
        <ion-input  v-model="username"  placeholder="Enter Input"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label>Passwort: </ion-label>
        <ion-input v-model="pw" placeholder="Enter Input"></ion-input>
      </ion-item>
      <ion-button v-on:click="anmelden">Anmelden</ion-button>
      <ion-router-link href="/:link/tabs/tab3">
        <ion-button>Abbrechen</ion-button>
      </ion-router-link>


      <ion-router-link href="/:link/tabs/reg">
      <ion-item class="ion-padding-top">
        Neu bei Planti?
        <button> Neuen Account anlegen</button>
      </ion-item>
      </ion-router-link>
    </ion-content>
  </ion-page>
</template>


<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonInput } from '@ionic/vue';
import { defineComponent } from 'vue';
import axios from "axios";



export default defineComponent ({
  name: 'Login',
  components: {IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonInput},

  data: function(){
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

