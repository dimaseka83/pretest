import { createStore, Store } from "vuex"
import { InjectionKey } from "vue"

export interface State {
    search: string
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
    state: {
        search: ""
    },
})