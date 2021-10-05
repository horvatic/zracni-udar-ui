<script>
  import { getBlog, setBlog } from '../store/projectStore'

  export default {
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
  <p>Name</p>
  <input v-model="blog.name" placeholder="">

  <p>Uri</p>
  <input v-model="blog.uri" placeholder="">

  <p>Description</p>
  <textarea v-model="blog.description" placeholder=""></textarea>

  <br>
  <br>
  <a href="#" v-on:click="submit()">Save</a>
  &nbsp;|&nbsp;
  <router-link :to="{ name: 'blogs', params: { id: blog.project_id } }" >Back</router-link>

</template>
