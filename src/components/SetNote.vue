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
  <textarea v-model="note.note" placeholder=""></textarea>
  <br>
  <br>
  <a href="#" v-on:click="submit()">Save</a>
  &nbsp;|&nbsp;
  <router-link :to="{ name: 'notes', params: { id: note.project_id } }" >Back</router-link>
</template>
