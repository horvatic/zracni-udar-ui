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
  <div class="container" style="font-size: large;">
    <br>
    <h1 style="text-align: center;">Git Repos</h1>
    <br>
    <div class="row justify-content-md-center">
      <div class="col-md-auto" v-for="repo in gitRepos">
        <div class="card" style="width: 36rem;">
          <div class="card-body">
            <h5 class="card-title">
              <input v-model="repo.name" class="displaytext" readonly>
            </h5>
            <hr>
            <p class="card-text">
              <a :href="`${repo.uri}`" target="_blank" ><input v-model="repo.uri" class="displayclicktext" readonly></a>
              <hr>
              <textarea v-model="repo.description" class="displaytext" readonly></textarea>
              <hr>
              <div style="text-align: center;">
                <router-link :to="{  name: 'updategitrepo', params: { projectId: id, gitRepoId: repo.id } }">Edit</router-link>
                &nbsp;|&nbsp;
                <a href="#" v-on:click="removeGitRepo(id, repo.id)">Delete</a>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div style="text-align: center;">
      <router-link :to="{  name: 'addgitrepo', params: { projectId: id } }">Add</router-link>
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