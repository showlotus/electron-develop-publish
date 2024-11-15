<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'

import { fetchGet, fetchUpdate } from '@/database/api'

import { createDatabase } from './database'

const count = ref(0)

const init = async () => {
  const db = createDatabase()
  const cnt = await db.MainTable.count()
  if (cnt === 0) {
    await db.MainTable.add({ value: 0 })
  }
  count.value = (await fetchGet())!
}

const increment = () => {
  fetchUpdate(count.value + 1).then((res) => {
    count.value = res!.value
  })
}

const reset = () => {
  fetchUpdate(0).then((res) => {
    count.value = res!.value
  })
}

onBeforeMount(() => {
  init()
})
</script>

<template>
  <div class="flex justify-center items-center">
    <a href="https://www.electronjs.org/" target="_blank">
      <img
        src="./assets/electron.svg"
        class="logo electron"
        alt="Electron logo"
      />
    </a>
    <a href="https://vitejs.dev/" target="_blank">
      <img src="./assets/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <a href="https://tailwindcss.com/" target="_blank">
      <img
        src="./assets/tailwindcss.svg"
        class="logo tailwindcss h-28"
        alt="Tailwindcss logo"
      />
    </a>
    <a href="https://tailwindcss.com/" target="_blank">
      <img src="./assets/dexie.svg" class="logo dexie" alt="Dexie logo" />
    </a>
  </div>

  <h1 class="text-3xl">Electron + Vite + Vue + Tailwindcss + Dexie.js</h1>

  <div class="flex gap-2 justify-center p-8">
    <button type="button" @click="increment">count is {{ count }}</button>
    <button type="button" @click="reset">reset</button>
  </div>
</template>

<style>
.logo {
  height: 8rem;
  padding: 1.5rem;
  will-change: filter;
  transition: filter 300ms;
}

.logo.electron:hover {
  filter: drop-shadow(0 0 2em #9feaf9);
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.logo.tailwindcss:hover {
  filter: drop-shadow(0 0 2em #62baf3aa);
}

.logo.dexie:hover {
  filter: drop-shadow(0 0 2em #ffffffaa);
}
</style>
