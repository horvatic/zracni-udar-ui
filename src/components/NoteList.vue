<script>
  import { getNotesByProjectId, deleteNote } from '../store/projectStore'

  export default {
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
  <h1>Note List</h1>
  <ul>
    <li v-for="note in notes">
      <input v-model="note.name " class="displaytext" readonly>
      <hr class="hrdash">
      <input v-model="note.note " class="displaytext" readonly>
      <hr class="hrdash">
      <router-link :to="{  name: 'updatenote', params: { projectId: id, noteId: note.id } }">Edit</router-link>
      &nbsp;|&nbsp;
      <a href="#" v-on:click="removeNote(id, note.id)">Delete</a>
      <br>
      <br>
      <hr class="hrsoild">
      <br>
    </li>
  </ul>
  <router-link :to="{  name: 'addnote', params: { projectId: id } }">Add</router-link>
  &nbsp;|&nbsp;
  <router-link :to="{  name: 'project', params: { id: id } }">Back</router-link>
</template>
