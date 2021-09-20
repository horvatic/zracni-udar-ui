<script>
  import { getDiagramsByProjectId } from '../store/projectStore'

  export default {
    props: {
      id: String
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
      {{ diagram.uri }}
      <br>
      <br>
      {{ diagram.description }}
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
