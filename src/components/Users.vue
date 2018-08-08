<template>
    <div>
        <h2>Usuarios</h2>
        <div v-for="u of users" v-bind:key="u.id" >
            {{u.first_name}}
        </div>
    </div>
</template>

<script>
import { db } from "@/config";

export default {
  name: "upload",
  data() {
    return {
      users2: {}
    };
  },
  firebase: {
    users: {
      source: db.ref("users"),
      cancelCallback(err) {
        console.error(err);
      }
    }
  }
};
</script>

<style>
</style>
