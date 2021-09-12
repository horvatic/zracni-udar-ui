<script setup>
import { getBlogs } from '../store/projectStore'

const props = defineProps({
  id: String
})
const blogs = getBlogs(props.id)
</script>

<template>
  <h1>Blogs List</h1>
  <ul>
    <li v-for="blog in blogs">
      {{ blog.name }}
      <br>
      <br>
      {{ blog.uri }}
      <br>
      <br>
      {{ blog.description }}
      <br>
      <hr>
      <br>
    </li>
  </ul>
  <router-link :to="{  name: 'project', params: { id: id } }">Back</router-link>
</template>

<style scoped>
  ul {
    list-style-type: none;
  }
  hr {
    width:25%;
    margin:0 auto;
  }
</style>
