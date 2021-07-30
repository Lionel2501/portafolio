<template>
  <div class=" flex justify-center">
      <button @click="$emit('selectOperator', '+')">Addition <br>+</button>
      <button @click="$emit('selectOperator', '-')">Substraction <br>-</button>
      <button @click="$emit('selectOperator', '/')">Division <br> /</button>
      <button @click="$emit('selectOperator', '*')">Multiplication <br>*</button>
  </div>
</template>

<script>
export default {
    name:'OperatorSelector',
}
</script>

<style scoped>
  button{
    background-color: #7fbf7f;
    padding: 8px;
    font-size: 24px;
    width: 200px;
    margin: 10px;
  }
</style>