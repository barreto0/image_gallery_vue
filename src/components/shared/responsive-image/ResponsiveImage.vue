<template>
  <img class="responsive-image" v-bind:src="url" :alt="author">
</template>

<script>
export default {

  props: ['url','author']

}
</script>

<style scoped>
.responsive-image {
  height: 150px;
  width: 100%;
  border-radius: 10px;
}
</style>
