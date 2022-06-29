<template>

  <section class="src-componentes-usuarios">
     <div class="jumbotron">
      <h2>Usuarios</h2>

      <button class="btn btn-success mr-2 mb-3" @click="getUsuarios()">Users</button>
       

      <div class="table-responsive">
      <table class="table table-dark">
        <tr>
        <th>Index</th>
        <th>Nombre</th>
        <th>Numero de teléfono</th>
        <th>Mail</th>
        </tr>

          <tr v-for="(persona,index) in usuarios" :key ="index">
          <td>{{ index + 1}} </td>
          <td>{{ persona.name }} </td>
          <td>{{ persona.telefono }} </td>
          <td>{{ persona.email }} </td>
          </tr>
       
      </table>
        </div>
     

     </div>
  </section>

</template>

<script >

  export default  {
    name: 'src-componentes-usuarios',
    props: [],
    mounted () {
      
    },
    data () {
      return {
        url:'https://62a91830943591102badc8eb.mockapi.io/users',
        usuarios:[]
      }
    },
    methods: {
      async getUsuarios() {
        try {
          let { data: usuarios } = await this.axios(this.url)
          console.log('AXIOS GET usuarios', usuarios)
          this.usuarios = usuarios
        }
        catch(error) {
          console.error('Error en getUsuarios()', error.message)
        }
      },
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-componentes-usuarios {

  }
  .jumbotron {
    background-color: rgb(151, 88, 5);
    color:white;
}

</style>
