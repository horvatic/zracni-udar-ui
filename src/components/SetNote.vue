<script>
  import { getNote, setNote } from '../store/projectStore'

  export default {
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
  <p>Name</p>
  <input v-model="note.name" placeholder="">

  <p>Note</p>
  <input v-model="note.note" placeholder="">
  <br>
  <br>
  <button v-on:click="submit()">Save</button>
  <router-link :to="{ name: 'notes', params: { id: note.project_id } }" >Back</router-link>

</template>
