<template>
  <div>
    <my-menu :routes="routes"></my-menu>
    <router-view> </router-view>
  </div>
</template>

<script>
import { routes } from "./routes";
import Menu from "./components/shared/menu/Menu.vue";

export default {
  components: {
    "my-menu": Menu,
  },

  data() {
    return {
      routes: routes,
    };
  },
};
</script>

// scoped deixa os estilos afetarem apenas o component em que é declarado
<style >
body {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #8bc6ec;
  background-image: linear-gradient(135deg, #8bc6ec 0%, #9599e2 100%);
  padding: 10px 50px;
}
</style>
