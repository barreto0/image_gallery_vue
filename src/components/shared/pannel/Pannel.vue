<template>
  <div class="pannel">
    <a :href="url">
      <div class="pannel-content">
        <img class="responsive-image" v-bind:src="url" :alt="author">
        <p class="author-style">Author: {{ author }} </p>
      </div>
    </a>
  </div>

</template>

<script>
export default {

  props: ['title','author','url']


}
</script>

<style>

.pannel {
  background-color: #D9AFD9;
  background-image: linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%);
  padding: 0 auto;
  display: inline-block;
  margin: 5px;
  width: 200px;
  height: 200px;
  vertical-align: top;
  text-align: center;
  border-radius: 10px;
}

.responsive-image {
  height: 150px;
  width: 100%;
  border-radius: 10px;
}

.author-style {
  font-size: 13px;
  font-weight: bold;
}

a {
  color: #2c3e50;
  text-decoration: none !important;
}

a:hover {
    color:white;
    text-decoration:none;
    cursor:pointer;
}

</style>
