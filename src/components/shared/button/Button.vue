<template>
  <button
    v-on:click="buttonActivate"
    v-bind:class="buttonClass"
    v-bind:type="type"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    confirmation: {
      type: Boolean,
      required: true,
    },
    buttonStyle: {
      type: String,
    },
  },

  methods: {
    buttonActivate() {
      if (this.confirmation) {
        if (confirm("Nuke the page")) {
          this.$emit("buttonActivated");
        }
        return;
      } else {
        this.$emit("buttonActivated");
      }
    },
  },

  computed: {
    buttonClass() {
      if (this.buttonStyle == "danger" || !this.buttonStyle) {
        return "button button-danger";
      }
      if (this.buttonStyle == "default") {
        return "button button-default";
      }
    },
  },
};
</script>

<style>
.button {
  display: inline-block;
  padding: 10px;
  border-radius: 3px;
  margin: 10px;
  font-size: 1.2em;
}

.button-danger {
  background: firebrick;
  color: white;
}

.button-default {
  background: rgb(58, 194, 248);
  color: white;
}
</style>
