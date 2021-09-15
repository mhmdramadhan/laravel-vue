<template>
  <div class="row">
    <div class="col-md-6">
      <div class="card">
        <div class="card-header">Create Note</div>
        <div class="card-body">
          <form action="#" method="post" @submit.prevent="updateNote">
            <div class="form-group">
              <label for="title">Title</label>
              <input
                type="text"
                v-model="form.title"
                id="title"
                class="form-control"
              />
              <div v-if="theErrors.title" class="mt-2 text-danger">
                {{ theErrors.title[0] }}
              </div>
            </div>
            <div class="form-group">
              <label for="subject">Title</label>
              <select
                @change="selectedSubject"
                id="subject"
                class="form-control"
              >
                <option :value="form.subjectId" v-text="form.subject"></option>
                <template v-for="subject in subjects">
                  <option
                    v-if="form.subjectId !== subject.id"
                    :key="subject.id"
                    :value="subject.id"
                  >
                    {{ subject.name }}
                  </option>
                </template>
              </select>
              <div v-if="theErrors.subject" class="mt-2 text-danger">
                {{ theErrors.subject[0] }}
              </div>
            </div>
            <div class="form-group">
              <label for="description">Description</label>
              <textarea
                v-model="form.description"
                id="description"
                rows="5"
                class="form-control"
              ></textarea>
              <div v-if="theErrors.description" class="mt-2 text-danger">
                {{ theErrors.description[0] }}
              </div>
            </div>

            <button type="submit" class="btn btn-primary">Save</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import VueToast from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";

Vue.use(VueToast);
export default {
  data() {
    return {
      form: [],
      subjects: [],
      theErrors: [],
      selected: "",
    };
  },

  mounted() {
    //   memangil method subject
    this.getSubjects();
    this.getNote();
  },

  methods: {
    async getSubjects() {
      let response = await axios.get("/api/subjects");
      if (response.status === 200) {
        this.subjects = response.data;
      }
    },

    async getNote() {
      let response = await axios.get(
        `/api/notes/${this.$route.params.noteSlug}`
      );
      this.form = response.data.data;
    },

    selectedSubject(e) {
      this.selected = e.target.value;
    },

    async updateNote() {
      try {
        this.form["subject"] = this.selected || this.form.subjectId;

        let response = await axios.patch(
          `/api/notes/${this.$route.params.noteSlug}/edit`,
          this.form
        );
        if (response.status == 200) {
          Vue.$toast.success(response.data.message, {
            position: "top-right",
            duration: 5000,
          });

          this.$router.push("/notes/table");
        }
      } catch (e) {
        //   munculkan error validation laravel
        Vue.$toast.error("something when wrong.", {
          position: "top-right",
          duration: 5000,
        });
        this.theErrors = e.response.data.errors;
      }
    },
  },
};
</script>

<style>
</style>
