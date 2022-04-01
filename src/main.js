import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

axios.interceptors.response.use(function (response) {
    return response
  }, function (error) {
    console.log(error)
    if (error.response.status === 401) {
      router.push('/apikey')
    }
    return Promise.reject(error)
  })

createApp(App).use(router).mount('#app');
