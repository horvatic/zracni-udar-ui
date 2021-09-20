<script>
  import { getNotesByProjectId } from '../store/projectStore'

  export default {
    props: {
      id: String
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
      <hr>
      <br>
    </li>
  </ul>
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