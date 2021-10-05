<script>
  import { getVideo, setVideo } from '../store/projectStore'

  export default {
    props: {
      projectId: String,
      videoId: String
    },
    methods: {
        submit: async function (event) {
            await setVideo({
                name: this.video.name,
                description: this.video.description,
                uri: this.video.uri
            }, this.video.project_id, this.video.id);
            this.$router.push({ name: 'videos', params: { id: this.video.project_id } })
        }
    },
    async setup(props) {
      return {
        video: await getVideo(props.projectId, props.videoId),
      }
    }
  }
</script>

<template>
  <p>Name</p>
  <input v-model="video.name" placeholder="">

  <p>Uri</p>
  <input v-model="video.uri" placeholder="">

  <p>Description</p>
  <textarea v-model="video.description" placeholder=""></textarea>
  <br>
  <br>
  <a href="#" v-on:click="submit()">Save</a>
  &nbsp;|&nbsp;
  <router-link :to="{ name: 'videos', params: { id: video.project_id } }" >Back</router-link>

</template>