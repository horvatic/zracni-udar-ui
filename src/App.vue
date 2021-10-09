<template>
  <nav class="navbar navbar-dark bg-dark">
    <div style="margin: 15px;">
      <router-link :to="{  name: 'projects' }" class="navbar-brand">Zracni Udar</router-link>
    </div>
  </nav>
  <suspense>
    <template #default>
      <router-view />
    </template>
    <template #fallback>
      <div>
        Loading...
      </div>
    </template>
  </suspense>
</template>

<style>
  .row {
    display: flex;
    flex-wrap: wrap;
  }
  .row > div[class*='col-'] {
    display: flex;
  }
  .card {
    margin-bottom: 40px;
  }
  .displaytext {
    font-size: 18px;
    background-color: transparent;
    text-align: center;
    resize: none;
    outline: none;
    width: 100%;
    padding: 10px;
    border: none;
    height: 100%;
    font-family:inherit;
    color: #2c3e50;
    cursor: default;
  }
  .displayclicktext {
    font-size: 18px;
    background-color: transparent;
    text-align: center;
    resize: none;
    outline: none;
    width: 100%;
    padding: 10px;
    border: none;
    height: 100%;
    font-family:inherit;
    color: #2c3e50;
    cursor: pointer;
  }
  .displayheader {
    font-size: 36px; 
    font-weight: bold; 
    background-color: transparent;
    text-align: center;
    resize: none;
    outline: none;
    width: 100%;
    padding: 10px;
    border: none;
    height: 100%;
    font-family:inherit;
    color: #2c3e50;
    cursor: default;
  }
  .displayclickheader {
    font-size: 36px; 
    font-weight: bold; 
    background-color: transparent;
    text-align: center;
    resize: none;
    outline: none;
    width: 100%;
    padding: 10px;
    border: none;
    height: 100%;
    font-family:inherit;
    color: #2c3e50;
    cursor: pointer;
  }
</style>
