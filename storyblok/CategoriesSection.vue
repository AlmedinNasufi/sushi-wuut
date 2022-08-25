<script setup lang="ts">
defineProps({
  blok: {
    type: Object,
    default: () => ({}),
  },
})

const { categories, fetchCategories, formattedCategories } = useCategories()
await fetchCategories()
</script>

<template>
  <section class="relative categories bg-shrimp-400 w-full h-600px mt-50">
    <img src="/tint-orange.png" alt="" class="absolute right-0 -top-50" />
    <div class="z-10 absolute w-full">
      <div class="container mx-auto flex justify-between z-10 p-8">
        <div class="w-2/3">
          <h2 class="text-white font-display text-4xl font-bold mb-8">{{ blok.title }}</h2>

          <!-- List -->
          <ul class="grid grid-cols-3 gap-8 w-2/3 py-8">
            <li v-for="{ icon, name, uuid } of formattedCategories" :key="uuid">
              <div class="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
                <img :src="icon.filename" :alt="icon.alt" class="w-76px h-76px mb-4" />
                <h3 class="text-shrimp-600 font-display text-xl font-bold mb-4">{{ name }}</h3>
              </div>
            </li>
          </ul>
        </div>
        <div class="w-1/3">
          <img v-if="blok.Media" :src="blok.Media.filename" :alt="blok.Media.alt" :title="blok.Media.title" />
        </div>
      </div>
    </div>
  </section>
</template>
