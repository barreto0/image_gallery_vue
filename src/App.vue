<template>
  <div>
    <h1 class="title">{{ titulo }}</h1>

    <ul class="picture-list">
      <li class="picture-list-item" v-for="picture of pictures" v-bind:key="picture.id">

        <pannel
        :title="picture.url"
        :author="picture.author"
        :url="picture.download_url">
        </pannel>

      </li>
    </ul>

    <footer>
      <h4>Made with Vue.js by Gabriel Barreto 2021</h4>
    </footer>

  </div>
</template>

<script>

import Pannel from './components/shared/pannel/Pannel.vue';

export default {

  components: {
    'pannel': Pannel
  },

  data () {
    return {
      titulo: 'Nothing much, just a gallery of RandomPics',
      pictures: []
    }
  },
  created () {
    let promise = this.$http.get('https://picsum.photos/v2/list?page=2&limit=20');
    promise
    .then(res => res.json())
    .then(pictures => this.pictures = pictures, err => console.log(err)); // a resposta também é uma promise
  }
}
</script>

// scoped deixa os estilos afetarem apenas o component em que é declarado
<style >

body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #8BC6EC;
  background-image: linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%);
}

.title {
  text-align: center;
  color: white;
}

footer {
  color: white;
}

.picture-list {
  list-style: none;
  list-style-type: none;
  padding: 0;
}

.picture-list .picture-list-item {
  display: inline-block;
  margin: 0 10px;
}

</style>
