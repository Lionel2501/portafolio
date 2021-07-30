<template>
  <div class="">
    <h1 class="text-left font-semibold text-2xl tracking-wider">PRESENTACÍON</h1>
    <div class="grid grid-cols-3 gap-4 mt-2">
      <div v-for="item in items" :key="item.id" class="p-5">
        <div class="text-black">
          <div class="flex justify-center">
            <img class="w-24" :src="item.img" alt="">
          </div>
          <h1 class="my-3 font-semibold text-xl">{{ item.title }}</h1>
          <ul class="text-left text-sm tracking-wider mt-5 ml-10">
            <li>{{ item.text1 }}</li>
            <li>{{ item.text2 }}</li>
            <li v-if="item.text3">{{ item.text3 }}</li>
            <li v-if="item.text4">{{ item.text4 }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Presentacion',
  data() {
    return {
      items:[
        {
          id:1,
          title:'Universidad',
          img:require("../assets/university-logo.png"),
          text1:'UNICEN, Tandil',
          text2:'Tecnicatura Universitaria de Desarrollo de Aplicacíon Informatica',
          text3:'2 año'
        },
        {
          id:2,
          title:'Objectivos',
          img:require("../assets/objectiv-logo.png"),
          text1:'Poner en práctica mis conocimientos',
          text2:'Seguir aprendiendo',
          text3:'Formar parte de un equipo de trabajo'
        },
        {
          id:3,
          title:'Team',
          img:require("../assets/team-logo.png"),
          text1:'Uso de GitHub con la facultad',
          text2:'Desarrollo de proyectos con la facultad',
          text3:'Uso de Trello',
        },
        {
          id:4,
          title:'Skills',
          img:require("../assets/skills-logo.png"),
          text1:'Arquitectura MVC',
          text2:'Single Page Application',
          text3:'Programacion Orientada a Objetos',
          text4:'Bases de datos',
        },
        {
          id:5,
          title:'Proyectos',
          img:require("../assets/laptop-logo.png"),
          text1:'https://www.lionelcassar.online',
          text2:'https://www.cursos.ayp.org.ar/',
          text3:'FlyShoes UNICEN',
          link3: 'https://github.com/Lionel2501/unicen_flyshoes'
        },
        {
          id:6,
          title:'Comentario',
          img:require("../assets/idea-logo2.png"),
          text1:'Desafiarme para aprender',
          text2:'Importancia del trabajo en equipo',
          text3:'',
        },
      ]
    }
  },
}
</script>

<style scoped>

</style>
