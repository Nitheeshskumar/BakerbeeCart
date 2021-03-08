<template>
  <div class="create-account">
    <form class="form-signup needs-validation" @submit.prevent="createAccount" novalidate>
      <!-- <img class="mb-4" src="../assets/create-account.svg" alt width="72" height="72"> -->
      <h1 class="h3 mb-3 font-weight-normal">Edit Account Info</h1>
      <div
        class="alert alert-danger"
        role="alert"
        v-for="(error, index) in errorMessage"
        :key="index"
      >{{error}}</div>

      <div class="row">
        <div class="col-md-6 mb-3">
            <label for="firstName" class="float-left" > First Name </label>
          <input
            type="text"
            class="form-control"
            id="firstName"
            placeholder="First Name"
            v-model="user.firstName"
            required
          >
          <div class="invalid-feedback">Valid first name is required.</div>
        </div>
        <div class="col-md-6 mb-3">
              <label for="firstName" class="float-left" > Last Name </label>
          <input
            type="text"
            class="form-control"
            v-model="user.lastName"
            id="lastName"
            placeholder="Last Name"
            value
            required
          >
          <div class="invalid-feedback">Valid last name is required.</div>
        </div>
      </div>
      <div class="row">
        <div class="col-md mb-3">
              <label for="firstName" class="float-left" > Email </label>
          <input
            type="text"
            class="form-control"
            v-model="user.email"
            id="emailId"
            placeholder="Email address"
            value
            required
          >
          <div class="invalid-feedback">Valid Email is required.</div>
        </div>
      </div>
       <div class="row">
        <div class="col-md mb-3">
              <label for="firstName" class="float-left" > Phone </label>
          <input
            type="text"
            class="form-control"
            v-model="user.phoneNumber"
            id="phoneNumber"
            placeholder="Phone Number"
            value
            required
          >
          <div class="invalid-feedback">Valid Phone is required.</div>
        </div>
      </div>
      <div class="row">
        <div class="col-md mb-3">
              <label for="firstName" class="float-left" > Password </label>
          <input
            type="text"
            class="form-control"
            id="act-password"
            placeholder="New password"
            value
            v-model="user.password"
            required
          >
          <div class="invalid-feedback">Valid Password is required.</div>
        </div>
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">
        <i class="fa fa-spinner fa-spin mr-1" v-if="showLoader"></i>Update Info
      </button>
    </form>
  </div>

</template>
<script>
import axios from "axios";
import { successToaster, errorToaster } from "@/components/shared/service/ErrorHandler.js";
import { mapState, mapActions, mapMutations } from "vuex";
import { decryptUser } from "@/components/shared/service/authService";
export default {
  name: "CreateAccount",
  data() {
    return {
      showLoader: false,
      user: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phoneNumber:''
      },
      errorMessage: []
    };
  },
  computed: mapState(["cartProducts", "loggedUser"]),
  methods: {
       ...mapMutations(["SET_CART_PRODUCTS", "ADD_LOGGED_USER"]),
    createAccount(e) {
      this.showLoader = true;

      this.errorMessage = [];

      if (this.user.firstName.length < 3) {
        this.errorMessage.push(
          "First Name should contains more than 3 character"
        );
      }

      if (this.ValidateEmail(this.user.email) === false) {
        this.errorMessage.push("Please provide a valid Email address");
      }
       if (this.ValidatePhone(this.user.phoneNumber) === false) {
        this.errorMessage.push("Please provide a valid Mobile No");
      }
      if (this.errorMessage.length === 0) {
        axios
          .put(`${process.env.VUE_APP_BASE_URL}/users/${this.user._id}`, this.user)
          .then(response => {
            this.showLoader = false;
            successToaster(
              "Updated Successfully",
              "User Updated Successfully",this
            );
             this.ADD_LOGGED_USER(response.data);
              this.$router.push(this.$route.query.from || "/");
          })
          .catch(error => {
            console.log(error);
            errorToaster(
              "Update Failed",
              "Please try again after sometime",this
            );
          });
      }
    },

    ValidateEmail(mail) {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return true;
      }
      return false;
    },
    ValidatePhone(num){
      if(/^\d{10}$/.test(num)){
        return true
      }
      return false
    },
    loadProfile(){

   const detail= decryptUser()
   console.log(detail)
   this.user=detail
    }
  },
  created(){
      this.loadProfile()
  }
};
</script>

<style>
.form-signup {
  width: 100%;
  max-width: 500px;
  padding: 15px;
  margin: auto;
}
</style>
