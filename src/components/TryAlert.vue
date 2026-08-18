<script setup>
const emit = defineEmits(['alerts'])

function sendAlert(){
    emit('alerts', 
    alert('This is an alert from the Try component!'))
}

</script>

<template>
  <div>
    <button @click="sendAlert">Send Alert</button>
  </div>
</template>