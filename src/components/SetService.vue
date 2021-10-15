<script>
  import { getService, setService } from '../store/projectStore'

  export default {
    props: {
      projectId: String,
      serviceId: String
    },
    methods: {
        submit: async function (event) {
            await setService({
                name: this.service.name,
                description: this.service.description,
                uri: this.service.uri,
                health_uri: this.service.health_uri
            }, this.service.project_id, this.service.id);
            this.$router.push({ name: 'services', params: { id: this.service.project_id } })
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
  <div class="container-fluid" style="font-size: large;">
    <div style="text-align: center;">
      <br>
      <p>Name</p>
      <input v-model="service.name" placeholder="">
      <br>
      <br>
      <p>Uri</p>
      <input v-model="service.uri" placeholder="">
      <br>
      <br>
      <p>Health Uri</p>
      <input v-model="service.health_uri" placeholder="">
      <br>
      <br>
      <p>Description</p>
      <textarea v-model="service.description" placeholder=""></textarea>

      <br>
      <br>
      <a href="#" v-on:click="submit()">Save</a>
      &nbsp;|&nbsp;
      <router-link :to="{ name: 'services', params: { id: service.project_id } }" >Back</router-link>
    </div>
  </div>
</template>

<style scoped>
  a {
    color: rgb(22, 22, 37);
    text-decoration: none;
  }
  input {
    width: 50%;
  }
  textarea {
    width: 50%;
    height: 10em;
  }
</style>