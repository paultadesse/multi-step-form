<template>
  <div class="flex flex-col justify-between min-h-full">
    <div>
      <div class="space-y-2">
        <h1 class="font-bold text-4xl tracking-wide text-primary-marine-blue">
          Select your plan
        </h1>
        <h2 class="text-sm tracking-wide text-neutral-cool-gray">
          You have the option of monthly or yearly billing.
        </h2>
      </div>
      <form action="" class="py-8 grid grid-cols-12 gap-4">
        <div
          class="col-span-4 border rounded-lg p-4 h-40 flex flex-col justify-between cursor-pointer"
          :class="
            selected_plan.name == plan.name
              ? 'border-primary-purplish-blue bg-slate-50'
              : ''
          "
          v-for="plan in plans"
          :key="plan.name"
          @click="selected_plan = plan"
        >
          <div>
            <img :src="images[`${plan.icon.toLowerCase()}`]" alt="" />
          </div>
          <div>
            <p
              class="font-bold first-letter:uppercase text-primary-marine-blue"
            >
              {{ plan.name }}
            </p>
            <small class="text-neutral-cool-gray tracking-wider"
              >${{ plan.amount }}/mo</small
            >
          </div>
        </div>
        <div class="col-span-12 rounded-lg mt-6 bg-slate-50">
          <div class="flex justify-center space-x-4 p-4">
            <small class="text-primary-marine-blue tracking-wider font-bold"
              >Monthly</small
            >
            <div class="col-span-3 flex">
              <label class="relative w-12 h-6 has-tooltip">
                <input
                  type="checkbox"
                  checked="true"
                  class="peer/activate-deactivate-user opacity-0 w-0 h-0"
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
    <div class="flex items-center justify-between">
      <button
        class="text-neutral-cool-gray font-semibold"
        @click="emit('previous-step')"
      >
        Go Back
      </button>
      <button
        class="px-6 py-3 font-semibold bg-primary-marine-blue hover:bg-primary-purplish-blue rounded-lg text-white"
        @click="emit('next-step')"
      >
        Next Step
      </button>
    </div>
  </div>
</template>
<script setup>
import { filename } from "pathe/utils";
const glob = import.meta.glob("@/assets/icons/plans/*.svg", {
  eager: true,
});
const images = Object.fromEntries(
  Object.entries(glob).map(([key, value]) => [filename(key), value.default])
);

const emit = defineEmits(["next-step", "previous-step", "confirmation"]);

var plans = [
  {
    selected: false,
    name: "arcade",
    amount: 9,
    icon: "icon-arcade",
  },
  {
    selected: false,
    name: "advanced",
    amount: 12,
    icon: "icon-advanced",
  },
  {
    selected: false,
    name: "pro",
    amount: 15,
    icon: "icon-pro",
  },
];

var selected_plan = ref(plans[0]);
</script>
