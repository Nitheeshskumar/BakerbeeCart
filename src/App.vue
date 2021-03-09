<template>
  <div id="app" class="container width100">
    <main>
      <nav class="navbar navbar-expand-lg navbar-light bg-light" id="nav">
        <img alt="Vue logo" src="./assets/logo.png" width="50px">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
          v-on:click="toggleNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText" v-bind:class="{ show: show }" >
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <router-link to="/" class="nav-link"  @click.native="closeNavbar">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/baker"  :key="$route.name" class="nav-link link"  @click.native="closeNavbar">BakerBee's</router-link>
            </li>
            <li class="nav-item">
               <router-link to="/willow"  :key="$route.name" class="nav-link" @click.native="closeNavbar">Willow Brook</router-link>
            </li>
              <li class="nav-item">
               <router-link to="/russet"  :key="$route.name" class="nav-link" @click.native="closeNavbar">Russet Henna</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link" @click.native="closeNavbar">Reach Us</router-link>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item d-none d-lg-block">
              <router-link to="/cart" class="nav-link">
                 <i class="fa fa-shopping-cart mr-1"></i>
                  <span class="ml-1">{{this.cartProducts.length}}</span>

              </router-link>
            </li>
            <li class="nav-item dropdown" v-if="isLogged()">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                 v-on:click="toggleNavbar2"
              >{{this.loggedUser.firstName}}</a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" v-bind:class="{ show: nav2 }">
                <router-link to="/profile" class="dropdown-item"   @click.native="closeNavbar">Profile</router-link>
               <router-link to="/cart" class="dropdown-item d-lg-none" @click.native="closeNavbar">

                Cart<span class="ml-1"><i class="fa fa-shopping-cart mr-1"> </i>({{this.cartProducts.length}})</span>
              </router-link>
                <router-link
                  to="/"
                  class="dropdown-item text-danger"
                  @click.native="loc_logout"
                >Logout</router-link>
              </div>
            </li>
            <li class="nav-item" v-if="!isLogged()">
              <router-link to="/login" class="nav-link">Login</router-link>
            </li>
          </ul>
        </div>
      </nav>
      <router-view/>
    </main>

    <!-- <footer class="container-fluid footer text-left mt-3">
      <p class="mr-auto">
        Developed by:
        <strong>Mohammed Ismail</strong>
      </p>
      <div style="float:right">
        <a href="mailto:ikismail7@gmail.com" style="margin-right:10px">
          <i class="fa fa-envelope-open" aria-hidden="true" style="font-size:20px"></i>
        </a>
        <a href="https://github.com/ikismail" target="_blank" style="margin-right:10px">
          <i class="fa fa-github" aria-hidden="true" style="font-size:20px"></i>
        </a>
        <a href="https://www.linkedin.com/in/ikismail7/" target="_blank" style="margin-right:10px">
          <i class="fa fa-linkedin" aria-hidden="true" style="font-size:20px"></i>
        </a>
      </div>
    </footer> -->
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import {
  isLoggedIn,
  getLoggedInUser
} from "./components/shared/service/authService";
export default {
  data() {
    return {
      cartValue: 0,
      show:false,
      nav2:false
    };
  },
  computed: mapState(["cartProducts", "loggedUser"]),
  methods: {
    /* Initially loading the cart products from local storage */

    ...mapMutations(["SET_CART_PRODUCTS", "ADD_LOGGED_USER"]),

    getLocalProducts() {
      const products = JSON.parse(localStorage.getItem("iki-cart"));

      if (products) {
        this.SET_CART_PRODUCTS(products);
      }
    },
    navigate(path){
        this.$router.push({ path: `/${path}`, query: { plan: path },key:path })
    },

    isLogged() {
      return isLoggedIn();
    },

    loc_logout() {
      localStorage.removeItem("_auth");
      this.$router.push("/");
      location.reload();
    },
     toggleNavbar() {
      this.show = !this.show;
       this.nav2 = false;
    },
    toggleNavbar2() {
      this.nav2 = !this.nav2;
    },
    closeNavbar(){
       this.show = false;
       this.nav2 = false;
    }
  },
  created() {
    this.getLocalProducts();

    const loggedUser = getLoggedInUser();

    this.ADD_LOGGED_USER(loggedUser);

    console.log(process.env.NODE_ENV);
    console.log(process.env.VUE_APP_BASE_URL);
  },
};
</script>


<style lang="scss">
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 15px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.link{
    font-weight: bold;
    cursor: all-scroll;
    color: #2c3e50;}
html {
  position: relative;
  min-height: 100%;
}
body {
  margin-bottom: 60px; /* Margin bottom by footer height */
}
.footer {
  position: relative;
  bottom: 0;
  width: 100%;
  height: 60px; /* Set the fixed height of the footer here */
  background-color: #f5f5f5;
}

footer {
  background-color: #f2f2f2;
  padding: 25px;
}

.footer p,
.footer div {
  display: inline;
  vertical-align: top;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  line-height: 28px;
}
.width100{
  max-width:100% !important;
}
.footer p {
  font-weight: bold;
}

* a {
  color: #42b983;
}

* .fa {
  font-size: 18px;
}

.buttonGreen-outline {
  width: 100%;
  color: #41b883;
  background-color: transparent;
  border-color: #41b883;
}
.buttonGreen-outline:hover {
  color: #ffffff;
  background-color: #41b883;
  border-color: #41b883;
}

.buttonGreen {
  color: #fff;
  background-color: #41b883;
}

.buttonGreen:hover {
  background-color: #42a97b;
}
body.modal-open > .wrap {
  overflow: hidden;
  height: 100%;
}

.modal-content,
.modal-dialog,
.modal-body {
  height: inherit;
  min-height: 100%;
  max-height: calc(100vh - 80px);
overflow-y: auto;
}

.modal {
  min-height: 100%;
}
</style>
