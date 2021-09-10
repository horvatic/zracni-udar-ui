<script>
export default {
  data() {
    return {
     projects: [
        { 
          id: '785588cf-9ec0-4482-9a5f-df343cec6ac4',
          name: 'Project 1',
          description: 'description of project 1'
        },
        { 
          id: '8c98d8dd-28a0-4d2e-896b-31b1a59fed93',
          name: 'Project 2',
          description: 'description of project 2'
        }
      ]
    }
  }
}
</script>

<template>
  <div>
    <ul>
      <li v-for="project in projects">
        <p>
            <a href="#"> {{ project.name }} </a> 
            <br> 
            <br> 
            {{ project.description }}
        </p>
        <hr>
      </li>
    </ul>
  </div>
</template>

<style scoped>
  ul {
    list-style-type: none;
  }
  p {
    font-size: large;
    text-align: center;
  }
  hr {
    width:35%;
    margin:0 auto;
  }
  a {
    color: rgb(22, 22, 37);
    text-decoration: none;
  }
</style>