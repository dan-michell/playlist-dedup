<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavbarItem from '@/components/navbar/NavbarItem.vue'
import FooterItem from '@/components/footer/FooterItem.vue'
</script>

<template>
  <div class="h-screen w-screen flex justify-center">
    <div class="h-full flex flex-col w-[95%] sm:w-[80%] max-w-[800px] p-5">
      <NavbarItem />
      <main>
        <RouterView />
      </main>
      <FooterItem />
    </div>
  </div>
</template>

<style scoped></style>
