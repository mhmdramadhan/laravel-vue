<template>
  <div>
      <h1>{{ note.title }}</h1>
      <hr>
      {{ note.published }} - {{ note.subject }}

      {{ note.description }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      note: [],
    };
  },
  mounted() {
    this.getNote()
  },

  methods: {
    async getNote() {
      let response = await axios.get(
        "/api/notes/" + this.$route.params.noteSlug
      );
      this.note = response.data.data
    },
  },
};
</script>

<style>
</style>
