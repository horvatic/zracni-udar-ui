<script>
  import { getBlog, setBlog } from '../store/projectStore'
  import ApiKey from './ApiKey.vue'

  export default {
    components: {
      ApiKey
	  },
    props: {
      projectId: String,
      blogId: String
    },
    methods: {
        submit: async function (event) {
            await setBlog({
                name: this.blog.name,
                description: this.blog.description,
                uri: this.blog.uri
            }, this.blog.project_id, this.blog.id);
            this.$router.push({ name: 'blogs', params: { id: this.blog.project_id } })
        }
    },
    async setup(props) {
      return {
        blog: await getBlog(props.projectId, props.blogId),
      }
    }
  }
</script>

<template>
  <div v-if="blog === 'noauth'">
    <ApiKey />
  </div>
  <div v-else class="container-fluid" style="font-size: large;">
    <div style="text-align: center;">
      <br>
      <p>Name</p>
      <input v-model="blog.name" placeholder="">
      <br>
      <br>
      <p>Uri</p>
      <input v-model="blog.uri" placeholder="">
      <br>
      <br>
      <p>Description</p>
      <textarea v-model="blog.description" placeholder=""></textarea>

      <br>
      <br>
      <a href="#" v-on:click="submit()">Save</a>
      &nbsp;|&nbsp;
      <router-link :to="{ name: 'blogs', params: { id: blog.project_id } }" >Back</router-link>
    </div>
  </div>
</template>

<style scoped>
  a {
    color: rgb(22, 22, 37);
    text-decoration: none;
  }
  input {
    width: 50%;
  }
  textarea {
    width: 50%;
    height: 10em;
  }
</style>