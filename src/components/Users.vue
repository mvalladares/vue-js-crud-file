<template>
    <div>
        <h2>Usuarios</h2>
        <form @submit.prevent="addUser">
            <label for="name">
                <input type="text" id="name" v-model="fruta.name" placeholder="Name">
            </label>
            <button type="submit" class="btn">Save</button> <button @click="userForm = false" type="button"  class="btn">Cancel</button>
        </form>
        <div v-for="u in frutas" v-bind:key="u.id" >
            {{u.name}}
        </div>
    </div>
</template>

<script>
import firebase from "firebase";
import { db } from "@/config";
let nombreQlo = 'frutas';

export default {
  name: "Users",
  data() {
    return {
      user: { name: "", email: "", edit: null },
      currentUser: firebase.auth().currentUser,
      fruta: { name: "" }
    };
  },
  firebase:{
    frutas: db.ref(nombreQlo)
  },
  methods: {
    addUser() {
      db.ref(nombreQlo).child(this.currentUser.uid).push(this.fruta);
    }
  },
  created(){
    this.$bindAsArray(nombreQlo, db.ref(`/${nombreQlo}/${this.currentUser.uid}`));
  }
};
</script>

<style>
</style>
