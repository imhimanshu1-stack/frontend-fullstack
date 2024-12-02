<template>
  <div class="login-page">
    <div class="auth-container">
      <h1>Login</h1>
      <form @submit.prevent="handleSubmit">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          v-model="formData.email"
          placeholder="Enter your email"
        />
        <span v-if="emailError" class="error">{{ emailError }}</span>

        <label>Password:</label>
        <input
          type="password"
          v-model="formData.password"
          name="password"
          id="password"
          placeholder="Enter your password"
        />
        <div class="forgot-password">
          <router-link to="/forgot-password">Forgot Password</router-link>
        </div>
        <span v-if="passwordError" class="error">{{ passwordError }}</span>

        <button type="submit">Login</button>
      </form>
      <div class="links">
        <router-link to="/register">Sign Up Here</router-link>
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
        email: "",
        password: "",
      },
      emailError: null,
      passwordError: null,
    };
  },
  methods: {
    validateInputs() {
      let isValid = true;

      if (!this.formData.email) {
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

      if (!this.formData.password) {
        this.passwordError = "Password is required.";
        isValid = false;
      } else {
        this.passwordError = null;
      }

      return isValid;
    },
    handleSubmit() {
      if (this.validateInputs()) {
        console.log("Login Data:", this.formData);
        axios({
          method: "POST",
          url: "http://fullstack-backend-env.eba-uf6tsggq.eu-north-1.elasticbeanstalk.com/api/v1/login",
          data: {
            email: this.formData.email,
            password: this.formData.password,
          },
        })
          .then((res) => {
            console.log(res);
            if (res?.data?.token !== undefined) {
              this.$store.dispatch("login", res?.data?.token);
              this.$store.dispatch("fetchCart");
              this.$router.push("/");
            }
          })
          .catch((err) => {
            console.log(err);
            this.passwordError = err?.response.data?.message;
          });
      }
    },
  },
};
</script>

<style scoped>
.login-page {
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
.forgot-password {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  color: #1d2939;
}
.forgot-password a {
  color: #1d2939;
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
  color: #1d2939;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.auth-container button:hover {
  color: white;
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
