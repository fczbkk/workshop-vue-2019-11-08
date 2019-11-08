<template>
  <div id="cart">
    🛒
    {{ countProductsInCart }}
  </div>
</template>

<script>
  import {EventBus} from './../event-bus'

  export default {
    data () {
      return {
        productsInCart: {}
      }
    },
    computed: {
      countProductsInCart () {
        return Object.keys(this.productsInCart).length
      }
    },
    created () {
      EventBus.$on('add-to-cart', (productId) => {
        this.$set(this.productsInCart, productId, 1)
        EventBus.$emit('added-to-cart', productId)
      })
    }
  }
</script>

<style scoped>

</style>
