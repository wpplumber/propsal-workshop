<script setup lang='ts'>
import { onMounted, ref, computed } from 'vue';

const ethereum = ref(0)
const usdPrice = ref(0)
const bitcoinPrice = ref(0)
const ethereumDesc = ref([])
const currentLang = ref('en')

const ethSelectedLangDesc = computed(()=> {
  if(ethereumDesc.value == []) return '';
  if(currentLang.value === 'en'){
    return ethereumDesc.value.en
      }
      if(currentLang.value === 'ja'){
    return ethereumDesc.value.ja
      }
      if(currentLang.value === 'ru'){
    return ethereumDesc.value.ru
      }
})

onMounted(()=>{
  fetch('https://api.coingecko.com/api/v3/coins/ethereum')
    .then(response => response.json())
    .then((data) => {
      // console.log('Ethereum market', data.description);
      usdPrice.value = data.market_data.current_price.usd;
      bitcoinPrice.value = data.market_data.current_price.bits;
      ethereumDesc.value = data.description;
    });
    window.setInterval(()=>{
      fetchCoinMarket('');
    }, 40000);
})

function fetchCoinMarket(currency: string): void {
  fetch('https://api.coingecko.com/api/v3/coins/ethereum')
    .then(response => response.json())
    .then((data) => {
      console.log('Ethereum market', data.description);
      usdPrice.value = data.market_data.current_price.usd;
      bitcoinPrice.value = data.market_data.current_price.bits;
      ethereumDesc.value = data.description;
    });
}

      function onLangChange(event) {
            currentLang.value = event.target.value;
            console.log(event.target.value);
        }


</script>
<template>
    <!-- Card Section -->
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <!-- Grid -->
  <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
    <!-- Card -->
    <div class="flex flex-col gap-y-3 lg:gap-y-5 p-4 md:p-5 bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800">
      <div class="inline-flex justify-center items-center">
        <span class="w-2 h-2 inline-block bg-gray-500 rounded-full me-2"></span>
        <span class="text-xs font-semibold uppercase text-gray-600 dark:text-gray-400">Ethereum</span>
      </div>

      <div class="flex flex-col justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto w-16 h-16 text-yellow-200" viewBox="0 0 24 24"><path fill="currentColor" d="M5.378 4.514a9.962 9.962 0 0 1 6.627-2.511c5.523 0 10 4.477 10 10a9.954 9.954 0 0 1-1.793 5.715l-2.707-5.715h2.5A8 8 0 0 0 6.279 6.416l-.9-1.902Zm13.253 14.978a9.962 9.962 0 0 1-6.626 2.51c-5.523 0-10-4.476-10-10c0-2.124.663-4.094 1.793-5.714l2.707 5.715h-2.5A8 8 0 0 0 17.73 17.59l.901 1.902Zm-10.126-5.49h5.5a.5.5 0 1 0 0-1h-4a2.5 2.5 0 1 1 0-5h1v-1h2v1h2.5v2h-5.5a.5.5 0 0 0 0 1h4a2.5 2.5 0 0 1 0 5h-1v1h-2v-1h-2.5v-2Z"/></svg>
        <h3 class="text-center text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800 dark:text-gray-200">
          {{usdPrice}}
        </h3>
      </div>

      <div class="flex flex-col justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto w-16 h-16 text-yellow-400" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"/><path fill="currentColor" d="m3.713 11.163l2.678 1.804c1.006.678.334 2.247-.85 1.987l-1.064-.234a8.002 8.002 0 0 0 14.804.605a1 1 0 0 1 1.82.828c-1.987 4.37-6.896 6.793-11.687 5.509A10.003 10.003 0 0 1 2 12.08c-.007-.903.995-1.402 1.713-.918ZM13 6a1 1 0 0 1 .993.883L14 7v1h.5a2.5 2.5 0 0 1 2 4a2.5 2.5 0 0 1-1.836 3.995L14.5 16H14v1a1 1 0 0 1-1.993.117L12 17v-1h-1v1a1 1 0 0 1-1.993.117L9 17v-1H8a1 1 0 0 1-.117-1.993L8 14v-4a1 1 0 0 1-.117-1.993L8 8h1V7a1 1 0 0 1 1.993-.117L11 7v1h1V7a1 1 0 0 1 1-1Zm1.5 7H10v1h4.5a.5.5 0 0 0 .09-.992L14.5 13Zm.09-10.657a10.002 10.002 0 0 1 7.414 9.581c.007.903-.995 1.402-1.713.918l-2.678-1.804c-1.006-.678-.334-2.247.85-1.987l1.064.234A8.002 8.002 0 0 0 4.723 8.68a1 1 0 1 1-1.82-.828C4.89 3.482 9.799 1.06 14.59 2.343ZM14.5 10H10v1h4.5a.5.5 0 0 0 0-1Z"/></g></svg> 
            <h3 class="text-center text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800 dark:text-gray-200">
          {{bitcoinPrice}}
        </h3>
      </div>

      <dl class="flex justify-center items-center divide-x divide-gray-200 dark:divide-gray-700">
        <dt class="pe-3">
          <span class="text-green-600">
            <svg class="inline-block w-4 h-4 self-center" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
            </svg>
            <span class="inline-block text-sm">
              ?
            </span>
          </span>
          <span class="block text-sm text-gray-500">change</span>
        </dt>
        <dd class="text-start ps-3">
          <span class="text-sm font-semibold text-gray-800 dark:text-gray-200">?</span>
          <span class="block text-sm text-gray-500">last week</span>
        </dd>
      </dl>

      <div class="space-y-2">
            <label for="af-submit-app-category" class="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200">
              Language
            </label>

            <select @change="onLangChange($event)" id="af-submit-app-category" class="py-2 px-3 pe-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
              <option value="en">English</option>
              <option value="ru">Russian</option>
              <option value="ja">Japanese</option>
            </select>
          </div>
          <blockquote class="relative">
  <svg class="absolute -top-6 -start-8 h-16 w-16 text-gray-100 dark:text-gray-700" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z" fill="currentColor"/>
  </svg>

  <div class="relative z-10">
    <p class="text-gray-800 sm:text-xl dark:text-white"><em>
      {{ ethSelectedLangDesc }}
    </em></p>
  </div>

  <footer class="mt-6">
    <div class="flex items-center">
      <div class="flex-shrink-0">
        <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description">
      </div>
      <div class="ms-4">
        <div class="text-base font-semibold text-gray-800 dark:text-gray-400">Unsplash IMG</div>
        <div class="text-xs text-gray-500">Upwork Frontend Developer</div>
      </div>
    </div>
  </footer>
