import {ref} from 'vue'
let checkoutData= ref([])
export function addCart(item)
    {
        if (!checkoutData.value.includes(item)) {
            checkoutData.value.push(item)
        }
    }

export function getCart()
{
    return checkoutData
}