<template>
  <div class="flex flex-col justify-between min-h-full">
    <div>
      <div class="space-y-2">
        <h1 class="font-bold text-4xl tracking-wide text-primary-marine-blue">
          Personal Info
        </h1>
        <h2 class="text-sm tracking-wide text-neutral-cool-gray">
          Please provide your name, email address, and phone number.
        </h2>
      </div>
      <form action="" class="space-y-4 py-8">
        <div class="space-y-1">
          <label for="name" class="text-sm text-primary-marine-blue"
            >Name</label
          >
          <input
            type="text"
            class="border block rounded-lg w-full p-2.5 focus:border-primary-purplish-blue focus:outline-none focus:ring-0 text-primary-marine-blue font-bold placeholder:text-neutral-cool-gray placeholder:font-normal"
            placeholder="eg.Stephen King"
          />
        </div>
        <div class="space-y-1">
          <label for="email" class="text-sm text-primary-marine-blue"
            >Email Address</label
          >
          <input
            type="email"
            class="border block rounded-lg w-full p-2.5 focus:border-primary-purplish-blue focus:outline-none focus:ring-0 text-primary-marine-blue font-bold placeholder:text-neutral-cool-gray placeholder:font-normal"
            placeholder="eg.stephenking@lorem.com"
          />
        </div>
        <div class="space-y-1">
          <label for="phone" class="text-sm text-primary-marine-blue"
            >Phone Number</label
          >
          <input
            type="text"
            class="border block rounded-lg w-full p-2.5 focus:border-primary-purplish-blue focus:outline-none focus:ring-0 text-primary-marine-blue font-bold placeholder:text-neutral-cool-gray placeholder:font-normal"
            placeholder="eg. +1 234 567 890"
          />
        </div>
      </form>
    </div>
    <div class="flex items-center justify-end">
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
const emit = defineEmits(["next-step", "previous-step", "confirmation"]);
</script>
