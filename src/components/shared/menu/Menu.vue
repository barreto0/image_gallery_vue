<template>
  <nav>
    <ul>
      <!-- <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/newsletter">Newsletter</router-link>
        </li> -->
      <li v-for="route in routes" :key="route.path">
        <router-link v-bind:to="route.path ? route.path : '/'">{{
          route.title
        }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  // props: ["routes"],
  props: {
    routes: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
</style>
