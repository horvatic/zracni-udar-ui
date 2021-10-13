<script>
  import { deleteService, getServiceStats } from '../store/projectStore'

  export default {
    props: {
      projectId: String,
      serviceId: String
    },
    methods: {
        removeService: async function (projectId, serviceId) {
            await deleteService(projectId, serviceId);
            this.$router.push({  name: 'services', params: { id: projectId } });
        }
    },
    async setup(props) {
      return {
        serviceStats: await getServiceStats(props.projectId, props.serviceId),
      }
    }
  }
</script>

<template>

  <div class="container">
    <div style="text-align: center; font-size: large;">
      <input v-model="serviceStats.service.name" class="displayheader" readonly>
      <hr class="hrsoild">
      <a :href="`${serviceStats.service.uri}`" target="_blank" >
        <input v-model="serviceStats.service.uri" class="displayclicktext" readonly>
      </a>
      <hr class="hrsoild">
      <a :href="`${serviceStats.service.health_uri}`" target="_blank" >
        <input v-model="serviceStats.service.health_uri" class="displayclicktext" readonly>
        <div v-if="serviceStats.heatlh === 'healthy'">
          <span class="displayclicktext">HEALTHY</span>
        </div>
        <div v-else-if="serviceStats.heatlh === 'unhealthy'">
          <span class="displayclicktext">UNHEALTHY</span>
        </div>
        <div v-else-if="serviceStats.heatlh === 'unknown'">
          <span class="displayclicktext">UNKNOWN</span>
        </div>
      </a>
      <hr class="hrsoild">
      <textarea v-model="serviceStats.service.description" class="displaytext" readonly></textarea>
      <hr class="hrsoild">
      <div style="text-align: center;">
        <router-link :to="{  name: 'updateservice', params: { projectId: projectId, serviceId: serviceId } }">Edit</router-link>
        &nbsp;|&nbsp;
        <a href="#" v-on:click="removeService(projectId, serviceId)">Delete</a>
      </div>
      <hr class="hrsoild">
      <div style="text-align: center;">
        <router-link :to="{  name: 'services', params: { id: projectId } }">Back</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
  a {
    color: rgb(22, 22, 37);
    text-decoration: none;
  }
</style>