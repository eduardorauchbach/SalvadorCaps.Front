<template>
  <!-- :items: propriedade adicionada no componente -->
  <ConsultaProdutos :marca="marca" :items="items" />
</template>

<script>
// @ is an alias to /src
import ConsultaProdutos from '@/components/Consulta.vue'
import Json from '@/domain/produtos.js'

export default {
  name: 'Home',
  components: {
    ConsultaProdutos,
    Json
  },
  data() {
    return {
      items: [],
      marca: this.$route.params.marca
    }
  },
  /* Toda vez que houver alguma alteração de valor no route.params ele carrega a lista de produtos
  *  Isso foi feito por conta do meu created ja te sido chamado e eu estar no mesmo componente pois o mesmo ja foi carregado. 
  */
  watch: {
    '$route.params.marca'() {
      this.marca = this.$route.params.marca
      this.items = this.produtos(this.$route.params.marca)
    },
  },
  created() {
    console.log(this.$route.params.marca)

    console.log(this.marca)
    this.items = this.produtos(this.marca)
  },
  methods: {
    produtos(marca) {
      var produtos = new Json()
      return produtos.listar(marca)
    }
  }
}
</script>
