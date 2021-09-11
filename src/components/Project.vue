<script setup>
import { getProjectId } from '../store/projectStore'

const props =defineProps({
  id: String
})

const project = getProjectId(props.id)
</script>


<template>
  <h1>{{ project.name }}</h1>
  <p>{{ project.description }}</p>
  <router-link :to="{  name: 'projects' }" >Back</router-link>
</template>
