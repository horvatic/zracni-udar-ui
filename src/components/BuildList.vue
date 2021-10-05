<script>
  import { getBuildMetaDatasByProjectId, deleteBuild } from '../store/projectStore'

  export default {
    props: {
      id: String
    },
    methods: {
        removeBuild: async function (projectId, buildId) {
            await deleteBuild(projectId, buildId);
            this.$router.go(0);
        }
    },
    async setup(props) {
      return {
        builds: await getBuildMetaDatasByProjectId(props.id),
      }
    }
  }
</script>

<template>
  <h1>Build / Deployment List</h1>
  <ul>
    <li v-for="build in builds">
      <router-link :to="{  name: 'build', params: { projectId: id, buildId: build.id } }">{{ build.name }}</router-link>
      <br>
      <br>
      <a :href="`${build.uri}`" target="_blank" > {{ build.uri }} </a>
      <br>
      <br>
      {{ build.description }}
      <br>
      <br>
      <router-link :to="{  name: 'updatebuilds', params: { projectId: id, buildId: build.id } }">Edit</router-link>
      &nbsp;|&nbsp;
      <a href="#" v-on:click="removeBuild(id, build.id)">Delete</a>
      <br>
      <hr>
      <br>
    </li>
  </ul>
  <router-link :to="{  name: 'addbuilds', params: { projectId: id } }">Add</router-link>
  &nbsp;|&nbsp;
  <router-link :to="{  name: 'project', params: { id: id } }">Back</router-link>
</template>

<style scoped>
  hr {
    width:25%;
    margin:0 auto;
  }
</style>
