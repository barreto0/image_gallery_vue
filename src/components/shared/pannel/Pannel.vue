<template>
  <div class="pannel">
    <h2 class="pannel-title">{{ title }}</h2>
    <div class="pannel-content">
      <img class="responsive-image" v-bind:src="url" :alt="author">
      <span>Autor: {{ author }} </span>
    </div>
  </div>

</template>

<script>
export default {

  props: ['title','author','url']


}
</script>

<style>


</style>
