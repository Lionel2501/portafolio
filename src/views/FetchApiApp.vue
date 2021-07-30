<template>
<div class="flex">
    <PracticasList />
    <div id="fetchapi">
        <img :class="gender" v-bind:src="picture" v-bind:alt="firstName">
        <h1> {{firstName}} {{lastName}}</h1>
        <h3>e-mail: {{email}}</h3>
        <button @click="random" :class="gender">Genrate random user</button>
    </div>
</div>
</template>

<script>
import PracticasList from '@/components/PracticasList'

export default {
    name:'FetchApiApp',
    components: {
        PracticasList
    },
    data(){
        return{
            firstName:"John",
            lastName: 'Doe',
            email: 'john@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
        }
    },
    methods: {
      async random(){
        const res = await fetch('https://randomuser.me/api')
            
          const {results} = await res.json()

          this.firstName = results[0].name.first
          this.lastName = results[0].name.last
          this.email = results[0].email
          this.gender = results[0].gender
          this.picture = results[0].picture.large
      }
    },
}
</script>

<style scoped>
#fetchapi {
    width: 400px;
    height: 100vh;
    margin: auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  h1,
  h3 {
    margin-bottom: 1rem;
    font-weight: normal;
  }
  
  img {
    border-radius: 50%;
    border: 5px #333 solid;
    margin-bottom: 1rem;
  }
  
  .male {
    border-color: steelblue;
    background-color: steelblue;
  }
  
  .female {
    border-color: pink;
    background-color: pink;
    color: #333;
  }
  
  button {
    cursor: pointer;
    display: inline-block;
    background: #333;
    color: white;
    font-size: 18px;
    border: 0;
    padding: 1rem 1.5rem;
  }
  
  button:focus {
    outline: none;
  }
  
  button:hover {
    transform: scale(0.98);
  }
</style>