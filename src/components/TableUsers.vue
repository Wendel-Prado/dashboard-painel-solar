<template>
  <v-table style='font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'>
    <thead>
      <tr>
        <th class="text-left">
          Nome
        </th>
        <th class="text-left">
          Telefone
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in desserts" :key="item.name">
        <td>{{ item.name }}</td>
        <td>{{ item.phone }}</td>
      </tr>
    </tbody>
  </v-table>
</template>
  
<script>
export default {
  data() {
    return {
      desserts: [
        { name: 'Ana Silva', phone: '(11) 1234-5678' },
        { name: 'José Santos', phone: '(21) 9876-5432' },
        { name: 'Maria Oliveira', phone: '(31) 5555-5555' },
        { name: 'Rafael Souza', phone: '(41) 3333-3333' },
        { name: 'Fernanda Lima', phone: '(51) 7777-7777' },
        { name: 'Carlos Pereira', phone: '(62) 2222-2222' },
        { name: 'Lúcia Costa', phone: '(71) 9999-9999' },
        { name: 'Paulo Rodrigues', phone: '(81) 8888-8888' },
        { name: 'Juliana Ferreira', phone: '(91) 4444-4444' },
        { name: 'André Alves', phone: '(99) 6666-6666' }
      ],
    }
  },
}
</script>
