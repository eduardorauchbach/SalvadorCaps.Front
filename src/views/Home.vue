<template>
  <!-- :items: propriedade adicionada no componente -->
  <Brands :items="items" />
</template>

<script>
// @ is an alias to /src
import Brands from '@/components/Brands.vue'
import Axios from "axios";

export default {
  name: 'Home',
  components: {
    Brands,
    Axios
  },
  data() {
    return {
      items: [],
      brand: this.$route.params.brand
    }
  },
  methods: {
    async getTopMenu() {
      await Axios.get('https://salvadorcapsapi.azurewebsites.net/api/Brand')
        .then((response => {
          this.items = response.data
        }))
    },
  },
  beforeMount() {
    this.getTopMenu()
  },
  created() {
    // console.log(this.$route.params.marca)

    // console.log(this.marca)
    // this.items = this.produtos(this.marca)
  },
}
</script>
