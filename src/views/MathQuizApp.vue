<template>
  <div id="app" class="flex">
    <PracticasList />
    <div class="home w-full">
      <h1 class="text-2xl py-3 my-2 font-semibold">Math Quizz App</h1>
      <OperatorQuizz v-if="operator" :operator="operator" @onBack="clearOperator"/>
      <OperatorSelector v-if="!operator" @selectOperator="selectOperator"/>
  </div>
  </div>
</template>

<script>
import OperatorSelector from '@/components/Practicas/MathQuiz/OperatorSelector.vue'
import OperatorQuizz from '@/components/Practicas/MathQuiz/OperatorQuizz.vue'
import PracticasList from '@/components/PracticasList'

export default {
  name: 'Home',
  components:{
      PracticasList,
      OperatorSelector, 
      OperatorQuizz
  },
  data(){
    return{
      operator:null
    }
  },
  methods:{
    selectOperator(operator){
      this.operator = operator
    },
    clearOperator(){
      this.operator = null
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>