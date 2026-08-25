<script setup>
defineProps({
  studentName: String,
  studentID: String,
  email: String,
  club: String,
  membershipType: String,
  confirmation: String,
  reasonforJoining: String
})
</script>

<template>
  <div>
    <h2>Member Information</h2>

    <p>Student Name: {{ studentName }}</p>
    <p>Student ID: {{ studentID }}</p>
    <p>Email: {{ email }}</p>
    <p>Club: {{ club }}</p>
    <p>Membership Type: {{ membershipType }}</p>
    <p>Confirmation: {{ confirmation }}</p>
    <p>Reason for Joining: {{ reasonforJoining }}</p>
  </div>
</template>




