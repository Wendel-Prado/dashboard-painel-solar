<template>
    <div>
      <h1>Dashboard</h1>
      <div>
      <v-card class="mx-auto"  width="100%"><bar-chart /> </v-card>

      <v-card class="mx-auto" width="100%"><line-chart/></v-card>
      </div>
    </div>
  </template>
  
  <script>
  import BarChart from './BarChart.vue';
  import LineChart from './LineChart.vue';
  export default {
    components: {
      BarChart,
      LineChart
    },
  };
  </script>
  