import { createRouter, createWebHistory } from 'vue-router'
import Listing from '../components/Listing.vue'
import Checkout from '../components/Checkout.vue'
const routes=[
    {
        path:'/',
        name:'Listing',
        component:Listing
    },
    {
        path:'/Checkout',
        name:'Checkout',
        component:Checkout
    }
]
const router= createRouter({
    history: createWebHistory(), routes
})
export default router;