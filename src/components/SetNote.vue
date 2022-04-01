<script>
  import { getNote, setNote } from '../store/projectStore'
  import ApiKey from './ApiKey.vue'

  export default {
    components: {
      ApiKey
	  },
    props: {
      projectId: String,
      noteId: String
    },
    methods: {
        submit: async function (event) {
            await setNote({
                name: this.note.name,
                note: this.note.note
            }, this.note.project_id, this.note.id);
            this.$router.push({ name: 'notes', params: { id: this.note.project_id } })
        }
    },
    async setup(props) {
      return {
        note: await getNote(props.projectId, props.noteId),
      }
    }
  }
</script>

<template>
  <div v-if="note === 'noauth'">
    <ApiKey />
  </div>
  <div v-else class="container-fluid" style="font-size: large;">
    <div style="text-align: center;">
      <br>
      <p>Name</p>
      <input v-model="note.name" placeholder="">
      <br>
      <br>
      <p>Note</p>
      <textarea v-model="note.note" placeholder=""></textarea>
      <br>
      <br>
      <a href="#" v-on:click="submit()">Save</a>
      &nbsp;|&nbsp;
      <router-link :to="{ name: 'notes', params: { id: note.project_id } }" >Back</router-link>
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