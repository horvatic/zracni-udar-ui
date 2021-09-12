<script setup>
const props = defineProps({
  id: String
})

</script>

<template>
    <h1>Git Repo List</h1>
    <router-link :to="{  name: 'project', params: { id: id } }">Back</router-link>
</template>
