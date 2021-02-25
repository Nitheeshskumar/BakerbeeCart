<template>
    <div class="edit-product">
       <modal :header="'Edit Product'" :isShow="showModal" v-if="showModal" @close="showModal = false">
            <product-form :product="product" v-on:submit-form="productAction"/>
       </modal>
    </div>
</template>

<script>
import Modal from "../../shared/Modal";
import axios from "axios";
import { successToaster, errorToaster } from "../../shared/service/ErrorHandler.js";
import ProductForm from "./ProductForm";

export default {
  name: "editProduct",
  components: { Modal, ProductForm },
  data() {
    return {
      product: new Object(),
      showModal: false
    };
  },
  methods: {
    setProduct(product) {
      this.showModal = true;
      this.product = product;
    },

    productAction: function(product) {
      console.log("Updated Product Details", product);
      axios
          .put(`${process.env.VUE_APP_BASE_URL}/products/${this.product._id}`, this.product)
          .then(response => {
            this.showLoader = false;
            successToaster(
              "Updated Product",
              "Sucess",this
            );
             this.showModal = false;
             if(this.$parent.$parent.getAllProducts)this.$parent.$parent.getAllProducts();
          })
          .catch(error => {
            console.log(error);
            errorToaster(
              "Registeration Failed",
              "Please try again after sometime",this
            );
          });
      // Update the product to server
    }
  }
};
</script>

<style>
</style>