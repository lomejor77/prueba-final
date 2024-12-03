<!-- Register.vue -->
<template>
  <div class="container">
    <main class="form-signin">
      <form @submit.prevent="register">
        <h1 class="h3">Crear cuenta</h1>
        <div class="form-floating">
          <input type="email" v-model="email" class="form-control" id="floatingEmail" placeholder="Ingrese su email"
            required />
        </div>
        <div class="form-floating">
          <input type="password" v-model="password" class="form-control" id="floatingPassword"
            placeholder="Ingrese su contraseña" required />
        </div>
        <div class="form-floating">
          <input type="password" v-model="confirmPassword" class="form-control" id="floatingConfirmPassword"
            placeholder="Confirme su contraseña" required />
        </div>
        <div v-if="passwordError" class="error-message">
          Las contraseñas no coinciden
        </div>
        <button class="btn" type="submit">Registrar</button>
      </form>
    </main>
  </div>
</template>

<script>
// Importa los métodos de Firebase que se usarán para la autenticación
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/auth";

export default {
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    async register() {
      // Validar que las contraseñas coincidan
      if (this.password !== this.confirmPassword) {
        this.passwordError = true;
        return;
      }

      try {
        // Llama a Firebase para crear un nuevo usuario
        await createUserWithEmailAndPassword(auth, this.email, this.password);

        // Si el registro se concreta, redirige al usuario a la página de inicio
        this.$router.push("/home");
      } catch (error) {
        console.error(error);
        alert("Error al registrar: " + error.message);
      }
    },
  },
};
</script>

<style scoped>
.error-message {
  color: #ff0000;
  font-size: 14px;
  margin-top: 10px;
  font-weight: bold;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.form-signin {

  background-color: #fff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
}

h1.h3 {
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin-bottom: 30px;
}

.form-floating {
  position: relative;
  margin-bottom: 20px;
}

.form-floating input {
  width: 100%;
  padding: 12px 15px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
  outline: none;
  transition: border-color 0.3s ease, background-color 0.3s ease;
}

.form-floating input:focus {
  border-color: #007bff;
  background-color: #fff;
}

.form-floating input:focus~label,
.form-floating input:not(:placeholder-shown)~label {
  top: -18px;
  left: 12px;
  font-size: 12px;
  color: #007bff;
  font-weight: 600;
}

.form-floating label {
  position: absolute;
  top: 0;
  left: 12px;
  padding: 12px 15px;
  font-size: 16px;
  color: #aaa;
  pointer-events: none;
  transition: all 0.3s ease;
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
  text-align: center;
}

.btn:hover {
  background-color: #0056b3;
}

.mt-3 {
  margin-top: 20px;
}

p {
  font-size: 14px;
  color: #666;
}

a {
  color: #007bff;
  text-decoration: none;
  font-weight: 600;
}

a:hover {
  text-decoration: underline;
}
</style>
