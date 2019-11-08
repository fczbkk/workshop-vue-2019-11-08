<template>
  <div class="home">
    <h1>Home</h1>

    <universal-box title="Categories">
      <ul>
        <li
          v-for="(label, key) in categoriesList"
          :key="key"
        >
          <router-link :to="{name: 'category', params: {category_id: key}}">{{ label }}</router-link>
        </li>
      </ul>
    </universal-box>

    <h2>Highlighted products</h2>
    <products-list :products="highlightedProducts" />

  </div>
</template>

<script>
  import ProductsList from '../components/ProductsList'
  import UniversalBox from '../components/UniversalBox'

  export default {
    components: {
      UniversalBox,
      ProductsList
    },
    data () {
      return {
        categoriesList: {},
        highlightedProducts: []
      }
    },
    created () {
      fetch('http://localhost:3000/categories')
        .then((response) => response.json())
        .then((categoriesList) => this.categoriesList = categoriesList);
      fetch('http://localhost:3000/highlighted')
        .then((response) => response.json())
        .then((highlightedProducts) => this.highlightedProducts = highlightedProducts);
    }
  }
</script>
