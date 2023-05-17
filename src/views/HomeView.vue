<template>
<div class="img" style="margin-bottom: -24px;margin-top: -24px;">
  <b-container class="mt-4">
    <b-row >
      <b-col v-for="product in getProducts" :key="product" cols="4"  class="mt-4 mb-4">
       <a href="/product" class="cardtitle">
<div>
    <b-card     :title="product.name">
      <img :src="product.image" style="max-width: 382px;border-radius: 4px;">
      <b-card-text class="mt-4">
    {{product.description}}
      
      </b-card-text>
      <div>
        <small class="text-muted"><p class="cardprice" >{{product.price}} DT</p></small>
      </div>
        
    </b-card>
</div>
</a>
      </b-col>
    </b-row>
  </b-container>
  </div>
</template>



<script>
import { mapActions, mapGetters } from 'vuex'
  export default {
    data() {
        return {}},
    methods:{

        ...mapActions(["getProductsAction","getCategoriesAction"]),
        async getProdcutsFunction() {
      await this.getProductsAction();
    },
    async getCategoriesFunction() {
      await this.getCategoriesAction();
    },
    },
    computed:{
        ...mapGetters(["getProducts","getCategories"])
    },
    mounted(){
        this.getProdcutsFunction();   
        this.getCategoriesFunction ();
  }
  }
</script>




<style scoped>
.img{
  background-image: url("../assets/back.jpg")
}
.cardtitle{
  color: black;
  text-decoration: none;
}
.cardtitle:hover{
  color: grey;
}
.cardprice{
  background-color: #dc3545;
  color: white; border-radius: 30px;
  width: 142px;
  text-align-last: center;
  margin-left: 126px;font-size: 30px;
}
</style>

