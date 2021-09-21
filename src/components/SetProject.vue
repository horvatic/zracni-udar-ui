<script>
  import { getProjectById, setProjectMetaData } from '../store/projectStore'

  export default {
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
  <p>Project Name</p>
  <input v-model="project.name" placeholder="">

  <p>Project Description</p>
  <input v-model="project.description" placeholder="">
  <br>
  <br>
  <button v-on:click="submit()">Save</button>
  <router-link :to="{  name: 'projects' }" >Back</router-link>

</template>
