<template>
  <div class="wrapper">
    <header class="header text-danger">DYM Call Cener</header>
    <aside class="sidebar">
      <div class="Main">
        <router-link to="/">Home</router-link><br>
        <div v-if="!isLogined">
          <router-link to="/login">Login</router-link><br>
        </div>
        <div v-else="!isLogined">
          <a class="nav-link" @click.prevent="logOut">LogOut</a>
        </div>
      </div>
    </aside>
    <article class="content">
      <router-view></router-view>
    </article>
    <footer class="footer">My footer</footer>
  </div>
</template>
<script setup lang="ts">
import {computed } from 'vue'
import useAuthStore from "@store/Response/AuthStore.js"
import ResponseLogin from "@models/Response/ResponseLogin.ts"
const isLogined = computed(() => {
  return this.ResponseLogin.access_token != "";
})
</script>