<script>
  import { getGitRepo, setGitRepo } from '../store/projectStore'

  export default {
    props: {
      projectId: String,
      gitRepoId: String
    },
    methods: {
        submit: async function (event) {
            await setGitRepo({
                name: this.gitRepo.name,
                description: this.gitRepo.description,
                uri: this.gitRepo.uri
            }, this.gitRepo.project_id, this.gitRepo.id);
            this.$router.push({ name: 'gitrepos', params: { id: this.gitRepo.project_id } })
        }
    },
    async setup(props) {
      return {
        gitRepo: await getGitRepo(props.projectId, props.gitRepoId),
      }
    }
  }
</script>

<template>
  <div class="container-fluid" style="font-size: large;">
    <div style="text-align: center;">
      <br>
      <p>Name</p>
      <input v-model="gitRepo.name" placeholder="">
      <br>
      <br>
      <p>Uri</p>
      <input v-model="gitRepo.uri" placeholder="">
      <br>
      <br>
      <p>Description</p>
      <textarea v-model="gitRepo.description" placeholder=""></textarea>

      <br>
      <br>
      <a href="#" v-on:click="submit()">Save</a>
      &nbsp;|&nbsp;
      <router-link :to="{ name: 'gitrepos', params: { id: gitRepo.project_id } }" >Back</router-link>
    </div>
  </div>
</template>

<style scoped>
  a {
    color: rgb(22, 22, 37);
    text-decoration: none;
  }
  input {
    width: 50%;
  }
  textarea {
    width: 50%;
    height: 10em;
  }
</style>