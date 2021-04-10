<template>
  <!-- :items: propriedade adicionada no componente -->
  <ConsultaProdutos :items="items" />
</template>

<script>
// @ is an alias to /src
import ConsultaProdutos from '@/components/Consulta.vue'
export default {
  name: 'Home',
  components: {
    ConsultaProdutos
  },
  data () {
    return {
      items: []
    }
  },
  created () {
    const response = fetch('/domain/' + this.$route.params.marca + '.json').then(data => { console.log(data) })
    console.log(response)
    const json = response.json()

    this.items = json
  }
}
</script>
