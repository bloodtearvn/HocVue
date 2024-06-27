<template>
    <div class="industry_list">
      <h1>Industry List</h1>
      <div>
        <table>
            <thead>
                <th>ID</th>
                <th>Industry Name (EN)</th>
                <th>Industry Name (JA)</th>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>ABC</td>
                    <td>XYZ</td>
                </tr>
            </tbody>
            <tfoot>
                <th>ID</th>
                <th>Industry Name (EN)</th>
                <th>Industry Name (JA)</th>
            </tfoot>
        </table>
      </div>
    </div>
    <button @click="handleFetchAPI" class="btn btn-success" :disabled="loading">
      <span v-show="loading" class="spinner-border spinner-border-sm"></span>
      <span>Login</span>
    </button>
</template>
<script lang="ts">
import { defineComponent } from "vue";
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
      this.loading = true;      
      callAPI.callAPIMethodGet("industry", []).then((response: any) => {        
        if (response.data!=null){          
            this.loading = false;
            console.log(response.data)
        }
        else{
          this.loading = false;
        }
      });
    },
  },
});
</script>