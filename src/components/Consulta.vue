<template>
  <v-row dense>
    <v-col lg="3" xl="3" md="3" sm="12" xs="12" v-for="item in items" :key="item.cap">
      <v-card max-width="374">
        <v-img height="250" src="https://media.istockphoto.com/photos/baseball-hat-picture-id864713752?b=1&k=6&m=864713752&s=170667a&w=0&h=pfWcBTNUDWKp7y3wE5m0XLphhBqLPlthMVcWGft189A="></v-img>
        <v-card-title>{{item.nome}}</v-card-title>

        <v-card-text>
          <v-row align="center" class="mx-0">
            <v-rating :value="parseFloat(item.nota)" color="amber" dense half-increments readonly size="14"></v-rating>

            <div class="grey--text ml-4">
              {{item.nota}} (413)
            </div>
          </v-row>

          <div class="my-4 subtitle-1">
            R$ • {{item.valor}}
          </div>

          <div>{{item.descricao}}</div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-actions>
          <v-btn color="success">
            Adicionar na sacola
          </v-btn>
        </v-card-actions>
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
  }
}
</script>
<!-- scoped: a camada de estilo se aplica somente a este component -->
<style scoped>
</style>
