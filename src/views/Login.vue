<template>
  <div class="submit-form">
    <div class="form-group">
      <label for="email">Email</label>
      <input type="text" class="form-control" id="email" required v-model="LoginParams.email" name="email" />
    </div>

    <div class="form-group">
      <label for="password">Password</label>
      <input type="password" class="form-control" id="password" required v-model="LoginParams.password"
        name="password" />
    </div>    
    <button @click="handleLogin" class="btn btn-success" :disabled="loading">
      <span v-show="loading" class="spinner-border spinner-border-sm"></span>
      <span>Login</span>
    </button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import callAPI from "@repositories/http-common.ts"
import LoginParams from "@models/Request/Login.ts"
import ResponseLogin from "@models/Response/ResponseLogin.ts"
import useAuthStore from "@store/AuthStore.js"
export default defineComponent({
  name: "login-action",
  data() {
    return {
      LoginParams: {
        email: "",
        password: "",
      } as LoginParams,
      loading: false,
      ResponseLogin:{
        access_token:""
      }
    };
  },
  methods: {
    handleLogin() {
      this.loading = true;
      let data = {
        email: this.LoginParams.email,
        password: this.LoginParams.password,
      };
      callAPI.callAPIMethodPost("auth/login", data).then((response: any) => {        
        if (response.data!=null){          
          let authStore = useAuthStore();
          let data=JSON.stringify(response.data);
          authStore.setAccessToken(data.access_token);
          callAPI.updateBearToken(data.access_token)
          localStorage.setItem('access_token', data);
          this.$router.push({ path: '/' })
        }
        else{
          this.loading = false;
        }
      });
    },
  },
});
</script>