import { ref } from 'vue'
import axios from 'axios'

export default function getData() {
    const rideData = ref([])
    const error = ref([])


    const getD = async (url) => {
        try {
            let res = await axios(url)
            rideData.value = res.data;
        }
        catch (err) {
            error.value = err;
        }
    }
 return { rideData, getD, error }
}