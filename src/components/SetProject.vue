<script>
  import { getProjectById, setProjectMetaData } from '../store/projectStore'
  import ApiKey from './ApiKey.vue'

  export default {
    components: {
      ApiKey
	  },
    props: {
      id: String
    },
    methods: {
        submit: async function (event) {
            await setProjectMetaData({
                name: this.project.name,
                description: this.project.description
            }, this.project.id);
            this.$router.push({ name: 'projects' })
        }
    },
    async setup(props) {
      return {
        project: await getProjectById(props.id),
      }
    }
  }
</script>

<template>
  <div v-if="project === 'noauth'">
    <ApiKey />
  </div>
  <div v-else class="container-fluid" style="font-size: large;">
    <div style="text-align: center;">
      <br>
      <p>Project Name</p>
      <input v-model="project.name" placeholder="">
      <br>
      <br>
      <p>Project Description</p>
      <textarea v-model="project.description" placeholder=""></textarea>
      <br>
      <br>
      <a href="#" v-on:click="submit()">Save</a>
      &nbsp;|&nbsp;
      <span v-if="project.id !== undefined">
        <router-link :to="{  name: 'project', params: { id: id } }">Back</router-link>
      </span >
      <span v-else>
        <router-link :to="{  name: 'projects' }" >Back</router-link>
      </span >
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