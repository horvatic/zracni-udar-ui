<script>
  import { getBlogsByProjectId, deleteBlog } from '../store/projectStore'

  export default {
    props: {
      id: String
    },
    methods: {
        removeBlog: async function (projectId, blogId) {
            await deleteBlog(projectId, blogId);
            const index = this.blogs.findIndex(x => x.id === blogId)
            if (index > -1) {
              this.blogs.splice(index, 1);
            }
            this.$forceUpdate()
        }
    },
    async setup(props) {
      return {
        blogs: await getBlogsByProjectId(props.id),
      }
    }
  }
</script>

<template>
  <h1>Blogs List</h1>
  <ul>
    <li v-for="blog in blogs">
      <input v-model="blog.name" class="displaytext" readonly>
      <hr class="hrdash">
      <a :href="`${blog.uri}`" target="_blank" > <input v-model="blog.uri" class="displayclicktext" readonly></a>
      <hr class="hrdash">
      <textarea v-model="blog.description" class="displaytext" readonly></textarea>
      <hr class="hrdash">
      <router-link :to="{  name: 'updateblog', params: { projectId: id, blogId: blog.id } }">Edit</router-link>
      &nbsp;|&nbsp;
      <a href="#" v-on:click="removeBlog(id, blog.id)">Delete</a>
      <br>
      <br>
      <hr class="hrsoild">
      <br>
    </li>
  </ul>
  <router-link :to="{  name: 'addblog', params: { projectId: id } }">Add</router-link>
  &nbsp;|&nbsp;
  <router-link :to="{  name: 'project', params: { id: id } }">Back</router-link>
</template>
