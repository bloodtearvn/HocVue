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

    <button @click="handleLogin" class="btn btn-success">Login</button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import http_lam from "@repositories/http-common.ts"
import LoginParams from "@models/Request/Login.ts"
import ResponseLogin from "@models/Response/ResponseLogin.ts"
export default defineComponent({
  name: "login-action",
  data() {
    return {
      LoginParams: {
        email: "",
        password: "",
      } as LoginParams,
      submitted: false,
      ResponseLogin:{
        access_token:""
      }
    };
  },
  methods: {
    handleLogin() {
      let data = {
        email: this.LoginParams.email,
        password: this.LoginParams.password,
      };
      http_lam.callAPIMethodPost("auth/login", data).then((response: any) => {        
        if (response.data!=null){
          console.log(response.data.access_token);
          this.ResponseLogin.access_token=response.data.access_token          
        }
      });
    },
  },
});
</script>