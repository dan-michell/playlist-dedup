<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavbarItem from '@/components/navbar/NavbarItem.vue'
import FooterItem from '@/components/FooterItem.vue'
</script>

<template>
    <div class="min-h-screen w-screen flex justify-center">
        <div class="w-[95%] sm:w-[80%] max-w-[800px] flex flex-col gap-10 items-center p-5">
            <NavbarItem />
            <main class="flex h-full w-full sm:max-w-[90%] justify-center">
                <RouterView />
            </main>
            <FooterItem />
        </div>
    </div>
</template>

<style scoped></style>
