import getData from './getData.js'
import {ref} from 'vue'
const { getD, rideData, addToCart } = getData();

await getD('rideData.json') 

export function pagination(){
    let curPage= ref(0)
    let totalPage= ref(0)
    let pageSize= ref(20)
    let newRideData= ref([])
    totalPage.value= Math.ceil((rideData.value.length)/pageSize.value)

    const showPrevLink=()=>{
        return curPage.value == 0 ? false :true
    }
    const showNextLink=()=>{
        return curPage.value == (totalPage.value-1) ? false :true
    }
    const updateData=(pageNumber)=>{
        curPage.value=pageNumber;
        updateVisibleData();
    }
    const updateVisibleData=()=>{
         newRideData.value= rideData.value.slice(curPage.value * pageSize.value , (curPage.value * pageSize.value)+ pageSize.value )
    }
    return { curPage, totalPage, pageSize, newRideData, showPrevLink,showNextLink , updateData, updateVisibleData }
}
