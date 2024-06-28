<template>
  <div class="industry_list">
    <h1>Industry List</h1>
    <div :disabled="loading">
      <span v-show="loading" class="spinner-border spinner-border-sm"></span>      
      <DataTable v-if="!loading" :columns="columns" :data=data :options="{ select: true }" class="table table-hover table-striped"
        width="100%" ref="table" :key="columns.length">
        <thead>
          <tr>
            <th>ID</th>
            <th>Industry Name</th>
            <th>Industry Name JA</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th>ID</th>
            <th>Industry Name</th>
            <th>Industry Name JA</th>
          </tr>
        </tfoot>
      </DataTable>
    </div>
  </div>  
</template>
<script setup lang="ts">
import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net-bs5';
DataTable.use(DataTablesCore);
const columns = [
  { data: 'id', },
  { data: 'industry_name_en' },
  { data: 'industry_name_ja' },
];
</script>
<script lang="ts">
import { defineComponent } from "vue";
import useAuthStore from "@store/AuthStore.js"
import callAPI from "@repositories/http-common.ts"
export default defineComponent({
  name: "Industry",
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    handleFetchAPI() {
      let _access_token = localStorage.getItem("access_token");
      let authStore = useAuthStore();
      if (_access_token != null && _access_token != "") {
        authStore.setAccessToken(_access_token)
        callAPI.updateBearToken(_access_token)
      }
      this.loading = true;
      callAPI.callAPIMethodGet("industry", null).then((response: any) => {
        if (response.data != null) {
          this.loading = false;
          this.data = response.data;          
        }
        else {
          this.loading = false;
        }
      });
    },
  },
  beforeMount() {    
    this.handleFetchAPI()
},  
});
</script>
<style>
@import 'bootstrap';
@import 'datatables.net-bs5';
</style>