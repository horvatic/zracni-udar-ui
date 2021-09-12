<script setup>
import { getProjectId } from '../store/projectStore'

const props = defineProps({
  id: String
})

const project = getProjectId(props.id)
</script>


<template>
  <h1>{{ project.name }}</h1>
  <p>{{ project.description }}</p>
  <hr>
  <h2>Notes / Links</h2>
  <router-link :to="{  name: 'notes', params: { id: id } }">Notes</router-link>
  &nbsp;|&nbsp;
  <router-link :to="{  name: 'blogs', params: { id: id } }">Blogs</router-link>
  &nbsp;|&nbsp;
  <router-link :to="{  name: 'youtubes', params: { id: id } }">Youtube Videos</router-link>
  &nbsp;|&nbsp;
  <router-link :to="{  name: 'diagrams', params: { id: id } }">Diagrams</router-link>
  <br>
  <hr>
  <br>
  <h2>Git / Builds</h2>
  <router-link :to="{  name: 'gitrepos', params: { id: id } }">Git Repos</router-link>
  &nbsp;|&nbsp;
  <router-link :to="{  name: 'builds', params: { id: id } }">Builds / Deployments</router-link>
  <br>
  <hr>
  <br>
  <h2>Other</h2>
  <a href="#">Edit</a>
  &nbsp;|&nbsp;
  <a href="#">Delete</a>
  <br>
  <hr>
  <br>
  <router-link :to="{  name: 'projects' }" >Back</router-link>
</template>

<style scoped>
  hr {
    width:25%;
    margin:0 auto;
  }
</style>
