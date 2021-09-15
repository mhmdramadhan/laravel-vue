<template>
  <button ref="deleteNote" @click="destroyNote">Delete</button>
</template>

<script>
import Vue from "vue";
import VueToast from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";

Vue.use(VueToast);
export default {
  props: ["endpoint"],
  methods: {
    async destroyNote() {
      let q = window.confirm("are you sure?");
      if (q == true) {
        let response = await axios.delete(`/api/notes/${this.endpoint}/delete`);
        if (response.status == 200) {
          Vue.$toast.success(response.data.message, {
            position: "top-right",
            duration: 5000,
          });
          this.$refs.deleteNote.parentNode.parentNode.remove();
        }
      }
    },
  },
};
</script>

<style>
</style>
