<template>
  <div class="row">
    <div class="col-md-6">
      <div class="card">
        <div class="card-header">Create Note</div>
        <div class="card-body">
          <form action="#" method="post" @submit.prevent="store">
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
              <select v-model="form.subject" id="subject" class="form-control">
                <option
                  v-for="subject in subjects"
                  :key="subject.id"
                  :value="subject.id"
                >
                  {{ subject.name }}
                </option>
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

            <button
              type="submit"
              class="btn btn-primary d-flex align-items-center"
            >
              Save
              <template v-if="loading">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  style="
                    margin: auto;
                    background: none;
                    display: block;
                    shape-rendering: auto;
                  "
                  width="30px"
                  height="20px"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="xMidYMid"
                >
                  <circle cx="84" cy="50" r="10" fill="#bef2fe">
                    <animate
                      attributeName="r"
                      repeatCount="indefinite"
                      dur="0.8928571428571428s"
                      calcMode="spline"
                      keyTimes="0;1"
                      values="10;0"
                      keySplines="0 0.5 0.5 1"
                      begin="0s"
                    ></animate>
                    <animate
                      attributeName="fill"
                      repeatCount="indefinite"
                      dur="3.571428571428571s"
                      calcMode="discrete"
                      keyTimes="0;0.25;0.5;0.75;1"
                      values="#bef2fe;#4d9ed1;#32cafa;#60e0f4;#bef2fe"
                      begin="0s"
                    ></animate>
                  </circle>
                  <circle cx="16" cy="50" r="10" fill="#bef2fe">
                    <animate
                      attributeName="r"
                      repeatCount="indefinite"
                      dur="3.571428571428571s"
                      calcMode="spline"
                      keyTimes="0;0.25;0.5;0.75;1"
                      values="0;0;10;10;10"
                      keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                      begin="0s"
                    ></animate>
                    <animate
                      attributeName="cx"
                      repeatCount="indefinite"
                      dur="3.571428571428571s"
                      calcMode="spline"
                      keyTimes="0;0.25;0.5;0.75;1"
                      values="16;16;16;50;84"
                      keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                      begin="0s"
                    ></animate>
                  </circle>
                  <circle cx="50" cy="50" r="10" fill="#60e0f4">
                    <animate
                      attributeName="r"
                      repeatCount="indefinite"
                      dur="3.571428571428571s"
                      calcMode="spline"
                      keyTimes="0;0.25;0.5;0.75;1"
                      values="0;0;10;10;10"
                      keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                      begin="-0.8928571428571428s"
                    ></animate>
                    <animate
                      attributeName="cx"
                      repeatCount="indefinite"
                      dur="3.571428571428571s"
                      calcMode="spline"
                      keyTimes="0;0.25;0.5;0.75;1"
                      values="16;16;16;50;84"
                      keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                      begin="-0.8928571428571428s"
                    ></animate>
                  </circle>
                  <circle cx="84" cy="50" r="10" fill="#32cafa">
                    <animate
                      attributeName="r"
                      repeatCount="indefinite"
                      dur="3.571428571428571s"
                      calcMode="spline"
                      keyTimes="0;0.25;0.5;0.75;1"
                      values="0;0;10;10;10"
                      keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                      begin="-1.7857142857142856s"
                    ></animate>
                    <animate
                      attributeName="cx"
                      repeatCount="indefinite"
                      dur="3.571428571428571s"
                      calcMode="spline"
                      keyTimes="0;0.25;0.5;0.75;1"
                      values="16;16;16;50;84"
                      keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                      begin="-1.7857142857142856s"
                    ></animate>
                  </circle>
                  <circle cx="16" cy="50" r="10" fill="#4d9ed1">
                    <animate
                      attributeName="r"
                      repeatCount="indefinite"
                      dur="3.571428571428571s"
                      calcMode="spline"
                      keyTimes="0;0.25;0.5;0.75;1"
                      values="0;0;10;10;10"
                      keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                      begin="-2.6785714285714284s"
                    ></animate>
                    <animate
                      attributeName="cx"
                      repeatCount="indefinite"
                      dur="3.571428571428571s"
                      calcMode="spline"
                      keyTimes="0;0.25;0.5;0.75;1"
                      values="16;16;16;50;84"
                      keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                      begin="-2.6785714285714284s"
                    ></animate>
                  </circle>
                </svg>
              </template>
            </button>
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
      form: {
        title: "",
        description: "",
        subject: "",
      },
      loading: false,
      subjects: [],
      theErrors: [],
    };
  },

  mounted() {
    //   memangil method subject
    this.getSubjects();
  },

  methods: {
    async getSubjects() {
      let response = await axios.get("/api/subjects");
      if (response.status === 200) {
        this.subjects = response.data;
      }
    },

    async store() {
      this.loading = true;
      try {
        let response = await axios.post(
          "/api/notes/create-new-note",
          this.form
        );
        if (response.status === 200) {
          this.loading = false;

          this.form.title = "";
          this.form.description = "";
          this.form.subject = "";
          this.theErrors = [];

          Vue.$toast.success(response.data.message, {
            position: "top-right",
            duration: 5000,
          });
        }
      } catch (e) {
        this.loading = false;
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
