<template lang="">
  <div class="border rounded-xl shadow xl:flex xl:py-4">
    <!-- stepper -->
    <div class="xl:pl-4">
      <div
        class="flex justify-center xl:justify-normal space-x-3 xl:space-x-0 xl:flex-col xl:bg-stepper bg-mobile-stepper xl:bg-no-repeat xl:rounded-xl p-8 xl:bg-cover w-full xl:min-w-[274px] xl:min-h-[568px]"
      >
        <div
          class="flex py-4 space-x-4 items-center"
          v-for="(step, index) in steps"
          :key="index"
          v-show="index != steps.length - 1"
        >
          <div
            class="relative border rounded-full h-10 w-10 text-center"
            :class="
              index == active_step
                ? 'bg-primary-light-blue text-primary-purplish-blue'
                : 'text-white'
            "
          >
            <span class="absolute -translate-x-1/2 top-2">{{
              step.step_no
            }}</span>
          </div>
          <div class="uppercase hidden xl:block">
            <p class="text-neutral-cool-gray tracking-wider font-light text-sm">
              step {{ step.step_no }}
            </p>
            <p class="font-bold text-white tracking-wider text-sm">
              {{ step.title }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- n number of forms -->
    <div
      class="xl:min-w-[600px] max-w-xl xl:px-20 xl:py-8 flex flex-col justify-between"
    >
      <div class="min-h-full bg-neutral-magnolia xl:bg-transparent">
        <keep-alive>
          <component
            :is="steps[active_step].component"
            @next-step="++active_step"
            @previous-step="--active_step"
          />
        </keep-alive>
      </div>
    </div>
  </div>
</template>
<script setup>
var active_step = ref(0);

var steps = [
  {
    step_no: 1,
    step_valid: false,
    step_skip: false,
    title: "your info",
    component: defineAsyncComponent({
      loader: () => import("../components/forms/PersonalInfo.vue"),
    }),
  },
  {
    step_no: 2,
    step_valid: false,
    step_skip: false,
    title: "select plan",
    component: defineAsyncComponent({
      loader: () => import("../components/forms/SelectPlan.vue"),
    }),
  },
  {
    step_no: 3,
    step_valid: false,
    step_skip: false,
    title: "add-ons",
    component: defineAsyncComponent(() =>
      import("../components/forms/AddOns.vue")
    ),
  },
  {
    step_no: 4,
    step_valid: false,
    step_skip: false,
    title: "summary",
    component: defineAsyncComponent(() =>
      import("../components/forms/Summary.vue")
    ),
  },
  {
    step_no: 5,
    step_valid: false,
    step_skip: false,
    title: "thank-you",
    component: defineAsyncComponent(() =>
      import("../components/forms/ThankYou.vue")
    ),
  },
];
</script>
