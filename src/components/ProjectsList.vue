<script>
import { getProjectsMetaData } from '../store/projectStore'

export default {
  async setup() {
    return {
     projects: await getProjectsMetaData()
    }
  }
}
</script>

<template>
  <div>
    <ul>
      <li v-for="project in projects">
        <p>
            <h1><router-link :to="{  name: 'project', params: { id: project.id } }">{{ project.name }}</router-link></h1>
            <p>{{ project.description }}</p>
        </p>
        <hr>
      </li>
    </ul>
    <br>
    <router-link :to="{  name: 'addproject', params: {} }">Add Project</router-link>
  </div>
</template>

<style scoped>
  hr {
    width:25%;
    margin:0 auto;
  }
  a {
    color: rgb(22, 22, 37);
    text-decoration: none;
  }
</style>