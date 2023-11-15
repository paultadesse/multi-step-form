import { defineStore } from "pinia";

export const usePlansStore = defineStore({
    id: "plans-store",
    state: () => {
        return {
            selectedPlan: <any>{
                plan: Object,
                subscription: "monthly"
            }
        }
    },
    actions: {
        updatePlan(plan: object, subscription: string) {
            this.selectedPlan.plan = plan
            this.selectedPlan.subscription = subscription
        }
    },

    getters: {
        getSubscription: (state) => {
            return state.selectedPlan.subscription;
        },
        getPrice: (state) => {
            if (state.selectedPlan.subscription == 'monthly') {
                return state.selectedPlan.plan.monthly_price;
            }
            return state.selectedPlan.plan.yearly_price;
        }
    }
})