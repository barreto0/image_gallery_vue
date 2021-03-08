<template>
  <div class="body">
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
      titulo: 'Bem vindo ao RandomPics',
      pictures: []
    }
  },
  created () {
    let promise = this.$http.get('https://picsum.photos/v2/list?page=2&limit=100');
    promise
    .then(res => res.json())
    .then(pictures => this.pictures = pictures, err => console.log(err)); // a resposta também é uma promise
  }
}
</script>

<style>
.body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
}

.title {
  text-align: center;
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
