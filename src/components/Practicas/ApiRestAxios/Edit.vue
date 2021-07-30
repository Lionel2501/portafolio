<template>
<div>
    <button 
        class="bg-red-500 rounded-md p-2 text-white float-right mt-5"
        @click="borrar">Borrar
    </button>
    <h1 class="text-left px-3 my-2 text-xl font-semibold mt-10">Paciente {{ form.nombre}}</h1>
    <div class="p-3">
        <form
            @submit.prevent="edit" 
            class="w-full max-w-lg text-left">
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Nombre
                    </label>
                    <input
                        v-model="form.nombre" 
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Nombre">
                </div>
                <div class="w-full md:w-1/2 px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                        DNI
                    </label>
                    <input
                        v-model="form.dni" 
                        class="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="DNI">
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                    E-mail
                </label>
                <input
                    v-model="form.correo" 
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="E-mail">
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-5">
                <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                        Telefono
                    </label>
                    <input
                        v-model="form.telefono" 
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="Telefono">
                </div>
            </div>
            <button 
                class="float-right font-semibold bg-blue-500 rounded py-3 px-10 text-white" 
                type="submit">Editar</button>
        </form>
    </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
    name:'Edit',
    data() {
        return {
            form: {
                "pacienteId" : "",
                "nombre" : "",
                "dni" : "", 
                "correo":"",
                "telefono" : "",
                "token" : "" 
            }
        }
    },
    mounted(){
      this.form.pacienteId = this.$route.params.id
      let url = "https://api.solodata.es/pacientes?id=" + this.form.pacienteId
      axios.get(url)
      .then(response => {
          this.form.nombre = response.data[0].Nombre
          this.form.dni = response.data[0].DNI
          this.form.telefono = response.data[0].Telefono
          this.form.correo = response.data[0].Correo
          this.form.token = localStorage.getItem("token")
          console.log(this.form)
      })
    },
    methods:{
        edit(){
            axios.put("https://api.solodata.es/pacientes", this.form)
            .then(response => {
                console.log(response)
                this.$router.push('/practicas/axiosapp')
                this.$emit('dashboard')
            }).then(error => {
                console.log(error)
            })
        },
        borrar(){
            var enviar = {
                "pacienteId": this.form.pacienteId,
                "token": this.form.token
            }
            axios.delete("https://api.solodata.es/pacientes", { headers: enviar })
                .then(response => {
                    console.log(response)
                    this.$emit('dashboard')
                    this.$router.push('/practicas/axiosapp')
                })
        },
    }
}
</script>