<script>
  import { getDiagramsByProjectId, deleteDiagram } from '../store/projectStore'

  export default {
    props: {
      id: String
    },
    methods: {
        removeDiagram: async function (projectId, diagramId) {
            await deleteDiagram(projectId, diagramId);
            this.$router.go(0);
        }
    },
    async setup(props) {
      return {
        diagrams: await getDiagramsByProjectId(props.id),
      }
    }
  }
</script>

<template>
  <h1>Diagram List</h1>
  <ul>
    <li v-for="diagram in diagrams">
      {{ diagram.name }}
      <br>
      <br>
      <a :href="`${diagram.uri}`" target="_blank" > {{ diagram.uri }} </a>
      <br>
      <br>
      {{ diagram.description }}
      <br>
      <br>
      <router-link :to="{  name: 'updatediagram', params: { projectId: id, diagramId: diagram.id } }">Edit</router-link>
      &nbsp;|&nbsp;
      <a href="#" v-on:click="removeDiagram(id, diagram.id)">Delete</a>
      <br>
      <hr>
      <br>
    </li>
  </ul>
  <router-link :to="{  name: 'adddiagram', params: { projectId: id } }">Add</router-link>
  &nbsp;|&nbsp;
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
