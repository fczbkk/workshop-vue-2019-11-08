<template>
  <div class="box">
    <div class="title">
      <h3>{{ title }}</h3>
    </div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: false,
        default: ''
      }
    }
  }
</script>

<style scoped>

</style>
