<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
        heading: [
            {
                title: 'Heading 1',
                class: 'text-9xl'
            },
            {
                title: 'Heading 2',
                class: 'text-6xl'
            },
            {
                title: 'Heading 3',
                class: 'text-4xl'
            },
            {
                title: 'Heading 4',
                class: 'text-2xl'
            },
            {
                title: 'Heading 5',
                class: 'text-xl'
            },
            {
                title: 'Heading 6',
                class: 'text-lg'
            },
        ]
    }
  },
})
</script>
<template>
    <div>
        <h1 class="text-3xl md:text-6xl lg:text-9xl font-bold underline text-blue-700 ">Hello World!</h1>
        <h1 v-for="(head, idx) in heading" :key="idx" :class="head.class" class="text-red-800">{{ head.class }}</h1>
    </div>
</template>