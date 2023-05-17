<template>
  <div class="container">
    <table class="table table-bordered table-dark mt-4">
      <thead>
        <tr>
          <th scope="col">&</th>
          <th scope="col">Nom</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(categories, index) in getCategories" v-bind:key="index">
          <th style="width: 50px; display= flex">{{ index + 1 }}</th>
          <td style="width: 350px; display= flex">{{ categories.name }}</td>
          <td style="width: 350px; display= flex">
              <button @click="deleteCategoryAction(categories.id)" type="submit" class="btn btn-danger">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-trash"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                  />
                </svg>
              </button>
            
            <form>
              <b-button
                class="btn btn-success"
                @click="showModal(categories)"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-pencil-square"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                  />
                </svg>
              </b-button>
            </form>
          </td>
        </tr>
      </tbody>
    </table>
            <b-modal ref="my-modal" hide-footer>
              <center>
                <div>
                  <br />
                  Nom : <br /><input
                    class="mt-4"
                    name="name"
                    value="PC"
                    v-model="categorytoUpdate.name"
                  /><br />
                  <hr />
                  <div class="btn-group">
                    <center>
                      <button type="submit" class="btn btn-success" @click="updateCategoryFunction()">
                        Sumbit
                      </button>
                      &nbsp;
                    </center>
                  </div>
                </div>
              </center>
            </b-modal>
    <div class="justify-centent-center text-center">
      <h1 id="bot">Ajouter Une Categorie</h1>
      <form
        @submit.prevent="createCategoryFunction"
        style="text-align: -webkit-center"
      >
        <div class="row justify-content-center">
          <div class="col-lg-5 col-12">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Nom</label>
              <input
                v-model="newCategoryName"
                type="text"
                class="form-control"
                name="name"
              />
            </div>
            <button type="submit" class="btn btn-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-plus-square"
                viewBox="0 0 16 16"
              >
                <path
                  d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
                />
                <path
                  d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                />
              </svg>
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      newCategoryName: null,
      categorytoUpdate: {name:null,id:null}
    };
  },
  methods: {
    ...mapActions(["updateCategoryAction","getCategoriesAction", "createCategoryAction","deleteCategoryAction"]),

    async createCategoryFunction() {
      await this.createCategoryAction({ name: this.newCategoryName });
    },
    async deleteCategoryFunction(id) {
      var payload = new FormData;
      payload.append("id",id);
      console.log(payload);
      await this.deleteCategoryAction(payload);
    },
    async updateCategoryFunction() {
      var payload = new FormData;
      payload.append("id",this.categorytoUpdate.id);
      payload.append("name",this.categorytoUpdate.name);
      await this.updateCategoryAction(payload);
    },

    async getCategoriesActionFunction() {
      await this.getCategoriesAction();
    },
    showModal(categories){
        this.categorytoUpdate = {...categories};
        this.$refs["my-modal"].show()
    }
  },
  computed: {
    ...mapGetters(["getCategories"]),
  },
  mounted() {
    this.getCategoriesActionFunction();
  },
};
</script>