<template>
  <div>
    <p>{{ dummy }}</p>
    <h1>Category</h1>
    <products-list :products="categoryProducts" />
  </div>
</template>

<script>
  import ProductsList from '../components/ProductsList'

  export default {
    components: {
      ProductsList
    },
    data () {
      return {
        categoryProducts: []
      }
    },
    props: {
      dummy: {
        type: String,
        required: false,
        default: ''
      }
    },
    created () {
      fetch('http://localhost:3000/categories/' + this.$route.params.category_id)
        .then((response) => response.json())
        .then((categoryProducts) => this.categoryProducts = categoryProducts);
    }
  }</script>

<style scoped>

</style>
