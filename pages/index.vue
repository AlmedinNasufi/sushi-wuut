<script setup lang="ts">
const story = await useStoryblok('home', { version: 'draft' }, { customParent: 'http://localhost:3000' })
</script>

<template>
  <main role="main">
    <StoryblokComponent v-if="story" :blok="story.content" />
  </main>
</template>
