<template>
  <v-row class="center main">
    <v-col xl="2" lg="3" md="4" sm="5" cols="7" v-for="item in items" :key="item.id">
      <v-card class="transparent brand">
        <router-link :to="{ name:'Products', params: { brandName: item.name }}">
          <img class="brand-box" :src=item.desktopSpotlightImage />
        </router-link>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>

export default {
  // Definição das props do componente
  props: {
    items: {
      Required: true,
      type: [Object, Array]
    }
  },
  data: () => ({
    selection: '',
  }),
  methods: {
    getInteger(num) {
      return Math.floor(num).toString();
    },
    getDecimal(num) {
      return (num - Math.floor(num)).toFixed(2).replace("0.", "");
    },
  }
}
</script>
<!-- scoped: a camada de estilo se aplica somente a este component -->
<style scoped>
.brand {
  margin: 12px;
  transform: skewX(17deg) !important;
  overflow: hidden;
}
.brand-box {
  width: 180%;
  transform: skewX(-17deg);
  margin: -8% -39% !important;
}
</style>
