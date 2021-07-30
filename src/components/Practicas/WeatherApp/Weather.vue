<template>
  <div class="border-gray-800 rounded-lg">
    <div class="flex justify-center">
      <form 
        class="w-full max-w-md"
        @submit.prevent="getWeather">
        <h1 class="text-gray-800 text-2xl p-2 font-semibold text-center mb-10">WEATHER APP</h1>
        <h2 class="py-2">Ingresar ciudad:</h2>
        <div class="md:flex md:items-center mb-6">
          <div class="flex">
            <input 
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"  
              type="text"
              v-model="city_name">
            <p 
              class="text-sm text-red-600"
              v-if="notFound">City not found, try again</p>
            </div>
            <button 
              class="ml-10 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" 
              type="button"
              @click="getWeather">
              Search
          </button>
        </div>
      </form>
    </div>
    <div class="flex justify-center p-10">
      <table class="table-auto">
        <thead>
          <tr>
            <th class="px-4 py-2">City</th>
            <th class="px-4 py-2">Temperature</th>
            <th class="px-4 py-2">Humidity</th>
            <th class="px-4 py-2">Description</th>
            <th class="px-4 py-2">Feels like</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border px-4 py-2"> {{ this.city_name }} </td>
            <td class="border px-4 py-2"> {{ this.weather.temp }} </td>
            <td class="border px-4 py-2"> {{ this.weather.humidity }} </td>
            <td class="border px-4 py-2"> {{ this.weather.description }} </td>
            <td class="border px-4 py-2"> {{ this.weather.feels_like }} </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Weather',
  data() {
    return {
      notFound: false,
      api_key: '6bff45d6fbbb8b2a149ee276e80b05d5',
      city_name:'',
      weather:{
        temp:'',
        description:'',
        humidity:'',
        feels_like:''
      }
    }
  },
  methods: {
    getWeather: async function() {
      if(this.city_name){
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${this.city_name}&appid=${this.api_key}&units=metric`
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)

        this.weather.temp = data.main.temp
        this.weather.humidity = data.main.humidity
        this.weather.description = data.weather[0].description
        this.weather.feels_like = data.main.feels_like

      } else {
        this.notFound = true
      }
    }
  },
}
</script>

