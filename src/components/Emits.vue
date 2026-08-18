<script setup>
// Declare that this component can emit an event called "notify"
const emit = defineEmits(['notify'])

function sayHello() {
  // Trigger the event, and send a message along with it
  emit('notify', {
    name: 'John Doe',
    age: 30
  })
  
}
</script>

<template>
  <button @click="sayHello">Click Me</button>
</template>