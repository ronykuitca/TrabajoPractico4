<template>

  <section class="src-componentes-tabla">
    <div class="jumbotron">
    <h1>Tabla Datos Personas</h1>
    <br>
    <br>

    <div class="table-responsive">
      <table class="table table-dark">
        <tr>
        <th>Index</th>
        <th>Nombre</th>
        <th>Edad</th>
        <th>Mail</th>
        </tr>

        <tr v-for="(persona,index) in personas" :key ="index">
          <td>{{ index + 1}} </td>
          <td>{{ persona.nombre }} </td>
          <td>{{ persona.edad }} </td>
          <td>{{ persona.email }} </td>
        </tr>




      </table>
    </div>

    </div>
  </section>

</template>

<script>

  export default  {
    name: 'src-componentes-tabla',
    props: {
      personas: Array,
    },
    mounted () {

    },
    data () {
      return {
      }
    },
    methods: {
      /*  agregarPersona(persona) {
        this.datosPersonas.push({persona})
       } */
      

      
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .jumbotron{
    background-color: gray;
  }
</style>
