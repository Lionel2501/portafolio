<template>
  <div class="grid grid-cols-2 gap-4 my-6">
    <section class="h-auto m-3">
      <img src="../assets/img-contacto.jpg" alt="">
    </section>
    <section class="bg-white h-auto">
      <div class="m-3">
        <h1 class="text-2xl text-left p-2 m-1 font-semibold">Contacto</h1>
        <div class="flex p-2 m-1">
          <p>Nombre: </p>
          <p class="font-semibold">&nbsp; Lionel</p>
        </div>
        <div class="flex p-2 m-1">
          <p>Apellido: </p>
          <p class="font-semibold">&nbsp; Cassar</p>
        </div>
        <div class="flex p-2 m-1">
          <p>E-mail: </p>
          <p class="font-semibold">&nbsp; lionelcassar92@gmail.com</p>
        </div>
        <div class="flex p-2 m-1">
          <p>WhatsApp: </p>
          <p class="font-semibold">&nbsp; +54 9 249 4646 055</p>
        </div>
        <div class="flex p-2 m-1">
          <p>LinkedIn: </p>
          <p class="font-semibold">
            <a href="https://www.linkedin.com/in/lionelcassar/" target="blank">&nbsp;Consultar</a>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Contacto',
}
</script>

<style scoped>

.effet{
  background: linear-gradient(to bottom, 255, 255, 255);
}
</style>