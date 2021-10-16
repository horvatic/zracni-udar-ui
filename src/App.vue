<template>
  <nav class="navbar navbar-dark bg-dark">
    <div style="margin: 15px;">
      <router-link :to="{  name: 'projects' }" class="navbar-brand">Zracni Udar</router-link>
    </div>
  </nav>
  <router-view v-slot="{ Component }">
    <template v-if="Component">
      <suspense timeout=0>
        <component :is="Component"></component>
        <template #fallback>
          <div class="centered">
            <div class="spinner-border" style="width: 8rem; height: 8rem;" role="status">
              <span></span>
            </div>
          </div>
        </template>
      </suspense>
    </template>
  </router-view>
</template>

<style>
  .centered {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
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
