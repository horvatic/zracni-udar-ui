<script>
  import { getDiagram, setDiagram } from '../store/projectStore'

  export default {
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
  <p>Name</p>
  <input v-model="diagram.name" placeholder="">

  <p>Uri</p>
  <input v-model="diagram.uri" placeholder="">

  <p>Description</p>
  <textarea v-model="diagram.description" placeholder=""></textarea>

  <br>
  <br>
  <a href="#" v-on:click="submit()">Save</a>
  &nbsp;|&nbsp;
  <router-link :to="{ name: 'diagrams', params: { id: diagram.project_id } }" >Back</router-link>

</template>
