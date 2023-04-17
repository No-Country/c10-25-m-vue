// store/auth/login.ts
import { defineStore } from 'pinia'

interface LoginState {
  serverError: string | null
  serverSuccess: string | null
}

export const useLoginStore = defineStore('login', {
  state: (): LoginState => ({
    serverError: null,
    serverSuccess: null,
  }),
  actions: {
    setServerError(error: string) {
      this.serverError = error
    },
    setServerSuccess(success: string) {
      this.serverSuccess = success
    },
  },
})