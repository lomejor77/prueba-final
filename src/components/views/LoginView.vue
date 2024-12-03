<template>
  <div class="container">
    <main class="form-signin">
      <form @submit.prevent="login">
        <h1 class="h3">Inicie sesión</h1>
        <div class="form-floating">
          <input type="email" v-model="email" class="form-control" id="floatingInput" placeholder="Ingrese su email"
            required />
        </div>
        <div class="form-floating">
          <input type="password" v-model="password" class="form-control" id="floatingPassword"
            placeholder="Ingrese su contraseña" required />
        </div>
        <button class="btn" type="submit">Loguearse</button>
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      </form>
    </main>
  </div>
</template>

<script>
import { signInWithEmailAndPassword, auth } from "@/auth";
import { authState } from "@/authState";

export default {
  data() {
    return {
      email: "",
      password: "",
      errorMessage: "", // Manejar mensajes de error
    };
  },
  methods: {
    async login() {
      try {
        // Autenticación con Firebase
        const userCredential = await signInWithEmailAndPassword(
          auth,
          this.email,
          this.password
        );

        // Sincronizar el estado global
        authState.currentUser = {
          uid: userCredential.user.uid,
          email: userCredential.user.email,
          displayName: userCredential.user.displayName,
        };

        // Redirigir al home
        const redirectTo = this.$route.query.redirect || "/home";
        this.$router.push(redirectTo);
      } catch (error) {
        console.error("Error al iniciar sesión:", error);
        this.errorMessage =
          "Credenciales incorrectas. Por favor, verifique e intente nuevamente.";
      }
    },
  },
};
</script>
<style scoped>
.error-message {
  color: red;
  margin-top: 10px;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.form-signin {

  background-color: #fff;
  margin-top: 90px;
  padding: 60px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 100%;
  max-width: 400px;
}

.logo {
  margin-bottom: 20px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.h3 {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
  font-weight: normal;
}

.form-floating {
  position: relative;
  margin-bottom: 15px;
}

.form-floating input {
  width: 100%;
  padding: 12px 15px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  background-color: #f9f9f9;
}

.form-floating input:focus {
  border-color: #007bff;
  background-color: #fff;
}

.form-floating label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 12px 15px;
  font-size: 16px;
  color: #777;
  pointer-events: none;
  transition: all 0.2s;
}

.form-floating input:focus~label,
.form-floating input:not(:placeholder-shown)~label {
  top: -20px;
  left: 15px;
  font-size: 12px;
  color: #007bff;
}

.btn {
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #0056b3;
}
</style>
