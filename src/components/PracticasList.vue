<template>
  <div  class="h-screen rounded border-r-2 border-gray-600 flex flex-col w-full md:w-64 bg-gray-600 dark-mode:text-gray-200 dark-mode:bg-gray-800 flex-shrink-0">
      <div class="flex-shrink-0 px-8 py-4 flex flex-row items-center justify-between">
      <h1 class="text-left font-semibold text-2xl tracking-wider text-white">
        <a href="/practicas">PRACTICAS</a></h1>
      </div>
      <nav  
        class=" md:block px-4 pb-4 md:pb-0 md:overflow-y-auto"
      >
      <p 
          @click="openAxiosApp"
          class="text-left cursor-pointer font-semibold block px-4 py-2 mt-2 text-sm text-white bg-transparent 
          rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 
          dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900
        focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          href="#">Axios App
      </p>
      <p 
          @click="openFetchApiApp"
          class="text-left cursor-pointer font-semibold block px-4 py-2 mt-2 text-sm text-white bg-transparent 
          rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 
          dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900
        focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          href="#">Fetch Api App
      </p>
      <p 
          @click="openWeatherApp"
          class="text-left cursor-pointer font-semibold block px-4 py-2 mt-2 text-sm text-white bg-transparent 
          rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 
          dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900
        focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          href="#">Weather App
      </p>
      <p 
          @click="openMathQuizApp"
          class="text-left cursor-pointer font-semibold block px-4 py-2 mt-2 text-sm text-white bg-transparent 
          rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 
          dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900
        focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          href="#">Math Quiz App
      </p>
      <p 
          @click="openMusicApp"
          class="text-left cursor-pointer font-semibold block px-4 py-2 mt-2 text-sm text-white bg-transparent 
          rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 
          dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900
        focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          href="#">Music App
      </p>
<!--       <p 
          @click="openChartJsApp"
          class="text-left cursor-pointer font-semibold block px-4 py-2 mt-2 text-sm text-white bg-transparent 
          rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 
          dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900
        focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          href="#">Chart Js App
      </p> -->
      <p 
          @click="openSpotifyUiApp"
          class="text-left cursor-pointer font-semibold block px-4 py-2 mt-2 text-sm text-white bg-transparent 
          rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 
          dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900
        focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          href="#">Spotify UI App
      </p>
<!--       <p 
          @click="openSocketIoApp"
          class="text-left cursor-pointer font-semibold block px-4 py-2 mt-2 text-sm text-white bg-transparent 
          rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 
          dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900
        focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          href="#">Socket Io App
      </p> -->
      </nav>
  </div>
</template>

<script>


export default {
  name: 'Practicas',
  data() {
    return {
      practicas: [
          {
            title:'Weather App',
            img:'',
            language:'Vue js',
            skills: 'api rest, open , tailwind',
            description:'',
            show: true,
          },
          {
            title:'Math Quiz',
            img:'',
            language:'Vue js',
            skills: 'api rest, open , tailwind',
            description:'',
            show: false
          },
          {
            title:'Api Rest Axios',
            img:'',
            language:'Vue js',
            skills: 'api rest, axios, tailwind',
            description:'',
            show: false
          },
      ],
    }
  },
  methods: {

    openAxiosApp(){
      this.$router.push('/practicas/axiosapp')
      this.$emit('dashboard')
    },
    openWeatherApp(){
      this.$router.push('/practicas/weatherapp')
    },
    openFetchApiApp(){
      this.$router.push('/practicas/fetchapiapp')
    },
    openMathQuizApp(){
      this.$router.push('/practicas/mathquizapp')
    },
    openMusicApp(){
      this.$router.push('/practicas/musicapp')
    },
    openChartJsApp(){
      this.$router.push('/practicas/chartjsapp')
    },
    openSpotifyUiApp(){
      this.$router.push('/practicas/spotifyuiapp')
    },
/*     openSocketIoApp(){
      this.$router.push('/practicas/socketioapp')
    }, */
  }
}
</script>

<style scoped>

</style>