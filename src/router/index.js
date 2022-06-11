import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import BookingsListVue from '../views/bookings/BookingsList.vue'
import ViewBooking from '../views/bookings/ViewBooking.vue'
import BookingForm from '../views/bookings/BookingForm.vue'
import AdminList from '../views/admin/AdminList.vue'

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {  return { x: 0, y: 0 };},
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/reservations',
      name:'all-reservations',
      component: BookingsListVue,
     
    },
    {
      path: '/reservations/:id',
      name:'view-reservation',
      component: ViewBooking,
      props:true
    },
    {
      path: '/form',
      name: 'booking-form',
      component: BookingForm
    },
    {
      path: '/list',
      name: 'admin-panel',
      component: AdminList
    },
  ]
})

export default router
