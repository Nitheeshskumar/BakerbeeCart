<template>
  <div class="home-component">

    <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <img alt="Vue logo" src="https://instagram.fmaa1-2.fna.fbcdn.net/v/t51.2885-19/s150x150/82029697_477745476484868_149786662325452800_n.jpg?_nc_ht=instagram.fmaa1-2.fna.fbcdn.net&_nc_ohc=tE4av9vbOuoAX8SwP-K&tp=1&oh=6bb492acd7908be26f5296c14bbb28f0&oe=605FC772" width="100px">
          <h3 class="display-5 "><span style="color:#42b983">BakerBees Basket</span></h3>
          <p class="lead">They are baked, especially for you.</p>
        </div>
    </div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item active" aria-current="page">Our Best Products</li>
        <li class="ml-auto" aria-current="page"><router-link to="/products">Show All</router-link></li>
      </ol>

    </nav>
    <BestProducts></BestProducts>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item active " aria-current="page">Our Top Products</li>
        <li class="ml-auto" aria-current="page"><router-link to="/products">Show All</router-link></li>
      </ol>
    </nav>
    <TopProducts></TopProducts>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import BestProducts from "@/components/products/BestProducts.vue";
import TopProducts from "@/components/products/TopProducts.vue";
export default {
  name: "home",
  components: {
    HelloWorld,
    BestProducts,
    TopProducts
  }
};
</script>
<style>
.jumbotron {
  padding: 1rem 0rem;
}
</style>
