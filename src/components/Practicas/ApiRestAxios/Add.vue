<template>
    <div>
        <h1 class="text-left px-3 my-2 text-xl font-semibold mt-10">Agregar un paciente</h1>
        <div class="p-3">
            <form
                @submit.prevent="add" 
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
                    type="submit">Agregar</button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name:'Add',
    data(){
        return{
            form: {
                "nombre" : "",
                "dni" : "", 
                "correo": "",
                "telefono" : "",
                "token" :  ""
            },
            counter: 0
        }
    },
    methods:{
        add(){
            console.log(this.form)
            this.form.token = localStorage.getItem("token")
            console.log(this.form.token)
            axios.post("https://solodata.es/pacientes", this.form)
            .then(response => {
                console.log(response)
                alert('se agrego')
            })
            .catch(error => {
                console.log(error)
            })
        },
    }
}
</script>