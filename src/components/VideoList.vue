<script>
  import { getVideosByProjectId, deleteVideo } from '../store/projectStore'

  export default {
    props: {
      id: String
    },
    methods: {
        removeVideo: async function (projectId, videoId) {
            await deleteVideo(projectId, videoId);
            this.$router.go(0);
        }
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
      <br>
      <router-link :to="{  name: 'updatevideo', params: { projectId: id, videoId: video.id } }">Edit</router-link>
      &nbsp;|&nbsp;
      <button v-on:click="removeVideo(id, video.id)">Delete</button>
      <br>
      <hr>
      <br>
    </li>
  </ul>
  <router-link :to="{  name: 'addvideo', params: { projectId: id } }">Add</router-link>
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
