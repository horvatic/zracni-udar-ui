<script>
  export default {
    methods: {
        updateKey: async function () {
            window.localStorage.setItem('ZRACNI_API_KEY', this.apikey);
            this.$router.push({ name: 'projects' });
        }
    },
  }
</script>

<template>
  <div class="container">
    <div style="text-align: center; font-size: large;">
        <div class="displayheader">
            <input v-model="apikey" placeholder="api key">
        </div>
        <br>
         <a href="#" v-on:click="updateKey()">Update Key</a>
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