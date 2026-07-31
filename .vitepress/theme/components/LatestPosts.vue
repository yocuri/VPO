<template>
  <ul>
    <li v-for="post in posts" :key="post.id">
      <a :href="post.url">
        {{ post.title }}
      </a>
    </li>
  </ul>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const posts = ref([])

onMounted(async () => {
  try {
    const response = await fetch(
      'https://empathicide.yocuri.live/ghost/api/content/posts/?key=bf5d5f8d2f7743df981220a9b1'
    )

    const data = await response.json()

    posts.value = data.posts

  } catch (err) {
    console.error(err)
  }
})
</script>