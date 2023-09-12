<template>
    <div>
        <h1>Usuários</h1>
        <v-divider></v-divider>
        <div>
            <v-card class="mx-auto" width="100%"><table-users /></v-card>

        </div>
    </div>
</template>
  
<script>
import TableUsers from './TableUsers.vue';

export default {
    components: {
        TableUsers,

    },
};
</script>
  