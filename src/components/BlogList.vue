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
  <div class="container" style="font-size: large;">
    <br>
    <h1 style="text-align: center;">Blogs</h1>
    <br>
    <div class="row justify-content-md-center">
      <div class="col-md-auto" v-for="blog in blogs">
        <div class="card" style="width: 36rem;">
          <div class="card-body">
            <h5 class="card-title">
              <input v-model="blog.name" class="displaytext" readonly>
            </h5>
            <hr>
            <p class="card-text">
              <a :href="`${blog.uri}`" target="_blank" >
                <input v-model="blog.uri" class="displayclicktext" readonly>
              </a>
              <hr>
              <textarea v-model="blog.description" class="displaytext" readonly></textarea>
              <hr>
              <div style="text-align: center;">
                <router-link :to="{  name: 'updateblog', params: { projectId: id, blogId: blog.id } }">Edit</router-link>
                &nbsp;|&nbsp;
                <a href="#" v-on:click="removeBlog(id, blog.id)">Delete</a>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div style="text-align: center;">
      <router-link :to="{  name: 'addblog', params: { projectId: id } }">Add</router-link>
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