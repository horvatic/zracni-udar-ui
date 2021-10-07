<script>
  import { getBuildMetaDatasByProjectId, deleteBuild } from '../store/projectStore'

  export default {
    props: {
      id: String
    },
    methods: {
        removeBuild: async function (projectId, buildId) {
            await deleteBuild(projectId, buildId);
            const index = this.builds.findIndex(x => x.id === buildId)
            if (index > -1) {
              this.builds.splice(index, 1);
            }
            this.$forceUpdate()
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
      <router-link :to="{  name: 'build', params: { projectId: id, buildId: build.id } }"><input v-model="build.name" class="displayclicktext" readonly></router-link>
      <hr class="hrdash">
      <a :href="`${build.uri}`" target="_blank" ><input v-model="build.uri" class="displayclicktext" readonly></a>
      <hr class="hrdash">
      <input v-model="build.repo_owner" class="displaytext" readonly>
      <hr class="hrdash">
      <input v-model="build.repo_name" class="displaytext" readonly>
      <hr class="hrdash">
      <textarea v-model="build.description" class="displaytext" readonly></textarea>
      <hr class="hrdash">
      <router-link :to="{  name: 'updatebuilds', params: { projectId: id, buildId: build.id } }">Edit</router-link>
      &nbsp;|&nbsp;
      <a href="#" v-on:click="removeBuild(id, build.id)">Delete</a>
      <br>
      <br>
      <hr class="hrsoild">
      <br>
    </li>
  </ul>
  <router-link :to="{  name: 'addbuilds', params: { projectId: id } }">Add</router-link>
  &nbsp;|&nbsp;
  <router-link :to="{  name: 'project', params: { id: id } }">Back</router-link>
</template>
