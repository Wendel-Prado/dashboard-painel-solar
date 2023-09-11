<template>
  <div class='my-chart-component'>
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
            label: 'Vendas',
            data: [12, 19, 3, 5, 2]
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
        // Outras opções de configuração do gráfico aqui
      }
    }
  }
}
</script>
<style>
/* Estilos CSS para o componente Vue */

</style>