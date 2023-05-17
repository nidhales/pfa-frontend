import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios" 
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Categories:[],
    Products:[]
  },
  getters: {
    getCategories:state=>state.Categories,
    getProducts:state=>state.Products

  },
  mutations: {
    setCategories(state, payload){
      state.Categories = payload
    },
    setProducts(state, payload){
      state.Products = payload
    },
    setEmtyCommit(){
    },
  },
  actions: {
    async getCategoriesAction({commit}){
      const response = await axios.get("http://127.0.0.1:8000/api/categories")
      commit("setCategories",response.data.data)
  },
  async createCategoryAction({commit},payload){
    const response = await axios.post("http://127.0.0.1:8000/api/categories",payload)
    commit("setCategories",response.data.data)
    window.location.reload();
  },
  async getProductsAction({commit}){
    const response = await axios.get("http://127.0.0.1:8000/api/products")
    commit("setProducts",response.data.data)
  },
  async createProductAction({commit},payload){
    await axios.post("http://127.0.0.1:8000/api/products",payload)
    commit("setEmtyCommit");
    window.location.reload();
  },
  async deleteCategoryAction({commit},payload){
    console.log(payload);
    await axios.post("http://127.0.0.1:8000/api/categoriesdelete",{id:payload})
    commit("setEmtyCommit");
    
    window.location.reload();
  },
  async updateCategoryAction({commit},payload){
    const response = await axios.post("http://127.0.0.1:8000/api/categoriesupdate",payload)
    commit("setCategories",response.data.data)
    window.location.reload();
  },
  async updateProductAction({commit},payload){
    await axios.post("http://127.0.0.1:8000/api/productsupdate",payload)
    commit("setEmtyCommit");
    // window.location.reload();
  },
  async deleteProductAction({commit},payload){
    console.log(payload);
    await axios.post("http://127.0.0.1:8000/api/productsdelete",payload)
    commit("setEmtyCommit");
    
    window.location.reload();
  }

  },
  modules: {
  }
})
