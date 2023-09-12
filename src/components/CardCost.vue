<template>
    <v-card max-width="400" class="mx-auto">

                    <div class="card-custo">
                       <div style="background: #000; width: 60px;display: flex; align-items: center;justify-content: center;">
                        <mdicon name="currency-usd" style="margin: 5px; color: #fff;"/>
                       </div>
                        <div style="padding: 15px;display: grid;">
                            <div class="text-title">Custo Total</div>
                            <div class="text-content">R$ 160,00</div>
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