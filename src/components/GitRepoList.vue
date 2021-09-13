<script setup>
import { getGits } from '../store/projectStore'

const props = defineProps({
  id: String
})
const gits = getGits(props.id)
</script>

<template>
  <h1>Gits List</h1>
  <ul>
    <li v-for="git in gits">
      {{ git.name }}
      <br>
      <br>
      {{ git.uri }}
      <br>
      <br>
      {{ git.description }}
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
