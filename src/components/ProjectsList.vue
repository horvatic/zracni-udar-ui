<script>
import { getAllProjects } from '../store/projectStore'

export default {
  data() {
    return {
     projects: getAllProjects()
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
  </div>
</template>

<style scoped>
  ul {
    list-style-type: none;
  }
  hr {
    width:25%;
    margin:0 auto;
  }
  a {
    color: rgb(22, 22, 37);
    text-decoration: none;
  }
</style>