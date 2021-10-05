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
</template>
