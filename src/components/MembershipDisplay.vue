<script setup>
import { defineProps } from 'vue'
defineProps({
  name: studentName,
  studentId: studentId,
  email: email,
  MembershipType: membershipType,
  confirmation: confirmation,
  Reason: reason
})

</script>

<template>
  <div>
    <p>Student StudentName: {{ studentName }}</p>
    <p>Student StudentID: {{ studentID }}</p>
    <p>Student Email: {{ email }}</p>
    <p>Student Club: {{ club }}</p>
    <p>Student MembershipType: {{ membershipType }}</p>
    <p>Student Confirmation: {{ confirmation }}</p>
    <p>Student ReasonforJoining: {{ reasonforjoining }}</p>
  </div>
</template>