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
  <div class="container" style="font-size: large;">
    <br>
    <h1 style="text-align: center;">Builds</h1>
    <br>
    <div class="row justify-content-md-center" v-for="build in builds">
      <input v-model="build.version" class="displaytext" readonly>
      <hr class="hrdash">
      <div class="col-md-auto" v-for="stage in build.stages">
        <div class="card" style="width: 36rem;">
          <div class="card-body">
            <h5 class="card-title">
              <input v-model="stage.name" class="displaytext" readonly>
            </h5>
            <hr>
            <p class="card-text">
              <input v-model="stage.status" class="displaytext" readonly>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div style="text-align: center;">
        <router-link :to="{  name: 'builds', params: { id: projectId } }">Back</router-link>
    </div>
  </div>
</template>

<style scoped>
  a {
    color: rgb(22, 22, 37);
    text-decoration: none;
  }
</style>