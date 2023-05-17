<template>
  <b-container >
    <b-row >
      <b-col>
    <!-- Left Column / Headphones Image -->
    <div class="left-column">
      <img data-image="red" style="max-width: 90%;" class="active mt-4" src="../assets/pc.webp" alt="" >
    </div>


    <!-- Right Column -->
    <div class="right-column" style="position: relative;right: -695px; top: -43px;">

      <!-- Product Description -->
      <div class="product-description">
        <span>Gaming Pc</span>
        <h1>MIG 4 | i3-10105F | GTX 1660 SUPER OC | 8GB RAM</h1>
        <p>Marque : MSI <br>
          Référence : GL65LEO10SFK-638XFR
        </p>
      </div>

      <!-- Product Configuration -->
      <div>
        <b-tabs content-class="mt-3">
          <b-tab title="Description">
            <p>Processeur : Intel Core i3-10105F (3.7 GHz / 4.4 GHz)
              CPU Cooler : Intel Stock Cooler
              Carte Mére : Gigabyte H410M S2H V3
              Memoire : XPG SPECTRIX DT60 RGB 8GB (1x8GB) DDR4 3200MHz CL16 GREY
              Carte Graphique : MSI GTX 1660 SUPER Ventus XS OC
              Stockage : PNY CS900 SSD 240GB
              Alimentation : Aerocool LUX 550W 80+ Bronze
              Boitier : White Shark Case GCC-2103 PANZER / 1 Fan RGB</p>
          </b-tab>
          

        </b-tabs>
      </div>
      <div class="container">
        <span id="rateMe1"></span>
      </div>

      <!-- Product Pricing -->
      <div class="product-price">
        <span>2199 DT</span>
        <a href="#" class="cart-btn">Add to cart</a>
      </div>  
      <b-form-rating variant="danger" style="color:#dc3545;" class="mt-4" v-model="value" show-value></b-form-rating>
    </div>
<hr>
<div style="background-color:#212529; border-radius:10px">
<nav class="navbar navbar-expand-sm navbar-dark" >
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation"> 
        <span class="navbar-toggler-icon"></span> 
    </button>
    <div class="end">
      
    </div>    
</nav>
<!-- Main Body -->
<section>
    <div class="container" >
        <div class="row">
            <div class="col-sm-5 col-md-6 col-12 pb-4">
                <h1>Comments</h1>
                <div class="comment mt-4 text-justify float-left">
                    <img src="https://i.imgur.com/yTFUilP.jpg" alt="" class="rounded-circle" width="40" height="40" style="margin-right: 10px;">
                    <h4>Nidhal Boussaa</h4>
                    <span> - 20 October, 2018</span>
                    <br>
                    <p class="mt-2">Nice!</p>
                </div>
              <div class="comment mt-4 text-justify float-left">
                    <img src="https://i.imgur.com/yTFUilP.jpg" alt="" class="rounded-circle" width="40" height="40" style="margin-right: 10px;">
                    <h4>Abdallal Layouni</h4>
                    <span> - 20 October, 2018</span>
                    <br>
                    <p class="mt-2">Nice!</p>
                </div>
            </div>
            <div class="col-lg-4 col-md-5 col-sm-4 offset-md-1 offset-sm-1 col-12 mt-4">
                <form id="algin-form">
                    <div class="form-group">
                        <h4>Leave a comment</h4>
                        <label for="message" style="color:white;" >Message</label>
                        <textarea name="msg" id="" cols="30" rows="5" class="form-control mt-2" style="background-color: white;"></textarea>
                    </div>
                    <div class="form-group">
                        <button type="button" id="post" class="btn">Post Comment</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
</div>
    </b-col>  
    </b-row>
  

  </b-container>
</template>
<script>
export default {
  data() {  
    return {
      value: 4
    }
  }
}
</script>
<style scoped>
html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
  font-family: 'Roboto', sans-serif;
}
.navbar-nav{
    width: 100%;
}

@media(min-width:568px){
    .end{
        margin-left: auto;
    }
}

@media(max-width:768px){
    #post{
        width: 100%;
    }
}


#profile{
    background-color: unset;
    
} 

#post{
    margin: 10px;
    padding: 6px;
    padding-top: 2px;
    padding-bottom: 2px;
    text-align: center;
    background-color: #212529;
    border-color: #dc3545;
    color: white;
    border-width: 1px;
    border-style: solid;
    border-radius: 13px;
    width: 50%;
}

body{
    background-color: white;
}

