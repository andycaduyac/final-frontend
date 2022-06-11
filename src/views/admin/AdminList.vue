<template>
    <div class="main">
            <h1>Reservation List</h1>
        <table class="table">
            <thead>
                <tr>
                <th scope="col">Name</th>
                <th scope="col">Type</th>
                <th scope="col">Arrival Date</th>
                <th scope="col">Departure Date</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="reservation in reservations" :key="reservation.id" @click="openReservation(reservation.id)">
                    <th>{{reservation.fullname}}</th>
                    <th>{{reservation.type}}</th>
                    <th>{{reservation.arrival_date}}</th>
                    <th>{{reservation.departure_date}}</th>
                </tr>
            </tbody>
    </table>
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
                arrival_date:'',
                departure_date:'',
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

         openReservation(reservationId) {
            this.$router.push({
                name: 'view-reservation',
                params: {
                    id: reservationId
                }
            })
        },
    },
    mounted() {
      this.getData();
    },
}
</script>