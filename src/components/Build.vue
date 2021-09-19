<script>
  import { getBuildsForProject } from '../store/projectStore'

  export default {
    props: {
      projectId: String,
      buildId: String
    },
    async setup(props) {
      return {
        builds: await getBuildsForProject(props.projectId, props.buildId),
      }
    }
  }
</script>

<template>
  <h1>Builds</h1>
  <ul>
    <li v-for="build in builds">
      Version: {{ build.version }}
      <br>
      <div v-for="environment in build.environments">
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