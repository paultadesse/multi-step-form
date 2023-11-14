<template>
  <div class="flex flex-col justify-between min-h-full">
    <div>
      <div class="space-y-2">
        <h1 class="font-bold text-4xl tracking-wide">Finishing up</h1>
        <h2 class="text-sm tracking-wide text-slate-400">
          Double-check everything looks OK before confirming.
        </h2>
      </div>
      <form action="" class="space-y-10 py-8">
        <div class="bg-neutral-alabaster p-6 space-y-4 rounded-lg">
          <div class="flex justify-between items-center">
            <div>
              <p class="font-bold text-primary-marine-blue">Arcade (Monthly)</p>
              <small
                class="cursor-pointer hover:underline hover:text-primary-purplish-blue"
                >Change</small
              >
            </div>
            <div class="font-bold text-primary-marine-blue">
              <p>$9/mo</p>
            </div>
          </div>
          <div>
            <hr />
          </div>
          <div class="space-y-4">
            <div class="flex justify-between">
              <p class="text-neutral-cool-gray text-sm">Online service</p>
              <p class="text-primary-marine-blue">+$1/mo</p>
            </div>
            <div class="flex justify-between">
              <p class="text-neutral-cool-gray text-sm">Larger storage</p>
              <p class="text-primary-marine-blue">+$2/mo</p>
            </div>
          </div>
        </div>
        <div>
          <div class="flex items-center justify-between px-6">
            <p class="text-neutral-cool-gray text-sm">Total (per month)</p>
            <p class="text-primary-purplish-blue text-xl font-bold">+$12/mo</p>
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
        class="px-6 py-3 font-semibold bg-primary-purplish-blue hover:bg-primary-pastel-blue rounded-lg text-white"
      >
        Confirm
      </button>
    </div>
  </div>
</template>
<script setup>
const emit = defineEmits(["next-step", "previous-step", "confirmation"]);
</script>
