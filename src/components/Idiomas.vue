<template>
  <div class="">
    <div class="flex justify-between">
      <h1 class="text-left font-semibold text-2xl tracking-wider">IDIOMAS</h1>
    </div>
    <div class="grid grid-cols-3 gap-4">
      <div 
        class="shadow-md rounded bg-white m-2 flex"
        v-for="idioma in idiomas" :key="idioma.id">
        <img class="w-28 h-20 m-6 hover:opacity-80 rounded-md" :src="idioma.img" alt="">
        <div class="mt-5">
          <h2 class="text-left py-2 text-md font-semibold text-gray-500">Idioma: {{ idioma.title }}</h2>
          <h2 class="text-left py-2 text-md font-semibold text-gray-500">Nivel: {{ idioma.nivel }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Idiomas',
  data() {
    return {
      idiomas:[
        {
          id:1,
          title:'Francés',
          nivel:"Nativo",
          img:require("../assets/fr-flag.gif"),
        },
        {
          id:2,
          title:'Español',
          nivel:"Nativo",
          img:require("../assets/sp-flag.gif"),
        },
        {
          id:3,
          title:'Inglés',
          nivel:"Avanzado",
          img:require("../assets/uk-flag.gif"),
        },
      ]
    }
  },
}
</script>

<style>

</style>