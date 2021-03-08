<template>
  <div class="pannel">
    <div class="pannel-content">

      <a :href="url">
        <responsive-image :url="url" :author="author"></responsive-image>
      </a>

      <p @dblclick="visible = !visible" class="author-style">Author: {{ author }} </p>
    </div>

  </div>

</template>

<script>
import ResponsiveImage from '../responsive-image/ResponsiveImage.vue';

export default {

  props: ['title','author','url'],

  components: {
    'responsive-image': ResponsiveImage
  },


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
