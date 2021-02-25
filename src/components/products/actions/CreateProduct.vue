<template>
    <div class="createProduct">
        <modal :header="'Create Product'" :isShow="showModal" v-if="showModal" @close="showModal = false">
            <product-form :product="product" v-on:submit-form="productAction"/>
       </modal>
    </div>
</template>
<script>
import Modal from "../../shared/Modal.vue";
import axios from "axios";
import { successToaster, errorToaster } from "../../shared/service/ErrorHandler.js";
import ProductForm from "./ProductForm";
export default {
  name: "createProduct",
  components: { Modal, ProductForm },
  data() {
    return {
      product: new Object(),
      showModal: false
    };
  },
  methods: {
    showModalForm: function() {

      this.showModal = true;
    },
    closeModalForm: function() {
      this.showModal = false;
    },

    productAction: function(product) {
      console.log("Creating new Product", this.product,product.productSeller);
      debugger
if(this.product._id){
  axios
          .put(`${process.env.VUE_APP_BASE_URL}/products/${this.product._id}`, this.product)
          .then(response => {
            this.showLoader = false;
            successToaster(
              "CreatedProduct",
              "Created",this
            );
           this.closeModalForm()
           this.$parent.$parent.getAllProducts()
          })
          .catch(error => {
            console.log(error);
            errorToaster(
              "Registeration Failed",
              "Please try again after sometime",this
            );
          });
}else{
 axios
          .post(`${process.env.VUE_APP_BASE_URL}/products`, this.product)
          .then(response => {
            this.showLoader = false;
            successToaster(
              "CreatedProduct",
              "Created",this
            );
           this.closeModalForm()
           this.$parent.$parent.getAllProducts()
          })
          .catch(error => {
            console.log(error);
            errorToaster(
              "Registeration Failed",
              "Please try again after sometime",this
            );
          });
}



      //
    }
  }
};
</script>
<style lang="scss">
</style>