<template>
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
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
    font-size: large;
    text-align: center;
  }
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
  ul,li {
    list-style-type: none;
    list-style-position:inside;
    margin:0;
    padding:0;
  }
  .hrdash {
    border-top: .5px dashed;
    width:15%;
  }
  .hrsoild {
    width:35%;
    margin:0 auto;
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
