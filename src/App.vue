<template>
  <div id="app">
    <h1>{{ titulo }}</h1>

    <ul>
      <li v-for="picture of pictures" v-bind:key="picture.id">
        <img v-bind:src="picture.download_url" :alt="picture.author">
        <span>Autor: {{picture.author}} </span>
      </li>
    </ul>

  </div>
</template>

<script>
export default {

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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
