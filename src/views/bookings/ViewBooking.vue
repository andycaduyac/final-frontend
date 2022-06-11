<template>

<div class="main">
    <h1>Reservation Information</h1>
   
<div class="card shadow-lg p-3 mb-5 bg-secondary rounded" style="width: 60rem; height:13rem; position:relative;
     left:7%;">  
          <div class="card-header">
                <button class="btn btn-sm bg-danger" style="color:white; position:relative; left: 93.5%;" @click="deleteReservation"> Delete</button>
                    <button class=" btn btn-sm bg-warning" @click="toggleEditor" style= "position:relative; left: -60px;">{{editor.label}}</button>
                      <table class="table table-hover text-center" style="margin-top:20px;">
                            <tr>

                                <th class="bg-dark" style="color:#EDEADE">Full Name</th>
                                <th class="bg-dark" style="color:#EDEADE">Type</th>
                                <th class="bg-dark" style="color:#EDEADE">Arrival Date</th>
                                <th class="bg-dark" style="color:#EDEADE">Departure Date</th>
                            </tr>
                          
                            <tr>
                                <td style="color:#f6f1e9">{{reservation.fullname}}</td>
                                <td style="color:#f6f1e9">{{reservation.type}}</td>
                                <td style="color:#f6f1e9">{{reservation.arrival_date}}</td>
                                <td style="color:#f6f1e9">{{reservation.departure_date}}</td>
                            </tr>             
                            
                    </table>
             </div>
            <div>
      
            <div class="card shadow-lg  mb-5 bg-white rounded" style="width:60rem; position:absolute; top:120%; left:0%; ">
             <div v-if="editor.show">
                  <h3 class="text-center bg-info" style="color:dimgray; padding-top:10px; padding-bottom: 10px;">
                      Edit Reservation
                  </h3>
                   <hr>
                  <div class="card-body bg-light">
                 <div>
                      <label for="title" style="color:#EDEADE">&nbsp;&nbsp;Full Name &nbsp;</label>
                      <input type="text" v-model="reservation.fullname"  class="w3-input w3-border" >
                   
                      <label for="title" style="color:#EDEADE">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Type &nbsp;</label>
                      <input type="text" v-model="reservation.type"  class="w3-input w3-border" >
                      
                      <label for="title" style="color:#EDEADE">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Price &nbsp;</label>
                      <input type="number" v-model="reservation.price"  class="w3-input w3-border" >
                      <br><br>
                   
                   
                      <label for="title" style="color:#EDEADE">&nbsp;&nbsp;Arrival Date &nbsp;</label>
                      <input type="date" v-model="reservation.arrival_date"  class="w3-input w3-border" >

                      <label for="title" style="color:#EDEADE">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Departure Date &nbsp;</label>
                      <input type="date" v-model="reservation.departure_date"  class="w3-input w3-border" >

                     </div>

                     <button class="btn btn-sm btn-success" style="color:white; position:relative; left: 93%;" @click="saveReservation">Update</button>
                   </div>
                 </div>
          </div>
        </div>
     </div>
</div>
    

</template>

<script>
export default{

    props:['id'],
  
   data(){
       return{
           reservation: {},
           editor: {
               show: false,
               label: "Edit Reservation"
           }
       }
   },

   methods: {

       toggleEditor(){
           if(this.editor.show){
               this.editor = {show:false, label:"Edit Reservation"}
           }else{
                this.editor = {show:true, label:"Cancel"}
           }
       },
       saveReservation(){
                fetch('http://localhost:8000/api/reservations/' + this.reservation.id,{
                    method: 'put',
                    headers: {
                        'Content-Type' : "application/json"
                    },
                    credentials: 'same-origin',
                    body: JSON.stringify(this.reservation)
                 })
                 .then(res=>res.json())
                 .then(data=>{
                     alert("Reservation has been updated")

                 })
                 .catch(err => console.log(err))
       },
          deleteReservation(){
                 fetch('http://localhost:8000/api/reservations/' + this.reservation.id,{
                       method:'delete'
                 })
                 .then(res=>res.json())
                 .then(data=>{
                     alert("Reservation has been deleted")
                     this.$router.push({
                        name: 'all-reservations'
                     })
                    
                 })
                 .catch(err=>console.log(err))
         }
   },

   mounted(){
       fetch('http://localhost:8000/api/reservations/' + this.id)
       .then(res => res.json())
       .then(data => this.reservation = data)
       .then(err => console.log(err))
   }

}

</script>

<style scoped>
 h1{
     color:DarkSlateGray;
     font-weight:normal;
     font-size:35px;
 }

 td{
     color:DarkSlateGray;
 }

</style>