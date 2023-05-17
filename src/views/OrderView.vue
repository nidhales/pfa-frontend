<template>
<b-container>
  <b-row>
    <b-col cols="4" class="mt-4">

<div>
    
    <b-card >
        <a href="/product" class="cardtitle">
      <img src="../assets/pc.webp" style="max-width: 382px;border-radius: 4px;">
      <b-card-text class="mt-4">

      Processeur : Intel Core i3-10105F (3.7 GHz / 4.4 GHz) <br>
      CPU Cooler : Intel Stock Cooler <br>
      Carte Mére : Gigabyte H410M S2H V3 <br>
      Memoire : XPG SPECTRIX DT60 RGB 8GB (1x8GB) DDR4 3200MHz CL16 GREY <br>
      Carte Graphique : MSI GTX 1660 SUPER Ventus XS OC <br>
      Stockage : PNY CS900 SSD 240GB <br>
      Alimentation : Aerocool LUX 550W 80+ Bronze <br>
      Boitier : White Shark Case GCC-2103 PANZER / 1 Fan RGB
      
      </b-card-text>
        <small class="text-muted"><p class="cardprice">2199 DT</p></small>
         </a>
        <div>
         

        
</div>
<div class="mt-3" style="text-align-last: center;">
          <b-button-group>
            <b-button variant="success">Accept</b-button>
            <b-button variant="danger">Decline</b-button>
          </b-button-group>
        </div>
    </b-card>
</div>

</b-col>
</b-row>
</b-container>

</template>

<style scoped>
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