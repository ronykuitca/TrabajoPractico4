<template>

  <section class="src-componentes-formulario-av">
   <div class="jumbotron">
      <h2>FormularioTP</h2>
      <hr>
      <hr>
      <br>

        <vue-form :state="formState" @submit.prevent="enviar()">
        
        <!-- Campo nombre -->
        <validate tag="div">
          <label for="nombre">Nombre</label>
          <input 
            type="text"
            id="nombre"
            name="nombre" 
            class="form-control"
            autocomplete="off"
            v-model.trim="formData.nombre" 
            required 
            valida-nombre
           
          />

          <field-messages name="nombre" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="valida-nombre" class="alert alert-danger mt-1">
              La cantidad de caracteres debe ser entre 5 y 15
            </div>
          </field-messages>
        </validate>
        <br>

           <!-- Campo edad -->
        <validate tag="div">
          <label for="edad">Edad</label>
          <input 
            type="number"
            id="edad"
            name="edad" 
            class="form-control"
            autocomplete="off"
            v-model.number="formData.edad" 
            required 
            :min="edadMin"
            :max="edadMax"
          />

          <field-messages name="edad" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            
         
            <div slot="min" class="alert alert-danger mt-1">
              La edad mínima permitida es de {{edadMin}} años.
            </div>
            <div slot="max" class="alert alert-danger mt-1">
              La edad maxima permitida es de {{edadMax}} años.
            </div>
          </field-messages>
        </validate>
        
        <br>
         <!-- Campo email -->
        <validate tag="div">
          <label for="email">Email</label>
          <input 
            type="email"
            id="email"
            name="email" 
            class="form-control"
            autocomplete="off"
            v-model.trim="formData.email" 
            required
          />

          <field-messages name="email" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Este campo requerido</div>
            <div slot="email" class="alert alert-danger mt-1">Email no válido</div>
          </field-messages>
        </validate>
        <button class="btn btn-success my-5" :disabled="formState.$invalid">Enviar</button>
      </vue-form>

      <hr>
      <p><u>formData</u></p>
      <pre>{{formData}}</pre>
      
   </div>

   
    <Tabla :personas="personas" v-show="personas.length"/>
  </section>

</template>

<script>
import Tabla from './Tabla.vue'

  export default  {
    name: 'src-componentes-formulario-av',
    props: [],
    components: {
      Tabla,
    },
    mounted () {

    },
    data () {
      return {
        formState: {},
        formData: this.getInicialData(),
        edadMin : 18,
        edadMax: 120,
        personas: []       

      }
    },
    methods: {
      getInicialData() {
        return {
          nombre:'',      
          edad:'',
          email:''
        }
      },
      enviar(){  
        this.personas.push(this.formData)
        
        /* invocar el metodo de Tabla agregarPersona(persona) */
        /* Tabla.agregarPersona(this.persona) */

        
        this.formData = this.getInicialData()
        this.formState._reset()
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
 
  .jumbotron {
    background-color: darkslategray;
    color:white;
}

</style>
