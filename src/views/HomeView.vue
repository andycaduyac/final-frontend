<script>
export default {
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
}
</script>
<template>
<div class="home">
  <!-- BIG CARD DISPLAY -->
    <!-- <div class="card1">
      <div class="card shadow-lg mb-5 mt-2 text-white bg-white rounded">
          <img class="card-img" src="https://images.unsplash.com/photo-1621293954908-907159247fc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Card image">
        <div class="card-img-overlay">
          <h1 class="card-title">Hotel Name</h1>
          <p class="card-text">This hotel is best for all your needs. <br>
          Starts with as low as 150$
          </p>
          <div class="position-absolute bottom-0 end-0 p-4">
            <router-link to="/reservations">
            <button type="button" class="btn btn-primary btn-md">Book Now</button>
            </router-link>
          </div>
        </div>
    </div>
  </div> -->
  
  <!-- carousel -->
  <div id="carouselExampleCaptions" class="carousel slide mt-3 mb-4 shadow-lg " data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://images.unsplash.com/photo-1621293954908-907159247fc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" class="d-block w-100" alt="Image1">
        <div class="carousel-caption d-none d-md-block">
          <h5>First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100" alt="Image2">
        <div class="carousel-caption d-none d-md-block">
          <h5>Second slide label</h5>
          <p>Some representative placeholder content for the second slide.</p>
        </div>
    </div>
    <div class="carousel-item">
        <img src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100" alt="Image3">
        <div class="carousel-caption d-none d-md-block">
          <h5>Third slide label</h5>
          <p>Some representative placeholder content for the third slide.</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
</div>
  <!-- carousel -->
  <!-- CARD GROUP -->

  <h3>Rooms:</h3>
  <div class="card-group shadow-lg mt-3 mb-5 bg-secondary rounded">
    <div class="card">
      <router-link to="/form">
        <img src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="card-img-top w-100 p-2" alt="Image1">
    </router-link>
      <div class="card-body">
        <h5 class="card-title">Single</h5>
        <p class="card-text">The generic Single Room, perfect for loners such as yourself.</p>
        <div class="float-end">
          <router-link to="/form" class="btn btn-primary"> Book Now</router-link>
        </div>
      </div>
    </div>
    <div class="card">
      <router-link to="/form">
        <img src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="card-img-top p-2" alt="Image2">
      </router-link>
      <div class="card-body">
        <h5 class="card-title">Double</h5>
        <p class="card-text">Double Room, bring your significant other or just a close "friend".</p>
        <div class="float-end">
          <router-link to="/form" class="btn btn-primary"> Book Now</router-link>
        </div>
      </div>
    </div>
    <div class="card">
      <router-link to="/form">
        <img src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="card-img-top p-2" alt="Image3">
      </router-link>
      <div class="card-body">
        <h5 class="card-title">Quad</h5>
        <p class="card-text">Have some fun time sleepover with your squad with the Quad Room.</p>
        <div class="float-end">
          <router-link to="/form" class="btn btn-primary"> Book Now</router-link>
        </div>
      </div>
    </div>
  </div>


</div>
           <!-- <div class="ss">
            <div class="card shadow-lg p-3 mb-5 bg-white rounded" style="width: 16rem; height:20rem;">
              <img class="card-img-top" style="height:170px; position:absolute; top:0px;" src="/images/hotel.webp">
                 <div class="card-body">
                     <h5 class="card-title" style="top:60%; position:relative; font-size:15px; font-weight:bold;">Save 15% or more</h5>
                       <p class="card-text"  style="top:58%; position:relative; font-size:13px;">Plan your dream trip with a Getaway Deal</p>
                      
              </div>
           </div>
        </div>

         <div class="sd">
            <div class="card shadow-lg p-3 mb-5 bg-white rounded" style="width: 16rem; height:20rem;">
              <img class="card-img-top" style="height:170px; position:absolute; top:0px;" src="/images/room.jpg">
                 <div class="card-body">
                     <h5 class="card-title" style="top:60%; position:relative; font-size:15px; font-weight:bold;">Extra space for family and friends</h5>
                       <p class="card-text"  style="top:58%; position:relative; font-size:13px;">Enjoy a wide range of apartments and villas </p>
              </div>
           </div>
        </div>

        <div class="sf">
            <div class="card shadow-lg p-3 mb-5 bg-white rounded" style="width: 16rem; height:20rem;">
              <img class="card-img-top" style="height:170px; position:absolute; top:0px;" src="/images/pool.jpg">
                 <div class="card-body">
                     <h5 class="card-title" style="top:60%; position:relative; font-size:15px; font-weight:bold;">Stay longer and save more!</h5>
                       <p class="card-text"  style="top:58%; position:relative; font-size:13px;">Save up to 20% extra on stays longer than a week.</p>
              </div>
           </div>
        </div>
  
        <div class="card" style="width:100%; height:13%; left:0px; bottom:0px; position:absolute;">

  
</div> -->


  


</template>


<style scoped>

/* img{
    object-fit: cover;
    width: 100%;
    height:90%;
    top:9%;
    left:0px;
}

.ss{
    position: absolute;
    top: 17%;
    left: 13%;
}


.sd{
    position: absolute;
    top: 17%;
    left:40%;
}

.sf{
    position: absolute;
    top: 17%;
    left:67%;
} */

</style>
