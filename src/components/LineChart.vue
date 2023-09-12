<template>
  <div class='line-chart'>
    <Line :data="data" :options="options" />
  </div>
</template>

<script>
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'vue-chartjs'


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export default {
  name: 'App',
  components: {
    Line
  },
  data() {
    return {
      data: {
        labels: ['07/09', '08/09', '09/09', '10/09', '11/09'],
        datasets: [
          {
            label: 'Consumo Diário (kWh)',
            data: ['12', '19', '3', '5', '2'],
            backgroundColor: '#074278',

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
.line-chart {
  height: 45vh;
  width: 90%;
  padding: 25px;
}

@media (max-width: 768px) {
  .line-chart {
    height: 25vh;
  }
}
</style>