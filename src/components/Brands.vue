<template>
  <v-row class="center main">
    <v-col xl="2" lg="3" md="4" sm="5" cols="7" v-for="item in items" :key="item.cap" class="center">
      <v-card max-width="400" class="transparent brand">
        <router-link :to="{name:'Products', params: { brand: item.name }}">
          <img class="brand-box" src="https://media.istockphoto.com/photos/baseball-hat-picture-id864713752?b=1&k=6&m=864713752&s=170667a&w=0&h=pfWcBTNUDWKp7y3wE5m0XLphhBqLPlthMVcWGft189A=" />
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
  data() {
    return {
      selection: ''
    }
  },
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
  transform: skewX(17deg);
  overflow: hidden;
}
.brand-box {
  max-height: 374;
  max-width: 374;
  width: 230%;
  transform: skewX(-17deg);
  margin-left: -35%;
}
</style>
