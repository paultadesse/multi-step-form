import { defineStore } from "pinia";

export const useAddOnsStore = defineStore({
    id: "add-ons-store",
    state: () => {
        return {
            selectedAddOns: <any>[]
        }
    },
    actions: {
        pushAddOns(add_on: object) {
            this.selectedAddOns.push(add_on);
        },

        removeAddOns(add_on: object) {
            this.selectedAddOns = this.selectedAddOns.filter(el => el.name !== add_on.name)
        }

    },

    getters: {

    }
})