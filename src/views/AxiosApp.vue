<template>
  <div id="app" class="flex">
    <PracticasList 
      @dashboard="openDashboard"/>
    <div class="relative w-full flex justify-center scrollbar scrollbar-thumb-lighttest scrollbar-track-black">
      <Login v-if="login" @userCheck="userCheck" />
      <Dashboard v-if="dashboard"
        @openEdit="openEdit()"
        @openAdd="openAdd"/>
      <Edit 
        v-if="edit" 
        @dashboard="openDashboard"/>
      <Add v-if="add"/>
    </div>
  </div>
</template>

<script>
import PracticasList from '@/components/PracticasList'
import Login from '@/components/Practicas/ApiRestAxios/Login'
import Dashboard from '@/components/Practicas/ApiRestAxios/Dashboard'
import Edit from '@/components/Practicas/ApiRestAxios/Edit'
import Add from '@/components/Practicas/ApiRestAxios/Add'

export default {
  name: 'Home',
  components:{
    PracticasList,
    Login,
    Dashboard,
    Edit,
    Add
  },
  data(){
    return{
      login:true,
      dashboard:false,
      edit:false,
      add:false,
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
  methods:{
    userCheck(){
      this.dashboard = true
      this.login = false
    },
    openEdit(){
      this.edit = true
      this.dashboard = false
    },
    openAdd(){
      this.dashboard = false
      this.edit = false
      this.add = true
    },
    openDashboard(){
      this.dashboard = true
      this.edit = false
      this.add = false
    }
  }
}
</script>

<style>

</style>