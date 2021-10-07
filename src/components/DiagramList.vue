<script>
  import { getDiagramsByProjectId, deleteDiagram } from '../store/projectStore'

  export default {
    props: {
      id: String
    },
    methods: {
        removeDiagram: async function (projectId, diagramId) {
            await deleteDiagram(projectId, diagramId);
            const index = this.diagrams.findIndex(x => x.id === diagramId)
            if (index > -1) {
              this.diagrams.splice(index, 1);
            }
            this.$forceUpdate()
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
      <input v-model="diagram.name" class="displaytext" readonly>
      <hr class="hrdash">
      <a :href="`${diagram.uri}`" target="_blank" ><input v-model="diagram.uri" class="displayclicktext" readonly></a>
      <hr class="hrdash">
      <textarea v-model="diagram.description" class="displaytext" readonly></textarea>
      <hr class="hrdash">
      <router-link :to="{  name: 'updatediagram', params: { projectId: id, diagramId: diagram.id } }">Edit</router-link>
      &nbsp;|&nbsp;
      <a href="#" v-on:click="removeDiagram(id, diagram.id)">Delete</a>
      <br>
      <br>
      <hr class="hrsoild">
      <br>
    </li>
  </ul>
  <router-link :to="{  name: 'adddiagram', params: { projectId: id } }">Add</router-link>
  &nbsp;|&nbsp;
  <router-link :to="{  name: 'project', params: { id: id } }">Back</router-link>
</template>
