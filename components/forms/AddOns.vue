<template>
  <div class="flex flex-col justify-between min-h-full">
    <div>
      <div class="space-y-2">
        <h1 class="font-bold text-4xl tracking-wide text-primary-marine-blue">
          Pick add-ons
        </h1>
        <h2 class="text-sm tracking-wide text-neutral-cool-gray">
          Add-ons help enhance your gaming experience.
        </h2>
      </div>
      <form action="" class="space-y-7 py-8">
        <div v-for="add_on in add_ons" :key="add_on.name">
          <div
            class="px-6 py-4 border rounded-lg hover:border-primary-purplish-blue cursor-pointer"
            :class="
              add_on.selected ? 'bg-slate-50 border-primary-purplish-blue' : ''
            "
            @click="add_on.selected = !add_on.selected"
          >
            <div class="flex items-center">
              <input
                type="checkbox"
                :checked="add_on.selected"
                class="border block rounded p-2 pointer-events-none checked:bg-primary-purplish-blue"
              />
              <div class="flex items-center justify-between w-full">
                <div class="ml-6 leading-6">
                  <p
                    class="font-bold text-primary-marine-blue first-letter:uppercase"
                  >
                    {{ add_on.name }}
                  </p>
                  <small
                    class="first-letter:uppercase tracking-wide text-neutral-cool-gray"
                    >{{ add_on.description }}</small
                  >
                </div>
                <div>
                  <p class="text-sm font-semibold text-primary-purplish-blue">
                    +${{ add_on.price }}/mo
                  </p>
                </div>
              </div>
            </div>
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
const emit = defineEmits(["next-step", "previous-step", "confirmation"]);

var add_ons = reactive([
  {
    selected: false,
    name: "online service",
    description: "access to multiplayer games",
    price: 1,
  },
  {
    selected: false,
    name: "large storage",
    description: "extra 1TB of cloud save",
    price: 2,
  },
  {
    selected: false,
    name: "customizable profile",
    description: "custom theme on your profile",
    price: 2,
  },
]);
</script>
