<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavbarItem from '@/components/navbar/NavbarItem.vue'
import FooterItem from '@/components/footer/FooterItem.vue'
</script>

<template>
    <div class="h-screen w-screen flex justify-center">
        <div class="h-full flex flex-col items-center w-[95%] sm:w-[80%] max-w-[800px] p-5">
            <NavbarItem />
            <main class="flex h-full justify-center">
                <RouterView />
            </main>
            <FooterItem />
        </div>
    </div>
</template>

<style scoped></style>
