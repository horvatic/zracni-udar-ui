<script>
  import { getGitReposByProjectId } from '../store/projectStore'

  export default {
    props: {
      id: String
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
