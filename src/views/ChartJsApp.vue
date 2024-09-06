<template>
  <div class="flex">
    <PracticasList/>
    <!-- <PlanetChart/> -->
  </div>
</template>

<script>
import PracticasList from '@/components/PracticasList'
/* import PlanetChart from '@/components/Practicas/ChartJsApp/PlanetChart.vue' */

export default {
  name: 'ChartJsApp',
  components: {
    PracticasList,
    /* PlanetChart, */
  }
}
</script>