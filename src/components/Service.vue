<script>
  import { deleteService, getService } from '../store/projectStore'
  import ServiceHealth from './ServiceHealth.vue'
  import PageNotFound from './PageNotFound.vue'
  import ApiKey from './ApiKey.vue'

  export default {
    components: {
		  ServiceHealth,
      PageNotFound,
      ApiKey
	  },
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
        service: await getService(props.projectId, props.serviceId),
      }
    }
  }
</script>

<template>
  <div v-if="service === undefined">
    <PageNotFound />
  </div>
  <div v-else-if="service === 'noauth'">
    <ApiKey />
  </div>
  <div v-else class="container">
    <div style="text-align: center; font-size: large;">
      <input v-model="service.name" class="displayheader" readonly>
      <hr class="hrsoild">
      <span>Uri:</span>
      <a :href="`${service.uri}`" target="_blank" >
        <input v-model="service.uri" class="displayclicktext" readonly>
      </a>
      <hr class="hrsoild">
      <span>Health Endpoint:</span>
      <a :href="`${service.health_uri}`" target="_blank" >
        <input v-model="service.health_uri" class="displayclicktext" readonly>
      </a>
      <hr class="hrsoild">
      <span>Service Health:</span>
      <suspense>
        <template #default>
          <ServiceHealth :healthUri="service.health_uri" />
        </template>
        <template #fallback>
          <div>
            Testing...
          </div>
        </template>
      </suspense>
      <hr class="hrsoild">
      <span>Description:</span>
      <textarea v-model="service.description" class="displaytext" readonly></textarea>
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