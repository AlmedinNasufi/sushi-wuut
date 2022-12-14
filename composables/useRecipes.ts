const state = reactive({
  recipes: [],
})

export function useRecipes() {
  const storyblokApi = useStoryblokApi()

  async function fetchRecipes() {
    const { data } = await storyblokApi.get('cdn/stories/', {
      version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
      starts_with: 'recipes/',
      resolve_relations: 'category',
      is_startpage: false,
    })

    // state.recipes = data.stories

    state.recipes = data.stories.map(recipe => ({
      ...recipe,
      content: {
        ...recipe.content,
        category: data.rels.find(({ uuid }) => uuid === recipe.content.category),
      },
    }))
  }

  async function fetchRecipeBySlug(slug: string) {
    try {
      const { data } = await storyblokApi.get('cdn/stories/', {
        version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
        starts_with: 'recipes/',
        by_slugs: '*/' + slug,
        resolve_relations: 'category',
        is_startpage: false,
      })

      const story = data.stories[0]
      return story
    } catch (error) {}
  }

  return {
    ...toRefs(state),
    fetchRecipes,
    fetchRecipeBySlug,
  }
}
