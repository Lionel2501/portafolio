<template>
  <div>
    <section class="h-60 img">
      <div class="text h-60 text-center text-white opacity-100 flex items-center justify-center">
        <h1 class="text tracking-wider text-3xl text-center font-bold">
          Hola me llamo Lionel, soy desarrollador front end trainee <br>
        <span class="tracking-wider text-sm text-center font-normal">Busco mi primera experiencia profesional</span></h1>
      </div>
    </section>
    <section class="flex justify-center shadow">
      <button 
        v-for="(item, index) in items" :key="item.index"
        @click="openItem(index)" 
        :class="item.show ? 'p-3 m-3 border' 
        : 'p-3 m-3 bg-gray-100 rounded-lg hover:bg-gray-300'"
        >{{ item.title }}
      </button>
    </section>
    <section >
      <Presentacion 
        class="mx-10 mb-10 p-5 rounded" 
        v-if="items[0].show" />
      <Habilidades 
        class="mx-10 mb-10 p-5 rounded" 
        v-if="items[1].show" />
      <Educacion 
        class="mx-10 mb-10 p-5 rounded" 
        v-if="items[2].show" />
      <Experiencia 
        class="mx-10 mb-10 p-5 rounded" 
        v-if="items[3].show" />
      <Idiomas 
        class="mx-10 mb-10 p-5 rounded" 
        v-if="items[4].show" />
    </section>
  </div>
</template>

<script>
import Presentacion from '@/components/Presentacion'
import Habilidades from '@/components/Habilidades'
import Educacion from '@/components/Educacion'
import Experiencia from '@/components/Experiencia'
import Idiomas from '@/components/Idiomas'

export default {
  name: 'Home',
  components: {
    Presentacion, 
    Habilidades, 
    Educacion, 
    Experiencia,
    Idiomas
  },
  data() {
    return {
      items: [
          {
            title:'Presentacíon',
            show: true,
          },
          {
            title:'Habilidades',
            show: false
          },
          {
            title:'Educacíon',
            show: false
          },
          {
            title:'Experiencia',
            show: false
          },
          {
            title:'Idiomas',
            show: false
          }
      ],
    }
  },
  methods: {
    openItem(index){
      for (let i = 0; i < this.items.length; i++) {
        this.items[i].show = false
      }
      if (this.items[index].show == false) {
        this.items[index].show = true     
      }
    },
  }
}
</script>

<style scoped>
  .text{
    backdrop-filter: blur(5px);
    backdrop-filter: background-color(rgba(0,0,0,0.9));
  }

  .img{
    background-image: url('../assets/img-banner5.jpg');
  }

  .dark{
    background-color: rgba(0,0,0,0.9);
  }

  .border{
    border: 0.5px rgb(202, 202, 202) solid;
    border-radius: 5px;
  }
</style>
