<script lang="ts">
  import {
    defineComponent
  } from 'vue'

  export default defineComponent({
    data() {
      return {
        email: '',
        password: ''
      }
    },
  })
</script>
<template>
  <div class="flex justify-center h-screen w-screen items-center">
    <div class="w-full md:w-1/2 flex flex-col">
      <!-- text login -->
      <h1 class="text-center text-2xl font-bold text-gray-600 mb-6">Your Logo</h1>
      <div class="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
        <div class="px-5 py-7">
          <!-- email input -->
          <div class="mb-6">
            <label for="email-address-icon" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your
              Email</label>
            <div class="relative">
              <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                  viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
              </div>
              <input type="text" id="email-address-icon"
                class="bg-slate-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 hover:ring-1 outline-blue-500  block w-full pl-10 p-2.5"
                placeholder="yourmail@mail.com">
            </div>
          </div>
          <!-- password input -->
          <div class="mb-6">
            <div class="flex justify-between">
              <label for="password-icon" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
            </div>
            <div class="relative">
              <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                  viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M10 12a2 2 0 100-4 2 2 0 000 4zm0 1a3 3 0 100-6 3 3 0 000 6z"
                    clip-rule="evenodd"></path>
                  <path fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 1a9 9 0 100-18 9 9 0 000 18z"
                    clip-rule="evenodd"></path>
                </svg>
              </div>
              <input type="password" id="password-icon"
                class="bg-slate-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 hover:ring-1 outline-blue-500  block w-full pl-10 p-2.5"
                placeholder="********">
            </div>
          </div>
          <!-- button -->
          <div class="mb-6">
            <button
              class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg w-full transition duration-200 ease-in-out">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>