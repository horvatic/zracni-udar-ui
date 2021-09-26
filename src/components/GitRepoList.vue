<script>
  import { getGitReposByProjectId, deleteGitRepo } from '../store/projectStore'

  export default {
    props: {
      id: String
    },
    methods: {
        removeGitRepo: async function (projectId, gitRepoId) {
            await deleteGitRepo(projectId, gitRepoId);
            this.$router.go(0);
        }
    },
    async setup(props) {
      return {
        gitRepos: await getGitReposByProjectId(props.id),
      }
    }
  }
</script>

<template>
  <h1>Git Repo List</h1>
  <ul>
    <li v-for="repo in gitRepos">
      {{ repo.name }}
      <br>
      <br>
      {{ repo.uri }}
      <br>
      <br>
      {{ repo.description }}
      <br>
      <br>
      <router-link :to="{  name: 'updategitrepo', params: { projectId: id, gitRepoId: repo.id } }">Edit</router-link>
      &nbsp;|&nbsp;
      <button v-on:click="removeGitRepo(id, repo.id)">Delete</button>
      <br>
      <hr>
      <br>
    </li>
  </ul>
  <router-link :to="{  name: 'addgitrepo', params: { projectId: id } }">Add</router-link>
  &nbsp;|&nbsp;
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
