<script>
  import { getVideosByProjectId, deleteVideo } from '../store/projectStore'

  export default {
    props: {
      id: String
    },
    methods: {
        removeVideo: async function (projectId, videoId) {
            await deleteVideo(projectId, videoId);
            const index = this.videos.findIndex(x => x.id === videoId)
            if (index > -1) {
              this.videos.splice(index, 1);
            }
            this.$forceUpdate()
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
  <div class="container" style="font-size: large;">
    <br>
    <h1 style="text-align: center;">Videos</h1>
    <br>
    <div class="row justify-content-md-center">
      <div class="col-md-auto" v-for="video in videos">
        <div class="card" style="width: 36rem;">
          <div class="card-body">
            <span>Name:</span>
            <h5 class="card-title">
              <input v-model="video.name" class="displaytext" readonly>
            </h5>
            <hr>
            <p class="card-text">
              <span>Uri:</span>
              <a :href="`${video.uri}`" target="_blank" ><input v-model="video.uri" class="displayclicktext" readonly></a>
              <hr>
              <span>Description:</span>
              <textarea v-model="video.description" class="displaytext" readonly></textarea>
              <hr>
              <div style="text-align: center;">
                <router-link :to="{  name: 'updatevideo', params: { projectId: id, videoId: video.id } }">Edit</router-link>
                &nbsp;|&nbsp;
                <a href="#" v-on:click="removeVideo(id, video.id)">Delete</a>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div style="text-align: center;">
      <router-link :to="{  name: 'addvideo', params: { projectId: id } }">Add</router-link>
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