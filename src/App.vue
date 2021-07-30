<template>
  <div id="app" class="h-screen">
    <header class="h-14 bg-white flex justify-between px-10 items-center shadow-md">
      <div class="text-gray-700">
        <h1 class="text-3xl cursor-pointer">
          <router-link to="/">Lionel Cassar portafolio</router-link>
        </h1>
      </div>
      <div class="text-gray-700">
        <router-link to="/">Home</router-link> |
        <router-link to="/practicas">Practicas</router-link> |
        <router-link to="/contacto">Contacto</router-link> |
        <a href="https://github.com/Lionel2501" target="_blank">Git Hub</a>
      </div>
    </header>
    <main class=" bg-gray-300">
      <router-view class="bg-white pb-5" />
    </main>
    <footer class="h-10 bg-black flex items-center justify-center static bottom-0">
      <p class="text-white text-center text-xs">Este sitio fue creado por Lionel Cassar</p>
    </footer>
  </div>
</template>

<style>
*{
  font-family: 'Open Sans', sans-serif;
}
</style>
