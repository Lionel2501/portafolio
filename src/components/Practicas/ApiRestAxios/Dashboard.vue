<template>
<div>
    <button 
        class="bg-blue-500 rounded-md p-2 text-white float-right mt-8"
        @click="openAdd">Agregar
    </button>
    <h1 class="text-left my-2 text-2xl font-semibold mt-10">Lista de pacientes</h1>
    <div class="flex items-center mt-5">
        <table class="table table-dark text-left p-3 "
            style="height:80vh">
            <thead>
                <tr>
                    <th class="p-2 m-1" scope="col">ID</th>
                    <th class="p-2 m-1" scope="col">Nombre</th>
                    <th class="p-2 m-1" scope="col">DNI</th>
                    <th class="p-2 m-1" scope="col">Telefono</th>
                    <th class="p-2 m-1" scope="col">E-mail</th>
                    <th class="p-2 m-1" scope="col">Editar</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="paciente in listaPaciente" :key="paciente.PacienteId"
                >
                    <td class="p-2 m-1">{{ paciente.PacienteId }}</td>
                    <td class="p-2 m-1">{{ paciente.Nombre }}</td>
                    <td class="p-2 m-1">{{ paciente.DNI }}</td>
                    <td class="p-2 m-1">{{ paciente.Telefono }}</td>
                    <td class="p-2 m-1">{{ paciente.Correo }}</td>
                    <td class="p-2 m-1">
                        <button 
                            class=" text-white p-1 m-1 bg-blue-800 rounded"
                            @click="openEdit(paciente.PacienteId)">Editar</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
    name:'Dashboard',
    data(){
        return {
            listaPaciente: null,
            pagina: 1
        }
    },
    mounted(){
      let url = "https://api.solodata.es/pacientes?page=" + this.pagina

      axios.get(url)
      .then(response => {
          this.listaPaciente = response.data
      })
    },
    methods:{
        openEdit(id){
            console.log(id)
            this.$emit('openEdit')
            this.$router.push('/practicas/axiosapp/edit/' + id)
        },
        openAdd(){
            this.$emit('openAdd')
        },
        borrar(){
            var enviar = {
                "pacienteId": this.form.pacienteId,
                "token": this.form.token
            }
            axios.delete("https://api.solodata.es/pacientes", { headers: enviar })
                .then(response => {
                    console.log(response)
                this.$router.push('/dashboard')
                })
        },
    }
}
</script>