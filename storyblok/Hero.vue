<script lang="ts" setup>
defineProps({
  blok: {
    type: Object,
    default: () => ({}),
  },
})
</script>

<template>
  <div class="hero">
    <div class="grid grid-cols-2 mx-auto container font-sans">
      <img v-if="blok.Media" :src="blok.Media.filename" :alt="blok.Media.alt" :title="blok.Media.title" />
      <div class="p-4 pt-16">
        <h1 class="text-shrimp-600 font-display text-3xl font-bold mb-4">{{ blok.title }}</h1>
        <p class="text-xs text-gray-700 mb-8">{{ blok.text }}</p>
        <ul class="flex justify-end">
          <li v-for="action in blok.actions" class="mr-4">
            <StoryblokComponent :blok="action" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
