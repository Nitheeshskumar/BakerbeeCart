<template>
    <div class="products">
        <div class="row">

        <div class="col-md-12 order-md-2">
            <div class="table-responsive-sm">
        <table id="firstTable" class="table table-hover table-sm">
  <thead>
    <tr>

      <th>Name</th>
      <th>Joined on</th>
      <th>Email</th>
       <th>Phone</th>
        <th>Orders</th>
    </tr>
  </thead>
  <tbody>
    <tr  v-for="(row,index) in users"  :key="index">

      <td>{{row.fullName}}</td>
      <td>{{row.createdOn}}</td>
      <td>{{row.email}}</td>
       <td>{{row.phoneNumber}}</td>
        <td @click="showOrders(row._id)"> <button type="button" class="btn btn-primary">Orders ({{row.orders.length}}) </button></td>
    </tr>
  </tbody>
</table></div>
        </div>
      </div>
       <modal :header="'View Orders'" :isShow="showModal" v-if="showModal" @close="showModal = false">
            <order-view :orderlist="orders" />
       </modal>
    </div>

</template>


<script>
import OrderView from "@/components/products/actions/OrderView";
import Modal from "@/components/shared/Modal.vue";
import axios from "axios";
import _ from "lodash";

export default {
  name: "allProducts",
  components: {OrderView,  Modal},
  data() {
    return {
     users:[],
       orders: [],
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
    showOrders: function(id){

        this.orders=  this.users.find(el=>el._id===id).orders
this.showModalForm()
    },
    getAllOrders: function() {

      axios
        .get(`${process.env.VUE_APP_BASE_URL}/users`)
        .then(response => {

          this.users = response.data;

        })
        .catch(error => {
          console.log(error);
        });
    },
  },

  created() {
    this.getAllOrders();
  },
};
</script>

<style lang="scss">
.products {
  margin-top: 40px;
}
table {
  font-family: 'Open Sans', sans-serif;
  width: 750px;
  border-collapse: collapse;
  border: 3px solid #44475C;
  margin: 10px 10px 0 10px;
}

table th {
  text-transform: uppercase;
  text-align: left;
  background: #44475C;
  color: #FFF;
  padding: 8px;
  min-width: 30px;
}

table td {
  text-align: left;
  padding: 8px;
  border-right: 2px solid #7D82A8;
}
table td:last-child {
  border-right: none;
}
</style>
