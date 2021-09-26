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
                uri: this.build.uri
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

  <p>Description</p>
  <input v-model="build.description" placeholder="">

  <p>Uri</p>
  <input v-model="build.uri" placeholder="">
  <br>
  <br>
  <button v-on:click="submit()">Save</button>
  <router-link :to="{ name: 'builds', params: { id: build.project_id } }" >Back</router-link>

</template>
