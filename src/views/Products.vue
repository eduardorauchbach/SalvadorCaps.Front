<template>
  <!-- :items: propriedade adicionada no componente -->
  <Search :brand="brand" :items="items" />
</template>

<script>
// @ is an alias to /src
import Search from '@/components/Search.vue'
import Json from '@/domain/produtos.js'

export default {
  name: 'Produtos',
  components: {
    Search,
    Json
  },
  data() {
    return {
      items: [],
      brand: this.$route.params.brand
    }
  },
  /* Toda vez que houver alguma alteração de valor no route.params ele carrega a lista de produtos
  *  Isso foi feito por conta do meu created ja te sido chamado e eu estar no mesmo componente pois o mesmo ja foi carregado. 
  */
  watch: {
    '$route.params.marca'() {
      this.brand = this.$route.params.brand
      this.items = this.produtos(this.$route.params.brand)
    },
  },
  created() {
    console.log(this.$route.params.brand)

    console.log(this.brand)
    this.items = this.produtos(this.brand)
  },
  methods: {
    produtos(brand) {
      var produtos = new Json()
      return produtos.listar(brand)
    }
  }
}
</script>
