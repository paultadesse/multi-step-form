<template>
  <div class="flex flex-col justify-between min-h-full">
    <div class="px-3 xl:p-0">
      <div class="-mt-7 xl:mt-0 bg-white shadow rounded-lg xl:shadow-none p-4">
        <div class="space-y-2">
          <h1 class="font-bold xl:text-4xl tracking-wide">Finishing up</h1>
          <h2
            class="text-sm tracking-wide text-neutral-cool-gray max-w-[250px] xl:max-w-lg"
          >
            Double-check everything looks OK before confirming.
          </h2>
        </div>
        <form action="" class="xl:space-y-4 space-y-3 xl:pt-8 py-2">
          <div class="bg-neutral-alabaster xl:p-6 p-3 space-y-4 rounded-lg">
            <div
              class="flex justify-between items-center space-x-20 xl:space-x-0"
            >
              <div>
                <p class="font-bold text-primary-marine-blue">
                  <span class="first-letter:uppercase">{{
                    selectedPlan.plan.name
                  }}</span>
                  ({{ plansStore.getSubscription }})
                </p>
                <!-- we can configure our emit to accept [step] parameter but for now this is enough -->
                <small
                  class="cursor-pointer hover:underline hover:text-primary-purplish-blue"
                  @click="emit('previous-step'), emit('previous-step')"
                  >Change</small
                >
              </div>
              <div class="font-bold text-primary-marine-blue">
                <span>${{ plansStore.getPrice }}/</span>
                <span>{{
                  plansStore.getSubscription == "monthly" ? "mo" : "yr"
                }}</span>
              </div>
            </div>
            <div>
              <hr />
            </div>
            <div class="xl:space-y-4 space-y-2">
              <div
                class="flex justify-between"
                v-for="add_on in selectedAddOns"
                :key="add_on.name"
              >
                <p
                  class="text-neutral-cool-gray text-sm first-letter:uppercase"
                >
                  {{ add_on.name }}
                </p>
                <div>
                  <p
                    class="text-primary-marine-blue"
                    v-show="plansStore.getSubscription == 'monthly'"
                  >
                    +${{ add_on.monthly_price }}/mo
                  </p>
                  <p
                    class="text-primary-marine-blue"
                    v-show="plansStore.getSubscription == 'yearly'"
                  >
                    +${{ add_on.yearly_price }}/yr
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="flex items-center justify-between xl:px-6 p-3">
              <p class="text-neutral-cool-gray text-sm">Total (per month)</p>
              <p class="text-primary-purplish-blue xl:text-xl font-bold">
                +$12/mo
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div>
      <div
        class="flex items-center justify-between mb-0 mt-7 xl:mt-0 p-4 xl:p-0 mx-0 xl:mx-4 bg-white"
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
<script setup>
const emit = defineEmits(["next-step", "previous-step", "confirmation"]);

const plansStore = usePlansStore();
const addOnsStore = useAddOnsStore();

const { selectedPlan } = storeToRefs(plansStore);
const { selectedAddOns } = storeToRefs(addOnsStore);
</script>
