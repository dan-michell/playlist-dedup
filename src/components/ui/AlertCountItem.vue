<script setup lang="ts">
import { computed } from 'vue'

interface Props {
    count: number
}

const props = defineProps<Props>()

const countTruncate = computed(() => {
    if (props.count > 99) {
        return '99+'
    }

    return props.count
})
</script>

<template>
    <div
        class="rounded-full flex items-center justify-center min-w-[30px] h-[30px] px-2 bg-warning absolute top-[-15px] right-[-15px]"
    >
        {{ countTruncate }}
    </div>
</template>
