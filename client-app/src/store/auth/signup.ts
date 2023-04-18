import { defineStore } from 'pinia'

interface SignupState {
  serverError: string | null
  serverSuccess: string | null
}

export const useSignupStore = defineStore('signup', {
  state: (): SignupState => ({
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