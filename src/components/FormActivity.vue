<script setup>
import {ref} from 'vue'

const name = ref('')
const age = ref('')
const adddress = ref('')
const course = ref('')
const year = ref('')

const fname = ref('')
const lname = ref('')
const middle = ref('')
const address = ref('')
const email = ref('')
const birthday = ref('')
const shortdes = ref('')
const accept = ref('')

function register() {
    alert("Registration successful")
}

</script>

<template>
    <h1>Welcome Form</h1>
<form>
   <label>Name:</label>
   <input v-model="name" type="text" placeholder="Enter your Name"><br></br>
   <input v-model="age" type="number" placeholder="Enter your Age"><br></br>
   <input v-model="adddress" type="text" placeholder="Enter your Address"><br></br>
   <input v-model="course" type="text" placeholder="Enter your Course"><br></br>
   <input v-model="year" type="number" placeholder="Enter your Year"><br></br>

<h3>Name: {{ name }}</h3>
<h3>Age: {{ age }}</h3>
<h3>Address: {{ address }}</h3>
<h3>Course: {{ course }}</h3>
<h3>Year: {{ year }}</h3>

</form>
<h1>Registration Form</h1>
 <form @submit.prevent="register">
   <input v-model="fname" type="text" placeholder="Enter your Fname"><br></br>
   <input v-model="lname" type="text" placeholder="Enter your Lname"><br></br>
   <input v-model="middle" type="text" placeholder="Enter your Middle"><br></br>
   <input v-model="address" type="text" placeholder="Enter your Address"><br></br>
   <input v-model="email" type="text" placeholder="Enter your Email"><br></br>
   <input v-model="birthday" type="date" placeholder="Enter your Birthday"><br></br>
   <input v-model="shortdes" type="text" placeholder="Enter your Shortdes"><br></br>
   <input v-model="accept" type="checkbox" placeholder="Enter your accept"><br></br>
   <button type="submit">Submit</button>

   </form>
</template>
