<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavbarItem from './components/navbar/NavbarItem.vue'
</script>

<template>
  <div class="h-screen w-screen flex justify-center bg-background">
    <div class="h-full w-[95%] sm:w-[80%] max-w-[800px] p-5">
      <NavbarItem />
      <main>
        <RouterView />
      </main>
    </div>
  </div>
</template>

<style scoped></style>
