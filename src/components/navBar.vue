<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="danger">
    <b-container fluid >
    <b-row style="width:100%;">
    <b-col cols="2"></b-col>
     <b-col cols="1">
       <div>
  <b-button variant="danger" href="/" class="m-md-2">HOME</b-button>
</div>
    </b-col>
    <b-col cols="1">
       <div>
  <b-button variant="danger" class="m-md-2">PC</b-button>
</div>
    </b-col>
    <b-col cols="1">
       <div>
  <b-button variant="danger" class="m-md-2">LAPTOP</b-button>
</div>
    </b-col>
    <b-col cols="1">
       <div>
  <b-button variant="danger" class="m-md-2">MONITORS</b-button>
</div>
    </b-col>
    <b-col cols="1">
       <div>
  <b-button variant="danger" class="m-md-2">CONSOLE</b-button>
</div>
    </b-col>
    <b-col cols="1">
       <div>
  <b-button variant="danger" class="m-md-2">ACCESSORIES</b-button>
</div>
    </b-col>
    <b-col cols="1">
       <div>
  <b-button variant="danger" class="m-md-2">COMPONENTS</b-button>
</div>
    </b-col>
    <b-col cols="1">
       <div>
  <b-button variant="danger" class="m-md-2">DIGITAL</b-button>
</div>
    </b-col>
     <b-col cols="1" >

           <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                <b-collapse id="nav-collapse" is-nav style="display: none; justify-content: end;position: relative;top: 6px;">
                
                <b-navbar-nav class="ml-auto" >
                
                    <b-nav-item-dropdown left >

                    <template #button-content>
                        <em>User</em>
                    </template>
                    <b-dropdown-item href="/register" id="dropdown-dropleft" dropleft text="Drop-Left">Register</b-dropdown-item>
                    <b-dropdown-item href="/login">Sign In</b-dropdown-item>
                    <b-dropdown-item href="/add">Add Product</b-dropdown-item>
                    <b-dropdown-item href="/crud">Stock management</b-dropdown-item>
                    <b-dropdown-item href="/categorie">categories management</b-dropdown-item>
                    <b-dropdown-item href="/order">Orders</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav></b-collapse>
                </b-col>
                 <b-col cols="2">
    </b-col>
   
   
  </b-row>
</b-container> 
</b-navbar> 
</div>
</template>

<style>
.navtitle{
  color: white;
  text-decoration: none;
}
.navtitle:hover{
  color: grey;
  text-decoration: none;
}
</style>