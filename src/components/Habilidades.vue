<template>
  <div class="">
    <div class="flex justify-between">
      <h1 class="text-left font-semibold text-2xl tracking-wider">HABILIDADES</h1>
      <h2 class="text-md float-right bg-green p-2 text-white rounded-md font-semibold hover:font-semibold">
        <router-link to="/practicas">Ver practicas</router-link>
      </h2>
    </div>
    <div class="grid grid-cols-3 gap-4 my-5">
      <div 
        class="shadow-xl rounded bg-white m-2 flex "
        v-for="item in items" :key="item.id">
        <img class="w-28 h-28 m-6 hover:opacity-80" :src="item.img" alt="">
        <div class="flex items-center">
          <h2 class=" text-center py-2 text-md font-semibold text-gray-500">{{ item.title }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Habilidades',
  data() {
    return {
      items:[
        {
          id:1,
          img:require("../assets/html5.png"),
          title:'HTML 5'
        },
        {
          id:2,
          img:require("../assets/css.png"),
          title:'CSS'
        },
        {
          id:3,
          img:require("../assets/js.png"),
          title:'JAVASCRIPT'
        },
         {
          id:4,
          img:require("../assets/vuejs.png"),
          title:'VUE JS'
        },
        {
          id:5,
          img:require("../assets/laravel1.png"),
          title:'LARAVEL 8'
        },
        {
          id:6,
          img:require("../assets/mysql.png"),
          title:'MY SQL'
        },
        {
          id:7,
          img:require("../assets/tailwind3.png"),
          title:'TAILWIND'
        }, 
        {
          id:8,
          img:require("../assets/bootstrap.png"),
          title:'BOOTSTRAP'
        },       
        {
          id:9,
          img:require("../assets/github.png"),
          title:'GIT HUB'
        },
      ],
    }
  },
}
</script>

<style>

</style>