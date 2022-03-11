<template>
  <h1>Shoppinglistan!</h1>
  <div v-if="!isLoggedIn">
    <h2>Logga in för att se din varukorg</h2>
    <label for="username">Användarnamn</label><br>
    <input id="username" type="text" v-model="username"><br>
    <label for="password">Lösenord</label><br>
    <input id="password" type="password" v-model="password"><br><br>
    <span id="errorMessage" class="red">{{errorMessage}}</span><br><br>
    <button id="loginButton" @click="login()">Logga in</button>
  </div>
  <ShoppingList v-if="isLoggedIn" />
  <button id="logout" v-if="isLoggedIn" @click="isLoggedIn=false">Logga ut</button>
</template>

<script>
import ShoppingList from './components/ShoppingList.vue'

export default {
  name: 'App',
  components: {
    ShoppingList
  },
  data() {
    return {
      username: '',
      password: '',
      errorMessage: '',
      isLoggedIn: false
    }
  },
  methods: {
    login() {
      if(this.username === 'admin' && this.password === 'pwd123') {
        this.isLoggedIn = true;
      } else {
        this.errorMessage = 'Fel anvvändarnamn och/eller lösenord';
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.red {
  color: #f00;
}
</style>
