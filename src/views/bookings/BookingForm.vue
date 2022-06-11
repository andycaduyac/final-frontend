<template>
    
    <div class="main-form mt-4">
        <div class="d-flex justify-content-center my-2">
            <h3>Reservation Form</h3>
        </div>
        <div class="d-flex justify-content-center">
            <div class="card shadow-lg p-4 w-50">
                <form class="mt-2">
                    <div class="mb-3">
                            <label for="fullname" class="form-label">Full Name</label>
                            <input type="text" v-model="reservation.fullname" class="form-control" >
                    </div>
                        <div class="mb-3">
                            <label for="type" class="form-label">Type</label>
                            <select class="form-select" v-model="reservation.type" id="type">
                                <option selected>Choose...</option>
                                <option value="Single">Single</option>
                                <option value="Double">Double</option>
                                <option value="Quad">Quad</option>
                            </select>
                        </div>
                    <div class="mb-3">
                            <label for="arrival_date" class="form-label">Arrival Date</label>
                            <input type="date" v-model="reservation.arrival_date" class="form-control" id="arrival_date">
                            <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
                    </div>
                    <div class="mb-3">
                            <label for="departure_date" class="form-label">Departure Date</label>
                            <input type="date" v-model="reservation.departure_date" class="form-control" id="departure_date">
                            <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
                    </div>
                    <router-link to="/list" class="btn btn-primary mt-3 float-end" type="submit" @click="submitReservation">Make Reservation</router-link>
                </form>
            </div>
            
        </div>
        
    </div>
</template>
<script>
export default {
    data() {
        return {
            reservation: {
                id: null,
                fullname:'',
                type:'',
                arrival_date:'',
                departure_date:''
            },
            reservations:[]
        }
    },
    methods: {
        getData(){
          fetch('http://127.0.0.1:8000/api/reservations')
          .then(response=>response.json())
          .then(data=>this.reservations = data)
          .catch(err=>console.log(err) )
        },
        submitReservation()  {
               fetch('http://127.0.0.1:8000/api/reservations', {
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