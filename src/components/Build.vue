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
      <input v-model="build.version" class="displaytext" readonly>
      <hr class="hrdash">
      <div v-for="stage in build.stages">
        {{ stage.name }}
        &nbsp;|&nbsp;
        {{ stage.status }}
      </div>
      <br>
      <br>
      <hr class="hrsoild">
      <br>
    </li>
  </ul>
  <router-link :to="{  name: 'builds', params: { id: projectId } }">Back</router-link>
</template>
