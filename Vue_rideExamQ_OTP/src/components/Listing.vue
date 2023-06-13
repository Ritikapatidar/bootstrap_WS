<script setup>
import { ref, onMounted } from 'vue'
import getData from '../composable/getData.js'
import {addCart} from '../composable/cart.js'
import { pagination } from '../composable/pagination.js'
import {getCart} from '../composable/cart.js'

let data= getCart();
const { curPage, totalPage, pageSize, newRideData, showPrevLink,showNextLink , updateData, updateVisibleData }= pagination();
updateVisibleData();

</script>

<template>

<nav class="navbar navbar-expand-sm border border-bottom-dark">
      <div class="container">
      <p class="display-5 fw-bold my-auto">All Rides</p>
 <ul class="pagination mt-4 m-auto justify-content-center" v-if="totalPage>0">
 <li class="page-item" v-if="showPrevLink()" @click="updateData(curPage-1)"><span class="page-link">Prev</span></li>
  <li class="page-item disabled" v-else ><span class="page-link disabled">Prev</span></li>

 <li class="page-item" v-for="i in 2"><span class="page-link"  @click="updateData(i-1)">{{i}}</span></li>

 <li class="page-item" v-if="showNextLink()" @click="updateData(curPage+1)"><span class="page-link">Next</span></li>
 <li class="page-item disabled" v-else><span class="page-link">Next</span></li>
</ul>
      <router-link v-if="data.length>0" to="/Checkout" class="nav-link fs-5 text-dark">{{data.length}}<i class="bi bi-cart-plus fs-4"></i></router-link>
      <span v-else  class="nav-link fs-5 text-dark">{{data.length}}<i class="bi bi-cart-plus fs-4"></i></span>
  </div>
</nav>

<div class="container-fluid main mx-auto p-0">
 
<div class="row m-auto">
   <div class="col-12 col-sm-6 col-md-4 col-lg-3 my-1" v-for="item in newRideData">
   <div class="card bg-light">
    <img class="card-img-top" :src="item.RideImage" height="250" width="250" alt="Title">
    <div class="card-body">
        <h4 class="card-title">{{item.RideName}}</h4>
        <p class="card-text my-0"><strong>Amount: </strong> {{item.Amount}}</p>
        <p class="card-text"><strong>Age Group: </strong> {{item.AgeGroup}}</p>
        <button @click="addCart(item)">Add To Cart</button>
    </div>
   </div>
   </div>
   </div>
 </div>

</template>

