<script setup>
import { getEnvironmentsStatus } from '../store/projectStore'

const props = defineProps({
  projectId: String,
  buildId: String
})
const versions = getEnvironmentsStatus(props.projectId, props.buildId)
</script>

<template>
  <h1>Builds</h1>
  <ul>
    <li v-for="version in versions">
      Version: {{ version.version }}
      <br>
      <div v-for="environment in version.environments">
        {{ environment.name }}
        &nbsp;|&nbsp;
        {{ environment.status }}
      </div>
      <br>
      <hr>
      <br>
    </li>
  </ul>
  <router-link :to="{  name: 'builds', params: { id: projectId } }">Back</router-link>
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
