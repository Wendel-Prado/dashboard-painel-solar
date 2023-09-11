<template>
    <div>
      <h1>Dashboard</h1>
      <bar-chart />
      <line-chart/>
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
  