<template>
  <div>
    <div v-if="isAddedToCart">Added to cart</div>
    <button v-else @click="addToCart">🛒 Add to cart</button>
  </div>
</template>

<script>
  import {EventBus} from '../event-bus'

  export default {
    data () {
      return {
        isAddedToCart: false
      }
    },
    props: {
      productId: {
        type: String,
        required: true
      }
    },
    methods: {
      addToCart () {
        EventBus.$emit('add-to-cart', this.productId)
      }
    },
    created () {
      EventBus.$on('added-to-cart', (productId) => {
        if (productId === this.productId) {
          this.isAddedToCart = true
        }
      })
    }
  }
</script>

<style scoped>

</style>
