<script>
import { ref } from 'vue';

const StudentName = ref('')
const StudentID = ref('')
const Email = ref('')
const Club = ref('')
const MembershipType = ref('')
const Confirmation = ref('')
const ReasonforJoining = ref('')

</script>

<template>  
    <div>
        <form @submit.prevent="submitForm">
            <input v-model="studentName" type="text" placeholder="Enter your Student Name" required />
            <input v-model="studentID" type="number" placeholder="Enter your Student ID" required />
            <input v-model="email" type="email" placeholder="Enter your Email" required />
            <input v-model="club" type="text" placeholder="Enter your Club" required />
            <input v-model="membershipType" type="text" placeholder="Enter your Membership Type" required />
            <input v-model="confirmation" type="text" placeholder="Enter your Confirmation" required />
            <input v-model="reasonforJoining" type="email" placeholder="Enter your Reason for Joining" required />
            <button type="submit">Submit</button>
        </form>
     </div>

     <h1>Club</h1>
    <select v-model="Club">
        <option>Programming Club</option>
        <option>Multimedia Club</option>
        <option>Robotics Club</option>
        <option>Cybersecurity Club</option>
        <option>Web Development  Club</option>
    </select>

    <p>Selected Club: {{ club }}</p>
</template> 

<template>
    <form @submit.prevent="Club">
         <input 
         v-model="studentName" 
         type="text"
         placeholder="Enter your student name" 
         required
         />

         <input 
         v-model="studentID"
         type="email"
         placeholder="Enter your student ID" 
         required
         />

        <input 
         v-model="email"
         type="email"
         placeholder="Enter your email" 
         required
         />

        <input 
         v-model="club"
         type="email"
         placeholder="Enter your club" 
         required
         />

        <input 
         v-model="membershipType"
         type="email"
         placeholder="Enter your membershipType" 
         required
         />

        <input 
         v-model="confirmation"
         type="email"
         placeholder="Enter your confirmation" 
         required
         />

        <input 
         v-model="studentID"
         type="email"
         placeholder="Enter your reason for joining" 
         required
         />

        <button type="submit">Register</button>
    </form>

    <p>Student StudentName: {{ studentName }}</p>
    <p>Student StudentID: {{ studentID }}</p>
    <p>Student Email: {{ email }}</p>
    <p>Student Club: {{ club }}</p>
    <p>Student MembershipType: {{ membershipType }}</p>
    <p>Student Confirmation: {{ confirmation }}</p>
    <p>Student ReasonforJoining: {{ reasonforjoining }}</p>
</template>


