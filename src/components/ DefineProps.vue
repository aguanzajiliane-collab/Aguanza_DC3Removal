<script setup>
import { defineProps } from 'vue'
defineProps({
  name: String,
  age: Number,
  email: String
})

</script>

<template>
  <div>
    <p>Name: {{ name }}</p>
    <p>Age: {{ age }}</p>
    <p>Email: {{ email }}</p>
  </div>
</template>