<template>
  <div class="hello">
    <div>
        <input type="text" v-model="user.email"><br>
        <input type="text" v-model="user.displayName"><br>
        <input type="password" v-model="password"><br>
        <button v-on:click="updateProfile">Actualizar Profile</button>
    </div>    
    <button v-on:click="logout">Logout</button>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "hello",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      user: firebase.auth().currentUser,
      password: '',
      users: {}
    };
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("login");
        });
    },
    updateProfile() {
      this.user
        .updateProfile(this.user)
        .then(function() {
          // Update successful.
        })
        .catch(function(error) {
          // An error happened.
        });
        //this.user.reauthenticateWithCredential()
        //this.user.updatePassword(this.password).then();
    }
  },
  created() {
    //console.log(this.user);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
