<script>
  import { getNotesByProjectId, deleteNote } from '../store/projectStore'

  export default {
    props: {
      id: String
    },
    methods: {
        removeNote: async function (projectId, noteId) {
            await deleteNote(projectId, noteId);
            this.$router.go(0);
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
      {{ note.name }}
      <br>
      <br>
      {{ note.note }}
      <br>
      <br>
      <router-link :to="{  name: 'updatenote', params: { projectId: id, noteId: note.id } }">Edit</router-link>
      &nbsp;|&nbsp;
      <a href="#" v-on:click="removeNote(id, note.id)">Delete</a>
      <br>
      <hr>
      <br>
    </li>
  </ul>
  <router-link :to="{  name: 'addnote', params: { projectId: id } }">Add</router-link>
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