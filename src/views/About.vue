<template>
  <div class="about">
    <div class="container">

 <div class="modal-content text-center">
        <div class="modal-header">
          <h4 class="modal-title" style="margin: 0 auto">
          Reach Us Out At  </h4>

        </div>
        <div class="modal-body">
          <button type="button" class="btn btn-outline-danger mb-2 widthset" onclick="window.open('https://www.instagram.com/bakerbees_basket/')" >
          <img src="../assets/instalogo.png" height="20px" > BakerBee's Basket</button> <br/>
           <button type="button" class="btn btn-outline-danger mb-2 widthset" onclick="window.open('https://www.instagram.com/_willow_brook_/')">
          <img src="../assets/instalogo.png" height="20px" >Willow Brook</button> <br/>
           <button type="button" class="btn btn-outline-danger widthset" onclick="window.open('https://www.instagram.com/russ.et/')">
          <img src="../assets/instalogo.png" height="20px" > Russet Henna</button>




        </div>
      </div>


      <div class="modal-content text-center mt-5">
        <div class="modal-header">
          <h4 class="modal-title" style="margin: 0 auto">
            More About
            <span style="color:crimson">Developer</span>
          </h4>
        </div>
        <div class="modal-body">
          <img
            src="https://avatars.githubusercontent.com/u/40543713?s=400&u=772bfe725eda1ae84abd32a22dcb1392c94ac3e5&v=4"
            name="aboutme"
            width="140"
            height="140"
            border="0"
            class="avatar"
          >
          <h3 class="media-heading">Nitheesh S Kumar</h3>
          <h6>
            <strong>nitheeshskoffice@gmail.com</strong>
          </h6>
          <!-- <h6>
            <a href="https://ikismail.github.io/" target="_blank">ikismail.github.io</a>
            <strong></strong>
          </h6> -->

          <span class="badge badge-warning p-2 m-1">Angular</span>
          <span class="badge badge-primary p-2 m-1">Vuejs</span>
          <span class="badge badge-secondary p-2 m-1">React</span>
          <span class="badge badge-success p-2 m-1">Github</span>
          <span class="badge badge-danger p-2 m-1">RestService</span>

        </div>
        <!-- <div class="modal-footer" style="margin: 0 auto">
          <button type="button" class="btn btn-default" data-dismiss="modal">Read More</button>
        </div>-->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cartValue: 0,
      show:false,
      nav2:false
    };
  },
   methods: {
     navigate(route){

     }
   }
}
 </script>

<style>
.avatar {
  border-radius: 10px;
}
.widthset{
  width:200px
}
</style>
