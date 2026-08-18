<script setup>
import { ref } from 'vue';

const emit = defineEmits(['change'])

const name = ref('')
const age = ref ('')
const address = ref('')

function OnChange(){
    emit('change',{
        name: name.value,
        age: age.value,
        address: address.value

    })
}


</script>

<template>
    <div>
        <form @submit.prevent="OnChange">
            <label>Name:</label>
            <input v-model="name" @input="onChange" type="text" />
            <br>

            <label>age:</label>
            <input v-model="age" @input="onChange" type="number"/>
            <br>

            <label>Address:</label>
            <input v-model="address" @input="onChange" type="text" />

            <button @click="OnChange">Click</button>
        </form>
    </div>
</template>