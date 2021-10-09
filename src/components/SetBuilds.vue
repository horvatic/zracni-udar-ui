<script>
  import { getBuild, setBuild } from '../store/projectStore'

  export default {
    props: {
      projectId: String,
      buildId: String
    },
    methods: {
        submit: async function (event) {
            await setBuild({
                name: this.build.name,
                description: this.build.description,
                uri: this.build.uri,
                repo_owner: this.build.repo_owner,
                repo_name: this.build.repo_name
            }, this.build.project_id, this.build.id);
            this.$router.push({ name: 'builds', params: { id: this.build.project_id } })
        }
    },
    async setup(props) {
      return {
        build: await getBuild(props.projectId, props.buildId),
      }
    }
  }
</script>

<template>
  <div class="container-fluid" style="font-size: large;">
    <div style="text-align: center;">
      <br>
      <p>Name</p>
      <input v-model="build.name" placeholder="">
      <br>
      <br>
      <p>Uri</p>
      <input v-model="build.uri" placeholder="">
      <br>
      <br>
      <p>Repo Owner</p>
      <input v-model="build.repo_owner" placeholder="">
      <br>
      <br>
      <p>Repo Name</p>
      <input v-model="build.repo_name" placeholder="">
      <br>
      <br>
      <p>Description</p>
      <textarea v-model="build.description" placeholder=""></textarea>

      <br>
      <br>
      <a href="#" v-on:click="submit()">Save</a>
      &nbsp;|&nbsp;
      <router-link :to="{ name: 'builds', params: { id: build.project_id } }" >Back</router-link>
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