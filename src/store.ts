import { defineStore } from 'pinia'

interface State {
    search: string
}
export const useStore = defineStore({
    id: 'store',
    state: (): State => ({
        search: ''
    }),
})