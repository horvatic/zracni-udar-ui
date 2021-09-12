<script setup>
import { getYoutubes } from '../store/projectStore'

const props = defineProps({
  id: String
})
const youtubes = getYoutubes(props.id)
</script>

<template>
  <h1>Youtube List</h1>
  <ul>
    <li v-for="youtube in youtubes">
      {{ youtube.name }}
      <br>
      <br>
      {{ youtube.uri }}
      <br>
      <br>
      {{ youtube.description }}
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
