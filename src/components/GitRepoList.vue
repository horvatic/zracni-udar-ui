<script>
  import { getGitReposByProjectId, deleteGitRepo } from '../store/projectStore'

  export default {
    props: {
      id: String
    },
    methods: {
        removeGitRepo: async function (projectId, gitRepoId) {
            await deleteGitRepo(projectId, gitRepoId);
            const index = this.gitRepos.findIndex(x => x.id === gitRepoId)
            if (index > -1) {
              this.gitRepos.splice(index, 1);
            }
            this.$forceUpdate()
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
      <input v-model="repo.name" class="displaytext" readonly>
      <hr class="hrdash">
      <a :href="`${repo.uri}`" target="_blank" ><input v-model="repo.uri" class="displayclicktext" readonly></a>
      <hr class="hrdash">
      <textarea v-model="repo.description" class="displaytext" readonly></textarea>
      <hr class="hrdash">
      <router-link :to="{  name: 'updategitrepo', params: { projectId: id, gitRepoId: repo.id } }">Edit</router-link>
      &nbsp;|&nbsp;
      <a href="#" v-on:click="removeGitRepo(id, repo.id)">Delete</a>
      <br>
      <br>
      <hr class="hrsoild">
      <br>
    </li>
  </ul>
  <router-link :to="{  name: 'addgitrepo', params: { projectId: id } }">Add</router-link>
  &nbsp;|&nbsp;
  <router-link :to="{  name: 'project', params: { id: id } }">Back</router-link>
</template>
