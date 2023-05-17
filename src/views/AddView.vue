<template>
    <div id="bot" class="justify-centent-center text-center">
            <h1 style="color: #dc3545  ; text-align:center ; font-family: 'Segoe UI' " class="mt-4">
                Add New Product
            </h1>
            <div class="row justify-content-center">
                <div class="col-lg-5 col-12">
                    <form  @submit.prevent="createProductFunction"  action='' enctype="multipart/form-data">
  
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Name</label>
                            <input v-model="newProductName" type="text" class="form-control" name="name">
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Price</label>
                            <input v-model="newProductPrice" type="number" class="form-control" name="price">
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Description</label>
                            <input v-model="newProductDescription" type="text" class="form-control" name="description">
                        </div>
                        <div class="mb-3">
                            <label for="formFileMultiple" class="form-label">Image</label>
                            <input @change="newProductImageFunction" class="form-control" type="file" name="prodimage">
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Stock</label>
                            <input v-model="newProductStock" type="number" class="form-control" name="stock">
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">YTurl</label>
                            <input v-model="newProductytURL" type="text" class="form-control" name="ytURL">
                        </div>

                        <div class="mb-3">
                             <label  for="formFileMultiple" class="form-label">Categorie</label>
                            <select v-model="newCategoryId" class="form-select" name="id" style="background-color: white">
                               
                                        <option v-for="category in getCategories" v-bind:key="category" :value="category.id">
                                        {{category.name}}
                                        </option>
                                  
                            </select>
                        </div>

                        <div class="btn-group">
                            <button type="submit" class="btn btn-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-plus-square" viewBox="0 0 16 16">
                                    <path
                                        d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                    <path
                                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg></button>
                        </div>
                    </form>
                </div>

            </div>
            <a href="#top"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                    class="bi bi-arrow-up-square" viewBox="0 0 16 16" style="float: right;">
                    <path fill-rule="evenodd"
                        d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 9.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
                </svg></a>
        </div>


</template>
<script>
import { mapActions, mapGetters } from 'vuex'
  export default {
    data() {
        return {
            newCategoryId:null,
            newProductName:null,
            newProductPrice:null,
            newProductDescription:null,
            newProductStock:null,
            newProductImage:null,
            newProductRate:null,
            newProductCommentaire:null,
            newProductytURL:null,           
        }},
    methods:{

        ...mapActions(["getProductsAction","createProductAction","getCategoriesAction"]),

        async createProductFunction(){
            var payload = new FormData;
                payload.append("idCat" ,this.newCategoryId),
                payload.append("name" ,this.newProductName),
                payload.append("price" ,this.newProductPrice),
                payload.append("description" ,this.newProductDescription),
                payload.append("stock" ,this.newProductStock),
                payload.append("ytURL" ,this.newProductytURL),
                payload.append("image" ,this.newProductImage),

            await this.createProductAction(payload); 
        },

        async getProdcutsActionFunction(){
            await this.getProductsAction(); 
        },
        newProductImageFunction(e){
            this.newProductImage = e.srcElement.files[0];
        }
    },
    computed:{
        ...mapGetters(["getProducts","getCategories"])
    },
    mounted(){
        this.getProdcutsActionFunction();   
        this.getCategoriesAction ();
}
  }
</script>