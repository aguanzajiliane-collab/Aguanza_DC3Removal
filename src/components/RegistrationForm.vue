<script setup>
import { ref } from 'vue'

const name = ref('')
const age = ref('')
const email = ref('')

function submitForm() {
    alert('Form Submitted!')
    
    console.log(`
    Name: ${name.value}
    Age: ${age.value} 
    Email: ${email.value}`)
    // You can also emit an event here if needed
}



</script>

<template>  
    <div>
        <form @submit.prevent="submitForm">
            <input v-model="name" type="text" placeholder="Name" required />
            <input v-model="age" type="number" placeholder="Age" required />
            <input v-model="email" type="email" placeholder="Email" required />
            <button type="submit">Submit</button>
        </form>

        <p>Name: {{ name }}</p>
        <p>Age: {{ age }}</p>
        <p>Email: {{ email }}</p>
    </div>
</template>