<template>
  <div class="flex flex-col justify-between min-h-full">
    <div class="px-3 xl:p-0">
      <div class="-mt-7 xl:mt-0 bg-white shadow rounded-lg xl:shadow-none p-4">
        <div class="space-y-2">
          <h1
            class="font-bold xl:text-4xl tracking-wide text-primary-marine-blue"
          >
            Select your plan
          </h1>
          <h2
            class="text-sm tracking-wide text-neutral-cool-gray max-w-[250px] xl:max-w-lg"
          >
            You have the option of monthly or yearly billing.
          </h2>
        </div>
        <form action="" class="xl:py-8 py-4 grid grid-cols-12 gap-4">
          <div
            class="xl:col-span-4 col-span-12 border rounded-lg xl:py-4 p-2 xl:h-40 flex xl:flex-col xl:justify-between items-center xl:items-start space-x-3 cursor-pointer"
            :class="
              selected_plan.name == plan.name
                ? 'border-primary-purplish-blue bg-slate-50'
                : ''
            "
            v-for="plan in plans"
            :key="plan.name"
            @click="updatePlan(plan, subscribedToYearly ? 'yearly' : 'monthly')"
          >
            <div>
              <img :src="images[`${plan.icon.toLowerCase()}`]" alt=""  class="ml-2"/>
            </div>
            <div>
              <p
                class="font-bold first-letter:uppercase text-primary-marine-blue"
              >
                {{ plan.name }}
              </p>
              <small v-show="subscribedToYearly" class="text-neutral-cool-gray tracking-wider"
                >${{ plan.yearly_price }}/yr</small
              >
              <small v-show="subscribedToYearly" class="block text-primary-marine-blue tracking-wider"
                >{{ plan.offer_for_yearly_plan }}</small
              >
              <small v-show="!subscribedToYearly" class="text-neutral-cool-gray tracking-wider"
                >${{ plan.monthly_price }}/mo</small
              >
            </div>
          </div>
          <div class="col-span-12 rounded-lg xl:mt-6 bg-slate-50">
            <div class="flex justify-center space-x-4 p-4">
              <small class="text-primary-marine-blue tracking-wider font-bold"
                >Monthly</small
              >
              <div class="col-span-3 flex">
                <label class="relative w-12 h-6 has-tooltip">
                  <input
                    type="checkbox"
                    :checked="subscribedToYearly"
                    class="peer/activate-deactivate-user opacity-0 w-0 h-0"
                    @change="
                      (subscribedToYearly = !subscribedToYearly),
                        updatePlan(
                          selected_plan,
                          subscribedToYearly ? 'yearly' : 'monthly'
                        )
                    "
                  />

                  <span
                    for="activate-deactivate-user"
                    class="cursor-pointer absolute transition duration-150 before:transition before:duration-150 peer-checked/activate-deactivate-user:before:translate-x-6 peer-checked/activate-deactivate-user:bg-slate-600 top-0 bottom-0 left-0 right-0 bg-[#ccc] rounded-3xl before:absolute before:content-[''] before:rounded-full before:top-1 before:left-1 before:h-4 before:w-4 before:bg-white"
                  >
                  </span>
                </label>
              </div>
              <small class="text-neutral-cool-gray tracking-wider font-bold"
                >Yearly</small
              >
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
import { filename } from "pathe/utils";
import { usePlansStore } from "~/stores/plans";
const emit = defineEmits(["next-step", "previous-step", "confirmation"]);

const glob = import.meta.glob("@/assets/icons/plans/*.svg", {
  eager: true,
});
const images = Object.fromEntries(
  Object.entries(glob).map(([key, value]) => [filename(key), value.default])
);

const plansStore = usePlansStore();
const { selectedPlan } = storeToRefs(plansStore);

var plans = [
  {
    selected: false,
    name: "Arcade",
    monthly_price: 9,
    yearly_price: 90,
    offer_for_yearly_plan: "2 months free",
    icon: "icon-arcade",
  },
  {
    selected: false,
    name: "Advanced",
    monthly_price: 12,
    yearly_price: 120,
    offer_for_yearly_plan: "2 months free",
    icon: "icon-advanced",
  },
  {
    selected: false,
    name: "Pro",
    monthly_price: 15,
    yearly_price: 150,
    offer_for_yearly_plan: "2 months free",
    icon: "icon-pro",
  },
];

var selected_plan: object = ref(plans[0]);
var subscribedToYearly = ref(false);

onMounted(() => {
  plansStore.updatePlan(plans[0], "monthly");
});

function updatePlan(plan: object, subscriptionPlan: string) {
  selected_plan.value = plan;
  plansStore.updatePlan(plan, subscriptionPlan);
}
</script>
