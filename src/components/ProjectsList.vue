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
  <div class="container">
    <br>
    <h1 style="text-align: center;">Projects</h1>
    <br>
    <div class="row justify-content-md-center">
      <div class="col-md-auto" v-for="project in projects">
        <div class="card" style="width: 36rem;">
          <div class="card-body">
            <h5 class="card-title">
              <router-link :to="{  name: 'project', params: { id: project.id } }"><input v-model=" project.name " class="displayclickheader" readonly>
              </router-link>
            </h5>
            <p class="card-text"> <textarea v-model="project.description" class="displaytext" readonly></textarea></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <h5 style="text-align: center;">
    <router-link :to="{  name: 'addproject', params: {} }" >Add Project</router-link>
  </h5>
</template>

<style scoped>
  a {
    color: rgb(22, 22, 37);
    text-decoration: none;
  }
</style>