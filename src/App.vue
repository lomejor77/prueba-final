<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <RouterLink class="navbar-brand" :to="{ name: 'home' }">Home</RouterLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <RouterLink class="nav-link" :to="{ name: 'counter' }">Contador</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" :to="{ name: 'login' }">Login</RouterLink>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'registro' }">Registrarse</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'child' }">Componente hijo</router-link>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" :to="{ name: 'cerrar sesion' }">Logout</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <RouterView />
  </header>
</template>
<script>
export default {
  name: "App",

};
</script>
<style scoped>
header {
  line-height: 1.5;
}

@media (min-width: 1024px) {

  /* Flexbox para centrar el contenedor del menú */
  .navbar-nav {
    display: flex;
    justify-content: center;
    /* Centra los elementos dentro de navbar-nav */
    width: 100%;
    /* Asegura que el contenedor ocupe todo el espacio disponible */
  }

  /* Estilo para los elementos de la lista de navegación */
  .nav-item {
    margin-left: 20px;
    /* Espaciado entre los elementos del menú */
    margin-right: 20px;
    /* Espaciado entre los elementos del menú */
  }
}
</style>
