<script>
  import { getNotesByProjectId, deleteNote } from '../store/projectStore'
  import PageNotFound from './PageNotFound.vue'
  import ApiKey from './ApiKey.vue'

  export default {
    components: {
		  PageNotFound,
      ApiKey
	  },
    props: {
      id: String
    },
    methods: {
        removeNote: async function (projectId, noteId) {
            await deleteNote(projectId, noteId);
            const index = this.notes.findIndex(x => x.id === noteId)
            if (index > -1) {
              this.notes.splice(index, 1);
            }
            this.$forceUpdate()
        }
    },
    async setup(props) {
      return {
        notes: await getNotesByProjectId(props.id),
      }
    }
  }
</script>

<template>
  <div v-if="notes === undefined">
    <PageNotFound />
  </div>
  <div v-else-if="notes === 'noauth'">
    <ApiKey />
  </div>
  <div v-else class="container" style="font-size: large;">
    <br>
    <h1 style="text-align: center;">Notes</h1>
    <br>
    <div class="row justify-content-md-center">
      <div class="col-md-auto" v-for="note in notes">
        <div class="card" style="width: 36rem;">
          <div class="card-body">
            <span>Name:</span>
            <h5 class="card-title">
              <input v-model="note.name " class="displaytext" readonly>
            </h5>
            <hr>
            <p class="card-text">
              <span>Note:</span>
              <textarea v-model="note.note" class="displaytext" readonly></textarea>
              <hr>
              <div style="text-align: center;">
                <router-link :to="{  name: 'updatenote', params: { projectId: id, noteId: note.id } }">Edit</router-link>
                &nbsp;|&nbsp;
                <a href="#" v-on:click="removeNote(id, note.id)">Delete</a>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div style="text-align: center;">
      <router-link :to="{  name: 'addnote', params: { projectId: id } }">Add</router-link>
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
