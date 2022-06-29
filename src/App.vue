<template>
  <div class="container fluid mt-3">
    <div class="jumbotron">
      <h1>Trabajo práctico</h1>
      <hr>




      <FormularioTP />
      <br>
      <br>
      <br>
      <Usuarios />
    </div>
  </div>
</template>

<script>
import FormularioTP from './componentes/FormularioTP.vue'
import Usuarios from './componentes/Usuarios.vue'




export default {
  name: 'App',
  components: {
    FormularioTP,
    Usuarios
    
  }
}

</script>

<style>

  h1 {
    color:darkorange;
  }
</style>
