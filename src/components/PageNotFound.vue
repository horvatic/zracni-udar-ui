<template>
  <div class="container">
    <div style="text-align: center; font-size: large;">
        <div class="displayheader">
            Resource Not Found
        </div>
        <br>
        <router-link :to="{  name: 'projects' }" >Home</router-link>
    </div>
  </div>
</template>

<style scoped>
  a {
    color: rgb(22, 22, 37);
    text-decoration: none;
  }
</style>