<script>
  import { getProjectById, deleteProject } from '../store/projectStore'

  export default {
    props: {
      id: String
    },
    methods: {
        deleteProject: async function (event) {
            await deleteProject(this.project.id);
            this.$router.push({ name: 'projects' })
        }
    },
    async setup(props) {
      return {
        project: await getProjectById(props.id),
      }
    }
  }
</script>

<template>
  <div class="container">
    <div style="text-align: center; font-size: large;">
      <input v-model=" project.name " class="displayheader" readonly>
      <textarea v-model="project.description" class="displaytext" readonly></textarea>
      <hr class="hrsoild">
      <h2>Notes / Links</h2>
      <router-link :to="{  name: 'notes', params: { id: id } }">Notes</router-link>
      &nbsp;|&nbsp;
      <router-link :to="{  name: 'blogs', params: { id: id } }">Blogs</router-link>
      &nbsp;|&nbsp;
      <router-link :to="{  name: 'videos', params: { id: id } }">Videos</router-link>
      &nbsp;|&nbsp;
      <router-link :to="{  name: 'diagrams', params: { id: id } }">Diagrams</router-link>
      <br>
      <hr class="hrsoild">
      <br>
      <h2>Git / Builds</h2>
      <router-link :to="{  name: 'gitrepos', params: { id: id } }">Git Repos</router-link>
      &nbsp;|&nbsp;
      <router-link :to="{  name: 'builds', params: { id: id } }">Builds / Deployments</router-link>
      <br>
      <hr class="hrsoild">
      <br>
      <h2>Other</h2>
      <router-link :to="{  name: 'updateproject', params: {id: id} }">Edit</router-link>
      &nbsp;|&nbsp;
      <a href="#" v-on:click="deleteProject()">Delete</a>
      <br>
      <hr class="hrsoild">
      <br>
      <router-link :to="{  name: 'projects' }" >Back</router-link>
    </div>
  </div>
</template>

<style scoped>
  a {
    color: rgb(22, 22, 37);
    text-decoration: none;
  }
</style>