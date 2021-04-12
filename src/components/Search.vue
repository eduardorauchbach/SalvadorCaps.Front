<template>
  <v-row class="center main pad-footer">
    <v-card-title class="title">
      <h1>{{brand}}</h1>
    </v-card-title>
    <v-col xl="2" lg="3" md="4" sm="5" xs="11" v-for="item in items" :key="item.cap" :class="{'center': $vuetify.breakpoint.xs}">
      <v-card max-width="374" class="transparent product">
        <v-img class="product-box" src="https://media.istockphoto.com/photos/baseball-hat-picture-id864713752?b=1&k=6&m=864713752&s=170667a&w=0&h=pfWcBTNUDWKp7y3wE5m0XLphhBqLPlthMVcWGft189A="></v-img>
        <v-card-title class="center product-name">{{item.nome}}</v-card-title>
        <div class="center product-price">
          <small>R$</small><b>{{ getInteger(item.valor) }},</b><small>{{ getDecimal(item.valor) }}</small>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  // Definição das props do componente
  props: {
    brand: {
      Required: true,
      type: [Object, String]
    },
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
.title {
  width: 100%;
  float: left;
  margin: 20px 0px 0px;
  display: flex;
  justify-content: center;
}
.title h1 {
  font-family: "Montserrat";
  font-size: 40px;
  font-weight: 800;
  margin: 0px;
}
.product {
  margin: 12px;
}
.product-box {
  max-height: 374;
  max-width: 374;
  border: 10px solid #feb425;
}
.product-name {
  padding: 10px 10px 0px;
  font-size: 18px;
  font-weight: 700;
}
.product-price {
  display: flex;
}
.product-price > small {
  align-self: flex-end;
  font-size: 12px;
  font-weight: 600;
  padding: 2px;
}
.product-price > b {
  align-self: flex-end;
}
</style>
