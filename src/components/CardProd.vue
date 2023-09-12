<template>
    <v-card max-width="400" class="mx-auto">

                    <div class="card-custo">
                       <div style="background: #074278; width: 60px;">
                        <v-icon icon="mdi-checkbox-marked-circle" size="x-large" />
                       </div>
                        <div style="padding: 15px;display: grid;">
                            <div class="text-title">Produção Atual</div>
                            <div class="text-content">4.8 kW</div>
                        </div>
                    </div>
    </v-card>
</template>
<style>
.card-custo {
    display: flex;
    width: 200px;
    height:100px;
}
.text-title{
    font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"  !important
}
.text-content{
    font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"  
}
</style>