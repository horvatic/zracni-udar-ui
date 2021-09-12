<script setup>
import { getDiagrams } from '../store/projectStore'

const props = defineProps({
  id: String
})
const diagrams = getDiagrams(props.id)
</script>

<template>
  <h1>Diagram List</h1>
  <ul>
    <li v-for="diagram in diagrams">
      {{ diagram.name }}
      <br>
      <br>
      {{ diagram.uri }}
      <br>
      <br>
      {{ diagram.description }}
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
