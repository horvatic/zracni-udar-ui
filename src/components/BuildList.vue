<script setup>
import { getBuilds } from '../store/projectStore'

const props = defineProps({
  id: String
})
const builds = getBuilds(props.id)
</script>

<template>
  <h1>Build / Deployment List</h1>
  <ul>
    <li v-for="build in builds">
      <router-link :to="{  name: 'build', params: { projectId: id, buildId: build.id } }">{{ build.name }}</router-link>
      <br>
      <br>
      {{ build.description }}
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
