<script setup>
import { onMounted, ref, watchEffect } from "vue";
import { getCart } from "../composable/cart.js";

let data = getCart();
let otpVal = ref(0);
let enterOtp = ref();
let billStatus = ref(false);
let modalStatus = ref(false);
let sum = ref(0);

function handlePayment() {
let findArr= data.value.map((i)=> i.time)
let selected = findArr.some(element => element === undefined)
   modalStatus.value=false;
if(selected)
{
    alert("Please select any timeslot !!")
}
else{
 modalStatus.value=true;
 otpVal.value = Math.ceil(Math.random() * 999999);
 console.log("OTP: ", otpVal.value);
}
}

function handleSaveOtp() {
  billStatus.value = false;
  if (enterOtp.value == otpVal.value) {
    billStatus.value = true;
    console.log("currect");
  } else {
    alert("Incurrect OTP !!");
  }
  enterOtp.value = "";
}

function slotChange(index, $event) {
  data.value[index].time = $event.target.value;
}

let TimeArray = data.value.map((i) => i.Amount);
TimeArray.map((i) => (sum.value = sum.value + i));
</script>

<template>
  <div class="container my-4">
    <h2 class="text-center">Checkout Screen</h2>
    <div class="row">
      <div class="table-responsive">
      <table
        class="table table-bordered table-striped table-hover table-info border-dark"
      >
        <thead class="bg-dark text-light">
          <th>No.</th>
          <th>RideName</th>
          <th>RideImage</th>
          <th>Amount</th>
          <th>AgeGroup</th>
          <th>Date</th>
          <th>TimeSlot</th>
        </thead>
        <tbody>
          <tr v-for="(i, index) in data">
            <td>{{index+1}}</td>
            <td>{{ i.RideName }}</td>
            <td>{{ i.RideImage }}</td>
            <td>{{ i.Amount }}</td>
            <td>{{ i.AgeGroup }}</td>
            <td>{{ i.Date }}</td>
            <td>
              <select @change="slotChange(index, $event)">
                <option disabled selected>Choose</option>
                <option :value="j" v-for="j in i.TimeSlot">{{ j }}</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
    <div>
      <div class="m-auto text-center">
         <button class="m-auto bg-dark text-light mx-sm-1">
          <router-link to="/" class="nav-link p-0 text-light">Go Back</router-link>
        </button>
         <button
          class="m-auto bg-dark text-light mx-sm-1"
          :data-bs-toggle="modalStatus ? 'modal' : null"
          :data-bs-target="modalStatus ? '#modalId' : null"
           @click="handlePayment"
        >
          Proceed To Pay
        </button>
      </div>

      <!-- Modal Body -->
      <div 
        class="modal fade"
        id="modalId"
        tabindex="-1"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        role="dialog"
        aria-labelledby="modalTitleId"
        aria-hidden="true"
      >
        <div
          class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-sm"
          role="document"
        >
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="modalTitleId">Modal title</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <input type="text" v-model="enterOtp" placeholder="Enter OTP" />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                @click="handleSaveOtp"
                data-bs-dismiss="modal"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
          <!-- <div id="modalId" class="modal fade"  v-else>hello</div> -->
    </div>


    <div class="my-5" v-if="billStatus">
      <h2 class="text-center">Total bill summary</h2>
      <div class="table-responsive">
      <table class="table table-bordered border-dark">
        <thead class="bg-dark text-light">
          <th>No.</th>
          <th>RideName</th>
          <th>RideImage</th>
          <th>Amount</th>
          <th>TimeSlot</th>
        </thead>
        <tbody>
          <tr v-for="(i, index) in data">
            <td>{{ index+1 }}</td>
            <td>{{ i.RideName }}</td>
            <td>{{ i.RideImage }}</td>
            <td>{{ i.Amount }}</td>
            <td>{{ i.time }}</td>
          </tr>
        </tbody>
      </table>
      </div>
      <h3 class="text-center text-success">Total Amount:{{ sum }}</h3>
    </div>
  </div>

</template>
