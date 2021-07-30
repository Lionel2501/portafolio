<template>
    <div class="h-full flex items-center">
        <div class="w-full max-w-xs">
            <div class="text-left my-5">
                <p class="font-semibold">Username: usuario1@gmail.com</p>
                <p class="font-semibold">Password: 123456</p>
            </div>
            <form 
                @submit.prevent="onSubmit"
                class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div class="mb-4">
                    <label 
                        class="block text-gray-700 text-sm font-bold mb-2" 
                        for="username"
                        >
                        Username
                    </label>
                    <input 
                        v-model="user"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        type="text" 
                        placeholder="Username">
                </div>
                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Password
                    </label>
                    <input 
                        v-model="password"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                        id="password" 
                        type="password" 
                        placeholder="******">
                    <p 
                        class="text-red-500 text-xs italic"
                        v-if="error">
                        Please choose a password.</p>
                    <p>{{ error_msg }}</p>
                </div>
                <div class="flex items-center justify-between">
                    <button 
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                        type="submit">
                        Sign In
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name:'Login',
    data() {
        return {
            user:'',
            password:'',
            error:false,
            error_msg:''
        }
    },
    methods: {
        onSubmit(){
        let data = {
            "usuario": this.user,
            "password": this.password
        }

        let url = "https://api.solodata.es/auth"

        axios.post(url, data).then(response => {
            if(response.data.status == "ok"){
                localStorage.token = response.data.result.token
                //this.$router.push('practicas')
                this.$emit('userCheck')
                console.log(response.data.status)
            } else {
                alert('entrar con los datosd indicado')
                this.error = true,
                this.error_msg = response.data.result.error_msg
            }
        })
        }
    },
}
</script>