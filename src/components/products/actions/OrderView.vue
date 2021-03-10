<template>
    <div class="products">
           <div class="table-responsive-sm">
        <table id="firstTable" class="table table-hover">
  <thead>
    <tr>

      <th>Date</th>
      <th>House</th>
      <th>Address</th>
       <th>District</th>
        <th>Pin</th>
          <th>Products</th>
           <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr  v-for="(row,index) in orderlist"  :key="index">
  <td>{{row.shippingDate}}</td>
      <td>{{row.address1}}</td>
      <td>{{row.address2}}</td>
      <td>{{row.district}}</td>
       <td>{{row.zipCode}}</td>
       <td>{{row.products.map(el=>el.productName).join(',')}}</td>
       <td>{{row.totalPrice}}</td>

    </tr>
  </tbody>
</table></div>

    </div>
</template>


<script>
import axios from "axios";
export default {
  name: "order-view",
  props: ["orderlist"],
  data() {
    return {
    };
  },
  mounted() {}
};
</script>

<style>
.footerIcons {
  font-size: 95%;
}

/* .card {
  height: 490px;
} */
.card-text {
  /* height: 70px; */
  overflow: hidden;
}
.card-desc{
  font-size: 0.9rem;
}
</style>
