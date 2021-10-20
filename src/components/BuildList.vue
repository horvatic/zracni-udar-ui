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
  <div class="container" style="font-size: large;">
    <br>
    <h1 style="text-align: center;">Builds / Deployments</h1>
    <br>
    <div class="row justify-content-md-center">
      <div class="col-md-auto" v-for="build in builds">
        <div class="card" style="width: 36rem;">
          <div class="card-body">
            <span>Name:</span>
            <h5 class="card-title">
              <router-link :to="{  name: 'build', params: { projectId: id, buildId: build.id } }"><input v-model="build.name" class="displayclicktext" readonly></router-link>
            </h5>
            <hr>
            <p class="card-text">
              <span>Uri</span>
              <a :href="`${build.uri}`" target="_blank" ><input v-model="build.uri" class="displayclicktext" readonly></a>
              <hr>
              <span>Repo Owner:</span>
              <input v-model="build.repo_owner" class="displaytext" readonly>
              <hr>
              <span>Repo Name:</span>
              <input v-model="build.repo_name" class="displaytext" readonly>
              <hr>
              <span>Description:</span>
              <textarea v-model="build.description" class="displaytext" readonly></textarea>
              <hr>
              <div style="text-align: center;">
                <router-link :to="{  name: 'updatebuilds', params: { projectId: id, buildId: build.id } }">Edit</router-link>
                &nbsp;|&nbsp;
                <a href="#" v-on:click="removeBuild(id, build.id)">Delete</a>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div style="text-align: center;">
      <router-link :to="{  name: 'addbuilds', params: { projectId: id } }">Add</router-link>
      &nbsp;|&nbsp;
      <router-link :to="{  name: 'project', params: { id: id } }">Back</router-link>
    </div>
  </div>

</template>

<style scoped>
  a {
    color: rgb(22, 22, 37);
    text-decoration: none;
  }
</style>