#nav-items li a,#profile{
    text-decoration: none;
    color: rgb(224, 219, 219);
    background-color: white;
}


.comments{
    margin-top: 5%;
    margin-left: 20px;
}

.darker{
    border: 1px solid #ecb21f;
    background-color: black;
    float: right;
    border-radius: 5px;
    padding-left: 40px;
    padding-right: 30px;
    padding-top: 10px;
}

.comment{
    border: 1px solid #dc3545;
    background-color: #dc3545;
    float: left;
    border-radius: 5px;
    padding-left: 40px;
    padding-right: 30px;
    padding-top: 10px;
    
}
.comment h4,.comment span,.darker h4,.darker span{
    display: inline;
}

.comment p,.comment span,.darker p,.darker span{
    color: white;
}

h1,h4{
    color: white;
    font-weight: bold;
}
label{
    color: rgb(212, 208, 208);
}

#align-form{
    margin-top: 20px;
}
.form-group p a{
    color: white;
}


#darker img{
    margin-right: 15px;
    position: static;
}

.form-group input,.form-group textarea{
    background-color: #dc3545;
    border: 1px solid #dc3545;
    border-radius: 12px;
}

form{
    border: 1px solid #dc3545;
    background-color: #dc3545;
    border-radius: 5px;
    padding: 20px;
 }
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px;
  display: flex;
}

.left-column {
  width: 65%;
  position: relative;
}

.right-column {
  width: 35%;
  margin-top: 60px;
}

.left-column img {
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  transition: all 0.3s ease;
}

.left-column img.active {
  opacity: 1;
}

.product-description {
  border-bottom: 1px solid #E1E8EE;
  margin-bottom: 20px;
}

.product-description span {
  font-size: 12px;
  color: #358ED7;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;
}

.product-description h1 {
  font-weight: 300;
  font-size: 52px;
  color: #43484D;
  letter-spacing: -2px;
}

.product-description p {
  font-size: 16px;
  font-weight: 300;
  color: #86939E;
  line-height: 24px;
}

.product-color {
  margin-bottom: 30px;
}

.color-choose div {
  display: inline-block;
}


/* Cable Configuration */
.cable-choose {
  margin-bottom: 20px;
}

.cable-choose button {
  border: 2px solid #E1E8EE;
  border-radius: 6px;
  padding: 13px 20px;
  font-size: 14px;
  color: #5E6977;
  background-color: #fff;
  cursor: pointer;
  transition: all .5s;
}

.cable-choose button:hover,
.cable-choose button:active,
.cable-choose button:focus {
  border: 2px solid #86939E;
  outline: none;
}

.cable-config {
  border-bottom: 1px solid #E1E8EE;
  margin-bottom: 20px;
}

.cable-config a {
  color: #358ED7;
  text-decoration: none;
  font-size: 12px;
  position: relative;
  margin: 10px 0;
  display: inline-block;
}

.product-price {
  display: flex;
  align-items: center;
}

.product-price span {
  font-size: 26px;
  font-weight: 300;
  color: #43474D;
  margin-right: 20px;
}

.cart-btn {
  display: inline-block;
  background-color: #7DC855;
  border-radius: 6px;
  font-size: 16px;
  color: #FFFFFF;
  text-decoration: none;
  padding: 12px 30px;
  transition: all .5s;
}

.cart-btn:hover {
  background-color: #64af3d;
}
.addtxt{
	padding-top: 10px;
	padding-bottom: 10px;
	text-align: center;
	font-size: 13px;
	width: 350px;
	background-color: #e5e8ed;
	font-weight: 500;
}
.form-control:focus{
	color: #000;
}
.second{
	width: 350px;
	background-color: white;
	border-radius: 4px;
	box-shadow: 10px 10px 5px #aaaaaa;
}
.text1{
	font-size: 13px;
    font-weight: 500;
    color: #56575b;
}
.text2{
	font-size: 13px;
    font-weight: 500;
    margin-left: 6px;
    color: #56575b;
}
.text3{
	font-size: 13px;
    font-weight: 500;
    margin-right: 4px;
    color: #828386;
}
.text3o{
	color: #00a5f4;

}
.text4{
	font-size: 13px;
    font-weight: 500;
    color: #828386;
}
.text4i{
	color: #00a5f4;
}
.text4o{
	color: white;
}
.thumbup{
	font-size: 13px;
    font-weight: 500;
    margin-right: 5px;
}
.thumbupo{
	color: #17a2b8;
}
</style>