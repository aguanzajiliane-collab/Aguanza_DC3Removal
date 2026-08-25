</script>

<template>
  <div>
    <h2>Membership Form</h2>

    <form @submit.prevent="submitForm">

      <input
        v-model="studentName"
        type="text"
        placeholder="Enter your Student Name"
        required
      />

      <input
        v-model="studentID"
        type="number"
        placeholder="Enter your Student ID"
        required
      />

      <input
        v-model="email"
        type="email"
        placeholder="Enter your Email"
        required
      />

      <select v-model="club" required>
        <option value="">Select your Club</option>
        <option>Programming Club</option>
        <option>Multimedia Club</option>
        <option>Robotics Club</option>
        <option>Cybersecurity Club</option>
        <option>Web Development Club</option>
      </select>

      <select v-model="membershipType" required>
        <option value="">Select Membership Type</option>
        <option>Regular</option>
        <option>Premium</option>
      </select>

      <select v-model="confirmation" required>
        <option value="">Confirmation</option>
        <option>Yes</option>
        <option>No</option>
      </select>

      <textarea
        v-model="reasonforJoining"
        placeholder="Enter your Reason for Joining"
        required
      ></textarea>

      <button type="submit">
        Register
      </button>

    </form>
  </div>
</template>
