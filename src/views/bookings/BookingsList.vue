<template>
  <div>
     
    
       <div class="w3-col m3">
           <div class="card col-md-8  shadow-lg p-3 mb-5 bg-light rounded" style="width: 17rem; margin-top:43px; position:fixed;">
            <h1 style=" font-weight:normal; font-size:28px;">Reservation Form</h1>
            
               <div class="card-body bg=gradient-light ">
                 <div>
                   <label for="title" >Full Name </label>
                   <input type="text" v-model="reservation.fullname" class="w3-input w3-border" >
                 </div>
                 
                  <div>
                  <label for="title" >Type</label>
                  <input type="text" v-model="reservation.type" class="w3-input w3-border">
                 </div>
                 

                  <div>
                  <label for="title" >Arrival Date </label>
                  <input type="date" v-model="reservation.arrival_date" class="w3-input w3-border">
                 </div>

                  <div>
                  <label for="title" >Departure Date </label>
                  <input type="date" v-model="reservation.departure_date" class="w3-input w3-border">
                 </div>
                  <button class="btn btn-sm btn-primary border border-light" @click="submitReservation" style="margin-top:30px; margin-left:150px;">Add</button>
          
          </div>

         </div>
        </div>
     
          <div class="col-md-8  shadow-lg p-3 mb-5 bg-light rounded" style="position:absolute; left:31%; top:100px; ">
           <h1 style="font-weight:normal; font-size:30px;">Reservations List</h1>
              <table class="table table-striped ">             
                
                    <tr>
                        <th class="bg-dark" style="color:#EDEADE">Full Name</th>
                        <th class="bg-dark" style="color:#EDEADE">Type</th>
                        <th class="bg-dark" style="color:#EDEADE">Arrival Date</th>
                        <th class="bg-dark" style="color:#EDEADE">Departure Date</th>
                    </tr>
                
                    <tr v-for="reservation in reservations" :key="reservation.id" class="w3-hover-light-gray" style="cursor:pointer" @click="openReservation(reservation.id)">
                        <td>{{reservation.fullname}}</td>
                        <td>{{reservation.type}}</td>
                        <td>{{reservation.arrival_date}}</td>
                        <td>{{reservation.departure_date}}</td>
                      
                      
                    </tr>
            </table>
          </div>
      </div>
 
</template>

<script>
export default {
    data() {
        return {
            reservation: {
                id:null,
                fullname:'',
                type:'',
                price: '',
                arrival_date:'',
                departure_date:'',
            },

            reservations:[]
        }
    },
    methods: {
        addReservation() {
           
        },
        getData(){
          fetch('http://localhost:8000/api/reservations')
          .then(response=>response.json())
          .then(data=>this.reservations = data)
          .catch(err=>console.log(err) )
        },

         openReservation(reservationId) {
            this.$router.push({
                name: 'view-reservation',
                params: {
                    id: reservationId
                }
            })
        },
           
        submitReservation()  {
               fetch('http://localhost:8000/api/reservations', {
                   method: 'post',
                   headers: {
                       "Content-Type":"application/json"
                   },
                   credentials: 'same-origin',
                  body: JSON.stringify(this.reservation)

               })
                    .then(res=>res.json())
                    .then(data=>{
                        this.reservations.unshift(data)
                        this.reservation = {}
                    })
                    .catch(err=>console.log(err))
        }
    },

    mounted() {
      this.getData();
    },
}


    


</script>

<style>
</style>