<script>
  import { getServicesByProjectId, deleteService } from '../store/projectStore'

  export default {
    props: {
      id: String
    },
    methods: {
        removeService: async function (projectId, serviceId) {
            await deleteService(projectId, serviceId);
            const index = this.services.findIndex(x => x.id === serviceId)
            if (index > -1) {
              this.services.splice(index, 1);
            }
            this.$forceUpdate()
        }
    },
    async setup(props) {
      return {
        services: await getServicesByProjectId(props.id),
      }
    }
  }
</script>

<template>
  <div class="container" style="font-size: large;">
    <br>
    <h1 style="text-align: center;">Services</h1>
    <br>
    <div class="row justify-content-md-center">
      <div class="col-md-auto" v-for="service in services">
        <div class="card" style="width: 36rem;">
          <div class="card-body">
            <span>Name:</span>
            <h5 class="card-title">
              <router-link :to="{  name: 'service', params: { projectId: id, serviceId: service.id } }">
                <input v-model="service.name" class="displayclicktext" readonly>
              </router-link>
            </h5>
            <hr>
            <p class="card-text">
              <span>Description:</span>
              <textarea v-model="service.description" class="displaytext" readonly></textarea>
              <hr>
              <div style="text-align: center;">
                <router-link :to="{  name: 'updateservice', params: { projectId: id, serviceId: service.id } }">Edit</router-link>
                &nbsp;|&nbsp;
                <a href="#" v-on:click="removeService(id, service.id)">Delete</a>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div style="text-align: center;">
      <router-link :to="{  name: 'addservice', params: { projectId: id } }">Add</router-link>
      &nbsp;|&nbsp;
      <router-link :to="{  name: 'project', params: { id: id } }">Back</router-link>
    </div>
  </div>
</template>

<style scoped>
  a {
    color: rgb(22, 22, 37);
    text-decoration: none;
  }
</style>