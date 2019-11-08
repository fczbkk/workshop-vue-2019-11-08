<template>
  <div class="productsList">
    <product-item
      v-for="(product) in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
  import ProductItem from './ProductItem'
  export default {
    components: {
      ProductItem
    },
    props: {
      products: {
        type: Array,
        required: false,
        default: () => []
      }
    }
  }
</script>

<style scoped>

</style>
