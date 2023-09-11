<template>
  <div class='my-chart-component'>
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
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
        datasets: [
          {
            label: 'Vendas',
            data: [12, 19, 3, 5, 2]
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

</script><style>
.my-chart-component {
  height: 100%;
  width: 60%;
}
</style>