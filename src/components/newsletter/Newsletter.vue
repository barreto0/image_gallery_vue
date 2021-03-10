<template>
  <div>
    <h1 class="centralized">Sign to my newsletter or whatever</h1>
    <h2 class="centralized"></h2>

    <!-- @input é a mesma coisa de v-on:input. Bind da view para a fonte de dados-->
    <!-- :value é a mesma coisa de v-bind:value. Bind da fonte de dados para a view -->
    <!-- v-model executa um two-way data binding. View <-> fonte de dados (@input + :value) -->
    <!-- v-model.lazy posterga a atualização do valor digitado no input para quando o usuário desfoca do campo -->

    <!-- cancelamos o comportamento (.prevent) padrao do evento submit para que o mesmo
    não recarregue a pagina ao enviar o formulario -->

    <form v-on:submit.prevent="signToNewsletter()">
      <div class="form-field">
        <label for="name">Name</label>
        <input v-model="user.name" id="name" autocomplete="off" />
      </div>

      <div class="form-field">
        <label for="email">Email</label>
        <input
          @input="user.email = $event.target.value"
          :value="user.email"
          id="email"
          autocomplete="off"
        />
      </div>

      <div class="form-field">
        <label for="avatar">Avatar</label>
        <input v-model.lazy="user.avatar" id="avatar" autocomplete="off" />
        <pannel :author="user.name" title="avatar" v-bind:url="user.avatar" />
      </div>

      <div class="form-field">
        <label for="venting">Vent your problems off</label>
        <textarea
          @input="user.venting = $event.target.value"
          v-bind:value="user.venting"
          id="venting"
          autocomplete="off"
        ></textarea>
      </div>

      <div class="centralized">
        <my-button
          :confirmation="false"
          buttonStyle="default"
          label="GRAVAR"
          type="submit"
        />
        <router-link to="/"
          ><my-button :confirmation="false" label="VOLTAR" type="button"
        /></router-link>
      </div>
    </form>
  </div>
</template>

<script>
import Pannel from "../shared/pannel/Pannel";
import Button from "../shared/button/Button";

export default {
  components: {
    pannel: Pannel,
    "my-button": Button,
  },

  data() {
    return {
      user: {
        name: "",
        email: "",
        avatar: "",
        venting: "",
      },
    };
  },

  methods: {
    signToNewsletter() {
      alert(this.user);
      // limpa form apos envio
      this.user = {
        name: "",
        email: "",
        avatar: "",
        venting: "",
      };
    },
  },
};
</script>
<style scoped>
.centralized {
  text-align: center;
}
.form-field {
  font-size: 1.2em;
  margin-bottom: 20px;
}
.form-field label {
  display: block;
  font-weight: bold;
}

.form-field label + input,
.form-field textarea {
  width: 100%;
  font-size: inherit;
  border-radius: 5px;
}

.centralized {
  text-align: center;
}
</style>
