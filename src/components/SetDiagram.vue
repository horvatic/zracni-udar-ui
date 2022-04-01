<script>
  import { getDiagram, setDiagram } from '../store/projectStore'
  import ApiKey from './ApiKey.vue'

  export default {
    components: {
      ApiKey
	  },
    props: {
      projectId: String,
      diagramId: String
    },
    methods: {
        submit: async function (event) {
            await setDiagram({
                name: this.diagram.name,
                description: this.diagram.description,
                uri: this.diagram.uri
            }, this.diagram.project_id, this.diagram.id);
            this.$router.push({ name: 'diagrams', params: { id: this.diagram.project_id } })
        }
    },
    async setup(props) {
      return {
        diagram: await getDiagram(props.projectId, props.diagramId),
      }
    }
  }
</script>

<template>
  <div v-if="diagram === 'noauth'">
    <ApiKey />
  </div>
  <div v-else class="container-fluid" style="font-size: large;">
    <div style="text-align: center;">
      <br>
      <p>Name</p>
      <input v-model="diagram.name" placeholder="">
      <br>
      <br>
      <p>Uri</p>
      <input v-model="diagram.uri" placeholder="">
      <br>
      <br>
      <p>Description</p>
      <textarea v-model="diagram.description" placeholder=""></textarea>

      <br>
      <br>
      <a href="#" v-on:click="submit()">Save</a>
      &nbsp;|&nbsp;
      <router-link :to="{ name: 'diagrams', params: { id: diagram.project_id } }" >Back</router-link>
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