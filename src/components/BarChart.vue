<template>
  <div class='bar-chart'>
  <Bar :data="data" :options="options" />
</div>
</template>

<script>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default {
  name: 'App',
  components: {
    Bar
  },
  data() {
    return {
      data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
        datasets: [
          {
            label: 'Consumo Mensal (kWh)',
            data: [12, 19, 3, 5, 2],
            backgroundColor: '#256eb8',
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  }
}
</script>
<style>
.bar-chart {
  height: 45vh;
  width: 90%;
  padding: 25px;
}
</style>