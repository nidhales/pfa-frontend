<template>
  <div>
    <hr />
    <table class="table table-bordered table-dark">
      <thead>
        <tr>
          <th scope="col">&</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Description</th>
          <th scope="col">Stock</th>
          <th scope="col">ytURL</th>
          <th scope="col">Image</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in getProducts" v-bind:key="index">
          <th>{{index + 1}} </th>
          <td>{{product.name}}</td>
          <td>{{product.price}}</td>
          <td style="max-width: 217px">
           {{product.description}}
          </td>
          <td>{{product.stock}}</td>
          <td>{{product.ytURL}}</td>
          <td>
            <img :src="product.image" style="height: 100px; width: 100px" />
          </td>

          <td>
            <div>
              <!-- Using value -->
              <b-button @click="showModal(product)" class="btn btn-success"
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
                  /></svg
              ></b-button>

              <!-- The modal -->
            </div>

              <button type="submit" class="btn btn-danger" @click="deleteProductFunction(product.id)">
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
              <br>
                <button type="submit" class="btn btn-warning" @click="deleteProductFunction(product.id)">
               <svg
                                                    xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor" class="bi bi-bootstrap-reboot" viewBox="0 0 16 16">
                                                    <path
                                                        d="M1.161 8a6.84 6.84 0 1 0 6.842-6.84.58.58 0 1 1 0-1.16 8 8 0 1 1-6.556 3.412l-.663-.577a.58.58 0 0 1 .227-.997l2.52-.69a.58.58 0 0 1 .728.633l-.332 2.592a.58.58 0 0 1-.956.364l-.643-.56A6.812 6.812 0 0 0 1.16 8z" />
                                                    <path
                                                        d="M6.641 11.671V8.843h1.57l1.498 2.828h1.314L9.377 8.665c.897-.3 1.427-1.106 1.427-2.1 0-1.37-.943-2.246-2.456-2.246H5.5v7.352h1.141zm0-3.75V5.277h1.57c.881 0 1.416.499 1.416 1.32 0 .84-.504 1.324-1.386 1.324h-1.6z" />
                                                </svg>
              </button>


          </td>
        </tr>
      </tbody>
    </table>
    <b-modal ref="my-modal" hide-footer>
      <center>
        <form>
          <br />
          Nom :<input
            class="mt-4"
            name="name"
            v-model="producttoUpdate.name"
          /><br />
          Prix :<input
            class="mt-4"
            name="price"
            type="number"
            v-model="producttoUpdate.price"

          /><br />
          Stock :<input
            class="mt-4"
            name="stock"
            type="number"
v-model="producttoUpdate.stock"          /><br />
 ytURL :<input
            class="mt-4"
            name="stock"
v-model="producttoUpdate.ytURL"          /> <br>
          Descrption : <br />
          <textarea class="input" role="textbox" v-model="producttoUpdate.description" contenteditable>
            </textarea
          >

          <hr />
          <div class="btn-group">
            <center>
              <button @click="updateProductFunction"  type=" submit" class="btn btn-success">Sumbit</button>
              &nbsp;
            </center>
          </div>
        </form>
      </center>
    </b-modal>
  </div>
</template>




<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      newCategoryId: null,
      newProductName: null,
      newProductPrice: null,
      newProductDescription: null,
      newProductStock: null,
      newProductImage: null,
      newProductRate: null,
      newProductCommentaire: null,
      newProductytURL: null,

      producttoUpdate: {
        category_id: null,
        id: null,
        name: null,
        price: null,
        description: null,
        stock: null,
        ytURL: null,
      },
    };
  },
  methods: {
    ...mapActions([
      "getProductsAction",
      "createProductAction",
      "getCategoriesAction",
      "updateProductAction",
      "deleteProductAction"
    ]),

    async createProductFunction() {
      var payload = new FormData();
      payload.append("idCat", this.newCategoryId),
        payload.append("name", this.newProductName),
        payload.append("price", this.newProductPrice),
        payload.append("description", this.newProductDescription),
        payload.append("stock", this.newProductStock),
        payload.append("ytURL", this.newProductytURL),
        payload.append("image", this.newProductImage),
        await this.createProductAction(payload);
    },
    async updateProductFunction() {
      var payload = new FormData();
      payload.append("idCat", this.producttoUpdate.category_id),
        payload.append("id", this.producttoUpdate.id),
        payload.append("name", this.producttoUpdate.name),
        payload.append("price", this.producttoUpdate.price),
        payload.append("description", this.producttoUpdate.description),
        payload.append("stock", this.producttoUpdate.stock),
        payload.append("ytURL", this.producttoUpdate.ytURL),
        await this.updateProductAction(payload);
    },
    async deleteProductFunction(id) {
      var payload = new FormData;
      payload.append("id",id);
      console.log(payload);
      await this.deleteProductAction(payload);
    },

    async getProdcutsActionFunction() {
      await this.getProductsAction();
    },
    newProductImageFunction(e) {
      this.newProductImage = e.srcElement.files[0];
    },
    showModal(product) {
      this.producttoUpdate = { ...product };
      this.$refs["my-modal"].show();
    },
  },
  computed: {
    ...mapGetters(["getProducts", "getCategories"]),
  },
  mounted() {
    this.getProdcutsActionFunction();
  },
};
</script>



