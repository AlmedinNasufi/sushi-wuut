<script setup lang="ts">
const route = useRoute()
const { slug } = route.params

const { fetchRecipeBySlug } = useRecipes()
const story = await fetchRecipeBySlug(slug as string)
</script>
<template>
  <div>
    {{ story }}
  </div>
</template>
