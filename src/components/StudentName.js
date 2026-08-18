<script setup>
import { ref } from 'vue';

const studentName = ref('');

</script>
<template>
    <h2>Student Registration Form</h2>

    <input 
    v-model="studentName" 
    placeholder="Enter student name" />

    <p>Student Name: {{ studentName }}</p>
</template>     



<!-- <script setup>
import { ref } from 'vue';

const name = ref('');
const message = ref('');

function submitForm() {
    message.value = Student ${name.value} registered successfully!;
}
</script>

<template>
    <form @submit.prevent="submitForm">
        <label>Name: </label>
        <input v-model="name" type="text" />
        <button type="submit">Register</button>
        <p>{{ message }}</p>
    </form>
</template>  Users Input Form and Events-->



<!-- <script setup>
import { ref } from 'vue';

const name = ref('');
const email = ref('');

function register(){
    alert(Registered Successfully!);
}
</script>

<template>
    <form @submit.prevent="register">
         <input 
         v-model="name" 
         type="text"
         placeholder="Enter student name" 
         required
         />

         <input 
         v-model="email"
         type="email"
         placeholder="Enter student gmail" 
         required
         />

        <button type="submit">Register</button>
    </form>

    <p>Student Name: {{ name }}</p>
    <p>Student Email: {{ email }}</p>
</template> Multiple with required-->



<!-- <script setup>
import { ref } from 'vue';

const message = ref('');

</script>

<template>
    <textarea v-model="message"></textarea>
    <p>Message: {{ message }}</p>

</template> textarea-->

<!-- <script setup>
import { ref } from 'vue';

const acceptedTerms = ref('');
</script>
<template>
    <input type="checkbox" v-model="acceptedTerms" />

    <p>{{ acceptedTerms }}</p>
</template> checkbox-->

<!-- <script setup>
import { ref } from 'vue';

const course = ref('');

</script>

<template>
    <select v-model="course">
        <option>BSIT</option>
        <option>BSBA</option>
        <option>BS Computer Science</option>
        <option>BS Nursing</option>
    </select>

    <p>Selected Course: {{ course }}</p>
</template> select option-->



<!-- <script setup>
import { defineProps } from 'vue';

const props = defineProps({
    studentName: String
});

</script>

<template>
    <h3>{{ props.studentName }}</h3>
</template> props John Doe-->



<!-- <script setup>
const emit = defineEmits(['save']);

function saveStudent() {
    emit('save');
}

</script>

<template>
    <button @click="saveStudent">Save</button>
</template> -->



<!-- <script setup>
const emit = defineEmits(['submitStudent']);

function submitStudent() {
    emit('submitStudent', {
        name: 'Hope',
        age: 20
    })
}

</script>

<template>
    <button @click="submitStudent">Submit Student</button>
</template> Function Submit-->
Compose
