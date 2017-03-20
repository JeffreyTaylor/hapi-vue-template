<template>
  <div>
    <h1>{{ message }}</h1>
    <button class="button" @click="getUsers()">Make example ajax call</button>
    <div v-if="!error">
      <p>User list: </p>
      <ul>
        <li v-for="user in users">{{user.name}}</li>
      </ul>
    </div>
    <div v-if="error">
      <p>{{error}}</p>
    </div>
  </div>
</template>

<script>
  const http = require('axios');

  export default {
    data: function () {
      return {
        message: 'Welcome!',
        users: [],
        error: ''
      }
    },
    methods: {
      getUsers: function () {
        http.get('/users').then((response) => {
          this.users = response.data.users;
        })
        .catch(function() {
          this.error = 'unable to get users'
        })
      }
    }
  }
</script>

<style scoped>
  button {
    color: green;
  }
</style>
