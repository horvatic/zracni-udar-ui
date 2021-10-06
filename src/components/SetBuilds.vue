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
  <p>Name</p>
  <input v-model="build.name" placeholder="">

  <p>Uri</p>
  <input v-model="build.uri" placeholder="">

  <p>Repo Owner</p>
  <input v-model="build.repo_owner" placeholder="">

  <p>Repo Name</p>
  <input v-model="build.repo_name" placeholder="">

  <p>Description</p>
  <textarea v-model="build.description" placeholder=""></textarea>

  <br>
  <br>
  <a href="#" v-on:click="submit()">Save</a>
  &nbsp;|&nbsp;
  <router-link :to="{ name: 'builds', params: { id: build.project_id } }" >Back</router-link>

</template>
