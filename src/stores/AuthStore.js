import { defineStore } from 'pinia'
import ResponseLogin from "@models/Response/ResponseLogin.ts"

export const useAuthStore = defineStore('Auth', {
    state: () => {
        return { ResponseLogin.access_token:""}
    },        
    actions: {
        setAccessToken(data) {
            this.ResponseLogin.access_token=data
        },
        getAccessToken() {
            return this.ResponseLogin.access_token
        },
    },
})

