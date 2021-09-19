<script>
  import { getVideosByProjectId } from '../store/projectStore'

  export default {
    props: {
      id: String
    },
    async setup(props) {
      return {
        videos: await getVideosByProjectId(props.id),
      }
    }
  }
</script>

<template>
  <h1>Video List</h1>
  <ul>
    <li v-for="video in videos">
      {{ video.name }}
      <br>
      <br>
      {{ video.uri }}
      <br>
      <br>
      {{ video.description }}
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
