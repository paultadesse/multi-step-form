<template>
  <div class="flex flex-col justify-center min-h-full px-4 xl:px-0">
    <div
      class="mx-auto flex justify-center -mt-7 xl:mt-0 bg-white shadow rounded-lg xl:shadow-none p-4 max-w-xs xl:max-w-lg mb-24 xl:mb-0"
    >
      <div class="text-center space-y-4 py-8">
        <div>
          <img
            src="~/assets/icons/icon-thank-you.svg"
            class="mx-auto w-12 xl:w-auto"
            alt=""
          />
        </div>
        <div>
          <h1 class="text-primary-marine-blue xl:text-4xl text-2xl font-bold">
            Thank you!
          </h1>
        </div>
        <div>
          <p class="text-neutral-cool-gray">
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const emit = defineEmits(["next-step", "previous-step", "confirmation"]);
</script>
