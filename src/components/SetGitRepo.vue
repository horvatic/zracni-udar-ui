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
  <p>Name</p>
  <input v-model="gitRepo.name" placeholder="">

  <p>Description</p>
  <input v-model="gitRepo.description" placeholder="">

  <p>Uri</p>
  <input v-model="gitRepo.uri" placeholder="">
  <br>
  <br>
  <button v-on:click="submit()">Save</button>
  <router-link :to="{ name: 'gitrepos', params: { id: gitRepo.project_id } }" >Back</router-link>

</template>
