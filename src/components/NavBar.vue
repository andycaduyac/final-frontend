<template>
  <!-- <nav class="navbar navbar-expand-lg navbar-light bg-dark">
    <div class="container">
        <a class="navbar-brand" style="color:#EDEADE;">Reservation System</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item">
                <div class="first">
                <router-link to="/" class="nav-link" style="color:#EDEADE;">Home</router-link>
                </div>
            </li>

              <li class="nav-item">
                <div class="second">
                <router-link to="/about" class="nav-link" style="color:#EDEADE;" >About</router-link>
                </div>
            </li>

            <li class="nav-item">
                <div class="third">
                <router-link to="/about" class="nav-link" style="color:#EDEADE;" >About</router-link>
                </div>
            </li>
        </ul>
        </div>
    </div>
    
    
  </nav> -->

  <!-- <nav class="navbar bg-dark d-flex justify-content-center">
        <ul class="nav">
            <li class="nav-item ">
                <router-link to="/" class="nav-link" style="color:#EDEADE;" ><h4>Home</h4></router-link>
            </li>
            <li class="nav-item px-5">
                <router-link to="/about" class="nav-link" style="color:#EDEADE;" ><h4>About</h4></router-link>
            </li>
            <li class="nav-item pr-5">
                <router-link to="/admin" class="nav-link" style="color:#EDEADE;" ><h4>Admin</h4></router-link>
            </li>
            <li>
                <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Menu
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" href="#">Admin</a></li>
                    <li><a class="dropdown-item" href="#">Reservation List</a></li>
                </ul>
            </div>
            </li>
        </ul>
        
</nav> -->
    <nav class="navbar justify-content-center bg-dark">
            <ul class="nav">
        <li class="nav-item px-2">
            <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
            <router-link to="/" class="nav-link" style="color:#EDEADE;">Home</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/about" class="nav-link" style="color:#EDEADE;">About</router-link>
            <!-- <a class="nav-link" href="#">About</a> -->
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false" style="color:#EDEADE;">Menu</a>
            <ul class="dropdown-menu">
            <router-link to="/form" class="dropdown-item">Reservation Form</router-link>
            <router-link to="/list" class="dropdown-item">Reservation List</router-link>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Admin</a></li>
            </ul>
        </li>
        </ul>
               
        
        </nav>


</template>

<script>


</script>

<style>
/* 
.first{
    position: absolute;
    left:80%;
    top: 10%;
}

.second{
    position: absolute;
    left:86%;
    top: 10%;
}

.third{
    position: absolute;
    left: 92%;
    top: 10%;
}
 */


</style>