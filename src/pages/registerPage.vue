<template>
  <div class="register-page">
    <div class="auth-container">
      <h1>Register</h1>
      <form @submit.prevent="handleSubmit">
        <label>Name:</label>
        <input
          type="text"
          v-model="formData.name"
          placeholder="Enter your name"
          id="name"
          name="name"
        />
        <span v-if="nameError" class="error">{{ nameError }}</span>

        <label>Email:</label>
        <input
          type="email"
          v-model="formData.email"
          placeholder="Enter your email"
          name="email"
          id="email"
        />
        <span v-if="emailError" class="error">{{ emailError }}</span>

        <label>Password:</label>
        <input
          type="password"
          v-model="formData.password"
          placeholder="Enter your password"
          name="password"
          id="password"
        />
        <span v-if="passwordError" class="error">{{ passwordError }}</span>

        <button type="submit">Register</button>
      </form>
      <div class="links">
        <router-link to="/login">Already have an account?</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      formData: {
        name: "",
        email: "",
        password: "",
      },
      nameError: null,
      emailError: null,
      passwordError: null,
    };
  },
  methods: {
    validateInputs() {
      let isValid = true;

      if (!this.formData.name.trim()) {
        this.nameError = "Name is required.";
        isValid = false;
      } else if (!/^[A-Za-z\s]+$/.test(this.formData.name)) {
        this.nameError = "Name must only contain letters.";
        isValid = false;
      } else {
        this.nameError = null;
      }

      if (!this.formData.email.trim()) {
        this.emailError = "Email is required.";
        isValid = false;
      } else if (
        !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
          this.formData.email
        )
      ) {
        this.emailError = "Enter a valid email address.";
        isValid = false;
      } else {
        this.emailError = null;
      }

      // Validate password
      if (!this.formData.password.trim()) {
        this.passwordError = "Password is required.";
        isValid = false;
      } else if (this.formData.password.length < 6) {
        this.passwordError = "Password must be at least 6 characters long.";
        isValid = false;
      } else {
        this.passwordError = null;
      }

      return isValid;
    },
    handleSubmit() {
      if (this.validateInputs()) {
        console.log("Register Data:", this.formData);
        axios({
          method: "POST",
          url: "https://backend-fullstack-a6fo.onrender.com/api/v1/register",
          data: {
            name: this.formData.name,
            email: this.formData.email,
            password: this.formData.password,
          },
        })
          .then((res) => {
            console.log(res);
            this.formData.name = "";
            this.formData.email = "";
            this.formData.password = "";
            this.$router.push("/login");
          })
          .catch((err) => {
            console.log(err);
            this.formData.name = "";
            this.formData.email = "";
            this.formData.password = "";
            this.passwordError = err?.response?.data?.message;
          });
      }
    },
  },
};
</script>

<style scoped>
.register-page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.auth-container {
  width: 40%;
  margin: 50px auto;
  padding: 20px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.auth-container h1 {
  font-size: 24px;
  color: #1d2939;
}
.auth-container form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.auth-container input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.auth-container button {
  padding: 10px;
  background: #1d2939;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.auth-container button:hover {
  background: #1d2939;
}
.auth-container .links {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.auth-container .links a {
  color: #1d2939;
  cursor: pointer;
  text-decoration: underline;
  display: block;
  margin-top: 5px;
}
.error {
  color: red;
  font-size: 12px;
  margin-top: -10px;
  margin-bottom: 10px;
}

@media (max-width: 1100px) {
  .auth-container {
    width: 70%;
  }
}

@media (max-width: 650px) {
  .auth-container {
    width: 100%;
  }
}
</style>
