import Vue from 'vue'
import VueForm from 'vue-form'



var options = {
    validators:{
        'valida-nombre' : function(value) {
            return value.length >= 5 && value.length <= 15
        }
    }
}


Vue.use(VueForm, options)