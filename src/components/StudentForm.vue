<script setup>
import { ref } from 'vue'

const studentName = ref('')
const studentID = ref('')
const course = ref('')
const yearLevel = ref('')
const email = ref('')

const emit = defineEmits(['student-submitted'])

function submitForm() {
  emit('student-submitted', {
    studentName: studentName.value,
    studentID: studentID.value,
    email: email.value,
    yearLevel: yearLevel.value,
    course: course.value

  })
}
</script>

<template>
  <div>
    <h1>Student Form</h1>
  </div>

  <form @submit.prevent="submitForm">
    <input
      type="text"
      v-model="studentName"
      placeholder="Student Name"
      required
    >

    <input
      type="text"
      v-model="studentID"
      placeholder="Student ID"
      required
    >
    
    <input
      type="email"
      v-model="email"
      placeholder="Email"
      required
    >

    <select v-model="course" required>
      <option value="">Select Course</option>
      <option value="BSIT">BSIT</option>
      <option value="BSCS">BSCS</option>
      <option value="BSIS">BSIS</option>
    </select>

    <input v-model="yearLevel" type="radio" id="1" value="1st Year" required="">
    <label for="1">1st Year</label>

    <input v-model="yearLevel" type="radio" id="2" value="2nd yaer" required="">
    <label for="2">2st Year</label>
  
    <input v-model="yearLevel" type="radio" id="3" value="3rd Year" required="">
    <label  for="3">3st Year</label>
   
    <input v-model="yearLevel" type="radio" id="4" value="4th Year" required="">
    <label  for="4">4st Year</label>

    <button type="submit">Submit Student</button>
  </form>

  <hr>

  <p>Name: {{ studentName }}</p>
  <p>Student ID: {{ studentID }}</p>
  <p>Course: {{ course }}</p>
  <p>Year Level: {{ yearLevel }}</p>
  <p>Email: {{ email }}</p>

</template>
