<template>
  <div class="flex flex-col justify-between min-h-full">
    <div class="px-3 xl:p-0">
      <div class="-mt-7 xl:mt-0 bg-white shadow rounded-lg xl:shadow-none p-4">
        <div class="space-y-2">
          <h1
            class="font-bold xl:text-4xl tracking-wide text-primary-marine-blue"
          >
            Pick add-ons
          </h1>
          <h2
            class="text-sm tracking-wide text-neutral-cool-gray max-w-[250px] xl:max-w-lg"
          >
            Add-ons help enhance your gaming experience.
          </h2>
        </div>
        <form action="" class="xl:space-y-4 space-y-3 xl:pt-8 py-2">
          <div v-for="add_on in add_ons" :key="add_on.name">
            <div
              class="xl:px-6 px-3 xl:py-4 py-2 border rounded-lg hover:border-primary-purplish-blue cursor-pointer"
              :class="
                add_on.selected
                  ? 'bg-slate-50 border-primary-purplish-blue'
                  : ''
              "
              @click="updateAddOns(add_on)"
            >
              <div class="flex items-center">
                <input
                  type="checkbox"
                  :checked="add_on.selected"
                  class="border block rounded p-2 pointer-events-none checked:bg-primary-purplish-blue"
                />
                <div class="flex items-center justify-between w-full">
                  <div class="xl:ml-6 ml-3 xl:leading-6 leading-4">
                    <p
                      class="font-bold text-primary-marine-blue first-letter:uppercase text-sm xl:text-base"
                    >
                      {{ add_on.name }}
                    </p>
                    <small
                      class="first-letter:uppercase tracking-wide text-neutral-cool-gray text-xs xl:text-sm"
                      >{{ add_on.description }}</small
                    >
                  </div>
                  <div class="pl-7 xl:pl-0">
                    <p
                      class="xl:text-sm text-xs xl:font-semibold text-primary-purplish-blue"
                      v-show="plansStore.getSubscription == 'yearly'"
                    >
                      +${{ add_on.yearly_price }}/yr
                    </p>
                    <p
                      class="xl:text-sm text-xs xl:font-semibold text-primary-purplish-blue"
                      v-show="plansStore.getSubscription == 'monthly'"
                    >
                      +${{ add_on.monthly_price }}/mo
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div>
      <div
        class="flex items-center justify-between mb-0 mt-7 xl:mt-7 p-4 xl:p-0 mx-0 xl:mx-4 bg-white"
      >
        <button
          class="text-neutral-cool-gray font-semibold"
          @click="emit('previous-step')"
        >
          Go Back
        </button>
        <button
          class="xl:px-6 px-3 xl:py-3 py-2 text-sm xl:text-base font-semibold bg-primary-marine-blue hover:bg-primary-purplish-blue rounded-lg text-white"
          @click="emit('next-step')"
        >
          Next Step
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAddOnsStore } from "~/stores/add-ons";
const emit = defineEmits(["next-step", "previous-step", "confirmation"]);

const addOnsStore = useAddOnsStore();

const { selectedAddOns } = storeToRefs(addOnsStore);

const plansStore = usePlansStore();
const { selectedPlan } = storeToRefs(plansStore);

var add_ons = reactive([
  {
    selected: false,
    name: "online service",
    description: "access to multiplayer games",
    monthly_price: 1,
    yearly_price: 10,
  },
  {
    selected: false,
    name: "large storage",
    description: "extra 1TB of cloud save",
    monthly_price: 2,
    yearly_price: 20,
  },
  {
    selected: false,
    name: "customizable profile",
    description: "custom theme on your profile",
    monthly_price: 2,
    yearly_price: 20,
  },
]);

function updateAddOns(add_on: object) {
  add_on.selected = !add_on.selected;

  if (add_on.selected == true) {
    addOnsStore.pushAddOns(add_on);
  } else {
    addOnsStore.removeAddOns(add_on);
  }
}
</script>
