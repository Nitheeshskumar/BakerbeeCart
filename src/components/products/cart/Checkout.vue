<template>
  <div class="cart-products">
    <form id="productCU " class=" needs-validation row mt-5" @submit.prevent="createShippingDetail" >
      <div class="col-sm-8">
        <div  >
          <!-- <p v-if="errors.length">
                  <b>Please correct the following error(s):</b>
                  <ul>
                    <li v-for="error in errors" :key="error">{{ error }}</li>
                  </ul>
          </p>-->
           <div
        class="alert alert-danger"
        role="alert"
        v-for="(error, index) in errorMessage"
        :key="index"
      >{{error}}</div>
          <div class="form-group">
            <label for="productName">House No</label>
            <input
            v-model="shippingDetail.address1"
              type="text"
              class="form-control"
              id="address1"
              name="address1"
              placeholder="Enter Address"
              required
            >
          </div>
          <div class="form-group">
            <label for="productCategory">Locality</label>
            <input
              v-model="shippingDetail.address2"
             type="text"
              class="form-control"
              id="address2"
              placeholder="Locality"
              name="address2"
              required
            >
          </div>
          <div class="form-group">
            <label for="productSeller">District</label>
            <input
              v-model="shippingDetail.district"
             type="text"
              class="form-control"
              id="district"
              placeholder="District"
              name="district"
              required
            >
          </div>
          <div class="row">
            <div class="col">
              <div class="form-group">
                <label for="productRating">Pin code</label>
                <input
                  v-model="shippingDetail.zipCode"
                 type="text"
                  class="form-control"
                  id="zipCode"
                  placeholder="Pin"
                   required
                >
              </div>
            </div>
          </div>
          <small
            id="emailHelp"
            class="form-text text-muted"
          >We'll never share your data with anyone else.</small>
          <br>
        </div>
      </div>
      <div class="col-sm-4">
        <cart-calculator ref="cartCalculator"></cart-calculator>
        <ul class="list-group mb-3">
          <router-link to="/products" class="btn btn-primary mt-2 text-white">Continue Shopping</router-link>
          <button
            href="javascript:;;"
            class="btn btn-success mt-2 text-white"
            type="submit"


          >Save & Pay</button>
        </ul>
      </div>
    <!-- </div> -->
    </form>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import CartCalculator from "./CartCalculator";
import axios from "axios";
import { errorToaster,infoToaster } from "../../shared/service/ErrorHandler.js";
export default {
  name: "Checkout",
  components: { CartCalculator },
  data() {
    return {
      shippingDetail: {
        address1: "",
        address2: "",
        district: "",
        zipCode: "",
        shippingDate: "",
        products: [],
        userId: "",
        totalPrice: ""
      },
      errorMessage: []
    };
  },
  methods: {
    createShippingDetail() {
    const key =   Object.keys(this.shippingDetail).find(el=>!this.shippingDetail[el])

    infoToaster("Ooopss !!", "All Units Sold Out",this);


    }
  }
};
</script>

<style lang="scss">
.cart-products {
  div {
    text-align: start;
  }
  #productCU {
    div {
      text-align: start;
    }
    button {
      text-align: center;
    }
  }
}
</style>
