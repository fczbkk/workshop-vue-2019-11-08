<template>
  <universal-box :title="product.title">
    <div class="productItem">
      <div class="productImage">
        <img :src="imageUrl" alt="" height="100">
      </div>
      <p>{{ product.description }}</p>
      <div class="price">
        {{ product.price | price(0) | currency('USD') }}
      </div>
      <div class="addToCart">
        <add-to-cart :product-id="product.id" />
      </div>
    </div>
  </universal-box>
</template>

<script>
  import priceMixin from './../utilities/price-mixin'
  import AddToCart from './AddToCart'
  import UniversalBox from './UniversalBox'
  export default {
    components: { UniversalBox, AddToCart },
    mixins: [priceMixin],
    props: {
      product: {
        type: Object,
        required: true
      }
    },
    computed: {
      imageUrl () {
        return `http://localhost:3000/images/${this.product.image}`
      }
    }
  }
</script>

<style scoped>

</style>