</blockquote>
    </div>
    <!-- End Card -->

    <!-- Card -->
    <div class="flex flex-col gap-y-3 lg:gap-y-5 p-4 md:p-5 bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800">
      <div class="inline-flex justify-center items-center">
        <span class="w-2 h-2 inline-block bg-green-500 rounded-full me-2"></span>
        <span class="text-xs font-semibold uppercase text-gray-600 dark:text-gray-400">Uniswap</span>
      </div>

      <div class="text-center">
        <h3 class="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800 dark:text-gray-200">
          ?
        </h3>
      </div>

      <dl class="flex justify-center items-center divide-x divide-gray-200 dark:divide-gray-700">
        <dt class="pe-3">
          <span class="text-green-600">
            <svg class="inline-block w-4 h-4 self-center" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
            </svg>
            <span class="inline-block text-sm">
              0%
            </span>
          </span>
          <span class="block text-sm text-gray-500">change</span>
        </dt>
        <dd class="text-start ps-3">
          <span class="text-sm font-semibold text-gray-800 dark:text-gray-200">?</span>
          <span class="block text-sm text-gray-500">last week</span>
        </dd>
      </dl>
    </div>
    <!-- End Card -->

    <!-- Card -->
    <div class="flex flex-col gap-y-3 lg:gap-y-5 p-4 md:p-5 bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800">
      <div class="inline-flex justify-center items-center">
        <span class="w-2 h-2 inline-block bg-red-500 rounded-full me-2"></span>
        <span class="text-xs font-semibold uppercase text-gray-600 dark:text-gray-400">Aave</span>
      </div>

      <div class="text-center">
        <h3 class="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800 dark:text-gray-200">
          ?
        </h3>
      </div>

      <dl class="flex justify-center items-center divide-x divide-gray-200 dark:divide-gray-700">
        <dt class="pe-3">
          <span class="text-red-600">
            <svg class="inline-block w-4 h-4 self-center" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
            </svg>
            <span class="inline-block text-sm">
              0%
            </span>
          </span>
          <span class="block text-sm text-gray-500">change</span>
        </dt>
        <dd class="text-start ps-3">
          <span class="text-sm font-semibold text-gray-800 dark:text-gray-200">?</span>
          <span class="block text-sm text-gray-500">last week</span>
        </dd>
      </dl>
    </div>
    <!-- End Card -->
  </div>
  <!-- End Grid -->
</div>
<!-- End Card Section -->
</template>


<style scoped>
</style>