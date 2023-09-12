<template>
    <div>
      <h1>Dashboard</h1>
      <v-divider></v-divider>
      <div class="container-items">
      <div class="container-cards">
        <card-prod/> 
        <card-carbo/> 
        <card-temp/> 
        <card-cost/>
        <card-economia/> 
        <card-desempenho/>
      </div>
      <div class="container-charts">
      <v-card class="mx-auto"  width="100%"><bar-chart /> </v-card>

      <v-card class="mx-auto" width="100%"><line-chart/></v-card>
      </div>
    </div>
    </div>
  </template>
  
  <script>
  import BarChart from './BarChart.vue';
  import LineChart from './LineChart.vue';
  import CardProd from './CardProd.vue';
  import CardCarbo from './CardCarbo.vue';
  import CardTemp from './CardTemp.vue';
  import CardCost from './CardCost.vue';
  import CardEconomia from './CardEconomia.vue';
  import CardDesempenho from './CardDesempenho.vue';
  export default {
    components: {
      BarChart,
      LineChart,
      CardProd,
      CardCarbo,
      CardTemp,
      CardCost,
      CardEconomia,
      CardDesempenho
    },
  };
  </script>
  <style>
.container-cards{
  display: flex;
  width: 100%;
  gap:20px;
  justify-content:space-between
}
.container-items{
  display: grid;
  gap:20px
}
.container-charts{
  display: flex;
  gap:20px
}
</style>