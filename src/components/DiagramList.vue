<script>
  import { getDiagramsByProjectId, deleteDiagram } from '../store/projectStore'
  import PageNotFound from './PageNotFound.vue'

  export default {
    components: {
		  PageNotFound
	  },
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
  <div v-if="diagrams === undefined">
    <PageNotFound />
  </div>
  <div v-else class="container" style="font-size: large;">
    <br>
    <h1 style="text-align: center;">Diagrams</h1>
    <br>
    <div class="row justify-content-md-center">
      <div class="col-md-auto" v-for="diagram in diagrams">
        <div class="card" style="width: 36rem;">
          <div class="card-body">
            <span>Name:</span>
            <h5 class="card-title">
              <input v-model="diagram.name" class="displaytext" readonly>
            </h5>
            <hr>
            <p class="card-text">
              <span>Uri:</span>
              <a :href="`${diagram.uri}`" target="_blank" ><input v-model="diagram.uri" class="displayclicktext" readonly></a>
              <hr>
              <span>Description:</span>
              <textarea v-model="diagram.description" class="displaytext" readonly></textarea>
              <hr>
              <div style="text-align: center;">
                <router-link :to="{  name: 'updatediagram', params: { projectId: id, diagramId: diagram.id } }">Edit</router-link>
                &nbsp;|&nbsp;
                <a href="#" v-on:click="removeDiagram(id, diagram.id)">Delete</a>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div style="text-align: center;">
      <router-link :to="{  name: 'adddiagram', params: { projectId: id } }">Add</router-link>
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